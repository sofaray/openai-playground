import Link from 'next/link'
import { ReactElement } from 'react'

import sessionStore from '@/stores/session-store'

export const layoutDefault = (page: ReactElement) => <Layout>{page}</Layout>

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export function Layout({ children }: LayoutProps) {
  const { session } = sessionStore()

  return (
    <main
      className={
        'bg-primary-transparent flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen overflow-y-scroll '
      }
    >
      <ul className='flex gap-4 fixed top-0'>
        <li>
          <Link href='/ui'>UI</Link>
        </li>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {session === null && (
          <>
            <li>
              <Link href='/signin'>Sign In</Link>
            </li>
            <li>
              <Link href='/signup'>Sign Up</Link>
            </li>
          </>
        )}

        {session && (
          <>
            <li>
              <Link href='/signout'>Sign Out</Link>
            </li>
            <li>
              <Link href='/dashboard'>dashboard</Link>
            </li>
            <li>
              {session?.email} /{session?.displayName}
            </li>
          </>
        )}
      </ul>
      {children}
    </main>
  )
}
