export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/contributors'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/contact'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Zigzag />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
