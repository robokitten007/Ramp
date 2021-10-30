import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import Simple from './simple'

//below are example inputs:

// const input = ['this', 'is', 'array']
// const input = 'we are going to the market!'
const input = ''

const Root = (props) =>{
    return (
        <div>
            {!props.input ? ( <Clock />)
            : (<Simple input ={props.input}/>)
          
            }
        </div>
    )
}

document.addEventListener('DOMContentLoaded', ()=>{

    const root = document.getElementById('root')
    ReactDOM.render(<Root input={input}/>, root)
})