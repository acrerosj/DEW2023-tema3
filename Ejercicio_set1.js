// Crea un objeto mySet utilizando la estructura de datos Set. Luego, realiza las siguientes operaciones:
// Agrega los siguientes elementos al conjunto: 1, 2, 3, 4, 5.
const mySet = new Set([1,2,3,4,5]);
console.log(mySet);

// Verifica si el conjunto contiene el elemento 3.
console.log("Tiene el 3: ", mySet.has(3));

// Elimina el elemento 4 del conjunto.
mySet.delete(4);
console.log(mySet);

// Convierte el conjunto en un array utilizando el operador spread (...).
const array = [...mySet];
console.log(array);

// Crea un nuevo conjunto llamado otherSet con los elementos 4, 5, 6, 7.
const otherSet = new Set([4,5,6,7]);
console.log(otherSet);

// Crea un nuevo conjunto llamado unionSet que contenga todos los elementos de mySet y otherSet.
const unionSet = new Set([...mySet, ...otherSet]);
console.log(unionSet);

// Crea un nuevo conjunto llamado intersectionSet que contenga los elementos comunes entre mySet y otherSet.
const intersectionSet = new Set([...mySet].filter(e=>otherSet.has(e)));
console.log(intersectionSet);

// Crea un nuevo conjunto llamado differenceSet que contenga los elementos que están en mySet pero no en otherSet
const differenceSet =  new Set([...mySet].filter(e=>!otherSet.has(e)));
console.log(differenceSet);