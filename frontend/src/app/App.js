import React from 'react'
import {Provider} from 'react-redux'
import store from '../store/store'
import FastifyApp from './FastifyApp'

const App = () => {
  return (
    <Provider store={store}>
      <FastifyApp/>
    </Provider>
  )
};

export default App