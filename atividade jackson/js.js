function at1(){
    var i = 10
    while(i >=1){
        alert(i)
        i--
    }
    alert("Feliz Ano Novo!")
}

function at2(){
    var num = document.getElementById("txtat2").value;
    var num2 = num;
    document.getElementById("pat2").innerHTML = "";
    for(var i = 1; i<=10; i++){
        num2 = num*i;
        document.getElementById("pat2").innerHTML = document.getElementById("pat2").innerHTML + " " + num2;
    }
}

function at3(){
    var i = 1;
    var num = 0;
    while(i<=50){
        if(i%2==0){
            var num = num+i;
        }
        i++;
    }
    alert(num);
}

function at4(){
    num = document.getElementById("textat4").value;
    var multiplos = 0;
    for(var i=1; i<=num; i++){
        if(num%i==0){
            multiplos++;
        }
    }
    if(multiplos==2){
        alert("É primo!");
    } else{
        alert("Não é primo!")
    }
}

function at5(){
    var quantidade = document.getElementById("textat5").value;
    var num1 = 1;
    var num2 = 0;
    var num3 = 0;
    document.getElementById("pat5").innerHTML = 0;
    for(var i = 0; i<=quantidade; i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        document.getElementById("pat5").innerHTML = document.getElementById("pat5").innerHTML + " " + num3;
    }
   
   
}

