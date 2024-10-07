export interface Application {
	id: number;
	user_id: number;
	is_backgroundcheck_concented: boolean;
	is_terms_and_conditions_accepted: boolean;
	profile_picture_url: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	status: string;
}

export type ApplicationListItem = Pick<
	Application,
	'id' | 'status' | 'is_backgroundcheck_concented' | 'is_terms_and_conditions_accepted'
>;
