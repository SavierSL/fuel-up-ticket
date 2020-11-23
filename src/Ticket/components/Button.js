import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.scss';
import ArrowIcon from '../../assets/images/arrowicon.svg';

const Button = ({ name }) => {
  return (
    <>
      <button type="button" className="button">
        {name}
        <span>
          <img src={ArrowIcon} alt="" />
        </span>
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
