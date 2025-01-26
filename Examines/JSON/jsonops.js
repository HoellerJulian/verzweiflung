function strToJson(text) {

    const obj = JSON.parse(text);
}

function FetchRemotejson() {

fetch("https://raw.githubusercontent.com/Lemmings19/dnd-racial-slurs/refs/heads/master/dnd-racial-slurs.json").then(
    response => response.text()).then(
    (data) => {return JSON.parse(data)}).then(
    (parsed) => {console.log(parsed[0])})

}


async function JSONOperations() {

    const example = {
        "name": "testname",
        "array": [
            { "p1": 1, "p2": 2.6 },
            { "p1": false, "p2": "Completed" }
        ]
    };

    Promise.resolve().then(
        () => { console.log(JSON.stringify(example)); }).then(
            () => { example.array[0].p1 = 200; }).then(
        () => { console.log(example); })
    


}

//JSONOperations();

function FuckYouCallstack() {
    Promise.resolve().then(
        () => { console.log("A"); }).then(
        () => { console.log("B"); }).then(
        () => { console.log("C"); }).finally(
        () => { console.log("D"); }).catch((error) => 
        {console.log("Error in")}
       )
}

FuckYouCallstack();
FetchRemotejson();