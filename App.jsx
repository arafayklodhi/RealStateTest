import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './src/navigation/stack.navigator'
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import TobBar from './src/navigation/TobBar'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={() => { }}>
        {/* <App /> */}
        <NavigationContainer>
          {/* <TobBar/> */}
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})