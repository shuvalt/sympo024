export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/contributors'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/about'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Zigzag />
      <Features />
      <Newsletter />   
    </>
  )
}
