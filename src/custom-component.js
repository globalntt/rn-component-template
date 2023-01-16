import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const CustomComponent = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default CustomComponent;

CustomComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
