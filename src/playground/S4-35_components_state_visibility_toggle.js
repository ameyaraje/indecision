class VisibilityToggleApp extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            flag: 0
        };

        this.toggleVisbility = this.toggleVisbility.bind(this);
    }

    toggleVisbility() {
        // console.log(this.state);

        this.setState((prevState) => {
            return {
                flag: !prevState.flag
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisbility}>{!this.state.flag ? "Show Details" : "Hide Details"}</button>
                <p>
                    {this.state.flag ? "Here are the details" : ""}
                </p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggleApp />, document.getElementById('app'));