import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import Box from '@/components/elements/box'
import Typography from '@/components/elements/typography'
import sessionStore from '@/stores/session-store'

const Loading = () => {
  const { session } = sessionStore()

  const message = session === undefined ? 'We are cooking hamburger...' : 'Well done!'

  const classNames = clsx([
    'absolute top-0 right-0 w-screen h-screen flex flex-col items-center justify-center bg-[#FFFAF5] block',
  ])
  return (
    <Transition
      as={Fragment}
      appear
      show={session === undefined}
      leave='transition-all duration-[1000ms] ease-out'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <main className={classNames}>
        <Box
          className={'absolute bottom-8 right-8 flex items-center gap-4 bg-primary bg-opacity-5 py-4 px-6 rounded-lg'}
        >
          <Typography className={'font-semibold'}>{message}</Typography>
          <Box className={'text-center text-2xl'}>
            {session === undefined ? <p className={'animate-spin'}>🍔</p> : '✅'}
          </Box>
        </Box>
      </main>
    </Transition>
  )
}

export default Loading
