function submity(event){
    var a = []
    a[0] = document.getElementById("a").value
    a[1] = document.getElementById("b").value
    a[2] = document.getElementById("c").value
    a[3] = document.getElementById("d").value
    a[4] = document.getElementById("e").value
    a[5] = document.getElementById("f").value
    a.forEach(x => console.log(x))
    console.log("debug")
}

function submity2(){
    var a = []
    a[0] = document.getElementById("a1").value
    a[1] = document.getElementById("b1").value
    a[2] = document.getElementById("c1").value
    a[3] = document.getElementById("d1").value
    a[4] = document.getElementById("e1").value
    a[5] = document.getElementById("f1").value
    a.forEach(x => console.log(x))
    console.log("debug")
}

function revaluate(){
    console.log("debug")
    var a = []
    a[0] = document.getElementById("a1").value
    a[1] = document.getElementById("b1").value
    a[2] = document.getElementById("c1").value
    a[3] = document.getElementById("d1").value
    a[4] = document.getElementById("e1").value
    a[5] = document.getElementById("f1").value
    a.forEach(x => console.log(x))
    var filtered = a.filter(x => x != "")
    var lengthy = filtered.length
    console.log(lengthy)
    document.getElementById("prog").innerHTML = "Progress: ["+(100/5)*lengthy+"%]"
}

function monitorProgressSetup(){
    document.getElementById("a1").addEventListener("click",revaluate)
    document.getElementById("b1").addEventListener("click",revaluate)
    document.getElementById("c1").addEventListener("click",revaluate)
    document.getElementById("d1").addEventListener("click",revaluate)
    document.getElementById("e1").addEventListener("click",revaluate)
    document.getElementById("f1").addEventListener("click",revaluate)
}

window.onload = function() {
    monitorProgressSetup();
  };