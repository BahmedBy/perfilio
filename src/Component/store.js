import {configureStore, createSlice} from '@reduxjs/toolkit'
const initTheme=()=>{
    if (localStorage.key('theme')!==undefined)
        return localStorage.key('theme')
    return window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark':'light'
}
const initialState = {
    val: initTheme(),
}

export const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state) => {
            console.log("ok")
            let theme
            if (state.val==='dark')
                theme='light'
            else
                theme='dark'
            state.val=theme
            localStorage.setItem('theme',theme)
            document.documentElement.setAttribute('data-theme',theme)

        },

    },
})
export const store = configureStore({
    reducer: {
        theme: theme.reducer,
    },
})
export const{switchTheme}=theme.actions