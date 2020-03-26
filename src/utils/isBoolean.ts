export const isBoolean = (val: any): boolean => {
	return val instanceof Boolean || val === true || val === false;
}
