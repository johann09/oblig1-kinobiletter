//oppretter arr til billettbestilling
let billettArr = [];


//push objekt til array og input-validering
document.getElementById('bestill').addEventListener('click', function() {

    const billetter = {
        film: document.getElementById('filmValg').value,
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefon: document.getElementById('telefon').value,
        email: document.getElementById('email').value
    };

    //sjekker om billetter og antall innholder tall
    //sjekker om antall er høyere enn 0
    if (isNaN(billetter['antall'])
        || (billetter['antall'] <= 0)
        || (isNaN(billetter['telefon']))){
        alert("Kun tall og positive verdier i telefon og antall");
        return
    }
    else{
        console.log("antall og telefon sjekket")
        }

    //sjekker at fornavn og etternavn inneholder kun bokstaver
    if (/^[A-Za-zæøåÆØÅ]+$/.test(billetter['fornavn']) &&
    (/^[A-Za-zæøåÆØÅ]+$/.test(billetter['etternavn']))) {
        console.log("sjekket fornavn og etternavn");
    }
    else {
        alert("Kun bokstaver i navn");
        return
    }

    //email input validering, kode hentet fra stack overflow - ikke perfekt, men fungerer for de fleste email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("Validert email");
    } else {
        alert("Kun gyldig epost-adresse");
        return
    }

    billettArr.push(billetter);
    console.log(billettArr); //sjekk at array er init
    visBestilling();
});


//setter inn bestilling i tabell
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
