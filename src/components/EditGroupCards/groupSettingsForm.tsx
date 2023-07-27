'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Form, Input, Label } from '../ui'
import { FormInputSwitch } from '../ui/formInputSwitch'

const updateFormSchema = z.object({
  groupName: z
    .string()
    .nonempty({ message: 'Group name cannot be empty!' })
    .max(100),
  bemVindo: z.boolean(),
  antiLink: z.boolean(),
  antiPorn: z.boolean(),
  oneGroup: z.boolean(),
  autoSticker: z.boolean(),
  autoInviteLink: z.boolean(),
  antiTrava: z.object({
    status: z.boolean(),
    maxCharacters: z
      .number({ invalid_type_error: 'Only number is allowed!' })
      .min(1, { message: 'The minimum number is 1.' })
      .max(5000, { message: 'The maximum number is 5000.' }),
  }),
})

type updateFormProps = z.infer<typeof updateFormSchema>

export interface GroupSettingsFormProps {
  data: GroupsProps
  imageData: string
}

export function GroupSettingsForm({
  data,
  imageData = '',
}: GroupSettingsFormProps) {
  const form = useForm<updateFormProps>({
    resolver: zodResolver(updateFormSchema),
    defaultValues: {
      groupName: data.group_info.name,
      bemVindo: data.bem_vindo,
      antiLink: data.anti_link,
      antiPorn: data.anti_porn,
      antiTrava: {
        status: data.anti_trava.status,
        maxCharacters: data.anti_trava.max_characters,
      },
      autoInviteLink: data.auto_invite_link,
      autoSticker: data.auto_sticker,
      oneGroup: data.one_group,
    },
  })

  const {
    formState: { errors },
  } = form

  function onFormSubmit(data: updateFormProps) {
    const formattedDataForm = imageData
      ? { ...data, avatarImage: imageData }
      : data

    console.log(formattedDataForm)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-auto md:w-52">
              <Label className="whitespace w-auto text-base leading-6 text-slate-300">
                Group name
              </Label>
            </div>

            <div className="relative flex-1 pt-1 md:pt-0">
              <Input
                type="text"
                placeholder="Group name"
                className={`h-11 border border-slate-750 bg-transparent font-menu text-sm text-slate-500 ${
                  errors.groupName
                    ? 'focus-visible:border-red-500'
                    : 'focus-visible:border-indigo-600'
                } focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...form.register('groupName')}
              />
              {errors.groupName && errors.groupName.message && (
                <span className="absolute py-1 text-xs text-red-500">
                  {errors.groupName.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-auto md:w-52 ">
              <Label className="whitespace w-auto text-base leading-6 text-slate-300">
                Anti freezing
              </Label>
            </div>

            <div className="relative flex-1 pt-1 md:pt-0">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Max characters"
                  className={`h-11 w-full border border-slate-750 bg-transparent font-menu text-sm text-slate-500 ${
                    errors.antiTrava?.maxCharacters
                      ? 'focus-visible:border-red-500'
                      : 'focus-visible:border-indigo-600'
                  } focus-visible:ring-0 focus-visible:ring-offset-0`}
                  {...form.register('antiTrava.maxCharacters', {
                    valueAsNumber: true,
                  })}
                />

                <FormInputSwitch
                  form={form}
                  formRegister="antiTrava.status"
                  hasInput
                />
              </div>
              {errors.antiTrava?.maxCharacters &&
                errors.antiTrava?.maxCharacters.message && (
                  <span className="absolute py-1 text-xs text-red-500">
                    {errors.antiTrava?.maxCharacters.message}
                  </span>
                )}
            </div>
          </div>

          <FormInputSwitch
            title="Welcome"
            form={form}
            formRegister="bemVindo"
          />

          <FormInputSwitch
            title="Anti link"
            form={form}
            formRegister="antiLink"
          />

          <FormInputSwitch
            title="Anti malicious"
            form={form}
            formRegister="antiPorn"
          />

          <FormInputSwitch
            title="Auto invite link"
            form={form}
            formRegister="autoInviteLink"
          />

          <FormInputSwitch
            title="Auto sticker"
            form={form}
            formRegister="autoSticker"
          />

          <Button
            type="submit"
            className="w-fit bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 hover:text-white md:ml-52"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  )
}
