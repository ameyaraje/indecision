class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
            // ['First Option', 'Second Option', 'Third Option', 'Fourth Option', 'Fifth Option']
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => {
                    return {
                        options: options
                    };
                });
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {}

    
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleAddOption(option) {

        if (!option) 
            return 'Please enter a valid option';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists. Please enter a new option.'

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
        // console.log(option);
    }

    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);

    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'; 
    
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle &&<h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePickOption} disabled={!props.hasOptions}>
                What do I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>Remove</button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);

        this.state = {
            errorMessage: undefined
        }
    }

    addOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                errorMessage: error
            };
        });

        if (!error) {
            e.target.elements.option.value = '';
        }
        
    }

    render() {
        return (
            <div>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));