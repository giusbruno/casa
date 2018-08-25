import React from 'react';

import fire from './fire';
import './aggiungi.css';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
 

    return (
      <div className="backdrope">
        <div className="modale">
          <input className="inp"/>
         
          <div className="footer">
            <button onClick={this.props.onClose}>
              Chiudi
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;