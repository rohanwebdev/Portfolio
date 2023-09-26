import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rohan Frontend developer</title>
        <link rel="icon" href="c:\Users\Admin\Downloads\IMG-20230914-WA0010.jpg" />
      </Head>

      <main>
        <Header title="I am a creative 
        <br />
        frontend developer" />
        <p className="description">
          I like to craft solid and scalable frontend products 
          <br />
          with great user experiences.
        </p>
      </main>

      <Footer />
    </div>
  )
}
