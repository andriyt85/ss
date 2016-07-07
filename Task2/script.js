(function () {
	var f = [0,1];


	for (i = 2; i < 21; i++){
		f[i] = f[i - 1] + f[i - 2] 
		document.write(f[i] + " ");
	}
	
}());