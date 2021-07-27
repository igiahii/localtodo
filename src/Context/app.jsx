import React from 'react'

const todoscontext = React.createContext({
    todo:[],
    add : () => {} ,
    delete : () => {},
    edit : () => {},
    toggle : () =>{},
    key : {},
    item : {}

})      


export default todoscontext