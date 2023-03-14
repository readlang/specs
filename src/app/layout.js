import './globals.css'
import Link from 'next/link'

import RootStyleRegistry from './emotion'

export const metadata = {
  title: 'EV specs',
  description: 'The authoritative EV specs site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>
          <h1>EV Specs</h1>  
          <Link href="/">home</Link>  
          <Link href="/notes">Notes</Link>  
          <div>item 2</div>  
          <div>EV Specs</div>  
        </nav>  
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
