import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

import Multi, {BoaNoite } from './componentes/Multiplos'

//const element = <h1>Esse código parece HTML mas não é HEHEHEHE</h1>
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="João"/>
    </div>
, document.getElementById('root'))