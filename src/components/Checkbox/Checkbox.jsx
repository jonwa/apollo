import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Checkbox.css';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  value: undefined,
};

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      const { currentTarget } = e;
      this.props.onChange(currentTarget.checked);
    }
  }

  render() {
    const {
      ...other
    } = this.props;

    return (
      <div className={styles.checkbox}>
        <input
          {...other}
          onChange={this.handleChange}
          type="checkbox"
        />
        <span className={styles.checkmark} />
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
