var soma = 0;
var vezes = 0;

function adicionar(){
    
     if (document.body.querySelector("#nota").value === '' || document.body.querySelector("#nota").value > 10
      || document.body.querySelector("#nota").value < 0){
            
        window.alert('Digite um valor valido');
    
    }else {
        
        vezes = vezes + 1;
        let nota = document.body.querySelector("#nota").value;
        let lista = document.body.querySelector('#lista').innerHTML;
        lista = lista+"<li>a nota "+vezes+" foi "+nota+"</li>";
        document.body.querySelector('#lista').innerHTML = lista;
        soma = soma + Number(nota);
        media = soma/(vezes);
        document.body.querySelector("span").innerText = media;
    
    }

}

function calcular(){

    document.body.querySelector("span").style.opacity = 100;
    document.body.querySelector('#lista').innerHTML = "<li></li>";
    vezes = 0;
    soma = 0;

}