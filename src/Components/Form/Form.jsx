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
                <input type="radio" name="mf" />
                <label>Masculino</label>
                <input type="radio" name="mf" />
                <label>Feminino</label>
            </section>
            <button>Enviar</button>
        </div>
    )
}

export default Form