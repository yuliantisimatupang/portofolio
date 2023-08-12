import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yulianti Simatupang',
  description: 'This is portofolio by Yulianti Simatupang',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y37RF6F6W7`}
      ></Script>
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y37RF6F6W7', {page_path: window.location.pathname,
        });
        `}
      </Script>
      <head>
        {/* -- google font -- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="icon" href="/images/ban-bug.png" sizes="any" /> */}
        <link rel="icon" href="/svg/ban-bug.svg" sizes="any" />
      </head>
      <body className={inter.className + ' bg-primary-1 overflow-x-hidden'}>{children}</body>
    </html>
  )
}
