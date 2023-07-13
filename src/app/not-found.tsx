import Link from 'next/link'
import errorImage from '../assets/404-error.svg'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center gap-9">
        <Image src={errorImage} alt="404 error image" priority={true} />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-200">
            Oops! the page not found.
          </h1>
          <p className="text-sm text-gray-100">
            Or simply leverage the expertise of our consultation team.
          </p>
        </div>
        <Link
          href="/"
          className="w-fit rounded-lg bg-amber-600 px-5 py-3 text-gray-200 transition-colors hover:bg-amber-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
