export default interface User {
	id: number;
	email: string;
	email_verified: boolean;
	phone_number: string;
	phone_verified: boolean;
	first_name: string | null;
	last_name: string | null;
}
