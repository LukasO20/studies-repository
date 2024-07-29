import React from 'react'
import ReactDOM from 'react-dom'

/* Tipos de funções criadas com React */

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import Multi, {BoaNoite } from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <Pai nome="Roberson" sobrenome="Silva Junior">
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Juana" sobrenome="Silva"/>
        </Pai>
    </div>
)

//Obs: const element = <h1>Esse código parece HTML mas não é HEHEHEHE</h1>
