import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import { AuthProvider, useAuth } from './auth'

import './index.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

interface IAppContext {
  dark: boolean
  toggleDark?: () => void
}

const defaultState = {
  dark: true,
}

export const AppContext = React.createContext<IAppContext>(defaultState)

const App = () => {
  const [dark, setDark] = React.useState(defaultState.dark)
  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider>
          <RedwoodApolloProvider useAuth={useAuth}>
            <AppContext.Provider
              value={{
                dark,
                toggleDark,
              }}
            >
              <ThemeProvider theme={dark ? darkTheme : lightTheme}>
                <CssBaseline />
                <Routes />
              </ThemeProvider>
            </AppContext.Provider>
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
