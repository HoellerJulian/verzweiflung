function addBasicListeners(){
    document.getElementById("testelem").addEventListener(click,doodad)//click
    document.getElementById("testelem").addEventListener(dbclick,doodad)//doubleclick
    document.getElementById("testelem").addEventListener(mouseover,doodad)
    document.getElementById("testelem").addEventListener(mouseout,doodad)
    document.getElementById("testelem").addEventListener(mouseenter,doodad)//nobubble
    document.getElementById("testelem").addEventListener(mouseleave,doodad)//nobubble
    document.getElementById("testelem").addEventListener(mouseup,doodad)//mouse release
    // dragstart drag dragend dragenter dragover dragleave drop
    //resize scroll load (elem loaded)
}

function doodad(){
    
};

function scripty(event){
    
    console.log(document.getElementById("fname").value)
    console.log(document.getElementById("lname").value)

    if(document.getElementById("fname").value == "admin" && document.getElementById("lname").value == "admin"){
        event.preventDefault();
    }
    //more funsies
    var div = "<h3>When does the Black Moon Howl?<h3/> <form id=\"blackmoon-form\"> <input type=\"text\" id=\"blackmoon-field\" name=\"ANSWER\"> <input type=\"submit\"> </form>"
    blackmoon = document.getElementById("blackmoon")
    console.log(blackmoon)
    blackmoon.innerHTML = div;
    console.log(blackmoon.innerHTML)
    document.getElementById("blackmoon-form").addEventListener("submit", function(event){
        event.preventDefault();
        if(document.getElementById("blackmoon-field").value == "At Midnight, when the Wolves fear the Sheep"){
            blackmoon.innerHTML = "<h1>Welcome, Administrator<h1/>";
        }
    }); 
}

window.onload = function() {
    //document.getElementById("formy").addEventListener("submit", (event) => {});
    document.getElementById("formy").addEventListener("submit", scripty); 
};

//alt


document.addEventListener('DOMContentLoaded', function() {});

// form submit
