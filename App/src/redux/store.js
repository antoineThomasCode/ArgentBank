import {createStore} from 'redux'

const initialState = {
    email: null,
    token: null,
    firstName: null, 
    lastName: null,
    isConnected: false
}

const setEmail = () =>  ({type : 'setEmail'})
const setToken = () =>  ({type : 'setToken'})
const setFirstName = () =>  ({type : 'setFirstName'})
const setLastName = () =>  ({type : 'setLastName'})

function reducer (state, action) {
    if (action.type === 'setEmail') {
        return  {
            ...state,
            email : 'newEmail@email.com'
        }
    }
    return state
}

const store = createStore(reducer, initialState)

export {store, initialState, setEmail, setToken, setFirstName, setLastName}

