function isZipCode(zipCode) {
	if (/^0{3}(?:-?0{4})?/.test(zipCode)) {
		return false;
	}
	return /^[0-9]{3}(?:-?[0-9]{4})?$/.test(zipCode);
}
