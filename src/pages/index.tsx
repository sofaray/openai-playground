import Head from '@/components/elements/head'
import { layoutDefault } from '@/components/layouts/default'
import HomeTemplate from '@/components/templates/home-template'

const Home = () => {
  return (
    <>
      <Head title='Home' />
      <HomeTemplate />
    </>
  )
}

Home.layout = layoutDefault

export default Home
