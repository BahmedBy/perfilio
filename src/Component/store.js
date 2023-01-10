import {configureStore, createSlice} from '@reduxjs/toolkit'
const initTheme=()=>{

    if (localStorage.getItem('theme')!==undefined)
    {
        document.documentElement.setAttribute('data-theme',localStorage.getItem('theme'))
        return localStorage.getItem('theme')}


    return 'light'
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
        setTheme:(state, action)=>{
            console.log(action.payload)
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