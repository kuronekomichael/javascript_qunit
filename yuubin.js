function validateYuubinNumber(postNumber) {
	return /^[0-9]{3}(?:-?[0-9]{4})?$/.test(postNumber);
}