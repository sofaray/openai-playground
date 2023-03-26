import clsx from 'clsx'
import Image from 'next/image'

import Link from 'next/link'
import useLocale from '@/hooks/use-locale'

const Logo = () => {
  const { t } = useLocale()
  const classNames = clsx(['rounded-lg'])

  return (
    <Link href='/'>
      <Image src='/logo.png' className={classNames} alt={t.common.siteName} width={80} height={80} />
    </Link>
  )
}

export default Logo
