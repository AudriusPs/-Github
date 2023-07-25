/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = "Noname"
let pavarde = "Nofamily"
let gimimo = 1923
let dabar = new Date().getFullYear()
console.log(`"Aš esu ${vardas} ${pavarde}. Man yra ${dabar-gimimo} metai(-ų)."`)

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let sk1 = Math.round(Math.random() * 4)
let sk2 = Math.round(Math.random() * 4)
let rez = 0
if (sk1 == 0 && sk1 == 0)
    console.log("1-2 ats: Dalyba is nulio negalima.")
else rez = (Math.max(sk1, sk2)) / (Math.min(sk1, sk2))

console.log(`1-2 ats: ${sk1} ${sk2} ${rez.toFixed(2)}`)

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let a = Math.round(Math.random() * 25)
let b = Math.round(Math.random() * 25)
let c = Math.round(Math.random() * 25)
console.log(`1-3 skaiciai: ${a} ${b} ${c} `)

let largest = Math.max(a, b, c);
let smallest = Math.min(a, b, c);
let middleNum

if (a != largest && a != smallest) {
    middleNum = a
} else if (b != largest && b != smallest) {
    middleNum = b
} else if (c != largest && c != smallest) {
    middleNum = c
} else {
    middleNum = "1-3 ats: kazkurie lygus"
}
console.log(`1-3 ats: ${middleNum} `)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let ta = Math.ceil(Math.random() * 10)
let tb = Math.ceil(Math.random() * 10)
let tc = Math.ceil(Math.random() * 10)

if (ta + tb > tc && ta + tc > tb && tb + tc > ta) {
    console.log(`1-4 ${ta} ${tb} ${tc} ${ta + tb  >  tc} ${ta +  tc >  tb} ${tb + tc >  ta} ${"gali"} `)
} else
    console.log(`1-4 ${ta} ${tb} ${tc} ${ta + tb  >  tc} ${ta +  tc >  tb} ${tb + tc >  ta} ${"negali"} `)

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let a05 = Math.floor(Math.random() * 3)
let b05 = Math.floor(Math.random() * 3)
let c05 = Math.floor(Math.random() * 3)
let d05 = Math.floor(Math.random() * 3)
let skaiciai = [a05, b05, c05, d05]
console.log(`1-5 skaiciai: ${a05} ${b05} ${c05} ${d05}`)
let count0 = 0
let count1 = 0
let count2 = 0

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] == 0)
        count0++
}
console.log(`1-5 "0" - ${count0} `)

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] == 1)
        count1++
}
console.log(`1-5 "1" - ${count1} `)

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] == 2)
        count2++
}
console.log(`1-5 "2" - ${count2} `)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let a06 = Math.floor(Math.random() * 21 - 10)
let b06 = Math.floor(Math.random() * 21 - 10)
let c06 = Math.floor(Math.random() * 21 - 10)
console.log(`1-6 skaiciai: ${a06} ${b06} ${c06}`)

switch (true) {
    case a06 < 0:
        console.log(`1-6 [${a06}] `)
        break;
    case a06 > 0:
        console.log(`1-6 {${a06}} `)
        break;
    default:
        console.log(`1-6 (${a06}) `)
}
switch (true) {
    case b06 < 0:
        console.log(`1-6 [${b06}] `)
        break;
    case b06 > 0:
        console.log(`1-6 {${b06}} `)
        break;
    default:
        console.log(`1-6 (${b06}) `)
}
switch (true) {
    case c06 < 0:
        console.log(`1-6 [${c06}] `)
        break;
    case c06 > 0:
        console.log(`1-6 {${c06}} `)
        break;
    default:
        console.log(`1-6 (${c06}) `)
}
/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/ // Math.random() * (max - min + 1)+min
let zvkaina = 1
let zvkiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5)
console.log(`1-7 pradine kaina: ${zvkaina} kiekis: ${zvkiekis}`)
switch (true) {
    case zvkaina * zvkiekis > 2000:
        console.log(`1-7 >2000 kiekis: ${zvkiekis} kaina: ${zvkaina=zvkaina*0.96} `)
        break;
    case zvkaina * zvkiekis > 1000 && zvkaina * zvkiekis < 2000:
        console.log(`1-7 >1000<2000 kiekis: ${zvkiekis} kaina: ${zvkaina=zvkaina*0.97} `)
        break;
    default:
        console.log(`1-7 <1000 kiekis: ${zvkiekis} kaina: ${zvkaina} `)
}
/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let a08 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
let b08 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
let c08 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
let vid08 = Math.round((a08 + b08 + c08) / 3)
console.log(`1-8 skaiciai: ${a08} ${b08} ${c08} vidurkis:${vid08}`)
switch (true) {
    case a08 < 90 && a08 > 10:
        a08be = a08
        console.log(`1-8 a tarp 10 ir 90: ${a08be}`)
        break;
    default:
        a08be = 0
        console.log(`1-8 a netarp 10 ir 90: ${a08be}`)
}
switch (true) {
    case b08 < 90 && b08 > 10:
        b08be = b08
        console.log(`1-8 b tarp 10 ir 90: ${b08be}`)
        break;
    default:
        b08be = 0
        console.log(`1-8 b netarp 10 ir 90: ${b08be}`)
}
switch (true) {
    case c08 < 90 && c08 > 10:
        c08be = c08
        console.log(`1-8 c tarp 10 ir 90: ${c08be}`)
        break;
    default:
        c08be = 0
        console.log(`1-8 c netarp 10 ir 90: ${c08be}`)
}
let vid08_1090 = Math.round((a08be + b08be + c08be) / 3)
console.log(`1-8 skaiciai be: ${a08be} ${b08be} ${c08be} vidurkis be 1090: ${vid08_1090}`)


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/ // Math.random() * (max - min + 1)+min
let h09 = Math.floor(Math.random() * (24 - 0 + 1) + 0)
let m09 = Math.floor(Math.random() * (60 - 0 + 1) + 0)
let s09 = Math.floor(Math.random() * (60 - 0 + 1) + 0)
let s09_300 = Math.floor(Math.random() * (300 - 0 + 1) + 0)
// console.log(`1-9 hms: ${h09} ${m09} ${s09} +tiek sek: ${s09_300} laikr:${h09}:${m09}:${s09}`)
let newm09 = m09 + Math.floor((s09 + s09_300) / 60)
let news09 = s09 + s09_300 - Math.floor((s09 + s09_300) / 60)*60
console.log(`1-9 hms: ${h09} ${m09} ${s09} +tiek sek: ${s09_300} laikr + pap sek: ${h09}:${newm09}:${news09}`)



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*///Math.random() * (max - min + 1)+min
let a10 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let b10 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let c10 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let d10 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let e10 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let f10 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let skaiciai10 = [a10, b10, c10, d10, e10, f10]
skaiciai10.sort(function(a, b){return a - b});
console.log(`1-10 skaiciai: ${skaiciai10} `)
