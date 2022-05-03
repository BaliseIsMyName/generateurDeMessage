const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const signature = document.querySelector('#signature');
const button = document.querySelector("#rectangle");

const text1Data = "text1.json";
const text2Data = "text2.json";
const text3Data = "text3.json";
const signaturesData = "signaturesData.json";

let nombrePrecedent = 0;

button.addEventListener('click', () => {
    requestData(text1Data, text1);
    requestData(text2Data, text2);
    requestData(text3Data, text3);
    requestData(signaturesData, signature);
});

function requestData(file, text){
    const requestDataText1 = `./ressources/dataMessages/${file}`;
    const request = new XMLHttpRequest();
    
    request.open('GET', requestDataText1);
    request.responseType = 'json';
    
    request.send();
    
    request.onload = function() {
        const data = request.response;
        const nombre = nombreAleatoire(Object.keys(data).length);
        message(text, data, nombre);
    }
}

function message(text, jsonObject, numeroAléatoire) {
    text.textContent = jsonObject[numeroAléatoire];
}

function nombreAleatoire(length){
    const randomNumber = Math.floor(Math.random() * length + 1 );
    return randomNumber;
}

requestData(text1Data, text1);
requestData(text2Data, text2);
requestData(text3Data, text3);
requestData(signaturesData, signature);


