import Layout from '../components/layout'
import '../styles/globals.css'
import "../../public/style.css"

export default function App({ Component, pageProps }) {
  <Layout>
    return <Component {...pageProps} />
  </Layout>
}
