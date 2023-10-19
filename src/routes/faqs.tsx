import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article
        title="FAQ's"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        {/* <p>Add your FAQ content here.</p> */}
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
            What is UnifySSL?
          </summary>
          <p>
            UnifySSL is a Proxy As A Service. What this means is we handle the routing of web traffic on our users behalf. </p>
            <p>  Because we handle the routing on behalf of our users, we're able to provide security for their domains and facilitate various different add-ons.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Does UnifySSL Offer Custom Solutions</summary>
          <p>
            Yes, we offer these at all tiers as suited to the needs of the customer, simple let us know via email at sales@unifyssl.com.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">How can I use Unify SSL?</summary>
          <p>
            Submit your email address and we'll reach out to you to set your service up and grant access to our platform.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">How much does Unify SSL Cost?</summary>
          <p>
            Unify SSL is super affordable at only $5USD/mo for a single domain to a single website.{' '}
          </p>
          {/* <p> */}
            {/* A/B testing is super affordable as the more sites you test, the less you may pay: */}
            
          {/* </p> */}
          <table>
              <thead>
                <th>Sites</th>
                <th>Cost (USD)</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>2-5</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <td>6-10</td>
                  <td>$15</td>
                </tr>
              </tbody>
            </table>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">What counts as a site?</summary>
          <p>
            A site or "source" is any individual website, domain, resource, or service that is connected to the Unify SSL Platform. <br/>
            {/* For examaple, let's say you have a domain: cool-shorts.com pointed to a site you created on Wordpress. This would only be 1 site, as it's 1 domain to 1 websites. <br/>
            However let's say you have a new version of cool-shorts.com on Square, that you only want some users to see. This would count as 2 sites, as 1 domain is going to 2 websites. <br/>
            Here's another example, let's say you have two domains, pointing towards the same website, this would count as 2 sites, as you have 2 domains pointing towards 1 website. */}

          </p>
          <table>
              <thead>
                <th>Domain</th>
                <th>Website</th>
                <th>Site Count</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
        </details>

        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Can UnifySSL handle high traffic sites?</summary>
          <p>
            Absolutey. UnifySSL is purpose built for high throughput. However we do have varying tiers which may attract extra throughput cost.<br/>
            {/* For examaple, let's say you have a domain: cool-shorts.com pointed to a site you created on Wordpress. This would only be 1 site, as it's 1 domain to 1 websites. <br/>
            However let's say you have a new version of cool-shorts.com on Square, that you only want some users to see. This would count as 2 sites, as 1 domain is going to 2 websites. <br/>
            Here's another example, let's say you have two domains, pointing towards the same website, this would count as 2 sites, as you have 2 domains pointing towards 1 website. */}

          </p>
          <p>If you pass your tier limit our policy is to bump you up to the next tier in order to ensure your website remains available to your users and promptly notify the account owner.</p>

          <p>Our base tier is suitable for most sites.</p>
          <p>
          <b>Requests:</b> Requests per Month <br/>
          <b>GB:</b> GB per Month <br/>
          <b>Cost:</b> Additional Bandiwdth Cost
          </p>
          {/* <p>It is our policy to not cut traffic to any website that exceeds it usage tiers without contacting the account owner and notifying the owner of their tier change first.</p> */}
          <table>
              <thead>
                <th>Tier</th>
                <th>Requests</th>
                <th>GB</th>
                <th>Cost</th>
              </thead>
              <tbody>
                <tr>
                  <td>Basic</td>
                  <td>15,000</td>
                  <td>5GB</td>
                  <td>+$0/mo</td>
                </tr>
                <tr>
                  <td>Co</td>
                  <td>50,000</td>
                  <td>10GB</td>
                  <td>+$5/mo</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>100,000</td>
                  <td>20GB</td>
                  <td>+$7.5/mo</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>250,000</td>
                  <td>50GB</td>
                  <td>+$17.5/mo</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>750,000</td>
                  <td>150GB</td>
                  <td>+$50/mo</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>750,000+</td>
                  <td>Custom</td>
                  <td>Custom</td>
                </tr>
              </tbody>
            </table>
        </details>
      </Article>
    </Layout>
  )
}
