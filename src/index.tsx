import * as React from "react"
import { render } from "react-dom"
import {createStore, applyMiddleware, Store} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "./App"
import reducer from "./store/reducer"

import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"


const store: Store<RevisionState, RevisionAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


const rootElement = document.getElementById("root")
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
