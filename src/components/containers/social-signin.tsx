import Box from '@/components/elements/box'
import Button from '@/components/elements/button'
import IconSocial from '@/components/elements/icon-social'
import useAuthentication from '@/hooks/use-authentication'
import useLocale from '@/hooks/use-locale'
import { googleProvider } from '@/utils/authentication/social'

const SocialSignin = () => {
  const { t } = useLocale()
  const { handleSignInWithPopup } = useAuthentication()

  return (
    <Box className='flex flex-col gap-4 my-4 w-full'>
      <Button
        outlined
        variant='secondary'
        icon={<IconSocial src='/icons/social/google.svg' size={18} />}
        onClick={() => handleSignInWithPopup(googleProvider)}
      >
        {t.session.loginWithGoogle}
      </Button>
    </Box>
  )
}

export default SocialSignin
