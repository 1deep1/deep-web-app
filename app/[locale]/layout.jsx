import { Suspense } from 'react';
import { Montserrat } from 'next/font/google';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import MainLayout from '@/components/layout/MainLayout';

const mont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-mont'
})

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} className={mont.className}>
      <body id='deep_dark_web' className='bg-deep_gray text-white'>
        <Suspense>
          <MainLayout>
          <main>{children}</main>
          </MainLayout>
        </Suspense>
      </body>
    </html>
  )
}
