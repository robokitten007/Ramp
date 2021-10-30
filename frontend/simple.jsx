import React from "react";


class Simple extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const input = this.props.input
        const isArray = Array.isArray(input)
        return (
            <div>
                {isArray ?
                <ul className='arr'>
                    {input.map((el, idx)=>(<div key={idx}>{el}</div>))}
                </ul>
                :
                <div className='other'>
                    {input}
                </div>
                }
            </div>    
        )
    }
}

export default Simple