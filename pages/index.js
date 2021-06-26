import Head from 'next/head'
import Link from 'next/link'
import 'tachyons'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div className='ma6'>
      <h1 className={styles.title} style={{fontSize: '2.5rem'}}>NICE TO VIRTUALLY MEET YOU.</h1>
        <div className={styles.text} style={{fontSize: '2rem', textAlign: 'center'}}>
          <p>I am Mariam. This webpage contains my projects.</p> 
          <p>Next.js and React.js are the technologies I've used to build this.</p>
        </div>
      <Link href="/project" >
        <a className={styles.btn}>See my work</a> 
      </Link>
    </div>
    </>
  )
}
