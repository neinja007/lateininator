import Heading from '@/components/Heading';
import Link from '@/components/Link';
import NextLink from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className='flex flex-col gap-2'>
      <Heading heading='Terms of Service' />
      <p>
        <NextLink href='/terms-of-service' className='text-blue-600 hover:underline dark:text-blue-400'>
          Deutsche Version
        </NextLink>
      </p>
      <p>
        <b>Last updated:</b> 30.01.2026
      </p>
      <p>
        Welcome to Lateininator! These Terms of Service govern your use of our website and services. By using our
        website, you agree to these terms.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>1. Description of Service</h2>
      <p>Lateininator is an online platform for learning the Latin language. Our service includes:</p>
      <ul className='ml-6 list-disc'>
        <li>
          <b>Vocabulary Trainer:</b> An interactive tool for practicing translations between Latin and other languages
        </li>
        <li>
          <b>Dictionary:</b> A comprehensive database of Latin words with translations and grammatical information
        </li>
        <li>
          <b>Inflection Exercises:</b> Tools for practicing declensions (nouns), comparisons (adjectives), and
          conjugations (verbs)
        </li>
        <li>
          <b>Grammar Exercises:</b> Various exercises and summaries for Latin grammar
        </li>
        <li>
          <b>Collections:</b> Ability to create and manage your own word collections
        </li>
        <li>
          <b>Points System:</b> A gamification system that rewards your progress
        </li>
      </ul>

      <h2 className='mt-4 text-xl font-semibold'>2. User Accounts and Authentication</h2>
      <p>
        To use certain features, you must create a user account. We use{' '}
        <Link href='https://clerk.com' target='_blank' rel='noopener noreferrer'>
          Clerk
        </Link>{' '}
        for authentication and user account management. When registering, you must:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Provide a valid email address</li>
        <li>Choose a username</li>
        <li>Verify your identity</li>
      </ul>
      <p>
        You are responsible for the security of your account and must monitor all activities under your account. You
        must notify us immediately if you suspect unauthorized use of your account.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>3. User-Generated Content</h2>
      <p>You may create your own content, including:</p>
      <ul className='ml-6 list-disc'>
        <li>Word collections (Collections)</li>
        <li>Word lists</li>
        <li>Custom words and translations</li>
      </ul>
      <p>
        You retain ownership of your content, but grant us a license to use, store, and display this content as part of
        the service. You are responsible for ensuring that your content:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Does not violate applicable laws</li>
        <li>Does not infringe on third-party rights</li>
        <li>Is not offensive, defamatory, or harmful</li>
        <li>Does not contain malware or harmful code</li>
      </ul>

      <h2 className='mt-4 text-xl font-semibold'>4. Acceptable Use</h2>
      <p>You agree not to use our service to:</p>
      <ul className='ml-6 list-disc'>
        <li>Engage in illegal activities</li>
        <li>Attempt to gain unauthorized access to systems or data</li>
        <li>Overload or disrupt the service</li>
        <li>Use automated systems (bots, scrapers) without our express permission</li>
        <li>Distribute content that violates these terms</li>
        <li>Harass or bully other users</li>
      </ul>
      <p>Violations of these rules may result in immediate suspension of your account.</p>

      <h2 className='mt-4 text-xl font-semibold'>5. Intellectual Property</h2>
      <p>
        All rights to the Lateininator website, including design, code, logos, and trademarks, are the property of
        neinja.dev or its licensors. The technologies used include:
      </p>
      <ul className='ml-6 list-disc'>
        <li>
          <Link href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
            Next.js
          </Link>{' '}
          (React framework)
        </li>
        <li>
          <Link href='https://react.dev' target='_blank' rel='noopener noreferrer'>
            React
          </Link>{' '}
          (UI library)
        </li>
        <li>
          <Link href='https://tailwindcss.com' target='_blank' rel='noopener noreferrer'>
            Tailwind CSS
          </Link>{' '}
          (styling)
        </li>
        <li>
          <Link href='https://prisma.io' target='_blank' rel='noopener noreferrer'>
            Prisma
          </Link>{' '}
          (database ORM)
        </li>
        <li>
          <Link href='https://tanstack.com/query' target='_blank' rel='noopener noreferrer'>
            TanStack Query
          </Link>{' '}
          (data fetching and management)
        </li>
        <li>
          <Link href='https://lucide.dev' target='_blank' rel='noopener noreferrer'>
            Lucide Icons
          </Link>{' '}
          (icons)
        </li>
        <li>
          <Link href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
            Vercel
          </Link>{' '}
          (hosting and analytics)
        </li>
      </ul>
      <p>
        You may not copy, modify, distribute, or commercially use our website without our express written permission.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>6. Third-Party Services</h2>
      <p>Our service uses various third-party services that have their own terms of service:</p>
      <ul className='ml-6 list-disc'>
        <li>
          <b>Clerk:</b> For authentication and user management. Your use is subject to{' '}
          <Link href='https://clerk.com/legal' target='_blank' rel='noopener noreferrer'>
            Clerk&apos;s Terms of Service
          </Link>
        </li>
        <li>
          <b>Vercel Analytics:</b> For anonymous usage statistics. For more information, see our{' '}
          <Link href='/privacy-policy/en'>Privacy Policy</Link>
        </li>
        <li>
          <b>Neon Database:</b> For database hosting services (PostgreSQL)
        </li>
      </ul>

      <h2 className='mt-4 text-xl font-semibold'>7. Service Availability</h2>
      <p>
        We strive to provide a reliable service but cannot guarantee uninterrupted availability. The service may be
        temporarily unavailable for the following reasons:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Maintenance work</li>
        <li>Technical issues</li>
        <li>Force majeure</li>
        <li>Service changes</li>
      </ul>
      <p>We reserve the right to modify, suspend, or discontinue the service at any time, with or without notice.</p>

      <h2 className='mt-4 text-xl font-semibold'>8. Disclaimer</h2>
      <p>The service is provided &quot;as is&quot; and &quot;as available&quot;. We make no warranties regarding:</p>
      <ul className='ml-6 list-disc'>
        <li>The accuracy or completeness of the information provided</li>
        <li>The continuous availability of the service</li>
        <li>The absence of errors or viruses</li>
        <li>The suitability of the service for your specific purposes</li>
      </ul>
      <p>
        In no event shall we be liable for indirect, incidental, special, or consequential damages arising from the use
        or inability to use our service.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>9. Termination</h2>
      <p>
        You may delete your account at any time by contacting us at{' '}
        <Link href='mailto:support@lateininator.com'>support@lateininator.com</Link>. We reserve the right to suspend or
        delete accounts that violate these Terms of Service without notice.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>10. Changes to Terms of Service</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Material changes will be notified to you by
        email or through a notice on the website. Your continued use of the service after such changes constitutes your
        acceptance of the modified terms.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>11. Governing Law</h2>
      <p>
        These Terms of Service are governed by Austrian law. Disputes will be heard before the competent Austrian
        courts.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>12. Contact</h2>
      <p>If you have questions about these Terms of Service, please contact:</p>
      <p>
        <b>neinja.dev</b>
      </p>
      <p>
        <b>Email:</b> <Link href='mailto:support@lateininator.com'>support@lateininator.com</Link> (Developer address:{' '}
        <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link>)
      </p>
      <p>
        <b>Country:</b> Austria
      </p>
    </div>
  );
}
