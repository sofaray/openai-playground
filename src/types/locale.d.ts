import type common from '@/utils/locales/ja/common'
import type error from '@/utils/locales/ja/error'
import session from '@/utils/locales/ja/session'
import type user from '@/utils/locales/ja/user'

export interface i18nType {
  common: typeof common
  error: typeof error
  session: typeof session
  user: typeof user
}
