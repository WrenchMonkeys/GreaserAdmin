export interface CityDetail {
	name: string;
	state: string;
	lat: string;
	long: string;
	area: number;
	geoRegion: string;
	image?: string;
	operationStartDate: string;
	activePartners: number;
	averageResponseTime: string;
}

export interface CitiesByState {
	[city: string]: CityDetail;
}

export interface CityDetails {
	[state: string]: CitiesByState;
}
