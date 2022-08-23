import React from 'react'
import './Produto.css'

const Produto = ({ fotoPrd, nome, sobre, preco1, preco2, xParc, valParc }) => {
    return (
        <div className='card'>
            <img src={fotoPrd} alt="Imagem do produto" className='imagem' />
            <div>
                <h5 className='nome'>{nome}</h5>
                <h5 className='descricao'>{sobre}</h5>
                <h5 className='preco1'>De: {preco1}</h5>
                <h5 className='preco2'>Por: {preco2}</h5>
                <h5 className='valParc'>ou {xParc} de R${valParc}</h5>
            </div>
            <button className='btnComprar'>Comprar</button>
        </div>
    )
}

export default Produto