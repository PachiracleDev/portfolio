import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvider } from '../store'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {

  return <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>

}

export default appWithTranslation(App)