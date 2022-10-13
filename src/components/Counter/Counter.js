import { Component } from "react";
import './Counter.css'

class Counter extends Component {
    state = {count:0}
    
    onIncrement = () => {
        this.setState(previousState => ({
            count:previousState.count+1
        }))
    }
    onDecrement = () => {
        this.setState(previousState => ({
            count:previousState.count-1
        }))
    }
    render() {
        const {count} = this.state
        return (
            <div className="Count-Page">
                <div>
                    <h1 className="heading">The Button has been clicked <span className="count">{count}</span> times.</h1>
                    <p className="para">Click the button to increase the count!</p>
                    <div className="btn-container">
                        <button className="btn-1" onClick={this.onIncrement}>Increase</button>
                        <button className="btn-2" onClick={this.onDecrement}>Decrease</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter