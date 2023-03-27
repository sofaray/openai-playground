import { useState, useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Box from '@/components/elements/box'
import Button from '@/components/elements/button'
import Card from '@/components/elements/card'
import InputGroup from '@/components/elements/input-group'
import Typography from '@/components/elements/typography'
import useLocale from '@/hooks/use-locale'
import useMe from '@/hooks/use-me'
import useValidation from '@/hooks/use-validation'
import meStore from '@/stores/me-store'

const AccountTemplate = () => {
  const { t } = useLocale()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>()
  const { validateRequired } = useValidation()
  const { me } = meStore()
  const [secretKey, setSecretKey] = useState<string>('')
  const { updateMe } = useMe()

  useEffect(() => {
    if (me) {
      setSecretKey(me.secretKey)
    }
  }, [me])

  const onSubmit = (values: FieldValues) => {
    try {
      updateMe({
        secretKey: values.secretKey,
      })
      setSecretKey(values.secretKey)
      toast.success(t.session.updateSuccess)
    } catch (e) {
      toast.error(t.session.updateError)
    }
  }
  if (!secretKey) return <></>

  return (
    <>
      <Typography className={'mt-2 mb-6 text-3xl font-semibold'}>アカウント設定</Typography>
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
    </>
  )
}

export default AccountTemplate
