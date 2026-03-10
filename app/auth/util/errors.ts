export const getErrorMessage = (error: { message?: string | string[] }): string => {
	if(Array.isArray(error.message)) {
		return error.message.join(', ');
	}
	return error.message || 'An unknown error occurred';
};