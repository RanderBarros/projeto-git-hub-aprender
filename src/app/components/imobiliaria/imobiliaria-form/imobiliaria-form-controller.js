ctrl = this;

//Função para realizar o login na imobiliária
function logar() {
    ctrl.email = document.getElementById("email-login").value;
    ctrl.senha = document.getElementById("senha-login").value;
    carregarUsuariosCadastrados();
    validarUsuarioCadastrado();
    buscaCepForm();
    limparDadosModal();
    diminuirModal();
    aumentarModal();
    fecharModal();
} 
// Função criada para carregar usuários cadastrados na imobiliária
function carregarUsuariosCadastrados() {
    //Criando um array, que vai conter objetos nos seus índices
    listaUsuariosCadastrados = [
        // Posição 0 do array
        {
            email: "rander@home.com",
            senha: "123456789"
        },
        // Posição 1 do array
        {
            email: "ricardo@home.com",
            senha: "123456789"
        },
        // Posição 2 do array
        {
            email: "adriana@home.com",
            senha: "123456789"
        }
    ];
}

cep.addEventListener('blur', function(e){
    let campoCep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws'+campoCep+'/json/?callback=buscaCepForm';
    document.body.appendChild(script); 
})

// Função para buscar o CEP

function buscaCepForm(resposta) {
    if("erro" in resposta) {
        alert('CEP não encontrado!');
        return;
    }
    inputRua.value = resposta.logradouro;
    inputBairro.value = resposta.bairro;
    inputCidade.value = resposta.localidade;
    inputEstado.value = resposta.uf;
}

// Função para realizar a validação da autenticação do usuário na imobiliária
function validarUsuarioCadastrado() {
    var loginAutenticado = false;
    listaUsuariosCadastrados.forEach(function(usuario){
        // Verificar se o usuário digitado existe na base
        if(usuario.email === ctrl.email && usuario.senha === ctrl.senha) {
            loginAutenticado = true;
        }
    });
        // Verificar se o usuário foi autenticado para exibição de mensagens
        if(loginAutenticado) {
            document.getElementById('erro').style.display = 'none';
            document.getElementById('sucesso').style.display = 'block';
        } else {
            document.getElementById('sucesso').style.display = 'none';
            document.getElementById('erro').style.display = 'block';
        } 
}

// Funções para limpar os dados da modal

function limparDadosModal () {
    document.getElementById('erro').style.display = 'none';
    document.getElementById('sucesso').style.display = 'none';
    document.getElementById('email-login').value = "";
    document.getElementById('senha-login').value = "";
    document.getElementById('login-tab').click();
}

function diminuirModal () {
    document.getElementById('modal-entrar').className = 'modal-dialog modal-md modal-dialog-centered';
    document.getElementById('aba-modal-entrar').style = 'margin-left: 165px;';
    document.getElementById('login-tab').ariaSelected ="true";
}

function aumentarModal () {
    document.getElementById('modal-entrar').className = 'modal-dialog modal-lg modal-dialog-centered';
    document.getElementById('aba-modal-entrar').style = 'margin-left: 285px;';
}

function fecharModal () {
    $('modal-centralizado').modal('hide');
}