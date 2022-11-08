let buttonSubmit = document.getElementById('btn-submit');

buttonSubmit.addEventListener('submit', function(event){
    event.preventDefault();
})

buttonSubmit.addEventListener('click', function(){
    let textArea = document.getElementById('text-why');
    let name = document.getElementById('name');
    let email = document.getElementById('e-mail');
    if(textArea.value.length > 500 || name.value.length < 10 || name.value.length > 40 || email.value.length < 10 || email.value.length > 50){
        alert('Dados Inválidos');
    }else{
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
})