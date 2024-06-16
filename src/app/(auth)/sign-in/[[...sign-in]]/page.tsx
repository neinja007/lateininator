'use client';

import { Connection, Field, FieldError, Icon, Input, Label } from '@clerk/elements/common';
import { Action, Root, SafeIdentifier, Step, Strategy, SupportedStrategy } from '@clerk/elements/sign-in';
import Link from 'next/link';
import { fieldErrorCodeMapper } from '@/data/authMapper';

export default function SignInPage() {
	return (
		<Root fallback={<span>Wird geladen...</span>}>
			<Step name='start'>
				<h1>Anmelden</h1>
				<p>
					Noch kein Konto? <Link href={'/sign-up'}>Erstellen Sie hier eines.</Link>
				</p>
				<Connection name='google' className='wide-button'>
					<span className='inline-flex justify-center'>
						<Icon className='mr-2' /> Mit Google anmelden
					</span>
				</Connection>
				<br />
				<Field name='identifier'>
					<Label>E-Mail Adresse</Label>
					<Input className='w-full' placeholder='max.mustermann@duck.com' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.email[code] ? fieldErrorCodeMapper.email[code] : code)}
					</FieldError>
				</Field>

				<Action submit>Weiter</Action>
			</Step>

			<Step name='verifications'>
				<Strategy name='password'>
					<h1>Geben Sie Ihr Passwort ein</h1>

					<Field name='password'>
						<Label>Passwort</Label>
						<Action navigate='forgot-password' className='float-end link'>
							<a>Passwort vergessen?</a>
						</Action>
						<br />
						<Input className='w-full' placeholder='●●●●●●●●●●●●' />
						<FieldError className='text-red-500'>
							{({ code }) => (fieldErrorCodeMapper.password[code] ? fieldErrorCodeMapper.password[code] : code)}
						</FieldError>
					</Field>

					<Action submit>Anmelden</Action>

					<Action navigate='start' className='float-end'>
						Abbrechen
					</Action>
				</Strategy>

				<Strategy name='reset_password_email_code'>
					<h1>Überprüfen Sie Ihre E-Mails</h1>
					<p>
						Wir haben einen Bestätigungscode an{' '}
						<b>
							<SafeIdentifier />
						</b>{' '}
						gesendet.
					</p>

					<Field name='code'>
						<Label>Bestätigungscode</Label>
						<Input className='w-full' placeholder='123456' />
						<FieldError className='text-red-500'>
							{({ code }) => (fieldErrorCodeMapper.code[code] ? fieldErrorCodeMapper.code[code] : code)}
						</FieldError>
					</Field>

					<Action submit>Weiter</Action>

					<Action navigate='start' className='float-end'>
						Abbrechen
					</Action>
				</Strategy>
			</Step>

			<Step name='forgot-password'>
				<h1>Passwort vergessen?</h1>

				<SupportedStrategy name='reset_password_email_code'>Passwort zurücksetzen</SupportedStrategy>
				<br />
				<Action navigate='previous' className='float-end'>
					Zurück
				</Action>
			</Step>

			<Step name='reset-password'>
				<h1>Setzen Sie Ihr Passwort zurück</h1>

				<Field name='password'>
					<Label>Neues Passwort</Label>
					<Input className='w-full' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.password[code] ? fieldErrorCodeMapper.password[code] : code)}
					</FieldError>
				</Field>

				<Field name='confirmPassword'>
					<Label>Passwort bestätigen</Label>
					<Input className='w-full' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.password[code] ? fieldErrorCodeMapper.password[code] : code)}
					</FieldError>
				</Field>

				<Action submit>Passwort zurücksetzen</Action>

				<Action navigate='start' className='float-end'>
					Abbrechen
				</Action>
			</Step>
		</Root>
	);
}
