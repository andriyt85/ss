(function () {

	var div = document.getElementById('main');
	var i,j,cell,data,row;
	var table = document.createElement("table");
	document.getElementById('maindiv').appendChild(table);

	for (i = 1; i < 10; i++) {
		row = document.createElement("tr");	
			
		for ( j = 1; j < 10; j++ ) {
			cell = document.createElement("td");			
			data = document.createTextNode( i * j );
			cell.appendChild(data);
			row.appendChild(cell);

			if ((i % 2) === 0 && (j % 2) === 0 ) {
				cell.setAttribute("class" , "yellow");
			} else if ((i % 2) === 0 && (j % 2) !== 0 ) {
				cell.setAttribute("class" , "blue");
			} else if ((i % 2) !== 0 && (j % 2) === 0 ) {
				cell.setAttribute("class" , "blue");
			}	

		}
		table.appendChild(row);
	}

}());