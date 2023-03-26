import { doc, getDoc, setDoc } from 'firebase/firestore'

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Box from '@/components/elements/box'
import Button from '@/components/elements/button'
import Card from '@/components/elements/card'
import InputGroup from '@/components/elements/input-group'
import useLocale from '@/hooks/use-locale'
import useValidation from '@/hooks/use-validation'
import { db } from '@/plugins/firebase/init'
import sessionStore from '@/stores/session-store'
interface Inputs {
  secretKey: string
}

const AccountTemplate = () => {
  const { t } = useLocale()
  const { session } = sessionStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { validateRequired } = useValidation()
  const [secretKey, setSecretKey] = useState<string>('')

  useEffect(() => {
    if (session) {
      const getSecretKey = async () => {
        const docRef = doc(db, 'users', session.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const { secretKey } = docSnap.data()
          setSecretKey(secretKey)
        }
      }
      getSecretKey()
    }
  }, [session])

  if (!session) return <></>

  const onSubmit = (values: FieldValues) => {
    try {
      setDoc(doc(db, 'users', session.uid), {
        secretKey: values.secretKey,
      })
      toast.success(t.session.updateSuccess)
    } catch (e) {
      toast.error(t.session.updateError)
    }
  }

  return (
    <Card size={'lg'}>
      <Box className='flex flex-col items-center'>
        <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box className='mb-6'>
            <InputGroup label={t.user.secretKey} errorLabel={errors.secretKey?.message}>
              <input
                defaultValue={secretKey}
                type='text'
                placeholder='input your Sercret Key'
                {...register('secretKey', { ...validateRequired })}
                aria-invalid={errors.secretKey ? 'true' : 'false'}
              />
            </InputGroup>
          </Box>

          <Button type='submit' className='w-full'>
            {t.session.updateButton}
          </Button>
        </form>
      </Box>
    </Card>
  )
}

export default AccountTemplate
