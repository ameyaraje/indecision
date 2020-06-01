import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal className="modal" isOpen={!!props.selectedOption} contentLabel="Selected Option" onRequestClose={props.clearSelectedOption} closeTimeoutMS={200}>
            <h2 className="modal__title">Selected Option</h2>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.clearSelectedOption}>Okay</button>
        </Modal>
    );
};

export default OptionModal;