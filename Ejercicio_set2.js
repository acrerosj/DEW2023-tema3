// Crea una función que recibe 3 parámetros (min, max, num) todos ellos enteros 
// y devuelve un array de num elementos que son números elegidos al azar entre min y max 
// pero que nunca se repiten. Por supuesto num no puede ser mayor que max - min.

function randomSet(min, max, size) {
    const set = new Set();
    if ((min<max) && ((max-min+1)>=size)) {
        while (set.size < size) {
            let number = Math.floor(Math.random()*(max-min+1)+min);
            set.add(number);
        }
    }
    return [...set];
}

console.log("1,10,5: ", randomSet(1,10,5));
console.log("1,10,10: ", randomSet(1,10,10));
console.log("1,10,11: ", randomSet(1,10,11));
console.log("20,10,2: ", randomSet(1,10,11));