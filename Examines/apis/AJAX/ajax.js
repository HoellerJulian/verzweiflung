function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText)
        //document.getElementById("demo").innerHTML = this.responseText;
        json = JSON.parse(this.responseText)
        document.getElementById("demo").innerHTML = json[0].title;
      }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/Lemmings19/dnd-racial-slurs/refs/heads/master/dnd-racial-slurs.json", true);
    xhttp.send();
  }

loadDoc();