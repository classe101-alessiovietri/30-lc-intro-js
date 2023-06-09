// Commentino JSino riga singola

/* 
    Cosa fa questo codice:
    1) mi fa ridere
    2) mi fa saziare
*/

document.writeln('Hello World!');

// alert('Hello World!');

console.log(document.getElementById('my-p'));
console.log('CONTENUTO PRE-MODIFICA:');
console.log(document.getElementById('my-p').innerHTML);

document.getElementById('my-p').innerHTML = 'Hello World messo da innerHTML!';

console.log('CONTENUTO POST-MODIFICA:');
console.log(document.getElementById('my-p').innerHTML);
	
const ciccio = 'mio valore';
// ciccio = 10; 

console.log(ciccio);

let age = 31;

console.log(age);   // ?
console.log(typeof age);   // ?

age = 24;

console.log(age);   // ?

age = '24';

console.log(age, typeof age);   // ?

// console.log('VAR firstName', firstName);

let firstName;
// var firstName = 'ciao';
console.log('let firstName', firstName, typeof firstName);   // ?

let lastName = null;
console.log('let lastName', lastName, typeof lastName);   // ?

let email = undefined;
console.log('VARIABILE email', email, typeof email);   // ?

firstName = 'Alessio';
lastName = 'Vietri';
email = 'alessio@boolean.careers';

const mioPi = document.getElementById('my-p');
mioPi.innerHTML = firstName + ' ' + lastName + ' ' + email;

// console.log(numUno);

const numUno = 10;
const numDue = 20;
const somma = numUno + numDue;
console.log('somma', somma, typeof somma);

const numberOne = '10';
const numberTwo = 20;
const sum = numberOne + numberTwo;
console.log('sum', sum, typeof sum);

const sottr = numUno - numDue;
console.log('sottr', sottr, typeof sottr);

const subtr = numberOne - numberTwo;
console.log('subtr', subtr, typeof subtr);

console.log('*', numberOne * numberTwo);
console.log('/', numberOne / numberTwo);

const stringaUno = "Stringa uno: ha detto Pietro 'ciao'";
const stringaDue = 'Stringa uno: ha detto Pietro "ciao"';
const stringaTre = "Alessio Sant'Orsola";
const stringaConcatenata = `
Ciao
sono
${stringaTre}`;

console.log(stringaConcatenata, typeof stringaConcatenata);

const ageFromPrompt = prompt('Inserisci la tua età');

console.log(ageFromPrompt, typeof ageFromPrompt);

document.getElementById('my-p').innerHTML = ageFromPrompt + '101';