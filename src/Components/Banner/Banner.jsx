import React from 'react'
import Button from '../Button/Button'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className='bannertxt'>
      <h4>Uma Seleção de Produtos</h4>
      <h1>Especial para você</h1>
      <h5>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h5>
      <Button />
    </div>
    </>
  )
}

export default Banner