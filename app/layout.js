import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Provider from '@/components/Provider'
import { Providers } from './redux/provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Pizza',
  description: 'Order your favorite pizza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Provider>
            <main>
              <Header />
              {children}  
            </main>
          </Provider>
        </Providers>

      </body>
    </html>
  )
}
