import KeyPad from "./Keypad"
import Display from "./Display"

import { useState } from "react";

export default function Calculator() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");


    /**
     * Va concatenando el valor pulsado a un string
     * @param {string|number} key 
     */
    function handleClick(key){
        setValue(value + (""+key));
    }

    /**
     * Limpia la calculadora
     */
    function handleClear(){
        setValue("");
        setResult("");
    }

    /**
     * Calcula el resultado de la operacion de forma muy pobre
     */
    function handleCalculate(){
        try {
            setResult(eval(value));
        } catch (error) {
            setResult("Syntax Error");
        }
    }

    return (
        <div className="card p-0" style={{ maxWidth: "500px" }}>
            <Display value={value} result={result}></Display>
            <KeyPad handleClick={handleClick} handleClear={handleClear} handleCalculate={handleCalculate}></KeyPad>
        </div>
    )
}