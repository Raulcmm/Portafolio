const arr = [ [ 1, 2 ], [ [ 3, 4 ] ], [ 1, [] ] ];

// let res=[]
// for (let i = 0; i < arr.length; i++) {

//   res+=arr[i]+(arr[i+1])
// }

const res = arr.reduce((acc, el) => acc.concat(el), []);

console.log(res);

const oracion = 'hola como estas, hola muy bien hola excelente, hola hola  espero estes bien, hola';
const trabajar = oracion.split(' ');

let acc = 0;
for (let i = 0; i < trabajar.length; i++) {
	if (trabajar[i] === 'hola') {
		acc++;
	}
}

console.log(acc);
