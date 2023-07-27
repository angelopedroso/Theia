import React, { ReactNode } from 'react'
import { Label } from './label'
import { Switch, SwitchThumb } from './switch'
import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormControl } from './form'

type FormProps = UseFormReturn<
  {
    bemVindo: boolean
    groupName: string
    antiLink: boolean
    antiPorn: boolean
    oneGroup: boolean
    autoSticker: boolean
    autoInviteLink: boolean
    antiTrava: {
      status: boolean
      maxCharacters: number
    }
  },
  any,
  undefined
>

type FormRegistersProps =
  | 'bemVindo'
  | 'groupName'
  | 'antiLink'
  | 'antiPorn'
  | 'oneGroup'
  | 'autoSticker'
  | 'autoInviteLink'
  | 'antiTrava'
  | 'antiTrava.maxCharacters'
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
