import { Component } from "react";
import './Counter.css'

class Counter extends Component {
    state = {count:0}
    onIncrement = () => {
        this.setState(previousState => ({
            count:previousState.count+1
        }))
    }
    render() {
        const {count} = this.state
        return (
            <div className="Count-Page">
                <div>
                    <h1>The Button has been clicked <span>{count}</span> times.</h1>
                    <p>Click the button to increase the count!</p>
                    <button onClick={this.onIncrement}>Click</button>
                </div>
            </div>
        )
    }
}

export default Counter