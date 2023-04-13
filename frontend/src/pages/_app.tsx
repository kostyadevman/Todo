import { ThemeProvider } from '@/app/providers/ThemeProvider';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google'
import '../app/styles/index.scss';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider >
       <div className={roboto.className}>
         <Component {...pageProps}/>
       </div>
    </ThemeProvider>
  )
}
