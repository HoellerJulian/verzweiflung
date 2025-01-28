fetch("").then((res) => JSON.parse(res)).then((res2)=>{
    res.forEach(element => {
        eln = document.createElement("p")
        eln.innerHTML = element.text
        document.appendChild(eln)
    });
})

async function getty(){
    let a =await fetch("")
    a = JSON.parse(a)
}

