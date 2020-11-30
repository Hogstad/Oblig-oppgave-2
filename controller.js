function selectStolpe(id) {
    return (id == valgtStolpe ? (valgtStolpe = '', disabled = true ) && show() : 
    (valgtStolpe = id, disabled = false, valgtStolpeValue = numbers[id])) 
    // (valgtStolpe = '', disabled = true ) : Hvil den valge stolpen ikke har en ID så vil den komme tilbake med "True"
    // (valgtStolpe = id, disabled = false, valgtStolpeValue = numbers[id]) : Hvil den valge stolpen ikke har en ID så vil den komme tilbake med "Fals"
    // Function som sjekke om man har valgt en stolpe eller ikke. hjelpe function til let disabled = true;
    && show();
}

function fjærnStolpe() {
    return (valgtStolpe ? numbers.splice(valgtStolpe, 1) :
    // number.splice(valgtStolpe(index), 1 (1 = hvor mange som skal fjærnes fra arrayet))
    // splice() -metoden legger til / fjerner elementer til / fra et array,
    feilMelding = 'Velg en stolpe') 
    // feilmelding kommer opp hvis en stolpe ikke er valgt å man prøver og slette.
    && show(); 
} 

function redigerStolpe() {
    return (valgtStolpe ? (inputValue <= 10 ? (numbers[valgtStolpe] = inputValue) : feilMelding = 'Velg et tall mellom 1 og 10') : 
    // (valgtStolpe) = Den man trykker på (? = ID på stolpe) (inputValue kan være fra 1-10 ? :)
    // (numbers[valgtStolpe] = inputValue) Her endres nummeret for den valgte stolpen til inputValue som man setter i input feltet.
    // Feilmelding hvis man velger et tall som er utenfor 1-10
    feilMelding = 'Velg en stolpe') 
    // Feilmelding kommer hvis ingen stolpe er valgt.
    && show();
} 

function leggTilStolpe(){
    return (inputValue !== undefined ? 
        (inputValue <= 10 ? numbers.push(inputValue) : feilMelding = 'Velg et tall mellom 1 og 10') : 
        // (inputValue !== undefined ) : Brukes til å legge til nummer på en udefinert unit
        // inputValue <= 10 ? : Inputvalue kan være fra 1-10. 
        // numbers.Push(inputvalue) -metoden legger til nye elementer på slutten av et array
        // Feilmelding som kommer hvis ikke tallet som blir skrivd inn i input er imellom 1-10
        feilMelding = 'Velg et tall mellom 1 og 10') 
        // Feilmelding som kommer opp hvis man ikke skriver noe i input og trykker på "Legg til Stolpe" knappen
        && show();
}