import React, { useState } from "react";
import { evaluate, sin, cos, tan, sqrt } from "mathjs";
import "./App.css";

const Calculadora = () => {
  const [expresion, setExpresion] = useState("");

  const agregarAExpresion = (valor) => {
    setExpresion((anterior) => anterior + valor);
  };

  const borrarExpresion = () => {
    setExpresion("");
  };

  const calcularResultado = () => {
    try {
      const resultado = evaluate(expresion);
      setExpresion(String(resultado));
    } catch {
      setExpresion("Error");
    }
  };

  const aplicarFuncionCientifica = (funcion) => {
    try {
      const valor = evaluate(expresion || "0");
      const funciones = {
        sin: sin(valor),
        cos: cos(valor),
        tan: tan(valor),
        sqrt: sqrt(valor),
      };
      setExpresion(String(funciones[funcion]));
    } catch {
      setExpresion("Error");
    }
  };

  return (
    <div className="calculadora">
      <h2>Calculator</h2>
      <h5>AlanLuna18011658</h5>
      <input type="text" value={expresion} readOnly />
      <div className="botones">
        {["1", "2", "3", "+"].map((v) => (
          <button key={v} onClick={() => agregarAExpresion(v)}>{v}</button>
        ))}
        {["4", "5", "6", "-"].map((v) => (
          <button key={v} onClick={() => agregarAExpresion(v)}>{v}</button>
        ))}
        {["7", "8", "9", "*"].map((v) => (
          <button key={v} onClick={() => agregarAExpresion(v)}>{v}</button>
        ))}
        <button onClick={() => agregarAExpresion("0")}>0</button>
        <button onClick={borrarExpresion}>C</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={() => agregarAExpresion("/")}>/</button>
        <button onClick={() => aplicarFuncionCientifica("sin")}>sen</button>
        <button onClick={() => aplicarFuncionCientifica("cos")}>cos</button>
        <button onClick={() => aplicarFuncionCientifica("tan")}>tan</button>
        <button onClick={() => aplicarFuncionCientifica("sqrt")}>√</button>
      </div>
    </div>
  );
};

export default Calculadora;
