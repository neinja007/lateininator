'use client';

import Button from '@/components/ui/Button';
import { Connection, Field, FieldError, Icon, Input, Label } from '@clerk/elements/common';
import { Action, Root, SafeIdentifier, Step, Strategy, SupportedStrategy } from '@clerk/elements/sign-in';
import Link from 'next/link';
import { fieldErrorCodeMapper } from '@/data/authMapper';

export default function SignInPage() {
	return (
		<div className='w-full sm:w-[640px] mx-auto'>
			<Root fallback={<span>Wird geladen...</span>}>
				<Step name='start'>
					<h1>Anmelden</h1>
					<p>
						Noch kein Konto? <Link href={'/sign-up'}>Erstellen Sie hier eines.</Link>
					</p>
					<Connection name='google' asChild>
						<Button
							className='w-full'
							children={
								<span className='inline-flex w-full justify-center'>
									<Icon className='mr-2' /> Mit Google anmelden
								</span>
							}
						/>
					</Connection>
					<br />
					<br />
					<Field name='identifier' className='mb-4'>
						<Label>E-Mail Adresse</Label>
						<Input className='w-full' placeholder='max.mustermann@duck.com' />
						<FieldError className='text-red-500'>
							{({ code }) =>
								fieldErrorCodeMapper.email.hasOwnProperty(code) ? fieldErrorCodeMapper.email[code] : code
							}
						</FieldError>
					</Field>

					<Action submit asChild>
						<Button children='Weiter' />
					</Action>
				</Step>

				<Step name='verifications'>
					<Strategy name='password'>
						<h1>Geben Sie Ihr Passwort ein</h1>

						<Field name='password' className='mb-4'>
							<Label>Passwort</Label>
							<Action navigate='forgot-password' className='float-end link'>
								<a>Passwort vergessen?</a>
							</Action>
							<br />
							<Input className='w-full' placeholder='●●●●●●●●●●●●' />
							<FieldError className='text-red-500'>
								{({ code }) =>
									fieldErrorCodeMapper.password.hasOwnProperty(code) ? fieldErrorCodeMapper.password[code] : code
								}
							</FieldError>
						</Field>

						<Action submit asChild>
							<Button children='Anmelden' />
						</Action>

						<Action navigate='start' asChild>
							<Button children='Abbrechen' className='float-end' />
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

						<Field name='code' className='mb-4'>
							<Label>Bestätigungscode</Label>
							<Input className='w-full' placeholder='123456' />
							<FieldError className='text-red-500'>
								{({ code }) =>
									fieldErrorCodeMapper.code.hasOwnProperty(code) ? fieldErrorCodeMapper.code[code] : code
								}
							</FieldError>
						</Field>

						<Action submit asChild>
							<Button children='Weiter' />
						</Action>

						<Action navigate='start' asChild>
							<Button children='Abbrechen' className='float-end' />
						</Action>
					</Strategy>
				</Step>

				<Step name='forgot-password'>
					<h1>Passwort vergessen?</h1>

					<SupportedStrategy name='reset_password_email_code' asChild>
						<Button children='Passwort zurücksetzen' />
					</SupportedStrategy>
					<br />
					<br />
					<Action navigate='previous' asChild>
						<Button children='Zurück' className='float-end' />
					</Action>
				</Step>

				<Step name='reset-password'>
					<h1>Setzen Sie Ihr Passwort zurück</h1>

					<Field name='password' className='mb-4'>
						<Label>Neues Passwort</Label>
						<Input className='w-full' />
						<FieldError className='text-red-500'>
							{({ code }) =>
								fieldErrorCodeMapper.password.hasOwnProperty(code) ? fieldErrorCodeMapper.password[code] : code
							}
						</FieldError>
					</Field>

					<Field name='confirmPassword' className='mb-4'>
						<Label>Passwort bestätigen</Label>
						<Input className='w-full' />
						<FieldError className='text-red-500'>
							{({ code }) =>
								fieldErrorCodeMapper.password.hasOwnProperty(code) ? fieldErrorCodeMapper.password[code] : code
							}
						</FieldError>
					</Field>

					<Action submit asChild>
						<Button children={'Passwort zurücksetzen'} />
					</Action>

					<Action navigate='start' asChild>
						<Button children='Abbrechen' className='float-end' />
					</Action>
				</Step>
			</Root>
		</div>
	);
}
