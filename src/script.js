//AULA 0
/*console.log("Oi")
alert("Ola mundo")
10 + 2
45-3
15*2
44/3
alert(10+2)
alert("44/3")*/

//AULA 1
//v = prompt("Digite um valor em wons")
//w = 0.004
//alert ("R$" + w * v)

//AULA 2
//idade = prompt ("Quanto anos voce tem?");
//if (idade >= 18){

//----------------------------------------------------------------------------------------------------
function PPT(){
  alert("Seja bem vindo!");

  let sair = false;

  while(!sair){

    while (true){
      jogador = prompt("Escolha uma das oções abaixo para jogar:1-Pedra 2-papel 3-tesoura 0- sair");


      // Cancelou
      if (jogador === null || jogador.trim() === "") {
        alert("Resposta obrigatória!");
        continue;
      }

      jogador = Number(jogador);

      //---------------------------------------------------------------------------------------------------

      if (isNaN(jogador)) {//Se digitar algo que não seja número
        alert("Digite apenas números!");
        continue
      }

      if (jogador < 0 || jogador > 3) {//Digitou uma opção não válida
        alert("Digite uma opção válida!");
        continue;
      }

      break;

    }

    if (jogador == 0) {//Para sair
      sair = true;
      alert("Saindo do jogo...");
      break;
    }



    //--------------------------------------------------------------------------------------------------

    computador = Math.floor(Math.random()*3) +1 ;

    //empate
    if (jogador == computador){
      alert("Empate");
    }
    //pedra e tesoura
    else if ((jogador == 1 && computador ==3) || (jogador == 3 && computador ==2) || (jogador == 2 && computador ==1)){
      alert("Voce ganhou");

    } 
    else{
      alert("Voce perdeu");
    }
  }
}
//---------------------------------------------------------------------------------------------------------------------------------

//AULA 3
//rodada = 1;
//while(rodada<=3){
  //console.log("Rodada" + rodada);
  //jogador = prompt("Nivel " + rodada + "\nEscolha o seu vidro (1-2-3):")
  //piso = Math.floor(Math.random() *3)+1;
  //if (jogador == piso){
    //alert("Voce perdeu kkkkkkkkk");
    //rodada = 5;
  //}else if(jogador != Math.floor(Math.random() *3)+1) {
    //alert("Voce perdeu kkkkkkkkk");
    //rodada = 5;
  //}else{
    //alert("Voce passou! \nOs trouxas cairam na ponte: " + piso);
    //rodada = rodada + 1;
  //}
//}
//if (rodada == 4){
  //alert("Voce venceu parabens hein");
//}


//AULA 4
//personagem = ["","",""];
//viloes = ["","",""];

//forcaPersonagem = 0;
//forcaViloes = 0;

//alert("O array Personagem é: " + personagem);

//for(let i = 0; i < 3; i++){
  //escolhaPersonagem = prompt("Digite o nome do personagem " + (i +1));
  //personagem[i] = escolhaPersonagem;
//}

//console.log("players:" + personagem);

//for(let i = 0; i < 3; i++){
  //IndiceAleatorio = Math.floor(Math.random() *5);
  //viloesPossiveis = ["greens","grays","reds","goombas","bowser"];
  //viloes[i] = viloesPossiveis[IndiceAleatorio];
  
//}
//console.log("viloes:" + viloes);