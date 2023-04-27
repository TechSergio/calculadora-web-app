/* --------------------------- Variables globales --------------------------- */
window.addEventListener("load", function(event) {
    const display = document.querySelector("#display")
    const btns = document.querySelectorAll("button")
    console.log(display)
    console.log(btns)
    let operando = "X"
    /* ------------- Agregar funcion a cada boton de la calculadora ------------- */
    btns.forEach((btn => {
        btn.addEventListener("click", (e)=>{
            console.log(operando)
            if (e.target.id == "clear"){
                display.textContent= ""

            }else if (e.target.id =="delete"){
                //el -1, es para que guarde todo el string menos el ultimo elemento de la cadena.
                if (agregarOperador(display.innerText)){
                    operando = "X"
                }
                display.innerText = display.innerText.slice(0,-1)
            }else if (e.target.id =="percentage"){
                if (agregarOperador(display.innerText)) {
                    display.innerText += "%"
                    operando = "%"
                }
            }else if (e.target.id =="divider"){
                if (agregarOperador(display.innerText)) {
                    display.innerText += "/"
                    operando = "/"
                }
            }else if (e.target.id =="multiplier"){
                if (agregarOperador(display.innerText)) {
                    display.innerText += "*"
                    operando = "*"
                }
            }else if (e.target.id =="subtract"){
                if (agregarOperador(display.innerText)) {
                    display.innerText += "-"
                    operando = "-"
                }
            }else if (e.target.id =="sum"){
                if (agregarOperador(display.innerText)) {
                    display.innerText += "+"
                    operando = "+"
                }
            }else if (e.target.classList.contains("btn-number")){
                display.innerText += e.target.id
            }else if (display.innerText != "" && e.target.id == "equal"){
                if (agregarOperador(display.innerText) && operando!="X"){
                    
                    let valores = display.innerText.split(operando)
                    console.log(valores)
                    if (operando == "+"){
                        let res =sum(parseFloat(valores[0]),parseFloat(valores[1]))
                        console.log(res)
                        display.innerText = res.toString()
                    }
                    operando = "X"
                }
            }
        })
    }))
})

/* -------------------------------------------------------------------------- */
/*                                Funcion Sumar                               */
/* -------------------------------------------------------------------------- */
function sum(x,y){
    return(x+y)
}
/* -------------------------------------------------------------------------- */
/*                               Funcion Restar                               */
/* -------------------------------------------------------------------------- */
function subtract(x,y){
    return(x-y)
}
/* -------------------------------------------------------------------------- */
/*                             Funcion Multiplicar                            */
/* -------------------------------------------------------------------------- */
function product(x,y){
    return(x,y)
}
/* -------------------------------------------------------------------------- */
/*                               Funcion Dividir                              */
/* -------------------------------------------------------------------------- */
function divide(x,y){
    return (x/y)
}

/* -------------------------------------------------------------------------- */
/*                             Comprobar division                             */
/* -------------------------------------------------------------------------- */
function validateDivisor(x,y){
    if (y==0){
        return false
    }
    return true
}

/* -------------------------------------------------------------------------- */
/*                              Agregar Operador                              */
/* -------------------------------------------------------------------------- */
//Comprueba que en el display no se haya ingresado una operacion previamente 
function agregarOperador(cadena){
    if ( (cadena[cadena.length - 1] != "%") && ((cadena[cadena.length - 1] != "/")) && (cadena[cadena.length - 1] != "+") && (cadena[cadena.length - 1] != "-") && (cadena[cadena.length - 1] != ".") ) {
        return true
    }
    return false
}