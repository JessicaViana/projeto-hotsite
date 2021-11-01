// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Cadastrar(){

    // array com dados do formulario
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val(),
    }

    console.log("linha 13" + parametros);

    // requisição via POST informando o endereço e array de parametros
    $.post("/Home/Cadastrar", parametros)

        .done(
            function(data){
                //aqui terá tratamentos
                if(data.status == "OK"){
                    $("#formulario").after("<h5>Cadastro feito com sucesso! </h5>");
                    $("#formulario").hide();
                }else{
                    $("#formulario").after("<h5>" + data.mensagem + " tente mais tarde." + "</h5>");
                }
            }
        )
        .fail(
            function(){
                alert("Ocorreu um erro");
            }
        );
}


$(document).ready(
    function(){
        $("#frmCadastro").submit(
            function(e){
                e.preventDefault();
                Cadastrar();
                
            }
        );
    }
);