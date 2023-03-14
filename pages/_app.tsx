import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function RoachUI({ Component,
  pageProps: { session, ...pageProps }, }: AppProps) {
  return (
      <SessionProvider session={session}>
        <div className=" h-screen">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
  );
}

export default RoachUI
