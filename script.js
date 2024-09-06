let count =1;

document.getElementById("radio1").checked = true;
console.log(document.getElementById("radio1"));  // Verifica se o elemento existe



setInterval(function() {
    console.log("teste do set interval")
    nextImage();
}, 4000);

function nextImage(){
    console.log("mudando a imagem",count);
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


function menuShow(){
    let menuMobile = document.querySelector('.mobileMenu');
    let icone = document.querySelector("#iconMenu");


    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        icone.classList.remove("fa-times")
        icone.classList.add("fa-bars")
        
    } else {
        menuMobile.classList.add("open")
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
    }
}


