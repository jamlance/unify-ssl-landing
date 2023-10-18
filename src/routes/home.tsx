import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="UnifySSL"
        content={`Security and Routing Simplified. Effortlessly conduct A/B tests, and ensure optimal performance across all devices. One setup, limitless possibilities.`}
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
