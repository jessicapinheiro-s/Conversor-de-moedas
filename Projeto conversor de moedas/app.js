document.getElementById('check-dolar').addEventListener('click', function selectMoedaDolar() {
    let moedaConverter = document.querySelector('label#moedaConverter');
    moedaConverter.innerHTML = `Dolar`;
})

document.getElementById('check-euro').addEventListener('click', function selectMoedaEuro() {
    let moedaConverter = document.querySelector('label#moedaConverter');
    moedaConverter.innerHTML = `Euro`;
})

document.getElementById('check-libra').addEventListener('click', function selectMoedaLibra() {
    let moedaConverter = document.querySelector('label#moedaConverter');
    moedaConverter.innerHTML = `Libra`;
})