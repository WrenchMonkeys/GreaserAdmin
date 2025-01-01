import type { CityDetail } from '$lib/models/cityDetails';

export const unwrapNullable = <T>(value: T | null): T => {
	if (value != null) {
		return value;
	}

	throw Error('Unwrapped value is null');
};

export const isCityDetail = (data: unknown): data is CityDetail =>
	(data as CityDetail)?.name != null && (data as CityDetail)?.state != null;
