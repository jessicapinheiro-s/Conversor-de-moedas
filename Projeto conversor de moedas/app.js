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
function moeda() {

    let input = document.getElementById('moedaConverter');
    let inputMoeda = input.value;

    if(inputMoeda == ''){
        alert('oi');
    }else{
        let lista = inputMoeda.split('');
        let tam = lista.length;
        alert(tam);
    
        if (tam> 1 && tam == 3) {
            inputMoeda[0] + ',';
        }
    }
}
moeda();
