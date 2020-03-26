let panel = document.querySelectorAll(".panel");

for(let i = 0; i< panel.length; i++){
    panel[i].addEventListener("click", now);
}

function now(){
    console.log("hello");
    for(let j = 0; j< panel.length; j++){
        panel[j].className = "panel";  
    }
    this.className = "panel active";
}