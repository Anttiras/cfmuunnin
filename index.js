const fahrenheitSyöte = document.querySelector('input');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const CelciusTuloste = document.querySelector('#celcius');
const muunnaButton = document.querySelector('button');

function fahrenheitCelciukseksi(fahrenheitSyote) {
    let celsius = fahrenheit;
    return celcius;
}

function muunna() {
    let syote = fahrenheitSyöte.value;
    fahrenheitTuloste.textContent = syote;

    CelciusTuloste.textContent = fahrenheitCelciukseksi(syote);
}

muunnaButton.addEventListener('click', muunna);
