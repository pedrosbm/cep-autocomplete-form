'use client'
import { get } from "http";
import React from "react";
import { useState } from "react";
import { Endereco } from "../types/Endereco";

import "../style/formulario.css"

const CepForm = () => {

    const [endereco, setEndereco] = useState<Endereco>({})
    const [notFound, setNotFound] = useState<boolean>(false)

    const handleCep = async (e: any) => {
        const cep = e.target.value

        const endereco = await fetch(`http://viacep.com.br/ws/${cep}/json/`, {
            method: "GET",
        }).then(response => {
            return response.json()
        }).then(json => {
            if (json.erro == true) {
                setNotFound(true)
            } else {
                setNotFound(false)
                return json
            }
        }).catch(e => {
            console.error(e)
        })

        setEndereco(endereco)
    }

    const handleChange = (e: any) => {
        setEndereco({ ...endereco, [e.target.name]: e.target.value })
    }

    return (
        <section>
            <form onSubmit={e => {e.preventDefault()}}>
                <div className="inputBox">
                    <label htmlFor="cep">Cep:</label>
                    <input placeholder="bruh" onBlur={handleCep} onChange={handleChange} minLength={8} type="text" name="cep" id="cep" />
                </div>

                <span style={{ color: "#e00404" }} id="notFoundField">{notFound == true ? "Endereço não encontrado, verifique o cep" : ""}</span>

                <div className="inputBox">
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input placeholder="bruh" value={endereco?.logradouro} onChange={handleChange} type="text" name="logradouro" id="logradouro" />
                </div>

                <div className="inputBox">
                    <label htmlFor="complemento">complemento:</label>
                    <input placeholder="bruh" value={endereco?.complemento} onChange={handleChange} type="text" name="complemento" id="complemento" />
                </div>

                <div className="inputBox">
                    <label htmlFor="bairro">bairro:</label>
                    <input placeholder="bruh" value={endereco?.bairro} onChange={handleChange} type="text" name="bairro" id="bairro" />
                </div>

                <div className="inputBox">
                    <label htmlFor="localidade">localidade:</label>
                    <input placeholder="bruh" value={endereco?.localidade} onChange={handleChange} type="text" name="localidade" id="localidade" />
                </div>

                <div className="inputBox">
                    <label htmlFor="uf">uf:</label>
                    <input placeholder="bruh" value={endereco?.uf} type="text" onChange={handleChange} name="uf" id="uf" />
                </div>

                <div className="inputBox">
                    <label htmlFor="ibge">ibge:</label>
                    <input placeholder="bruh" value={endereco?.ibge} type="text" onChange={handleChange} name="ibge" id="ibge" />
                </div>

                <div className="inputBox">
                    <label htmlFor="gia">gia:</label>
                    <input placeholder="bruh" value={endereco?.gia} type="text" onChange={handleChange} name="gia" id="gia" />
                </div>

                <div className="inputBox">
                    <label htmlFor="ddd">ddd:</label>
                    <input placeholder="bruh" value={endereco?.ddd} type="text" onChange={handleChange} name="ddd" id="ddd" />
                </div>

                <div className="inputBox">
                    <label htmlFor="siafi">siafi:</label>
                    <input placeholder="bruh" value={endereco?.siafi} type="text" onChange={handleChange} name="siafi" id="siafi" />
                </div>

                <button className="submit">Enviar</button>
            </form>

        </section>
    )
}

export default CepForm