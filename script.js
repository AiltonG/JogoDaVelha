
let titulo = document.getElementById('titulo')

const linha1 = [0,0,0]
const linha2 = [0,0,0]
const linha3 = [0,0,0]

var matriz =[[linha1[0] = document.getElementById('11'),linha1[1] = document.getElementById('12'),linha1[2] = document.getElementById('13')],
             [linha2[0] = document.getElementById('21'),linha2[1] = document.getElementById('22'),linha2[2] = document.getElementById('23')],
             [linha3[0] = document.getElementById('31'),linha3[1] = document.getElementById('32'),linha3[2] = document.getElementById('33')]];

            var pontos =[[1,1,1],[1,1,1],[1,1,1]];

             var tab = [[1,1,1],[1,1,1],[1,1,1]];
//----------------------------------------------------------------------------------//

matriz[0][0].addEventListener('mousedown', clicar);
matriz[0][0].addEventListener('mouseup', solto);
matriz[0][0].addEventListener('mouseenter', entrar);
matriz[0][0].addEventListener('mouseout', sair);

matriz[0][1].addEventListener('mousedown', clicar);
matriz[0][1].addEventListener('mouseup', solto);
matriz[0][1].addEventListener('mouseenter', entrar);
matriz[0][1].addEventListener('mouseout', sair);

matriz[0][2].addEventListener('mousedown', clicar);
matriz[0][2].addEventListener('mouseup', solto);
matriz[0][2].addEventListener('mouseenter', entrar);
matriz[0][2].addEventListener('mouseout', sair);

//----------------------------------------------------------------------------------//

matriz[1][0].addEventListener('mousedown', clicar);
matriz[1][0].addEventListener('mouseup', solto);
matriz[1][0].addEventListener('mouseenter', entrar);
matriz[1][0].addEventListener('mouseout', sair);

matriz[1][1].addEventListener('mousedown', clicar);
matriz[1][1].addEventListener('mouseup', solto);
matriz[1][1].addEventListener('mouseenter', entrar);
matriz[1][1].addEventListener('mouseout', sair);

matriz[1][2].addEventListener('mousedown', clicar);
matriz[1][2].addEventListener('mouseup', solto);
matriz[1][2].addEventListener('mouseenter', entrar);
matriz[1][2].addEventListener('mouseout', sair);

//----------------------------------------------------------------------------------//

matriz[2][0].addEventListener('mousedown', clicar);
matriz[2][0].addEventListener('mouseup', solto);
matriz[2][0].addEventListener('mouseenter', entrar);
matriz[2][0].addEventListener('mouseout', sair);

matriz[2][1].addEventListener('mousedown', clicar);
matriz[2][1].addEventListener('mouseup', solto);
matriz[2][1].addEventListener('mouseenter', entrar);
matriz[2][1].addEventListener('mouseout', sair);

matriz[2][2].addEventListener('mousedown', clicar);
matriz[2][2].addEventListener('mouseup', solto);
matriz[2][2].addEventListener('mouseenter', entrar);
matriz[2][2].addEventListener('mouseout', sair);

let vezz = true
let vez = 'X'
let venc = false
let turn = 0
let reset = false
//----------------------------------------------------//
function entrar(){
    this.style.background = 'white';
}
function sair(){
    this.style.background = 'gray';

}
function solto(){
    this.style.background = 'gray';

}

function clicar(){   
    this.style.background = 'black';

    if((this.innerText == '' && turn < 9) && (vez == 'X')){
        this.innerText = vez;
        verificar()
        if(venc == false){
            vezz = !vezz 
            vez = 'O'
            turn++
        }
    }

    for (let i = 0; i < 3; i++){ // tabela base 
        for(let j = 0; j < 3; j++){
            tab[i][j] = matriz[i][j].innerText
        }
    }

    if((vez == 'O' && venc == false) && (turn < 9)){ // Heurística bem definida
        pontos = [[10,10,10],[10,10,10],[10,10,10]];

        for(let lin = 0; lin < 3; lin++){

            for(let col = 0; col < 3; col++){

                if(matriz[lin][col].innerText == ''){

                    if(lin == 1 && col == 1){ //se for a central
                        pontos[lin][col] += 5
                    }

                    if((lin == 0 && col == 0) || (lin == 0 && col == 2) || (lin == 2 && col == 0) || (lin == 2 && col == 2)){ // se for canto
                        pontos[lin][col] += 1
                    }
                    let xsl = 0 // X's na Linha
                    for(let l = 0; l < 3; l++){
                        if(tab[lin][l].includes("X")){ // X na linha
                            pontos[lin][col] += 1
                            xsl++
                        }
                        if(xsl == 2){ // 2 X's na linha
                            pontos[lin][col] += 5
                        }
                    }
                    let xsc = 0 //X's na coluna
                    for(let k = 0; k < 3;k++){// X na coluna
                        if(tab[k][col].includes("X")){
                            pontos[lin][col] += 1  
                            xsc++
                        }
                        if(xsc == 2){ // 2 x na coluna
                            pontos[lin][col] += 5
                        }
                    }
                    let osl = 0 // O's na linha
                    for(let l = 0; l < 3; l++){
                        if(tab[lin][l].includes("O")){ // se tiver O na linha
                            pontos[lin][col] += 1
                            osl++
                        }
                        if(osl == 2){ // 2 O's na linha
                            pontos[lin][col] += 10
                        }
                    }
                    let osc = 0 //O's na coluna
                    for(let k = 0; k < 3;k++){// se ja tiver O na coluna
                        if(tab[k][col].includes("O")){
                            pontos[lin][col] += 1
                            osc++
                        }
                        if(osc == 2){ // 2 O's na coluna
                            pontos[lin][col] += 10
                        }
                    }
                                    //DIAGONAIS// O
                    if(lin == 0 && col == 0){ // cima esquerda
                        if(tab[1][1] == 'O' && tab[2][2] == 'O'){
                            pontos[lin][col] += 10
                        }
                    }
                    if(lin == 0 && col == 2){ // cima direita
                        if(tab[1][1] == 'O' && tab[2][0] == 'O'){
                            pontos[lin][col] += 10
                        }
                    }
                    if(lin == 1 && col == 1){ // meio meio
                        if((tab[0][0] == 'O' && tab[2][2] == 'O') || (tab[0][2] == 'O' && tab[2][0] == 'O')){
                            pontos[lin][col] += 10
                        }   
                    }  
                    if(lin == 2 && col == 0){ // baixo esquerda
                        if(tab[1][1] == 'O' && tab[0][2] == 'O'){
                            pontos[lin][col] += 10
                        }
                    }
                    if(lin == 2 && col == 2){ // baixo direita
                        if(tab[1][1] == 'O' && tab[0][0] == 'O'){
                            pontos[lin][col] += 10
                        }
                    }

                            //DIAGONAIS// X
                    if(lin == 0 && col == 0){ // cima esquerda
                        if(tab[1][1] == 'X' && tab[2][2] == 'X'){
                            pontos[lin][col] += 5
                        }
                    }
                    if(lin == 0 && col == 2){ // cima direita
                        if(tab[1][1] == 'X' && tab[2][0] == 'X'){
                            pontos[lin][col] += 5
                        }
                    }
                    if(lin == 1 && col == 1){ // meio meio
                        if((tab[0][0] == 'X' && tab[2][2] == 'X') || (tab[0][2] == 'X' && tab[2][0] == 'X')){
                            pontos[lin][col] += 5
                        }   
                    }
                    if(lin == 2 && col == 0){ // baixo esquerda
                        if(tab[1][1] == 'X' && tab[0][2] == 'X'){
                            pontos[lin][col] += 5
                        }
                    }
                    if(lin == 2 && col == 2){ // baixo direita
                        if(tab[1][1] == 'X' && tab[0][0] == 'X'){
                            pontos[lin][col] += 5
                        }
                    }
                    
                }else{
                    pontos[lin][col] -= 10
                }
            }
        }
        let maiora = 0
        let maiorb = 0
        let melhor = 0
        for(let a = 0; a < 3; a++){
            for(let b = 0; b < 3; b++){
                if(pontos[a][b] > melhor){
                    melhor = pontos[a][b]
                    maiora = a
                    maiorb = b
                }
            }
        }
        matriz[maiora][maiorb].innerText = vez;
        vezz = !vezz
        turn++  
        //alert(`${maiora}  ${maiorb}`)
        //alert(`${pontos[0][0]} | ${pontos[0][1]} | ${pontos[0][2]} \n ${pontos[1][0]} | ${pontos[1][1]} | ${pontos[1][2]} \n ${pontos[2][0]} | ${pontos[2][1]} | ${pontos[2][2]}`)
        verificar()
    }
    

function verificar(){
    for(i=0;i<3;i++){ // verificação vertical
        if(linha1[i].innerText != '' && linha2[i].innerText != '' && linha3[i].innerText != ''){
            if((linha1[i].innerText === linha2[i].innerText) && (linha2[i].innerText === linha3[i].innerText)){ 
                venc = true
            }
        }
    }

    // Verificação horizontal
    if(matriz[0][0].innerText != '' && matriz[0][1].innerText != '' && matriz[0][2].innerText != ''){
        if (matriz[0][0].innerText == matriz[0][1].innerText && matriz[0][1].innerText == matriz[0][2].innerText){
            venc = true
        }
    }
    if(matriz[1][0].innerText != '' && matriz[1][1].innerText != '' && matriz[1][2].innerText != ''){
        if (matriz[1][0].innerText == matriz[1][1].innerText && matriz[1][1].innerText == matriz[1][2].innerText){
            venc = true
        }
    }
    if(matriz[2][0].innerText != '' && matriz[2][1].innerText != '' && matriz[2][2].innerText != ''){
        if (matriz[2][0].innerText == matriz[2][1].innerText && matriz[2][1].innerText == matriz[2][2].innerText){
            venc = true
        }
    }

    // verificação horizontal 1
    if(matriz[0][0].innerText != '' && matriz[1][1].innerText != '' && matriz[2][2].innerText != ''){    
        if(((matriz[0][0].innerText == matriz[1][1].innerText) && (matriz[1][1].innerText == matriz[2][2].innerText))){
            venc = true
        }
    }
    
    // verificação horizontal 2
    if(matriz[2][0].innerText != '' && matriz[0][2].innerText != '' && matriz[1][1].innerText != ''){
        if((matriz[0][2].innerText == matriz[1][1].innerText) && (matriz[1][1].innerText == matriz[2][0].innerText)){
            venc = true
        }
    }
}

    if(reset == true){ // resetar
        vezz = true
        vez = 'X'
        venc = false
        turn = 0
        reset = false
        for(i = 0; i < 3; i++){
            linha1[i].innerText = ''
            linha2[i].innerText = ''
            linha3[i].innerText = ''
        }
    }


    if(venc == true){ // Mostrar que ganhou!
        titulo.innerText = `${vez} Venceu!`
        reset = true
       // go() // inicia animação de vitoria
    }else{
        if(vezz == true){ // trocar a vez
            vez = 'X'
            titulo.innerText = `vez de ${vez}`
        }else{
            vez = 'O'
            titulo.innerText = `vez de ${vez}`
        }
        if(turn >= 9){ // se der velha!
            titulo.innerText = "Deu Velha! \):"
            reset = true
        }
    }


    function go(){ // animação de vitoria
        if (reset == true){
            for(i = 0; i < 3; i++){
                linha1[i].innerText = ''
                linha2[i].innerText = ''
                linha3[i].innerText = ''
            }
            setTimeout(out, 200)
        }
    }    
    function out(){// animação de vitoria
        if(reset == true){
            for(i = 0; i < 3; i++){
                linha1[i].innerText = vez
                linha2[i].innerText = vez
                linha3[i].innerText = vez
            }
            setTimeout(go, 200)    
        }
    }
} 

