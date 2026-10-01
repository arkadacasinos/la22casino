import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Casino: официальный сайт, зеркало и игра онлайн',
  description: 'La Casino — официальный сайт для игры онлайн. Найдите рабочее зеркало, узнайте, как играть с телефона, и начните с ответственного подхода.',
  generator: 'v0.app',
  icons: { icon: '/la-casino-favicon.png', apple: '/la-casino-favicon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="266eefae733b5357" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="la casino, la casino зеркало, la casino играть, la casino официальный сайт, ла казино, ля казино"
        />
        <link rel="canonical" href="/" />
        
      </head>
      
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
