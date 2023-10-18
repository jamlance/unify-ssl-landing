import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="About"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        {/* prettier-ignore */}
        <p>
            UnifySSL is a powerful Web Routing tool used to secure your web traffic and provider your end users with the best experience possible!
          </p>
        <p>
          <ul>
            <li>Conduct A/B Tests.</li>
            <li>Setup Health Montoring.</li>
            <li>Put up Maintenance Pages.</li>
            <li>Host Your Website Anywhere.</li>
            <li>Issue Certificates for your domains.</li>
          </ul>
        </p>
        <p>There is no limit when you're secured.</p>
      </Article>
    </Layout>
  )
}

export default AboutPage
