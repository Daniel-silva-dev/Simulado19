var form = document.querySelector("form");
var result = 0;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var question1 = document.querySelector('input[name="q1"]:checked');
  if (question1 && question1.value === "C") {
    result += 1;
  }
  var question2 = document.querySelector('input[name="q2"]:checked');
  if (question2 && question2.value === "A") {
    result += 1;
  }
  var question3 = document.querySelector('input[name="q3"]:checked');
  if (question3 && question3.value === "D") {
    result += 1;
  }
  var question4 = document.querySelector('input[name="q4"]:checked');
  if (question4 && question4.value === "D") {
    result += 1;
  }
  var question5 = document.querySelector('input[name="q5"]:checked');
  if (question5 && question5.value === "B") {
    result += 1;
  }
  var question6 = document.querySelector('input[name="q6"]:checked');
  if (question6 && question6.value === "C") {
    result += 1;
  }
  var question7 = document.querySelector('input[name="q7"]:checked');
  if (question7 && question7.value === "A") {
    result += 1;
  }
  var question8 = document.querySelector('input[name="q8"]:checked');
  if (question8 && question8.value === "C") {
    result += 1;
  }
  var question9 = document.querySelector('input[name="q9"]:checked');
  if (question9 && question9.value === "B") {
    result += 1;
  }
  var question10 = document.querySelector('input[name="q10"]:checked');
  if (question10 && question10.value === "D") {
    result += 1;
  }
  var question11 = document.querySelector('input[name="q11"]:checked');
  if (question11 && question11.value === "B") {
    result += 1;
  }
  var question12 = document.querySelector('input[name="q12"]:checked');
  if (question12 && question12.value === "B") {
    result += 1;
  }
  var question13 = document.querySelector('input[name="q13"]:checked');
  if (question13 && question13.value === "C") {
    result += 1;
  }
  var question14 = document.querySelector('input[name="q14"]:checked');
  if (question14 && question14.value === "D") {
    result += 1;
  }
  var question15 = document.querySelector('input[name="q15"]:checked');
  if (question15 && question15.value === "B") {
    result += 1;
  }
  var question16 = document.querySelector('input[name="q16"]:checked');
  if (question16 && question16.value === "C") {
    result += 1;
  }
  var question17 = document.querySelector('input[name="q17"]:checked');
  if (question17 && question17.value === "A") {
    result += 1;
  }
  var question18 = document.querySelector('input[name="q18"]:checked');
  if (question18 && question18.value === "C") {
    result += 1;
  }
  var question19 = document.querySelector('input[name="q19"]:checked');
  if (question19 && question19.value === "A") {
    result += 1;
  }
  var question20 = document.querySelector('input[name="q20"]:checked');
  if (question20 && question20.value === "A") {
    result += 1;
  }
  var question21 = document.querySelector('input[name="q21"]:checked');
  if (question21 && question21.value === "A") {
    result += 1;
  }
  var question22 = document.querySelector('input[name="q22"]:checked');
  if (question22 && question22.value === "B") {
    result += 1;
  }
  var question23 = document.querySelector('input[name="q23"]:checked');
  if (question23 && question23.value === "A") {
    result += 1;
  }
  var question24 = document.querySelector('input[name="q24"]:checked');
  if (question24 && question24.value === "B") {
    result += 1;
  }
  var question25 = document.querySelector('input[name="q25"]:checked');
  if (question25 && question25.value === "D") {
    result += 1;
  }
  var question26 = document.querySelector('input[name="q26"]:checked');
  if (question26 && question26.value === "C") {
    result += 1;
  }
  var question27 = document.querySelector('input[name="q27"]:checked');
  if (question27 && question27.value === "C") {
    result += 1;
  }
  var question28 = document.querySelector('input[name="q28"]:checked');
  if (question28 && question28.value === "D") {
    result += 1;
  }
  var question29 = document.querySelector('input[name="q29"]:checked');
  if (question29 && question29.value === "D") {
    result += 1;
  }
  var question30 = document.querySelector('input[name="q30"]:checked');
  if (question30 && question30.value === "D") {
    result += 1;
  }

  function checaResultado(){
    if(result >= 21){
      return 'você está aprovado!'
    }else{
      return 'você está reprovado!'
    }
  }

  var resultado = checaResultado();
  document.body.innerHTML= `Você acertou ${result} de 30 perguntas.
  <br>
  ${resultado}
  <br>
  <button type="submit"><a href="./index.html">Refazer o simulado</a></button>
  
  `
});
