var condicion = true;
do {
	var opt = parseInt(prompt("Escoja una opción\n" +
	"1. Opción 1\n" +
	"2. Opción 2\n" +
	"0. Salir"));
	switch(opt) {
		case 1:
			window.alert("Opción 1");
			break;
		case 2:
			window.alert("Opción 3");
			break;
		case 0:
			condicion = false;
			break;
		default:
			break;
	}
} while(condicion);