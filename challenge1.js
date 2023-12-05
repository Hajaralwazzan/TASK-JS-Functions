/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log("Hajar");
}

printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  console.log(2023 - birthYear);
}
printAge(1989);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
let name1 = "Hajar";
let language = "en";

function printHello(n1, Ian) {
  if (lan == "en") {
    console.log(`Hello ${n1}`);
  } else if (lan == "es") {
  } else if (lan == "fr") {
    console.log(`Bonjour ${n1}`);
  } else if (lan == "tr") console.log(`Merhaba ${n1}`);
}

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
let unomas = 100;
let dosmas = 500;
function printMax(uno, dos) {
  if (uno > dos) {
    return uno;
  } else {
    return dos;
  }
}
