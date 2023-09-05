/* Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */

/*
1 = 24 ore
24 ore = (60 min * 24 ore) = 1440 min
1440 min = (60 sec * 1440 min) = 86400 sec
86400 sec = (86400 sec * 1000 msec) = 86.000.000 msec

18 ore
24 : 86.000.000 = 18 : x
x = 18 * 86.000.000 / 24 = 64.500.000 msec 

*/

// seleziono elemento DOM
const h1Element = document.querySelector('h1');

let dateLimit = new Date("sep 06, 2023 09:30:00").getTime();

console.log(dateLimit);

let dateNow = new Date().getTime();

console.log(dateNow);

/**
 * 
 * @param {number} now actual date
 * @param {number} limit time limit
 */
function result (limit, now) {
    const detrazione = limit - now;
    console.log(detrazione);
    h1Element.innerHTML = detrazione
    
}

result(dateLimit, dateNow);

/* setInterval(result, 2000) */



/* setInterval(result, 1000); */


