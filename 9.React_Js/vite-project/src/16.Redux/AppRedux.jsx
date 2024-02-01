import React from 'react'
import { Provider } from "react-redux"
import { store } from './Redux/App/store'
import Counter from './Ui/Print'

export default function AppRedux() {
    return (
        <>
            <Provider store={store}>
                <Counter />
            </Provider>
        </>
    )
}
