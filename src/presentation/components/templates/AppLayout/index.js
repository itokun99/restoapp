import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import PropTypes from 'prop-types';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const AppLayout = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
AppLayout.defaultProps = {
  children: null,
};

export default AppLayout;
