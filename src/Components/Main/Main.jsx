import React from 'react'
import Produto from '../Produto/Produto'
import ButtonMain from './ButtonMain'
import './Main.css'
import {useState} from 'react'
import {useEffect} from 'react'

const lista = []
const Main = () => {
    const [pg, setPg] = useState(1)
    const [produtos, setProdutos] = useState([])

    async function handleBusca() {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pg}`)
        const json = await response.json()
        lista.push(json.products)
        setProdutos(lista)
    }
    
    return (
        
    )
}

export default Main