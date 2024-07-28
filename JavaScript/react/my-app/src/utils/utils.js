import React from 'react'

export function childrenWithProps(x) {
    return React.Children.map(x.children, child => {
        return React.cloneElement(child,  {
            ...x, ...child.x
        })  
    })
}