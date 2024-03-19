function cadastrar(){
    let nome = window.document.getElementById("nome").value;
    let quantidade = window.document.getElementById("quantidade").value;
    let preco = window.document.getElementById("preco").value;
    let classe = window.document.getElementById("classe").value;

    if(nome == ""){
        console.log("Esse medicamento vai ser cadastrado");
        span = window.document.getElementById("nome_erro");
        span.innerHTML = "";
    }else{
        span = window.document.getElementById("nome_erro");
        span.innerHTML = "O nome é obrigatório";
        span.style.color = "red";
    }
}