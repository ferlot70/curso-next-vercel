import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from "next";
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppProps) {

  // @ts-ignore
  const getLayout = Component.getLayout ?? ((page: any) => page)
  return getLayout( <Component {...pageProps} />)
}
