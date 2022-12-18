var listaDePecas = ["Amortecedor", "Motor", "Filtro de Ar"];
let peso = 50;
let nome = "Ayla";

if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g");
}
else {
    console.log("A peça tem o peso adequado.");
}


if(listaDePecas.length < 6){

    console.log("É possivel cadastrar mais peças.");

} else {

    console.log("Não é possível cadastrar mais itens na lista.");
}


let nomePeca = "Disco de Freio";

if(nomePeca.length > 3){

    console.log("Nome da peça está adequado para o cadastro.");

}else if(nomePeca.length == 0){

    console.log("O nome da peça não pode ser vazio.");

}else{

    console.log("O nome deve ter mais de 3 caractéres, digite um nome adequado.");
     
}