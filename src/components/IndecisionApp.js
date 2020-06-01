import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleAddOption = (option) => {

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
    };

    handlePickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        this.setState(() => {
            return {
                selectedOption: option
            };
        });

    };

    clearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        });
    };

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
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    componentWillUnmount() {}

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'; 
    
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
                </div>
            </div>
        );
    };
}

export default IndecisionApp;