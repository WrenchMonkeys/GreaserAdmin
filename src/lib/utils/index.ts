export const unwrapNullable = <T>(value: T | null): T => {
	if (value != null) {
		return value;
	}

	throw Error('Unwrapped value is null');
};
