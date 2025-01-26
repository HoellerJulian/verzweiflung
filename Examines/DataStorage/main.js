/*alert(document.getElementById("1").innerHTML)
alert(document.getElementsByClassName("2")[0].innerHTML)
alert(document.getElementsByTagName("div")[0].innerHTML)

alert(document.querySelector("div").innerHTML)

node = document.getElementsByTagName("body")[0]
child = document.createElement("a")
child.innerHTML = "link"
node.appendChild(child)

document.getElementsByTagName("a")[0].setAttribute("href","http://192.168.0.1")

highlightedItems = document.querySelectorAll("div")

highlightedItems.forEach((userItem) => {
    userItem.innerHTML = "Funky"
  });
*/
// JS AJAX


/*
document.getElementById("1").addEventListener("click", () => {
    //alert("ting!")
})

document.getElementById("2").addEventListener("mouseenter", () => {
    //alert("ting!")
})

//document.getElementById("2").addEventListener("wheel", () => {
  //  alert("ting!")
//})

document.getElementById("2").addEventListener("wheel",funky)

function funky(ev){
    var los_numeros = Math.random()
    los_numeros = los_numeros.toFixed(6) *1000000
    console.log(los_numeros)
    ev.target.style = "color:#"+los_numeros+";";
}

document.querySelector('#grandparent').addEventListener('click', function(event) {
    console.log('Capturing: Grandparent')
    }, true)
    */

    //WEB APIS



    window.onload = function(){

      const obj = document.getElementById("5")
      console.log(obj)

      obj.addEventListener("paste", (event) => {
        navigator.clipboard
        .readText()
        .then(
          (clipText) => (console.log(clipText)),
          console.log("trig")
        );
      });
    }



    document.querySelector("form").addEventListener("submit", (ev) => {
      ev.preventDefault()
      const valid = ev.target.querySelectorAll('input:valid')
      const invalid = ev.target.querySelectorAll('input:invalid')
      console.log("Invalid"+invalid[0].value)
      console.log("Valid"+valid[0].value)
    })


    


// Local Storage



function inStorage(){
  var val = document.getElementById("data")
  window.localStorage["key"] = val.value
  
}

function inStorageJSON(){
  const data = {
    name:"chernobog",
  class:"deity",
  region:"western-Europe"
}
  window.localStorage["key"] = JSON.stringify(data)
  
}


function outStorage(){
document.getElementById("field").innerHTML = localStorage.getItem("key")
}

function outStorageJSON(){
  data = JSON.parse(localStorage.getItem("key"))
  document.getElementById("field").innerHTML = "Name: "+data.name+" Class:"+data.class;
}

var connection = window.indexedDB.open('MyDB', 1)

var request = indexedDB.open("content", 1);
request.onsuccess = function(e) { console.log("onsuccess"); }

connection.onerror = function(ev) {
  console.error(ev.target.error)
  }

connection.onupgradeneeded = function(ev) {
  console.log("Succ-UN")
  const db = ev.target.result
  let objectStore
      // no database, needs to be created
      objectStore = db.createObjectStore("deities", { keyPath: "id" })
      objectStore.createIndex("name", "name", { unique: false })
      objectStore.createIndex("description", "description", { unique: false })
}


function inStorage1(){
  const connection2 = window.indexedDB.open('MyDB', 1)
  var val = document.getElementById("deities")
  connection2.onsuccess = function(ev) {
    const db = ev.target.result
    const transaction = db.transaction(["deities"], "readwrite")
    const objectStore = transaction.objectStore("deities")

    const items = [{ id: 1, name: "Chernobog", description: "Slavic Black God" },
    { id: 2, name: "Belobog", description: "Slavic White God" }]
    objectStore.add(items[0])
    objectStore.add(items[1])
  }
  
}
function outStorage1(){

  const connection3 = window.indexedDB.open('MyDB', 1)
  var id = document.getElementById("data1")
  connection3.onsuccess = function(ev) {
    const db = ev.target.result
    const transaction = db.transaction(["deities"], "readwrite")
    const objectStore = transaction.objectStore("deities")
    const getRequest = objectStore.get(Number(id.value))

    getRequest.onsuccess = function () {
      console.log(getRequest.result)
      document.getElementById("field1").innerHTML = getRequest.result.name
      }
    
  }



}




