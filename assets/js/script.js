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


// imposto data limite
const dateLimit = new Date("September 6, 2023 09:30:00");

function reverseCount() {

    // imposto attuale
    let dateNow = new Date().getTime();

    // sottraggo al limite l'attuale
    let result = Math.floor((dateLimit - dateNow) / 1000);
    
    // seleziono elemento DOM
    document.querySelector('h1').innerHTML = `Rimangono 👉 ${result} 👈 secondi al ${dateLimit}`;
    
    
    if (result < 0) {

        // stampo in pagina la sveglia
        document.querySelector('h1').innerHTML = '⏰';
        
        // imposto termine della timing function
        clearInterval(counter)
    }
}

let counter = setInterval(reverseCount, 1000);

