/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/
let v01 = "Jonas";
let p01 = "Jonaitis";
if (v01.length < p01.length)
    console.log(`1-1:Trumpesnis: ${v01}`);
else
    console.log(`1-1:Trumpesnis: ${p01}`);
/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/
console.log(`1-2: ${v01.toUpperCase()}`);
console.log(`1-2: ${p01.toLowerCase()}`);
/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
let vp03 = v01.charAt(0) + p01.charAt(0)
console.log(`1-3: ${vp03}`);
/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
let vp04 = v01.slice(-3) + p01.slice(-3)
console.log(`1-4: ${vp04}`);
/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

let a05 = "“An American in Paris”"
console.log(`1-5: ${a05} ${a05.replace(/[Aa]/g,"*")} `);
/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/
let a06 = "“An American in Paris”"
let b06 = "“Breakfast at Tiffany's”"
let c06 = "“2001: A Space Odyssey”"
let d06 = "“It's a Wonderful Life”"
console.log(`1-6: ${a06} ${a06.replace(/[aeiou]/gi,"")} `);
console.log(`1-6: ${b06} ${b06.replace(/[aeiou]/gi,"")} `);
console.log(`1-6: ${c06} ${c06.replace(/[aeiou]/gi,"")} `);
console.log(`1-6: ${d06} ${d06.replace(/[aeiou]/gi,"")} `);
/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/
let a07 = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope"
let replaced = a07.replace(/\D/g, '');
console.log(`1-6: ${a07} epizodo numeris: ${replaced} `);
/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/
function skaiciuotiTrumpesniusArbaLygius5(stringas) {
    let zodziai = stringas.split(" ");
    let kiekis = 0;

    for (let i = 0; i < zodziai.length; i++) {
        if (zodziai[i].length <= 5) {
            kiekis++;
        }
    }

    return kiekis;
}

// Pavyzdinė naudojimo situacija
//   var tekstas = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let tekstas = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let rezultatas = skaiciuotiTrumpesniusArbaLygius5(tekstas);
console.log("Žodžių, trumpesnių arba lygių nei 5 raidės, kiekis yra: " + rezultatas);



/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/
function genRandonString(length) {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let charLength = 3;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}
console.log(`1-9: ${genRandonString(3)}`);

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/
function generateRandomString(words) {
    let randomWords = [];

    while (randomWords.length < 10) {
        let randomIndex = Math.floor(Math.random() * words.length);
        let randomWord = words[randomIndex];

        if (!randomWords.includes(randomWord)) {
            randomWords.push(randomWord);
        }
    }

    return randomWords.join(' ');
}

let string1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let string2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

let words1 = string1.split(' ');
let words2 = string2.split(' ');

let allWords = words1.concat(words2);

let randomString = generateRandomString(allWords);
console.log(`1-10: ${randomString}`);