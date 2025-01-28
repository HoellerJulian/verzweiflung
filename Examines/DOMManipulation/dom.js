function loadFile(){
    fetch("https://raw.githubusercontent.com/Lemmings19/dnd-racial-slurs/refs/heads/master/dnd-racial-slurs.json").then(
    response => response.text()).then(
    (data) => {return JSON.parse(data)}).then(
        (parsed) => {parsed.forEach(element => {
            node = document.createTextNode(JSON.stringify(element)+"\r\n")
            document.getElementById("a").appendChild(node)
            document.getElementById("a").appendChild(document.createElement("hr"))
        });})


    //a = document.getElementById("a")

    //.forEach(x => console.log(x))
    //.then((parsed) => {console.log(parsed[0])})
}

window.onload = function(){
    file = loadFile();
    console.log(file)
}