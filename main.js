
let score1 = 0;
let score2 = 0;
let x = 2;
let maxScore = 0;
let player1Wins = 0;
let player2Wins = 0;

// Pelaajien määrä //

let pelaaja1 = document.getElementById('yksiPelaaja').addEventListener('click',function (){
    pelaaja1 = true;
    document.getElementById('kaksiPelaaja').style.visibility='hidden';
    console.log(pelaaja1)
})
let pelaaja2 = document.getElementById('kaksiPelaaja').addEventListener('click',function (){
    pelaaja2 = true;
    document.getElementById('yksiPelaaja').style.visibility='hidden';
    console.log(pelaaja2)
})

// Noppien määrä //
let noppa1 = document.getElementById('yksiNoppa').addEventListener('click',function (){
    noppa1 = true;
    document.getElementById('kaksiNoppa').style.visibility='hidden';
    document.getElementById('noppa2').style.visibility='hidden';
    console.log(noppa1)
})
let noppa2 = document.getElementById('kaksiNoppa').addEventListener('click',function (){
    noppa2 = true;
    document.getElementById('yksiNoppa').style.visibility='hidden';
    console.log(noppa2)
})

// Mihin asti pelataan //

let mx = document.getElementById('value').addEventListener('click',function (){
    maxScore = document.getElementById('maxNumero').value;
    document.getElementById('value').style.visibility='hidden';
    document.getElementById('maxNumero').style.visibility='hidden';
    document.getElementById('tahanAsti').innerHTML='Mihin asti pelataan: ' + maxScore;
    console.log(maxScore)
})

// Nopat // 
let nopat = new Array();
nopat[0] = new Image();
nopat[0].src = 'd1.gif'
nopat[1] = new Image();
nopat[1].src = 'd2.gif'
nopat[2] = new Image();
nopat[2].src = 'd3.gif'
nopat[3] = new Image();
nopat[3].src = 'd4.gif'
nopat[4] = new Image();
nopat[4].src = 'd5.gif'
nopat[5] = new Image();
nopat[5].src = 'd6.gif'

let nopat2 = new Array();
nopat2[0] = new Image();
nopat2[0].src = 'd1.gif'
nopat2[1] = new Image();
nopat2[1].src = 'd2.gif'
nopat2[2] = new Image();
nopat2[2].src = 'd3.gif'
nopat2[3] = new Image();
nopat2[3].src = 'd4.gif'
nopat2[4] = new Image();
nopat2[4].src = 'd5.gif'
nopat2[5] = new Image();
nopat2[5].src = 'd6.gif'
let tulos = 0;

// peli //
function heita(){
    if (score1 < maxScore || score2 < maxScore){
        if (noppa2 === true){
            if (pelaaja1 === true || pelaaja2 === true){
                let random=Math.round(Math.random()*5)
                document.getElementById('noppa').src = nopat[random].src;
                console.log(nopat[random])
                let random2=Math.round(Math.random()*5)
                document.getElementById('noppa2').src = nopat2[random2].src;
                console.log(nopat2[random2])
                let yht = (random + 1) + (random2 + 1)
                let yht2 = ((random + 1) + (random2 + 1)) * 2
                console.log(yht)
                if (random == 0 || random2 == 0){
                    tulos = 0;
                    return lisaaPisteet()
                }
                if (random === random2){
                    tulos += yht2;
                }
                if(random == 0 && random2 == 0){
                    tulos += 25;
                }
                if(random != random2){
                    tulos += yht;
                }
            }
        }
        if (noppa1 === true){
            if (pelaaja1 === true || pelaaja2 === true){
                let random=Math.round(Math.random()*5)
                document.getElementById('noppa').src = nopat[random].src;
                console.log(nopat[random])
                let yht = (random + 1);
                if (random == 0){
                    tulos = 0;
                    return lisaaPisteet();
                }else{
                    tulos += yht;
                }
            }
        }
    }
    if (score1 >= maxScore){
        tulos = 0;
    }
    if (score2 >= maxScore){
        tulos = 0;
    }

}


function lisaaPisteet(){
    if (pelaaja2 === true){
        if (x % 2 == 0){
        document.getElementById('pOs').innerHTML = 'Pelaaja yksi SCORE: ' + (score1 + tulos);
        score1 = score1 + tulos;
        x++
        document.getElementById('vuoro').innerHTML = 'Pelaaja #2 vuoro'
        tulos = 0;
        }else{
        document.getElementById('pTs').innerHTML = 'Pelaaja kaksi SCORE: ' + (score2 + tulos);
        score2 = score2 + tulos;
        x++
        document.getElementById('vuoro').innerHTML = 'Pelaaja #1 vuoro'
        tulos = 0;
        }
    }
    if (pelaaja1 === true){
        document.getElementById('pOs').innerHTML = 'Pelaaja yksi SCORE: ' + (score1 + tulos);
        score1 = score1 + tulos;
        tulos = 0;
    }
    if (score1 >= maxScore){
        document.getElementById('voittaja').innerHTML='PELAAJA1 VOITTO!'
        player1Wins++;
        document.getElementById('pOne').innerHTML = 'Pelaaja yksi voitot: ' + (player1Wins);
    }
    if (score2 >= maxScore){
        document.getElementById('voittaja').innerHTML='PELAAJA2 VOITTO!'
        player2Wins++;
        document.getElementById('pTwo').innerHTML = 'Pelaaja yksi voitot: ' + (player2Wins);
    }
}

function uusiPeli(){
    score1 = 0;
    score2 = 0;
    tulos = 0;
    x = 2;
    document.getElementById('pOs').innerHTML = 'SCORE: 0';
    document.getElementById('pTs').innerHTML = 'SCORE: 0';
    document.getElementById('vuoro').innerHTML = 'Pelaaja #1 vuoro'

}


