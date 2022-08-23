import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div>
            <section className='divForm'>
                <label>Seu Nome:</label>
                <input type="text" />
                <label>Email:</label>
                <input type="email" />
                <label>CPF:</label>
                <input type="text" />
                <div className='divRadio'>
                    <input type="radio" name="mf" />
                    <label>Masculino</label>
                    <input type="radio" name="mf" />
                    <label>Feminino</label>
                </div>
            </section>
            <button className='btn'>Enviar</button>
        </div>
    )
}

export default Form