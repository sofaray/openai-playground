import Link from 'next/link'

import SocialSignin from '@/components/containers/social-signin'
import Box from '@/components/elements/box'
import Card from '@/components/elements/card'
import Logo from '@/components/elements/logo'
import useLocale from '@/hooks/use-locale'

const SigninTemplate = () => {
  const { t } = useLocale()

  return (
    <Card size={'lg'}>
      <Box className='flex flex-col items-center w-[21.5rem]'>
        <Box className='mb-10'>
          <Logo />
        </Box>
        <SocialSignin />

        <Box className='text-sm'>
          <span className='text-black-light mr-4'>{t.session.doNotHaveAccount}</span>
          <Link href='/signup'>{t.session.signup}</Link>
        </Box>
      </Box>
    </Card>
  )
}

export default SigninTemplate
