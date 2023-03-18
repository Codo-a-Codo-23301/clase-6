///////////////////////////////
/// Importar funciones o clases
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";


/////////////////////////////////////////////
//// datos
import  buttonsData from "./../data/buttons.js";
import inputsData from "../data/inputs.js";
///////////////////////////////////////////


//////////////////////////////////////////////
// Funciones
//////////////////////////////////////////
function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
    }

    let myInput = new Input("app", input_type);
    myInput.render();
}
///////////////////////////
////////////////////////////////////
////////////////////////////////////
// Logica de App
buttonsData.forEach(element => {
    RenderButton(element)
});

inputsData.forEach(function (element) {
    RenderInput(element);
});

let myVideo= new Video("app","https://www.w3schools.com/html/mov_bbb.ogg",540,405)
myVideo.render()