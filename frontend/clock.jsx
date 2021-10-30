import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            time: new Date()
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount(){
        this.intervalID = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }


    tick(){
        this.setState({time: new Date()})
    }


    render(){
        let hour = this.state.time.getHours()
        let minute = this.state.time.getMinutes();
        let second = this.state.time.getSeconds();
        return (
            <div className="clock">
                <h1>CLOCK</h1>
                <div className = 'tick'>
                    <p className='time'>
                        <span>Time:</span>
                        <span>{hour} : {minute} : {second} </span>
                    </p>
                    <p className='date'>
                        <span>Date:</span>
                    <span>{this.state.time.toDateString()}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Clock;