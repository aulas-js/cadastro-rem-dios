var contador = 1;
var id_aux = 0;

function cadastrar() {
    let nome = window.document.getElementById("nome").value;
    let quantidade = window.document.getElementById("quantidade").value;
    let preco = window.document.getElementById("preco").value;
    let classe = window.document.getElementById("classe").value;

    if (nome != "") {
        let html = "";

        html = window.document.getElementById("produtos_cadastrados").innerHTML;

        html += `   
                    <tr>    
                        <td id='nome_${contador}'>${nome}</td>
                        <td id='qtd_${contador}'>${quantidade}</td>
                        <td id='preco_${contador}'>${preco}</td>
                        <td id='classe_${contador}'>${classe}</td>
                        <td><button class="button_editar" onclick="editar(${contador})"><img src="images/edit_icon.svg"></button></td>
                    </tr>
                `;

        contador++;

        window.document.getElementById("produtos_cadastrados").innerHTML = html;
        span = window.document.getElementById("nome_erro");
        span.innerHTML = "";
        nome = window.document.getElementById("nome").value = '';
        quantidade = window.document.getElementById("quantidade").value = '';
        preco = window.document.getElementById("preco").value = '';
        classe = window.document.getElementById("classe").value = '';
    } else {
        span = window.document.getElementById("nome_erro");
        span.innerHTML = "O nome é obrigatório";
        span.style.color = "red";
    }
}

function editar(id){
    window.document.getElementById("botao_cadastrar").style.display = "none";
    window.document.getElementById("botao_editar").style.display = "block";

    let nome = window.document.getElementById("nome");
    let quantidade = window.document.getElementById("quantidade");
    let preco = window.document.getElementById("preco");
    let classe = window.document.getElementById("classe");

    nome.value = window.document.getElementById(`nome_${id}`).innerHTML;
    quantidade.value = window.document.getElementById(`qtd_${id}`).innerHTML;
    preco.value = window.document.getElementById(`preco_${id}`).innerHTML;
    classe.value = window.document.getElementById(`classe_${id}`).innerHTML;
    id_aux = id;
}

function gravarEdicao(){
    id = id_aux;

    let nome = window.document.getElementById("nome");
    let quantidade = window.document.getElementById("quantidade");
    let preco = window.document.getElementById("preco");
    let classe = window.document.getElementById("classe");

    if (nome != "") {
        window.document.getElementById(`nome_${id}`).innerHTML = nome.value;
        window.document.getElementById(`qtd_${id}`).innerHTML = quantidade.value;
        window.document.getElementById(`preco_${id}`).innerHTML = preco.value;
        window.document.getElementById(`classe_${id}`).innerHTML = classe.value;

        span = window.document.getElementById("nome_erro");
        span.innerHTML = "";
        nome = window.document.getElementById("nome").value = '';
        quantidade = window.document.getElementById("quantidade").value = '';
        preco = window.document.getElementById("preco").value = '';
        classe = window.document.getElementById("classe").value = '';

        window.document.getElementById("botao_cadastrar").style.display = "block";
        window.document.getElementById("botao_editar").style.display = "none";

        id_aux = 0;
    } else {
        span = window.document.getElementById("nome_erro");
        span.innerHTML = "O nome é obrigatório";
        span.style.color = "red";
    }
}