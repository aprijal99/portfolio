import type { AppProps } from 'next/app';
import {NextUIProvider} from '@nextui-org/react';
import '../styles/globals.css';
import AppLayout from '../components/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </NextUIProvider>
  );
}
