'use client';

import Button from '@/components/ui/Button';
import { Connection, Field, FieldError, Icon, Input, Label } from '@clerk/elements/common';
import { Action, Root, Step, Strategy } from '@clerk/elements/sign-up';
import Link from 'next/link';
import { fieldErrorCodeMapper } from '@/data/authMapper';

export default function SignUpPage() {
	return (
		<div className='w-full sm:w-[640px] mx-auto'>
			<Root fallback={<span>Wird geladen...</span>}>
				<Step name='start'>
					<h1>Konto Erstellen</h1>
					<p>
						Sie haben schon ein Konto? <Link href={'/sign-in'}>Melden Sie sich hier an.</Link>
					</p>

					<Connection name='google' asChild>
						<Button
							className='w-full'
							children={
								<span className='inline-flex w-full justify-center'>
									<Icon className='mr-2' /> Konto mit Google erstellen
								</span>
							}
						/>
					</Connection>
					<br />
					<br />
					<Field name='emailAddress' className='mb-4'>
						<Label>E-Mail Adresse</Label>
						<Input className='w-full' required placeholder='max.mustermann@duck.com' />
						<FieldError className='text-red-500'>
							{({ code }) =>
								fieldErrorCodeMapper.email.hasOwnProperty(code) ? fieldErrorCodeMapper.email[code] : code
							}
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

					<Action submit asChild>
						<Button children={'Weiter'} />
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
						<Button children='Weiter' />
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
						<Button children='Konto Erstellen' />
					</Action>

					<Action navigate='start' asChild>
						<Button children='Abbrechen' className='float-end' />
					</Action>
				</Step>
			</Root>
		</div>
	);
}
