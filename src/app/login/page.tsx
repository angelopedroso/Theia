'use client'

import React from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@/components/ui'
import { useRouter } from 'next/navigation'

const loginFormSchema = z
  .object({
    user: z.string(),
    password: z.string(),
  })
  .refine(
    (data) => {
      return data.user === 'hiperion' && data.password === 'coxinha123'
    },
    { path: ['password'], message: 'Usuário ou senha incorretos!' },
  )

type loginFormProps = z.infer<typeof loginFormSchema>

export default function Login() {
  const { handleSubmit, register, formState } = useForm<loginFormProps>({
    resolver: zodResolver(loginFormSchema),
  })
  const { errors } = formState

  const { push } = useRouter()

  function handleSubmitLogin() {
    localStorage.setItem('login', 'true')

    push('/')
  }

  return (
    <main className="flex h-screen items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <section className="nm-convex-background-900-xl flex flex-col gap-8 rounded-md px-12 py-16">
        <div className="flex w-full justify-center">
          <Image
            src={logo}
            alt="Logo's icon application"
            className="h-14 w-14"
            priority
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-semibold text-white">
            Prazer em te ver!
          </h2>
          <div className="flex flex-col gap-2">
            <form
              onSubmit={handleSubmit(handleSubmitLogin)}
              className="space-y-4"
            >
              <Input
                type="text"
                placeholder="User"
                className={`h-11 border border-slate-750 bg-transparent font-menu text-sm text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...register('user')}
              />

              <Input
                type="password"
                placeholder="Password"
                className={`h-11 border border-slate-750 bg-transparent font-menu text-sm text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...register('password')}
              />

              {errors.password && (
                <span className="absolute py-1 text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}

              <Button
                type="submit"
                className="w-fit bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 hover:text-white md:ml-52"
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
