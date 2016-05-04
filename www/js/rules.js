var baseDeHechos;

var perfiles = [
	{ 
	 nombre: 'Leandro', 
	 edad: 20, 
	 sexo: 'Masculino',
	 fechaCumpleaños: new Date('05/06/1995'),
	 ubicacionActual: [{latitude: '-26.8213108', Longitude: '-65.1991792'}],
	 lugaresConcurridos: [
	  	{ nombre: 'El Balón', fecha: new Date('05/01/2016'), rubro: 'BarRestaurante', latitude: '-26.8213108', Longitude: '-65.1991792'},
	  	{ nombre: 'El Balón', fecha: new Date('05/02/2016'), rubro: 'BarRestaurante', latitude: '-26.8213108', Longitude: '-65.1991792'},
	  	{ nombre: 'El Balón', fecha: new Date('05/03/2016'), rubro: 'BarRestaurante', latitude: '-26.8213108', Longitude: '-65.1991792'},
	 ]
	},
	{
		nombre: 'Ariana',
		edad: 22,
		sexo: 'Femenino',
		fechaCumpleaños: new Date('12/07/1993'),
		leGustaLibros: true,
		leGustaPeliculas: true,
		ubicacionActual: '',
		lugaresConcurridos: [
			{ nombre: 'McDonalds', fecha: new Date('05/03/2016'), rubro: 'Comida Rápida')},
			{ nombre: 'McDonalds', fecha: new Date('05/02/2016'), rubro: 'Comida Rápida')},
			{ nombre: 'McDonalds', fecha: new Date('05/01/2016'), rubro: 'Comida Rápida')},
			{ nombre: 'McDonalds', fecha: new Date('04/30/2016'), rubro: 'Comida Rápida')},
			{ nombre: 'McDonalds', fecha: new Date('04/29/2016'), rubro: 'Comida Rápida')}
		]
	}
];

function sistemaIntermediario(perfil){
	baseDeHechos = {
		var lugares = perfil.lugaresConcurridos.slice();
		var fechaHoy = new Date();
		var visitasMensuales = [];
		while (lugares.length > 0){
			var nombreLugar = lugares[0].nombre;
			var visitasMensualesALugar = {nombre: nombreLugar, visitas: 0};
			for(int i = lugares.length; i >= 0; i--){
				if(lugares[i].nombre == nombreLugar){
					var totdias = lugares[i].fecha - fechaHoy;
					totdias /=3600000;  
					totdias /=24;	
					totdias = Math.floor(totdias);
					totdias = Math.abs(totdias);
					if(totdias <= 30){
						visitasMensualesALugar.visitas += 1;
					}
					lugares.splice(i, 1);
				}
			}
			visitasMensuales.push(visitasMensualesALugar);
		}
	};
}

function crearBaseDeHechos(perfil){
	baseDeHechos = {
		var esMasculino, esFemenino;
		if(perfil.sexo == 'Masculino') {
			esMasculino = true;
			esFemenino = false;
		} else {
			esFemenino = true;
			esMasculino = false;
		}
	};
}