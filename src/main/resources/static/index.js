//oppretter arr til billettbestilling
let billettArr = [];



//push objekt til array
document.getElementById('bestill').addEventListener('click', function() {

    const billetter = {
        film: document.getElementById('filmValg').value,
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefon: document.getElementById('telefon').value,
        email: document.getElementById('email').value
    };



    billettArr.push(billetter);
    console.log(billettArr);
    visBestilling();
});

function visBestilling() {
    const tabell = document.getElementById('visBestilling').getElementsByTagName('tbody')[0];
    tabell.innerHTML = '';

    billettArr.forEach((billett) => {
        // Create a new row and cells for each property
        const nyRad = tabell.insertRow();
        const ruteFilm = nyRad.insertCell();
        const ruteAntall = nyRad.insertCell();
        const ruteFornavn = nyRad.insertCell();
        const ruteEtternavn = nyRad.insertCell();
        const ruteTelefon = nyRad.insertCell();
        const ruteEmail = nyRad.insertCell();

        // Assign the text values to each cell
        ruteFilm.textContent = billett.film;
        ruteAntall.textContent = billett.antall;
        ruteFornavn.textContent = billett.fornavn;
        ruteEtternavn.textContent = billett.etternavn;
        ruteTelefon.textContent = billett.telefon;
        ruteEmail.textContent = billett.email;
    });

    //slett bestillinger
    document.getElementById('slett').addEventListener('click', function() {

        const tableBody = document.getElementById('visBestilling').getElementsByTagName('tbody')[0];

        //fjern innhold i tabell
        tableBody.innerHTML = '';

        //fjern innhold i array
        billettArr = [];
    });



}
