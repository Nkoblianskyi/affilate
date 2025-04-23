import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | LinkSpark",
  description: "Learn about how LinkSpark collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="text-lg">Last Updated: April 23, 2023</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          At LinkSpark ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal
          data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you
          visit our website or use our affiliate marketing services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p>We may collect several types of information from and about users of our website, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
            identifiers you choose to provide when registering on our site, subscribing to our services, or filling out
            forms.
          </li>
          <li>
            <strong>Account Information:</strong> Login credentials, account preferences, and other information related
            to your account.
          </li>
          <li>
            <strong>Transaction Information:</strong> Records of products or services you have purchased, affiliate
            links you have shared, and commissions you have earned.
          </li>
          <li>
            <strong>Usage Information:</strong> Information about how you use our website, including traffic data, logs,
            and other communication data.
          </li>
          <li>
            <strong>Technical Information:</strong> Internet protocol (IP) address, browser type and version, time zone
            setting, browser plug-in types and versions, operating system and platform, and other technology on the
            devices you use to access our website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Collect Your Information</h2>
        <p>We collect information through:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            Direct interactions when you provide information by filling in forms, creating an account, or corresponding
            with us.
          </li>
          <li>Automated technologies or interactions, including cookies and similar tracking technologies.</li>
          <li>Third parties or publicly available sources, such as analytics providers and advertising networks.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Use Your Information</h2>
        <p>We may use the information we collect about you to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Provide, maintain, and improve our services.</li>
          <li>Process transactions and send related information, including confirmations and invoices.</li>
          <li>Send administrative information, such as updates to our terms, conditions, and policies.</li>
          <li>Respond to your comments, questions, and requests.</li>
          <li>
            Communicate with you about products, services, offers, and events, and provide news and information we think
            will be of interest to you.
          </li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          <li>Personalize and improve your experience on our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclosure of Your Information</h2>
        <p>We may disclose personal information that we collect or you provide:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>To our subsidiaries and affiliates.</li>
          <li>To contractors, service providers, and other third parties we use to support our business.</li>
          <li>To fulfill the purpose for which you provide it.</li>
          <li>For any other purpose disclosed by us when you provide the information.</li>
          <li>With your consent.</li>
          <li>
            To comply with any court order, law, or legal process, including to respond to any government or regulatory
            request.
          </li>
          <li>To enforce or apply our terms of use and other agreements.</li>
          <li>
            If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
            LinkSpark, our customers, or others.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from
          unauthorized access, use, alteration, and disclosure. However, the transmission of information via the
          internet is not completely secure. Although we do our best to protect your personal information, we cannot
          guarantee the security of your personal information transmitted to our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>The right to access your personal information.</li>
          <li>The right to rectify inaccurate personal information.</li>
          <li>The right to request the deletion of your personal information.</li>
          <li>The right to restrict the processing of your personal information.</li>
          <li>The right to data portability.</li>
          <li>The right to object to the processing of your personal information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
        <p>
          Our services are not intended for children under 16 years of age. We do not knowingly collect personal
          information from children under 16. If you are a parent or guardian and believe we may have collected
          information about a child, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Our Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. If we make material changes to how we treat our users'
          personal information, we will notify you through a notice on the website home page or via email. The date the
          privacy policy was last revised is identified at the top of the page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
        <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
        <p className="mt-4">
          <strong>Email:</strong> info@linkspark.com
          <br />
          <strong>Address:</strong> Derech Menachem Begin 121, Tel Aviv-Yafo, 6701203, Israel
        </p>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-pink-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
