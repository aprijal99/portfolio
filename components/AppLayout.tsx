import {ReactNode} from 'react';
import Head from 'next/head';
import AppNavbar from './AppNavbar';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Aprijal Ghiyas Setiawan | Web Developer</title>
      </Head>
      <AppNavbar />
      {children}
    </>
  );
}

export default AppLayout;
