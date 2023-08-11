import { updateBot } from '@/api/actions/query'
import {
  Button,
  DropdownMenuSeparator,
  Form,
  FormControl,
  FormField,
  FormItem,
  Label,
  Switch,
  SwitchThumb,
} from '@/components/ui'
import React, { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export interface BotFormularyProps {
  id: string
  private: boolean
}

type BotForm = BotFormularyProps & {
  setIsAlert: (value: boolean) => void
}

export function BotFormulary({
  id,
  private: privateChat,
  setIsAlert,
}: BotForm) {
  const [isSubmitting, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(true)
  const form = useForm<BotFormularyProps>({
    defaultValues: {
      id,
      private: privateChat,
    },
  })

  function handleFormBotSubmit({
    id,
    private: privateChat,
  }: BotFormularyProps) {
    startTransition(() => updateBot({ id, private: privateChat }))
    setSubmitted(true)
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful && !isSubmitting) {
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    }
  }, [form.formState.isSubmitSuccessful, isSubmitting])

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormBotSubmit)}>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Label className="cursor-default select-none text-sm text-slate-200">
              Private mode
            </Label>
            <FormField
              control={form.control}
              name="private"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Switch
                      className="h-4 w-8"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    >
                      <SwitchThumb />
                    </Switch>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <DropdownMenuSeparator className="bg-slate-850" />
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 hover:text-white"
          >
            Save
          </Button>
        </form>
      </Form>
      {setIsAlert(
        submitted && !isSubmitting && form.formState.isSubmitSuccessful,
      )}
    </>
  )
}
