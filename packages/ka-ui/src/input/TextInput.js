import React, { useState, useEffect } from 'react';

const TextInput = ({ record, source, label, help, ...rest }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (record && record[source] !== undefined) {
      setValue(record[source]);
    }
  }, [record]);

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
