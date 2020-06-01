import React from 'react';

export default class AddOption extends React.Component {
    state = {
        errorMessage: undefined
    };

    addOption = (e) => {
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
                {this.state.errorMessage && <p className="empty-option">{this.state.errorMessage}</p>}
                <form className="add-new-option" onSubmit={this.addOption}>
                    <input className="add-new-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}