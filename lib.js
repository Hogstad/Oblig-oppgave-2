// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');
let feilMelding = '';

// model
let numbers = [7, 3, 1, 5, 8];
let valgtStolpe; // Variabel for hvilken stolpe som er valgt
let valgtStolpeValue; // Variabel for verdi av valgt stolpe
let selectedBar; //  
let inputValue; // Variabel for hva som er skrevet i input-feltet
let disabled = true; // Variabel som brukes med å definere om knappene skal være grået ut eller ikke.

// view
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1, [i]);
    }
    contentDiv.innerHTML = `
            <svg id="chart" width="500" height="900" viewBox="-10 18 100 60">
                ${svgInnerHtml}
                // Måtte endre litt på svg. fikk ikke vist opp til stolpeverdi 10.
            </svg><br/>
            Valgt stolpe: <i>${(!valgtStolpe ? 'ingen' : valgtStolpe)}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" value="${(valgtStolpe ? valgtStolpeValue : '0' ) }" />
            <button onclick="leggTilStolpe()"  >Legg til stolpe</button>
            <button ${(disabled == true ? 'disabled' : '')} onclick="redigerStolpe()">Endre valgt stolpe</button> 
            <button ${(disabled == true ? 'disabled' : '')} onclick="fjærnStolpe()">Fjerne valgt stolpe</button>
            <br><label>${feilMelding}</label>
        `;
}

function createBar(number, barNo, id) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect  width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" stroke="${id == valgtStolpe ? 'black' : ''}" onclick="selectStolpe('${id}');" ></rect>`;
                        // stroke="${id == valgtStolpe ? 'black' : ''}" onclick="selectStolpe('${id}'); Gir en Border på den valgte stolpen når man trykker på den.
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}
