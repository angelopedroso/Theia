import React, { ReactNode } from 'react'
import { Label } from './label'
import { Switch, SwitchThumb } from './switch'
import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormControl } from './form'

type FormProps = UseFormReturn<
  {
    group_name: string
    bem_vindo: boolean
    anti_link: boolean
    anti_porn: boolean
    one_group: boolean
    auto_sticker: boolean
    auto_invite_link: boolean
    antiTrava: {
      status: boolean
      max_characters: number
    }
  },
  any,
  undefined
>

type FormRegistersProps =
  | 'bem_vindo'
  | 'group_name'
  | 'anti_link'
  | 'anti_porn'
  | 'one_group'
  | 'auto_sticker'
  | 'auto_invite_link'
  | 'antiTrava'
  | 'antiTrava.max_characters'
  | 'antiTrava.status'

export interface FormInputSwitchProps {
  title?: string
  form: FormProps
  formRegister: FormRegistersProps
  children?: ReactNode
  hasInput?: boolean
}

export function FormInputSwitch({
  title = '',
  form,
  formRegister,
  children,
  hasInput = false,
}: FormInputSwitchProps) {
  return (
    <div
      className={`flex ${
        hasInput ? 'w-fit' : 'w-full'
      } flex-col md:w-full md:flex-row md:items-center`}
    >
      {title && (
        <div className="w-auto md:w-52">
          <Label className="whitespace w-auto text-base leading-6 text-slate-300">
            {title}
          </Label>
        </div>
      )}

      <div className="relative flex-1">
        <FormField
          control={form.control}
          name={formRegister}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full rounded-md border border-slate-750 bg-transparent px-3 py-2">
                  <Switch
                    checked={field.value as boolean}
                    onCheckedChange={field.onChange}
                  >
                    <SwitchThumb className="h-4 w-4 data-[state=checked]:translate-x-6" />
                  </Switch>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        {children}
      </div>
    </div>
  )
}
