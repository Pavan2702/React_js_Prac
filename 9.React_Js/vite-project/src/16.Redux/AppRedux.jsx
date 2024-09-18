import React from 'react'
import { Provider } from "react-redux"
import { store } from './Redux/App/store'
import Data from './Ui/Data'
import APIData from './Ui/APIData'
import Router from './Router/Router'

export default function AppRedux() {
    return (
        <>
            <Provider store={store}>
                {/* <Data/> */}
                <Router/>
            </Provider>
        </>
    )
}
