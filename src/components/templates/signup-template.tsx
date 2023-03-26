import Link from 'next/link'
import SocialSignin from '@/components/containers/social-signin'
import Box from '@/components/elements/box'
import Card from '@/components/elements/card'
import Logo from '@/components/elements/logo'
import useLocale from '@/hooks/use-locale'

const SignupTemplate = () => {
  const { t } = useLocale()

  return (
    <Card size={'lg'}>
      <Box className='flex flex-col items-center w-[21.5rem]'>
        <Box className='mb-10'>
          <Logo />
        </Box>

        <SocialSignin />

        <Box className='text-sm mb-10'>
          <span className='text-black-light mr-4'>{t.session.haveAccount}</span>
          <Link href='/signin'>{t.session.signin}</Link>
        </Box>
        <Box className='text-sm text-black-light'>
          <span className='text-black-light text-xs'>
            {t.session.signupAgreement1}
            <Link href='/terms'>{t.session.term}</Link>
            {t.session.signupAgreement2}
            <Link href='/privacy'>{t.session.privacy}</Link>
            {t.session.signupAgreement3}
          </span>
        </Box>
      </Box>
    </Card>
  )
}

export default SignupTemplate
