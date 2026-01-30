import Heading from '@/components/Heading';
import Link from '@/components/Link';
import NextLink from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className='flex flex-col gap-2'>
      <Heading heading='Privacy Policy' />
      <p>
        <NextLink href='/privacy-policy/de' className='text-blue-600 hover:underline dark:text-blue-400'>
          Deutsche Version
        </NextLink>
      </p>
      <p>
        <b>Last updated:</b> 30.01.2026
      </p>
      <p>
        We value your privacy. This privacy policy explains what information we collect, how it is used, and your
        rights.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>1. Information We Collect</h2>
      <p>When you use this website, we collect the following information:</p>
      <ul className='ml-6 list-disc'>
        <li>Email address (used for authentication)</li>
        <li>Username</li>
        <li>Account creation date</li>
      </ul>
      <p>No other personal information is collected.</p>

      <h2 className='mt-4 text-xl font-semibold'>2. How We Use Your Information</h2>
      <p>We use the information we collect only to:</p>
      <ul className='ml-6 list-disc'>
        <li>Authenticate your account</li>
        <li>Provide and improve the website</li>
      </ul>
      <p>We do not sell, share, or otherwise distribute your personal information.</p>

      <h2 className='mt-4 text-xl font-semibold'>3. Analytics</h2>
      <p>We use Vercel Web Analytics to collect anonymous usage data. This includes:</p>
      <ul className='ml-6 list-disc'>
        <li>Page views</li>
        <li>Device type</li>
        <li>Referring websites</li>
      </ul>
      <p>
        No personal information is collected through analytics. Vercel Web Analytics does not use cookies or track you
        across websites.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>4. Your Rights</h2>
      <p>
        You can request deletion of your account and all associated data at any time by contacting us at{' '}
        <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link>. Upon request, we will delete your data
        promptly.
      </p>
      <p>You also have the right to contact the Austrian Data Protection Authority regarding your data.</p>

      <h2 className='mt-4 text-xl font-semibold'>5. Contact</h2>
      <p>If you have questions about this privacy policy or your data, contact:</p>
      <p>
        <b>neinja.dev</b>
      </p>
      <p>
        <b>Email:</b> <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link>
      </p>
      <p>
        <b>Country:</b> Austria
      </p>
    </div>
  );
}
