var pontos = 0;
var errou = 0;
var q = 1;
var fim = 0;

var i = 0;
var width = 100;
var timer = document.getElementById("timer");

window.onload = function () {
    document.getElementById("questao1").style.display = "block";
    move(); 
};

function atualizarpag(pagina) {
    window.location = pagina + ".html";
}

function questoes(num){
    q = num + 1;

    var y = document.getElementById("questao" + num);
    var x = document.getElementById("questao" + q);

    if(num == 10){
        fim = 1;
        timer.style.display = "none";
        y.style.display = "none";
        
        document.getElementById("fimJogo").style.display = "block";
        document.getElementById("pontos").innerHTML = "Pontuação: " + pontos + " questões";
        document.body.style.backgroundImage = "url('../img/capaVitoria.png')";
    }else{
        y.style.display = "none"
        x.style.display = "block";
    }
}

function move() {
  if (i == 0) {
    i = 1;
    var id = setInterval(frame, 2000);
    function frame() {
        width--;
        timer.style.width = width + "%";

        if (width < 0) {
            width = 0;
            clearInterval(id);
            i = 0;

            timer.style.display = "none";

            if(fim == 0){
                document.getElementById("gameover").style.display = "block";
                document.getElementById("questao" + q).style.display = "none";
            }
        }
      }
    }
  }

function verificar(alternativa, questao){
    var y = document.getElementById(alternativa);

    if(y.value == 1){
        y.style.backgroundColor = "Green";
        y.style.opacity = "1";

        if(errou == 0){
            pontos++;
        }
        
        errou = 0;
        setTimeout(function() {
            questoes(questao);
        }, 150)
    }
    
    if(y.value == 0){
        y.style.backgroundColor = "#6e1111";
        y.style.opacity = "1";
        errou = 1;

        timer.style.backgroundColor = "rgb(207, 0, 0)";
        
        if(width < 0){
            width = 0;
        }else{
            width = width - 2;
        }

        setTimeout(function() {
            timer.style.backgroundColor = "rgb(54, 158, 54)";

            y.style.backgroundColor = "#FFF";
            y.style.opacity = "0.8";
            
            if(pontos > questao){
                pontos--;
            }    
        }, 200)
    }
}

