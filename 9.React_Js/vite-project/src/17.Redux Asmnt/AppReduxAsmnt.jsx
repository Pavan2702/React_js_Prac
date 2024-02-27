import React from 'react'
import { Provider } from 'react-redux'
import ContactForm from './Ui/ContactForm'
import { store } from '../16.Redux/Redux/App/store'

export default function AppReduxAsmnt() {
  return (
    <>
    
    <Provider store={store}>
        <ContactForm/>
    </Provider>
    </>
  )
}
