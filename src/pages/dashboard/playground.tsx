import Head from '@/components/elements/head'
import { layoutDashboard } from '@/components/layouts/dashboard'
import PlaygroundTemplate from '@/components/templates/dashboard/playground-template'

const Playground = () => {
  return (
    <>
      <Head title='Playground' />
      <PlaygroundTemplate />
    </>
  )
}

Playground.layout = layoutDashboard

export default Playground
