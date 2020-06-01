class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.removeOne = this.removeOne.bind(this) ;
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const valString = localStorage.getItem('count');
            const value = parseInt(valString, 10);

            if (!isNaN(value)) {
                this.setState(() => {
                    return {
                        count: value
                    };
                });
            }

        } catch(e) {

        }
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.count !== this.state.count) {
            const jsonCount = this.state.count;
            localStorage.setItem('count', jsonCount);
        }
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

ReactDOM.render(<Counter />, document.getElementById('app'));