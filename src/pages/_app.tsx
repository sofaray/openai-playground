import '@/styles/globals.css'
import '@/plugins/firebase/init'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, useEffect } from 'react'
import { QueryClientProvider } from 'react-query'
import Loading from '@/components/containers/loading'
import { CustomToaster } from '@/components/elements/toast'
import { layoutDefault } from '@/components/layouts/default'
import useAuthentication from '@/hooks/use-authentication'
import queryClient from '@/plugins/react-query/query-client'

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => typeof page
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { initAuthState } = useAuthentication()
  const layout = Component.layout || layoutDefault

  useEffect(() => {
    initAuthState()
  }, [])

  return layout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Loading />
      <CustomToaster />
    </QueryClientProvider>,
  )
}
