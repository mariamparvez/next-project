import Layout from '../components/Layout'
import SimpleReactLightbox from 'simple-react-lightbox'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <SimpleReactLightbox>
        <Component {...pageProps} />
    </SimpleReactLightbox>
    </Layout>
  )
}

export default MyApp
