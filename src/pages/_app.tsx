import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CSSProperties } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const content:CSSProperties = {
    display:'flex',
    flexDirection:'column',
  };

  return(
    <div style={content}>
    <Component {...pageProps} />
    </div>
  ) 
}
