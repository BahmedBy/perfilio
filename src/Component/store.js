import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
    val: 'light',
}

export const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state) => {

            let theme
            if (state.val==='dark')
                theme='light'
            else
                theme='dark'
            state.val=theme
            localStorage.setItem('theme',theme)
            document.documentElement.setAttribute('data-theme',theme)

        },
        setTheme:(state, action)=>{
            state.val=action.payload
            localStorage.setItem('theme',action.payload)
            document.documentElement.setAttribute('data-theme',action.payload)
        }

    },
})
export const store = configureStore({
    reducer: {
        theme: theme.reducer,
    },
})
export const{switchTheme,setTheme}=theme.actions