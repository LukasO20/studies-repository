import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default x => 
    <div>
        <h1>{x.nome} {x.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(x)}
        </ul>
    </div>