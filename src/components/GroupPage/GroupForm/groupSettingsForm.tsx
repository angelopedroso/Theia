'use client'

import React, { useTransition } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, Form, Input, Label, FormInputSwitch } from '@/components/ui'

import { GroupRequestData, updateGroup } from '@/api/actions/query'
import { useToast } from '@/components/ui/use-toast'

const updateFormSchema = z.object({
  group_name: z
    .string()
    .nonempty({ message: 'Group name cannot be empty!' })
    .max(100),
  bem_vindo: z.boolean(),
  anti_link: z.boolean(),
  anti_porn: z.boolean(),
  one_group: z.boolean(),
  auto_sticker: z.boolean(),
  auto_invite_link: z.boolean(),
  antiTrava: z.object({
    status: z.boolean(),
    max_characters: z
      .number({ invalid_type_error: 'Only number is allowed!' })
      .min(1, { message: 'The minimum number is 1.' })
      .max(5000, { message: 'The maximum number is 5000.' }),
  }),
})

export type updateFormProps = z.infer<typeof updateFormSchema>

export interface GroupSettingsFormProps {
  data: GroupsProps
  imageData: string
}

export function GroupSettingsForm({
  data,
  imageData = '',
}: GroupSettingsFormProps) {
  const [isSubmitting, startTransition] = useTransition()
  const { toast } = useToast()
  const form = useForm<updateFormProps>({
    resolver: zodResolver(updateFormSchema),
    defaultValues: {
      group_name: data.name,
      bem_vindo: data.bem_vindo,
      anti_link: data.anti_link,
      anti_porn: data.anti_porn,
      antiTrava: {
        status: data.anti_trava?.status,
        max_characters: data.anti_trava?.max_characters,
      },
      auto_invite_link: data.auto_invite_link,
      auto_sticker: data.auto_sticker,
      one_group: data.one_group,
    },
  })

  const {
    formState: { errors },
  } = form

  function onFormSubmit(formData: updateFormProps) {
    const formattedData: GroupRequestData = {
      id: data.id,
      // old_group_name: data.name,
      // group_name:
      //   formData.group_name !== data.name ? formData.group_name : undefined,
      g_id: data.g_id,
      bem_vindo: formData.bem_vindo,
      anti_link: formData.anti_link,
      anti_porn: formData.anti_porn,
      one_group: formData.one_group,
      auto_sticker: formData.auto_sticker,
      auto_invite_link: formData.auto_invite_link,
      antiTrava: {
        status: formData.antiTrava?.status,
        max_characters: formData.antiTrava?.max_characters,
      },
      // blackList: data.black_list,
      // avatar_image: imageData || undefined,
    }

    startTransition(() => {
      updateGroup(formattedData)
    })

    toast({
      title: 'Group settings updated!',
      description: 'Group settings has been updated!',
    })
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
                  errors.group_name
                    ? 'focus-visible:border-red-500'
                    : 'focus-visible:border-indigo-600'
                } focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...form.register('group_name')}
                disabled={true}
              />
              {true && (
                <span className="absolute py-1 text-xs text-yellow-500">
                  The group title can only be changed if the bot is an admin of
                  the group.
                </span>
              )}
              {errors.group_name && errors.group_name.message && (
                <span className="absolute py-1 text-xs text-red-500">
                  {errors.group_name.message}
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
                    errors.antiTrava?.max_characters
                      ? 'focus-visible:border-red-500'
                      : 'focus-visible:border-indigo-600'
                  } focus-visible:ring-0 focus-visible:ring-offset-0`}
                  {...form.register('antiTrava.max_characters', {
                    valueAsNumber: true,
                  })}
                />

                <FormInputSwitch
                  form={form}
                  formRegister="antiTrava.status"
                  hasInput
                />
              </div>
              {errors.antiTrava?.max_characters &&
                errors.antiTrava?.max_characters.message && (
                  <span className="absolute py-1 text-xs text-red-500">
                    {errors.antiTrava?.max_characters.message}
                  </span>
                )}
            </div>
          </div>

          <FormInputSwitch
            title="Welcome"
            form={form}
            formRegister="bem_vindo"
          />

          <FormInputSwitch
            title="Anti link"
            form={form}
            formRegister="anti_link"
          />

          <FormInputSwitch
            title="Anti malicious"
            form={form}
            formRegister="anti_porn"
          />

          <FormInputSwitch
            title="Auto invite link"
            form={form}
            formRegister="auto_invite_link"
          />

          <FormInputSwitch
            title="Auto sticker"
            form={form}
            formRegister="auto_sticker"
          />

          <Button
            type="submit"
            className="w-fit bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 hover:text-white md:ml-52"
            disabled={isSubmitting}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  )
}
