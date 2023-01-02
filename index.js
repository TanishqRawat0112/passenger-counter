let count=0

let countEl=document.getElementById("counting")

let saveEl=document.getElementById("save-el")

console.log(saveEl)

function increment(){   
    count+=1
    document.getElementById("counting").innerText = count
}

function reSet(){
    count=0
    document.getElementById("counting").innerText = count
}

function show(){
    window.alert("The button was clicked "+ count +" times !!")
}


function save(){
    let showme=count + " - "
    saveEl.textContent+=showme
    countEl.textContent=0
    count=0
    console.log(count)
}
