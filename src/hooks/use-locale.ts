import { useRouter } from 'next/router'

import { i18nType } from '@/types/locale.d'
import ja from '@/utils/locales/ja'

const useLocale = () => {
  const { locale } = useRouter()
  const t = (locale === 'en' ? 'en' : ja) as i18nType
  return { locale, t }
}

export default useLocale
