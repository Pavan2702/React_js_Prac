import React from 'react'
import { Provider } from "react-redux"
import { store } from './Redux/App/store'
import Counter from './Ui/Counter'
import Data from './Ui/Data'

export default function AppRedux() {
    return (
        <>
            <Provider store={store}>
                {/* <Counter /> */}
                <Data/>
            </Provider>
        </>
    )
}
