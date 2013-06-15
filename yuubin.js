function isZipCode(zipCode) {
	if ( zipCode === '000' ) return false; 
	return /^[0-9]{3}(?:-?[0-9]{4})?$/.test(zipCode);
}
