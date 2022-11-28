import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './InputsCadastro.css';
import React from 'react';

export const InputsCadastro = (props) => {

    const placeholderModificada = `${props.placeholder}...`

/*     let valor = 'sera';  no react tem q usar um HOOK*/


/*     const [valor, setValor] = useState('')  */// hook onde passamos o valor e o set dele ao useState

    const aoDigitar = (evento) =>{
        /* setValor(evento.target.value)
        console.log(valor) */
        props.aoAlterar(evento.target.value)
    }
    
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>{/* 
            <input placeholder={'Digite o seu' + ' ' + props.label}/> */}
            <input
            value={props.valor}
            onChange={aoDigitar}
            required={props.obrigatorio}
             placeholder={placeholderModificada} />
        </div>
    )

}




