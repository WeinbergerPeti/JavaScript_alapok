/* HTML-be: <script src="app.js"><script> >> JS fájl beillesztése a HTML-be */
/* ------------------------------------------------------------------------ */

alert("Hahó") /* >> Felugró ablak */

console.log("Hahó"); /* >> Kiíratás konzolra */

function uzenet() {alert("Hahó");} /* >> Függvény létrehozása */

document.getElementById("elem").innerHTML="Hahó"; /* >> Megkeresi a megadott ID-s elemet a HTML-ben, és az innerHTML-ben megadott szöveget hozzáadja a HTML szövegéhez
 */
windows.addEventListener("load", init, false); 

/* >>Változók típusai: var, let, const */
var a = 2;
var b = 3.14;
var szoveg = "Szia";
var logikai = false;

Elágazás:
if(a === 2) {
    console.log("Az 'a' egy szám");
    console.log(typeof a);
}
else {
    console.log("Az 'a' nem egy szám");
    console.log(typeof a);
}


/* Switch-Case: */
var szin = "red";
switch (szin) {
    case "red":
        console.log("Piros");
        break;
    case "green":
        console.log("Zöld");
        break;
    case "blue":
        console.log("Kék");
        break;
    default:
        console.log("Ezt a színt nem ismerem");
}

/* Tömb (vagy Lista): */
var tomb = []; /* >> Üres lista */
var tomb2 = [2, 3, 4, 5]; /* Lista számokkal */
var tomb3 = [4];
console.log(tomb2.length) /* >> Lista hosszának kiíratása */

/* For ciklus: */
var txt = ""
for(let i = 0; i < tomb2.length; i++) {
    txt = txt + tomb2[i] + ", "; /* >> A txt nevű változóhoz hozzáfűzzük a tomb2 i-edik elemét, így nem egymás alatt, hanem egymás mellett lesznek a számok */
}
console.log(txt);