'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import Link from 'next/link';

const fieldErrorCodeMapper: { [key: string]: React.ReactNode } = {
	form_param_format_invalid: <span>Ungültige E-Mail Adresse</span>,
	form_identifier_not_found: (
		<span>
			Es gibt noch kein Konto mit dieser E-Mail Adresse. <Link href='sign-up'>Konto erstellen</Link>
		</span>
	),
	form_password_incorrect: <span>Falsches Passwort</span>,
	form_param_nil: <span>Bitte geben Sie ein Passwort ein.</span>
};

export default function SignInPage() {
	return (
		<div className='w-[600px] mx-auto'>
			<SignIn.Root>
				<SignIn.Step name='start'>
					<h1>Melde dich mit deinem Konto an.</h1>

					<Clerk.Connection name='google' className='button'>
						Mit Google anmelden
					</Clerk.Connection>
					<br />
					<br />
					<Clerk.Field name='identifier'>
						<Clerk.Label>E-Mail Adresse</Clerk.Label>
						<Clerk.Input className='w-full' />
						<Clerk.FieldError className='text-red-500'>
							{({ message, code }) => (fieldErrorCodeMapper.hasOwnProperty(code) ? fieldErrorCodeMapper[code] : code)}
						</Clerk.FieldError>
					</Clerk.Field>
					<br />
					<SignIn.Action submit className='button'>
						Weiter
					</SignIn.Action>
				</SignIn.Step>

				<SignIn.Step name='verifications'>
					<SignIn.Strategy name='email_code'>
						<h1>Überprüfen Sie Ihre E-Mails</h1>
						<p>
							Wir haben einen Bestätigungscode an <SignIn.SafeIdentifier /> gesendet.
						</p>

						<Clerk.Field name='code'>
							<Clerk.Label>Bestätigungscode</Clerk.Label>
							<Clerk.Input className='w-full' />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignIn.Action submit className='button'>
							Weiter
						</SignIn.Action>
					</SignIn.Strategy>

					<SignIn.Strategy name='password'>
						<h1>Geben Sie Ihr Passwort ein</h1>

						<Clerk.Field name='password'>
							<Clerk.Label>Passwort</Clerk.Label>
							<SignIn.Action navigate='forgot-password' className='float-end link'>
								<a>Passwort vergessen?</a>
							</SignIn.Action>
							<br />
							<Clerk.Input className='w-full' />
							<Clerk.FieldError className='text-red-500'>
								{({ message, code }) => (fieldErrorCodeMapper.hasOwnProperty(code) ? fieldErrorCodeMapper[code] : code)}
							</Clerk.FieldError>
						</Clerk.Field>
						<br />
						<SignIn.Action submit className='button'>
							Weiter
						</SignIn.Action>
						<br />
					</SignIn.Strategy>

					<SignIn.Strategy name='reset_password_email_code'>
						<h1>Überprüfen Sie Ihre E-Mails</h1>
						<p>
							Wir haben einen Bestätigungscode an <SignIn.SafeIdentifier /> gesendet.
						</p>

						<Clerk.Field name='code'>
							<Clerk.Label>Bestätigungscode</Clerk.Label>
							<Clerk.Input className='w-full' />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignIn.Action submit className='button'>
							Weiter
						</SignIn.Action>
					</SignIn.Strategy>
				</SignIn.Step>

				<SignIn.Step name='forgot-password'>
					<h1>Passwort vergessen?</h1>

					<SignIn.SupportedStrategy name='reset_password_email_code'>Passwort zurücksetzen</SignIn.SupportedStrategy>

					<SignIn.Action navigate='previous'>Zurück</SignIn.Action>
				</SignIn.Step>

				<SignIn.Step name='reset-password'>
					<h1>Setzen Sie Ihr Passwort zurück</h1>

					<Clerk.Field name='password'>
						<Clerk.Label>Neues Passwort</Clerk.Label>
						<Clerk.Input className='w-full' />
						<Clerk.FieldError />
					</Clerk.Field>

					<Clerk.Field name='confirmPassword'>
						<Clerk.Label>Passwort bestätigen</Clerk.Label>
						<Clerk.Input className='w-full' />
						<Clerk.FieldError />
					</Clerk.Field>

					<SignIn.Action submit className='button'>
						Passwort zurücksetzen
					</SignIn.Action>
				</SignIn.Step>
			</SignIn.Root>
		</div>
	);
}
