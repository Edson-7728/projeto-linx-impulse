import React from 'react'
import Produto from '../Produto/Produto'
import './Main.css'
import { useState } from 'react'
import { useEffect } from 'react'

const lista = []
const Main = () => {
    const [pg, setPg] = useState(1)
    const [produtos, setProdutos] = useState([])

    async function handleBusca() {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pg}`)
        const json = await response.json()
        lista.push(json.products)
        setProdutos(lista)
        console.log(json);
    }

    useEffect(() => {
        handleBusca()
    }, [pg])

    return (
        <div>
            <div className='txtTop'>
                <h4>Sua seleção especial</h4>
            </div>
            <div>
                <div className='divGrupo'>
                    {produtos.map((quadro, index) => {
                        return (
                            <div className='divCx' key={index}>
                                {quadro.map((produtos) => {
                                    return (
                                        <Produto key={produtos.id} fotoPrd={produtos.image} nome={produtos.name} sobre={produtos.description} preco1={produtos.oldPrice} preco2={produtos.price} xParc={produtos.installments.count} valParc={produtos.installments.value} />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='divBtnMais'>
                <button className='btnMais' onClick={() => { setPg(pg + 1) }}>Ainda mais produtos aqui!</button>
            </div>
            <div className='txtBottom'>
                <h4>Compartilhe a novidade</h4>
            </div>
                <div className='divComp'>
                    <h5>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h5>
                    <div className='caixa'>
                        <div className='divNome'>
                            <label>Nome do seu amigo:</label>
                            <input type="text" />
                        </div>
                        <div className='divEmail'>
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                    </div>
                    <button>Enviar agora</button>
                </div>
        </div>
    )
}

export default Main