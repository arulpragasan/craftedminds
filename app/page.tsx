import { Hero } from '@/components/hero'
import { Belief } from '@/components/belief'
import { Stories } from '@/components/stories'
import { Experience } from '@/components/experience'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Belief />
      <Stories />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
