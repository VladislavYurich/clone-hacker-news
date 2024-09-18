import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { createGlobalStyle, styled } from 'styled-components'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'


//Styles
const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
        background: #E5E4E2;
}

a {
    text-decoration: none;
    color: black;
}
`

export const Container = styled.div`
    max-width: 1440px;
    padding: 0 40px;
    margin: 0 auto;
`



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <Global />
            <App />
    </Provider>
  </StrictMode>,
)


