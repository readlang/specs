import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'EV specs',
  description: 'The authoritative EV specs site',
}

export default function RootLayout({ children }) {
  return (
    

    <html lang="en">
      
      <body>
        <nav>
          <h1>EV Specs</h1>  
          <Link href="/">item 1</Link>  
          <Link href="/notes">Notes</Link>  
          <div>item 2</div>  
          <div>EV Specs</div>  
        </nav>  
        {children}
      </body>
    </html>
  )
}
