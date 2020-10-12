import PropTypes from 'prop-types';
import get from 'lodash.get';
import { useData } from 'ka-core';

const TextField = ({ source, defaultValue = '' }) => {
  const { data } = useData();
  return get(data, source, defaultValue);
};

TextField.propTypes = {
  source: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

TextField.defaultValue = {
  defaultValue: '',
};

export default TextField;
