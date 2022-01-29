function kollaOrd() {
    error = true;
    info = summa + "\n \nLiv kvar: " + liv + "\nGjorda gissningar: " + guessesMade + "\n\n";
    gissning = prompt(info);
    if (gissning === null) {
        liv = -1;
        alert("Du har avbrutit spelet");
        return false;
    }
    for (i = 0; i < ordArray.length; i++) {
        if (ordArray[i].toUpperCase() === gissning.toUpperCase()){
            dashArray[i] = ordArray[i];
            guess = 1;
        } else {
            dashArray[i] = dashArray[i];
        }
    }
    for (i = 0; i < alfa.length; i++) {
        if (alfa[i] === gissning.toLowerCase()) {
            error = false;
            alfaIndex = i;
        }
    }
    if (gissning === "" || alfaIndex === -1) return true
    else if ((error || guess === 0) && alfaIndex >= 0) {
        felGissning += gissning + ", " ;
        liv--;
    }
    summa = dashArray.join("");
    guessesMade = felGissning;
} 
while (liv > 0) {
    countDash = 0;
    alfaIndex = -1; 
    for (i = 0; i < dashArray.length; i++) {
        if (dashArray[i] === "-") countDash++;
    }
    if (countDash < 1) {
        alert("Grattis! Du gissade rätt!");
        break;
    }
    guess = 0;
    kollaOrd();
    if (liv === 0) {
        alert("Spel Över \nRätt ord var " + ord[slumpNummer]);
        if(confirm("Vill du prova en gång till?")) location.reload()
        else alert("Ok, ha en bra dag looser!")
    }
}

