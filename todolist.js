let text = document.getElementById("text");
let save = document.getElementById("btnsave");
var list = document.getElementById("list");



function createItem() {
    var newButton = document.createElement("button");
    newButton.innerHTML = "Kaldir";
    
    var newItem = document.createElement("li");
    newItem.innerHTML = text.value;
    list.appendChild(newItem);
    list.appendChild(newButton);
    newButton.onclick = function(){
        list.removeChild(newItem);
        list.removeChild(newButton);
    }
    

    newButton.style.backgroundColor = "red";
    newButton.style.color = "white";
    newButton.style.border = "none";
    newButton.style.width = "100px";
    newButton.style.height = "30px";
    newButton.style.marginTop = "10px";
    newButton.style.marginLeft = "20px";
    newButton.style.cursor = "pointer";
}

function clear(){
    text.value = "";
}

save.onclick = function(){
    if(text.value !== ""){
        createItem();
        clear();
    }
    else{
        alert("Eksik giris yaptiniz!");
    }
}
