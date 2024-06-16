'use client';

import { Connection, Field, FieldError, Icon, Input, Label } from '@clerk/elements/common';
import { Action, Captcha, Root, Step } from '@clerk/elements/sign-up';
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

				<Connection name='google' className='wide-button'>
					<span className='inline-flex justify-center'>
						<Icon className='mr-2' /> Konto mit Google erstellen
					</span>
				</Connection>
				<br />
				<Field name='emailAddress'>
					<Label>E-Mail Adresse</Label>
					<Input className='w-full' required placeholder='max.mustermann@duck.com' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.email[code] ? fieldErrorCodeMapper.email[code] : code)}
					</FieldError>
				</Field>

				<Field name='password'>
					<Label>Password</Label>
					<Input className='w-full' placeholder='●●●●●●●●●●●●' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.password[code] ? fieldErrorCodeMapper.password[code] : code)}
					</FieldError>
				</Field>

				<Captcha />

				<Action submit>Weiter</Action>
			</Step>

			<Step name='continue'>
				<h1>Geben Sie Bitte Ihren Namen an</h1>

				<Field name='firstName'>
					<Label>Vorname</Label>
					<Input className='w-full' placeholder='Max' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.name[code] ? fieldErrorCodeMapper.name[code] : code)}
					</FieldError>
				</Field>

				<Field name='lastName'>
					<Label>Nachname</Label>
					<Input className='w-full' placeholder='Mustermann' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.name[code] ? fieldErrorCodeMapper.name[code] : code)}
					</FieldError>
				</Field>

				<Action submit>Weiter</Action>
			</Step>

			<Step name='verifications'>
				<h1>Überprüfen Sie Ihre E-Mails</h1>

				<Field name='code'>
					<Label>Bestätigungscode</Label>
					<Input className='w-full' placeholder='123456' />
					<FieldError className='text-red-500'>
						{({ code }) => (fieldErrorCodeMapper.code[code] ? fieldErrorCodeMapper.code[code] : code)}
					</FieldError>
				</Field>

				<Action submit>Konto Erstellen</Action>

				<Action navigate='start'>Abbrechen</Action>
			</Step>
		</Root>
	);
}
