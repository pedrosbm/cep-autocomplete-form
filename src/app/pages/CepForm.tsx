'use client'
import { get } from "http";
import React from "react";
import { useState } from "react";

const CepForm = () => {

    type Endereco = {
        "cep": string,
        "logradouro": string,
        "complemento": string,
        "bairro": string,
        "localidade": string,
        "uf": string,
        "ibge": string,
        "gia": string,
        "ddd": string,
        "siafi": string
    }

    const [endereco, setEndereco] = useState<Endereco>({
        "cep": "",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "",
        "uf": "",
        "ibge": "",
        "gia": "",
        "ddd": "",
        "siafi": ""
    })

    const handleCep = async (e: any) => {
        const cep = e.target.value

        const endereco = await fetch(`http://viacep.com.br/ws/${cep}/json/`, {
            method: "GET",
        }).then(response => {
            return response.json()
        }).catch(e =>{
            console.error(e)
        })

        setEndereco(endereco)
    }

    const handleChange = (e : any) => {
        setEndereco({...endereco , [e.target.name]: e.target.value})
    }

    const handleAutoCompleteError = () => {

    }

    return (
        <>
            <form>
                <span className="error"></span>

                <div className="inputBox">
                    <label htmlFor="cep">Cep:</label><br />
                    <input onBlur={handleCep} onChange={handleChange} minLength={8} type="text" name="cep" id="cep" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="logradouro">Logradouro:</label><br />
                    <input value={endereco?.logradouro} onChange={handleChange} type="text" name="logradouro" id="logradouro" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="complemento">complemento:</label><br />
                    <input value={endereco?.complemento} onChange={handleChange} type="text" name="complemento" id="complemento" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="bairro">bairro:</label><br />
                    <input value={endereco?.bairro} onChange={handleChange} type="text" name="bairro" id="bairro" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="localidade">localidade:</label><br />
                    <input value={endereco?.localidade} onChange={handleChange} type="text" name="localidade" id="localidade" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="uf">uf:</label><br />
                    <input value={endereco?.uf} type="text" onChange={handleChange} name="uf" id="uf" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="ibge">ibge:</label><br />
                    <input value={endereco?.ibge} type="text" onChange={handleChange} name="ibge" id="ibge" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="gia">gia:</label><br />
                    <input value={endereco?.gia} type="text" onChange={handleChange} name="gia" id="gia" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="ddd">ddd:</label><br />
                    <input value={endereco?.ddd} type="text" onChange={handleChange} name="ddd" id="ddd" /><br />
                </div>

                <div className="inputBox">
                    <label htmlFor="siafi">siafi:</label><br />
                    <input value={endereco?.siafi} type="text" onChange={handleChange} name="siafi" id="siafi" /><br />
                </div>
            </form>
        </>
    )
}

export default CepForm