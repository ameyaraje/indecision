import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button className="big-button" onClick={props.handlePickOption} disabled={!props.hasOptions}>
                What do I do?
            </button>
        </div>
    );
};

export default Action;