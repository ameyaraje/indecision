class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.removeOne = this.removeOne.bind(this) ;
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            count: props.count
        };
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            };
            
        });
    }

    removeOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }

    resetCounter() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.removeOne}>-1</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 10
};

ReactDOM.render(<Counter />, document.getElementById('app'));