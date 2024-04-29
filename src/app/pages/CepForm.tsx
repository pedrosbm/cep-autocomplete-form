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
                    <input placeholder="00000000" onBlur={handleCep} onChange={handleChange} minLength={8} type="text" name="cep" id="cep" />
                </div>

                <span style={{ color: "#e00404" }} id="notFoundField">{notFound == true ? "Endereço não encontrado, verifique o cep" : ""}</span>

                <div className="inputBox">
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input placeholder="Rua Exemplo" value={endereco?.logradouro} onChange={handleChange} type="text" name="logradouro" id="logradouro" />
                </div>

                <div className="inputBox">
                    <label htmlFor="complemento">Complemento:</label>
                    <input placeholder="Bloco A" value={endereco?.complemento} onChange={handleChange} type="text" name="complemento" id="complemento" />
                </div>

                <div className="inputBox">
                    <label htmlFor="bairro">Bairro:</label>
                    <input placeholder="Jd. Exemplo" value={endereco?.bairro} onChange={handleChange} type="text" name="bairro" id="bairro" />
                </div>

                <div className="inputBox">
                    <label htmlFor="localidade">Localidade:</label>
                    <input placeholder="Cidade Exemplo" value={endereco?.localidade} onChange={handleChange} type="text" name="localidade" id="localidade" />
                </div>

                <div className="inputBox">
                    <label htmlFor="uf">Uf:</label>
                    <input placeholder="Ex" value={endereco?.uf} type="text" onChange={handleChange} name="uf" id="uf" />
                </div>

                <div className="inputBox">
                    <label htmlFor="ibge">Ibge:</label>
                    <input placeholder="0000000" value={endereco?.ibge} type="text" onChange={handleChange} name="ibge" id="ibge" />
                </div>

                <div className="inputBox">
                    <label htmlFor="gia">Gia:</label>
                    <input placeholder="0000" value={endereco?.gia} type="text" onChange={handleChange} name="gia" id="gia" />
                </div>

                <div className="inputBox">
                    <label htmlFor="ddd">DDD:</label>
                    <input placeholder="00" value={endereco?.ddd} type="text" onChange={handleChange} name="ddd" id="ddd" />
                </div>

                <div className="inputBox">
                    <label htmlFor="siafi">Siafi:</label>
                    <input placeholder="0000" value={endereco?.siafi} type="text" onChange={handleChange} name="siafi" id="siafi" />
                </div>

                <button className="submit">Enviar</button>
            </form>

        </section>
    )
}

export default CepForm