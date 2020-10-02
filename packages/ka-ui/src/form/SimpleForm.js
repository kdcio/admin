import React, { cloneElement } from 'react';
import { useEditContext } from 'ka-core';
import { SaveButton, CancelButton } from '../button';

const SimpleForm = (props) => {
  const { record = {} } = useEditContext();
  const { children = [] } = props;

  return (
    <form>
      {children.map((child, idx) => cloneElement(child, { record, key: idx }))}
      <div className="form-actions">
        <SaveButton className="mr-2" />
        <CancelButton />
      </div>
    </form>
  );
};

export default SimpleForm;
