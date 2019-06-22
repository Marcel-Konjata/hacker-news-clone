import React, { Component } from 'react'

export class Loading extends Component {
    state = {display: 'Loading', animationValue:null}

    componentDidMount( ){
        this.interval = setInterval(()=>{
            if(this.state.display === 'Loading...'){
                this.setState({display:'Loading'})
            }
            else{
                this.setState(prevstate=>{
                    const newValue = prevstate.display + '.';
                    return {display: newValue}
                })
            }
        },200)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <div style={{textAlign:'center', fontSize:30}}>
                <p>{this.state.display}</p>
            </div>
        )
    }
}

export default Loading
