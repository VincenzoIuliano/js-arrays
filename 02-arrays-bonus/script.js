const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// const reversedTeachers = teachers.reverse();
// console.log (reversedTeachers) QUESTO METODO MODIFCA L'ARRAY
const reversedTeachers = teachers.toReversed();
console.log (reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((name) => name.lenght >=5)
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
let indexEd = teachers.indexOf('Ed')
console.log (indexEd)

const newArray = teachers.splice(5,1);
console.log (teachers)