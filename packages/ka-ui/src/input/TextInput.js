import React, { useState, useEffect } from 'react';
import get from 'lodash.get';

const TextInput = ({
  record,
  source,
  label,
  help,
  defaultValue = '',
  ...rest
}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(get(record, source, defaultValue));
  }, [record, source, defaultValue]);

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
        {...rest}
      />
      {help && (
        <small id={`help-${source}`} class="form-text text-muted">
          {help}
        </small>
      )}
    </div>
  );
};

export default TextInput;
