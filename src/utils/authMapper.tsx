import Link from 'next/link';

export const fieldErrorCodeMapper: { [key: string]: { [key: string]: React.ReactNode } } = {
	email: {
		form_param_format_invalid: <span>Ungültige E-Mail Adresse</span>,
		form_identifier_not_found: (
			<span>
				Es gibt noch kein Konto mit dieser E-Mail Adresse. <Link href='sign-up'>Stattdessen Konto erstellen?</Link>
			</span>
		),
		form_param_nil: <span>Geben Sie eine E-Mail Adresse ein.</span>,
		form_identifier_exists: (
			<span>
				Diese E-Mail Adresse ist schon vergeben. <Link href='sign-in'>Stattdessen anmelden?</Link>
			</span>
		)
	},
	password: {
		form_password_incorrect: <span>Falsches Passwort</span>,
		form_param_nil: <span>Geben Sie ein Passwort ein.</span>,
		form_password_length_too_short: <span>Das Passwort ist zu kurz.</span>
	},
	code: {
		form_param_nil: <span>Geben Sie den 6-stelligen Bestätigungscode ein.</span>
	}
};
