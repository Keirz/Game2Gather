import './BotaoForm.css'

import React from 'react';

export const BotaoForm = (props) => {

    return(

        <button className='botao-criar'>
            {props.children}
        </button>
    )

    }