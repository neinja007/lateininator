'use client';

import Button from '@/components/ui/Button';
import { Connection, Field, FieldError, Icon, Input, Label } from '@clerk/elements/common';
import { Action, Captcha, Root, Step, Strategy } from '@clerk/elements/sign-up';
import Link from 'next/link';
import { fieldErrorCodeMapper } from '@/data/authMapper';

export default function SignUpPage() {
	return (
		<Root fallback={<span>Wird geladen...</span>}>
			<Step name='start'>
				<h1>Konto Erstellen</h1>
				<p>
					Sie haben schon ein Konto? <Link href={'/sign-in'}>Melden Sie sich hier an.</Link>
				</p>

				<Connection name='google' asChild className='mb-4'>
					<Button
						className='w-full'
						label={
							<span className='inline-flex w-full justify-center'>
								<Icon className='mr-2' /> Konto mit Google erstellen
							</span>
						}
					/>
				</Connection>
				<br />
				<Field name='emailAddress' className='mb-4'>
					<Label>E-Mail Adresse</Label>
					<Input className='w-full' required placeholder='max.mustermann@duck.com' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.email.hasOwnProperty(code) ? fieldErrorCodeMapper.email[code] : code)}
					</FieldError>
				</Field>

				<Field name='password' className='mb-4'>
					<Label>Password</Label>
					<Input className='w-full' placeholder='●●●●●●●●●●●●' />
					<FieldError className='text-red-500'>
						{({ code }) =>
							fieldErrorCodeMapper.password.hasOwnProperty(code) ? fieldErrorCodeMapper.password[code] : code
						}
					</FieldError>
				</Field>

				<Captcha />

				<Action submit asChild>
					<Button label={'Weiter'} />
				</Action>
			</Step>

			<Step name='continue'>
				<h1>Geben Sie Bitte Ihren Namen an</h1>

				<Field name='firstName' className='mb-4'>
					<Label>Vorname</Label>
					<Input className='w-full' placeholder='Max' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.name.hasOwnProperty(code) ? fieldErrorCodeMapper.name[code] : code)}
					</FieldError>
				</Field>

				<Field name='lastName' className='mb-4'>
					<Label>Nachname</Label>
					<Input className='w-full' placeholder='Mustermann' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.name.hasOwnProperty(code) ? fieldErrorCodeMapper.name[code] : code)}
					</FieldError>
				</Field>

				<Action submit asChild>
					<Button label='Weiter' />
				</Action>
			</Step>

			<Step name='verifications'>
				<h1>Überprüfen Sie Ihre E-Mails</h1>

				<Field name='code' className='mb-4'>
					<Label>Bestätigungscode</Label>
					<Input className='w-full' placeholder='123456' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.code.hasOwnProperty(code) ? fieldErrorCodeMapper.code[code] : code)}
					</FieldError>
				</Field>

				<Action submit asChild>
					<Button label='Konto Erstellen' />
				</Action>

				<Action navigate='start' asChild>
					<Button label='Abbrechen' className='float-end' />
				</Action>
			</Step>
		</Root>
	);
}
