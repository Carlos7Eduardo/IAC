//1.Declarar uma variável, atribuir um valor numérico a ela. Mostrar o valor e o tipo. Teste todos os tipos vistos em sala de aula.
//var nome = "carlos";
//console.log('o conteudo é ${nome} e o tipo é ${typeof(nome)}');

//var numero = 12345;
//imprimir numero;


//function imprimir(valor){
//    console.log('o conteudo é ${valor} e o tipo é ${typeof(valor)}');
//}

//2.Qual padrão de nomenclatura normalmente se usa no JS?
//camelCase

//3.Quando um valor de uma variável será undefined?
//Uma variável que não teve um valor atribuído é do tipo undefined. 
//Um método ou sentença também retorna undefined se a variável que está sendo avaliada não tem um valor atribuído. Uma função retorna undefined se um valor não for retornado.

//4.Pesquisa quando uma variável tera um valor NaN. O que é?
//Ele é retornado quando uma operação matemática falha (Math.sqrt(-1)) 
//ou quando uma função tenta transformar uma string em inteiro (parseInt("blabla")). NaN (Not-A-Number) significa que algo não é um número válido.

//5.Imprima a média aritmética de 3 números.
//console.log ("Imprima a média aritmética de 3 números")
//var mediaAritmetica = 0;

//var primeiroNumero = 3;
//console.log ("primeiro numero " + primeiroNumero);

//var segundoNumero = 6;
//console.log ("segundo numero " + segundoNumero);

//var terceiroNumero = 9;
//console.log ("terceiro numero " + terceiroNumero);

//mediaAritmetica = (primeiroNumero + segundoNumero + terceiroNumero)/3;
//console.log ("A média é: " + mediaAritmetica);



//6.Simule as notas de um aluno da Ulbra. AP1, AP2, AS e média final.
//var n1 = 6
//console.log("")

//var mediaFinal = 0;
//var ap1 = 1;
//console.log("Avaliação parcial" + ap1);
//var ap2 = 2;
//console.log("Avaliação parcial" + ap2);
//var ativSimestral = 5;
//console.log("Avaliação parcial" + ativSimestral);
//media = ap1 + ap2 + ativSimestral;

//console.log("Sua media é " + media);

//var verdade = 1

//7.Informe o nome e a idade de uma pessoa e 
//imprima se esta pessoa é maior ou menor de idade.

//function numero7() {
//    var nome = "Carlos Eduardo"
//    var idade = 21;

//    console.log("Nome: Carlos Eduardo\n", "Idade: 21\n");

 //   if (idade >= 18) {
//        console.log("Maior de idade");
//    }

//    else {
  //      console.log("Menor de idade");
 //   }
//}

//8.Informe 3 números e mostre qual é o maior.

//console.log ("Informe 3 números e mostre qual é o maior");
//var n1 = 10;
//console.log ("O primeiro número é: " + n1);

//var n2 = 22;
//console.log ("O segundo número é: " + n2);

//var n3 = 16;
//console.log ("O terceiro número é: " + n3);

//if (n1>n2 && n1>n3){
 //   console.log ("O maio número é: " + n1)
//}
//else if (n2>n1 && n2>n3){
//    console.log ("O maior número é: "+ n2)
//}
//else if (n3>n1 && n3 >n2){
//    console.log ("O maior número é: " + n3)
//}