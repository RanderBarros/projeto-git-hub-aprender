let cep = document.querySelector('#cep-cadastro');
let rua = document.querySelector('#rua-cadastro');
let bairro = document.querySelector('#bairro-cadastro');
let cidade = document.querySelector('#cidade-cadastro');
let estado = document.querySelector('#estado-cadastro');
let limpaCampo = document.querySelectorAll('.inputs');

ctrl = this;

// Busca CEP (inicio)

cep.addEventListener('blur', function(e) {
    let cepCadastro = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cepCadastro+'/json/?callback=buscaCepForm';
    document.body.appendChild(script);
})
// Função para buscar o CEP
function buscaCepForm(resposta) {
    if("erro" in resposta) {
        alert('CEP não encontrado!');
        return;
    }
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}

// Busca CEP (final)

// Mascára dos campos de cadastro (inicio)

const cpfCadastro = document.querySelector('#cpf-cadastro')

cpfCadastro.addEventListener('keypress', () => {
    let cpfCadastrolength = cpfCadastro.value.length

    if (cpfCadastrolength === 3 ||cpfCadastrolength === 7 ) {
        cpfCadastro.value += '.'
    }else if (cpfCadastrolength === 11){
        cpfCadastro.value += '-'
    }
})

const cepCadastro = document.querySelector('#cep-cadastro')

cepCadastro.addEventListener('keypress', () => {
    let cepCadastrolength = cepCadastro.value.length

    if (cepCadastrolength === 5) {
       cepCadastro.value += '-'
    }
})

const rgCadastro = document.querySelector('#rg-cadastro')

rgCadastro.addEventListener('keypress', () => {
    let rgCadastrolength = rgCadastro.value.length

    if (rgCadastrolength === 1 || rgCadastrolength === 5 ) {
        rgCadastro.value += '.'
    }
})

const nascimentoCadastro = document.querySelector('#nascimento-cadastro')

nascimentoCadastro.addEventListener('keypress', () => {
    let nascimentoCadastrolength = nascimentoCadastro.value.length

    if (nascimentoCadastrolength === 2 || nascimentoCadastrolength === 5) {
       nascimentoCadastro.value += '/'
    }
})

const celularCadastro = document.getElementById('celular-cadastro')

celularCadastro.addEventListener('keypress', () => {
    let celularCadastrolength = celularCadastro.value.length

    if (celularCadastrolength === 0) {
       celularCadastro.value += '('
    }else if (celularCadastrolength === 3)
       celularCadastro.value += ')'
     else if (celularCadastrolength === 9){
        celularCadastro.value += '-'
    }
})

// Mascára dos campos de cadastro (final)

//Função para realizar o login na imobiliária (inicio)

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

//Função para realizar o login na imobiliária (final)

// Função criada para carregar usuários cadastrados na imobiliária (inicio)

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

// Função criada para carregar usuários cadastrados na imobiliária (final)

cep.addEventListener('blur', function(e){
    let campoCep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws'+campoCep+'/json/?callback=buscaCepForm';
    document.body.appendChild(script); 
})


// Função para realizar a validação da autenticação do usuário na imobiliária (inicio)

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

// Função para realizar a validação da autenticação do usuário na imobiliária (final)

// Funções para limpar os dados da modal (inicio)

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

// Funções para limpar os dados da modal (final)

// Validação dos campos de cadastro (inicio)

const form = document.getElementById('cadastro-form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const senhaRegex = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    } else {
        removeError(0);
    }

function cpfValidate(){
    if(campos[1].value.length < 11)
    {
        setError(1);
    } else {
        removeError(1);
    }
}}

function emailValidate(){
    if(!emailRegex.test(campos[2].value)){
        setError(2);
    } else {
        removeError(2);
    }
}

function rgValidate(){
    if(campos[3].value.length < 7)
    {
        setError(3);
    } else {
        removeError(3);
    }
}

function nascimentoValidate(){
    if(campos[4].value.length < 8)
    {
        setError(4);
    } else {
        removeError(4);
    }
}

function celularValidate(){
    if(campos[5].value.length < 14)
    {
        setError(5);
    } else {
        removeError(5);
    }
}

function cepValidate(){
    if(campos[7].value.length < 9)
    {
        setError(7);
    } else {
        removeError(7);
    }
}

function senhaCadastroValidate(){
    if(!senhaRegex.test(campos[13].value)){
        setError(13);
    } else {
        removeError(13);
    }
}

function comparaSenha(){
    if(campos[13].value === campos[14].value && campos[14].value.length >= 8)
    {
        removeError(14);
    } else {
        setError(14);
    }
}

// Validação dos campos de cadastro (final)

// Bloqueio de letras, números e caracteres especiais
const inputNomeCadastro = document.querySelector("#nome-cadastro");
const inputSobreNome = document.querySelector("#sobre-nome");
const inputCpfCadastro = document.querySelector("#cpf-cadastro");
const inputRgCadastro = document.querySelector("#rg-cadastro");
const inputDataNascimentoCadastro = document.querySelector("#nascimento-cadastro");
const inputCelularCadastro = document.querySelector("#celular-cadastro");
const inputCepCadastro = document.querySelector("#cep-cadastro");
const inputCasaCadastro = document.querySelector("#casa-cadastro");

// Bloqueio de números
inputNomeCadastro.addEventListener("keypress", function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    console.log(keyCode);
    // 47 + ao - 58 são números
    if(keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
})

// Bloqueio de caracteres especiais
inputNomeCadastro.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[a-zA-Z0-9 ]';
    if (char.match(pattern)) {
      return true;
  }
}

inputCpfCadastro.addEventListener("keypress", Ver);
inputRgCadastro.addEventListener("keypress", Ver);
inputDataNascimentoCadastro.addEventListener("keypress", Ver);
inputCelularCadastro.addEventListener("keypress", Ver);
inputCepCadastro.addEventListener("keypress", Ver);
inputCasaCadastro.addEventListener("keypress", Ver)

function Ver(e) {
    var caracteres = String.fromCharCode(e.keyCode);
    var permitir = '[0-9]';

    if(caracteres.match(permitir)){
        return true;
    } else {
        e.preventDefault();
    }
}