import Image from 'next/image'

import controlButton from '@/assets/control.png'

export interface openCloseButtonProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function OpenCloseButton({ open, setOpen }: openCloseButtonProps) {
  return (
    <button className="absolute -right-5 top-9" onClick={() => setOpen(!open)}>
      <Image
        className={`${
          !open && 'rotate-180'
        }  rounded-full border-2 border-slate-900 duration-300`}
        src={controlButton}
        alt="Open/Close menu"
        priority
      />
    </button>
  )
}
