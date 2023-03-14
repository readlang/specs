import { Test } from './test-component';
import { HeaderMenu } from './HeaderMenu';


import styles from './page.module.css'


const links = [
  {
    "link": "/about",
    "label": "Features"
  },
  {
    "link": "#1",
    "label": "Learn",
    "links": [
      {
        "link": "/docs",
        "label": "Documentation"
      },
      {
        "link": "/resources",
        "label": "Resources"
      },
      {
        "link": "/community",
        "label": "Community"
      },
      {
        "link": "/blog",
        "label": "Blog"
      }
    ]
  },
  {
    "link": "/about",
    "label": "About"
  },
  {
    "link": "/pricing",
    "label": "Pricing"
  },
  {
    "link": "#2",
    "label": "Support",
    "links": [
      {
        "link": "/faq",
        "label": "FAQ"
      },
      {
        "link": "/demo",
        "label": "Book a demo"
      },
      {
        "link": "/forums",
        "label": "Forums"
      }
    ]
  }
]



export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>
          hello world
          <br/>
          This is the home page
        </h1>
      </main>
      <Test />
      <HeaderMenu links = {links}/>
    </>
  )
}

