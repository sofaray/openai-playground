import { Transition } from '@headlessui/react'
import { useCallback } from 'react'
import { toast, Toaster, resolveValue } from 'react-hot-toast'
import Icon from '@/components/elements/icon'

const CustomToaster = () => {
  const handleDismiss = useCallback((id: string) => {
    toast.dismiss(id)
  }, [])

  return (
    <Toaster
      toastOptions={{
        duration: 5000,

        className: '!bg-black !text-white px-4 py-8',

        error: {
          className: '!bg-danger !text-white',
        },
      }}
    >
      {(t) => (
        <Transition
          appear
          show={t.visible}
          enter='transition-all duration-250'
          enterFrom='opacity-0 -translate-y-10'
          enterTo='opacity-100 translate-y-0'
          leave='transition-all duration-150'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-75'
        >
          <div
            className={`
            flex items-center gap-2 p-4 rounded-lg bg-black text-white
          ${t.type === 'success' ? '!bg-black !text-white' : ''}
          ${t.type === 'error' ? '!bg-danger !text-white' : ''}
          `}
          >
            {t.type === 'success' && <Icon name='check_circle' className='text-primary' fill />}
            {t.type === 'error' && <Icon name='error' fill />}
            {resolveValue(t.message, t)}
            <Icon name='close' onClick={() => handleDismiss(t.id)} className='cursor-pointer rounded-full' />
          </div>
        </Transition>
      )}
    </Toaster>
  )
}

export { CustomToaster }
