(function (j) {
	var f = [0,1];
	f.length = j;

	for (i = 2; i < f.length; i++){
		f[i] = f[i - 1] + f[i - 2] 
		document.write(f[i] + " ");3

		var str = f[i].toString();
		
		/*if ((str[0] % 2) === 0){
			console.log("Main even" + " " + str)
		} else if ((str[0] % 2) !== 0) {
			console.log("Main odd" + " " + str)
		} else if ((f[i] % 2) === 0) {
			console.log("Secondary even" + " " + f[i])
		} /*else */if ((f[i] % 2) !== 0) {
			console.log("Secondary odd" + " " + f[i])
		} 
	}
	

}(21));