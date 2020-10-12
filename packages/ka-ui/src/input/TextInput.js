import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useData } from 'ka-core';
import get from 'lodash.get';

const TextInput = ({ source, label, help, defaultValue = '' }) => {
  const [value, setValue] = useState('');
  const { data } = useData();
  useEffect(() => {
    setValue(get(data, source, defaultValue));
  }, [data, source, defaultValue]);

  const onChange = (e) => setValue(e.target.value);
  return (
    <div className="form-group">
      <label htmlFor={source}>{label}</label>
      <input
        type="text"
        className="form-control"
        id={source}
        name={source}
        value={value}
        onChange={onChange}
      />
      {help && (
        <small id={`help-${source}`} className="form-text text-muted">
          {help}
        </small>
      )}
    </div>
  );
};

TextInput.propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  help: PropTypes.string,
  defaultValue: PropTypes.string,
};

TextInput.defaultProps = {
  help: null,
  defaultValue: '',
};

export default TextInput;
