var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(input){
    return serverURL + "?" +"text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! Try again after sometime")
}



function clickHandler(){
    var input = txtInput.value; // taking input

    fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)
