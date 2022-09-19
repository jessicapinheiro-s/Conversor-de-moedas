function selectMoeda (){
    let checkboxes = document.getElementsByName('check-moeda');
    
    if (checkboxes[0].checked){
        document.querySelector('.conteiner-principal-moeda').classList.add('aparecer');
    }
}
selectMoeda ();