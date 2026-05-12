import type { Metadata } from 'next'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Oluwaseun Ayegbusi | Project Manager, Engineer & Builder',
  
  description:
    'Oluwaseun Ayegbusi is a Project Manager at United Utilities with a background in Mechanical Engineering and Computer Science. Passionate about infrastructure, technology, AI, and building systems that create long-term impact across the UK and Africa.',

  keywords: [
    'Oluwaseun Ayegbusi',
    'Project Manager',
    'United Utilities',
    'Mechanical Engineer',
    'Computer Science',
    'Infrastructure',
    'Technology',
    'AI',
    'Leadership',
    'Nigeria',
    'Renewable Energy',
  ],

  authors: [{ name: 'Oluwaseun Ayegbusi' }],

  creator: 'Oluwaseun Ayegbusi',

  metadataBase: new URL('https://oluwaseun.co.uk'),

  openGraph: {
    title: 'Oluwaseun Ayegbusi',
    description:
      'Project Manager, Engineer, and Builder focused on infrastructure, technology, leadership, and impact.',
    url: 'https://oluwaseun.co.uk',
    siteName: 'Oluwaseun Ayegbusi',
    locale: 'en_GB',
    type: 'website',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body
        className={`${sourceSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}