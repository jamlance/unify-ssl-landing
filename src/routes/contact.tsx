import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article
        title="Contact"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <a href="mailto:info@unifyssl.com">info@unifyssl.com</a>
      </Article>
    </Layout>
  )
}
