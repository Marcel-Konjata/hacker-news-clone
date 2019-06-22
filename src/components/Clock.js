import React, { Component } from 'react'

export class Clock extends Component {
    state = {
        time: null
    }
    componentDidMount(){
        this.clocktime = setInterval(()=>{
            const today = new Date();

            const seconds = today.getSeconds() < 10? '0'+ today.getSeconds() : today.getSeconds();
            const minutes = today.getMinutes() < 10? '0'+ today.getMinutes() : today.getMinutes();
            const hours = today.getHours() < 10? '0'+ today.getHours() : today.getHours();

            const getTime = `${hours}:${minutes}:${seconds}`;
            this.setState({time:getTime})
        },1000)
    }

    componentWillMount(){
        clearInterval(this.clocktime)
    }
    render() {
        return (
            <div className="clock">
                <time>{this.state.time}</time>
            </div>
        )
    }
}

export default Clock
