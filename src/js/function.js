var x=1;


function avanca_pkm(){
if(x==1){
    document.getElementById("Pikachu").classList.add('hidden')
    document.getElementById("Charizard").classList.remove('hidden')
    document.getElementById("Mewtwo").classList.add('hidden')
    x=2;
    return;
}
if(x==2){
    document.getElementById("Charizard").classList.add('hidden')
    document.getElementById("Mewtwo").classList.remove('hidden')
    document.getElementById("Pikachu").classList.add('hidden')
    x=3;
    return;
}
if(x==3){
    document.getElementById("Mewtwo").classList.add('hidden')
    document.getElementById("Pikachu").classList.remove('hidden')
    document.getElementById("Charizard").classList.add('hidden')
    x=1;
    return;
}
}
function volta_pkm(){
    if(x==2){
        document.getElementById("Pikachu").classList.remove('hidden')
        document.getElementById("Charizard").classList.add('hidden')
        document.getElementById("Mewtwo").classList.add('hidden')
        x=1;
        return;
    }
    if(x==3){
        document.getElementById("Charizard").classList.remove('hidden')
        document.getElementById("Mewtwo").classList.add('hidden')
        document.getElementById("Pikachu").classList.add('hidden')
        x=2;
        return;
    }
    if(x==1){
        document.getElementById("Mewtwo").classList.remove('hidden')
        document.getElementById("Pikachu").classList.add('hidden')
        document.getElementById("Charizard").classList.add('hidden')
        x=3;
        return;
    }
    }