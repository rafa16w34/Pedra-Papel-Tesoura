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
  alert("Seja bem vindo!");
  jogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura?");
  computador = Math.floor(Math.random()*3) +1 ;
  //empate
  if (jogador == computador){
    alert("Empate");
  }
  //pedra e tesoura
  else if (jogador == 1 && computador ==3){
    alert("Voce ganhou");
  }
  //pedra e papel
  else if (jogador == 1 && computador ==2){
    alert("Voce perdeu");
  }
  //tesoura e papel
  else if (jogador == 3 && computador ==2){
    alert("Voce ganhou");
  }
  //tesoura e pedra
  else if (jogador == 3 && computador ==1){
    alert("Voce perdeu");
  }
  //papel e pedra
  else if (jogador == 2 && computador ==1){
    alert("Voce ganhou");
  }
  //papel e tesoura
  else if (jogador == 2 && computador ==3){
    alert("Voce perdeu");
  }
//}

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
