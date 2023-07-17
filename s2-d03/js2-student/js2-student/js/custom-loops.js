/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for (let i = 0; i < 10; i++) {
    console.log(`2-1: "labas"`);
}
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (let i = 0; i < 10; i++) {
    console.log(`2-2: ${i}`);
}
/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai = ["Buksmedžiai", "Balžuva", "Bambukas", "Šalavijas", "Bazilikas", "Orchidėja", "Lelija", "Rozmarinas", "Jazminas", "Alijošius"]
/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
for (let i = 0; i < augalai.length; i++) {
    console.log(`2-4: ${augalai[i]}`);
}
/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
for (let i = augalai.length - 1; i > -1; i--) {
    console.log(`2-5: ${augalai[i]}`);
}
/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for (let i = 10; i <= 50; i += 2) {
    console.log(`2-6: ${i}`);
}
/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (let i = 10; i <= 50; i += 2) {
    if (i % 10 == 0) {
        continue;
    }
    console.log(`2-7: ${i}`);
}
/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/


/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/


/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/