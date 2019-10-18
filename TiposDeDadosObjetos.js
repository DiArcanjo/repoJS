
// OBJETO: CONJUNTO DE PROPRIEDADES

//CRIANDO UM OBJETO
var objeto = {Nome: "Diana", Idade: 29, PortadorDeficiencia: false};

//Acessando o valor da propriedade de um objeto
objeto.Nome;


//CRIANDO UM METODO DENTRO DE UM OBJETO

var pessoa = {Nome: "Diana", Idade: 29, Nacionalidade: "Brasileira"};

//CRIANDO O METODO PARA ACRESCENTAR A IDADE DA PESSOA DENTRO DO OBJETO
pessoa.acrescentarIdade = function(){
     pessoa.Idade++;
 }


//Invocando o método:
pessoa.acrescentarIdade();











