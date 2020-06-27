import React from 'react';
import './styles.sass';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {CssBaseline, Button, Snackbar} from '@material-ui/core'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { createBrowserHistory } from 'history'
import loadable from '@loadable/component'


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Work Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#00A4DD'
    },
    secondary: {
      main: '#FF8600'
    }
  },
  shape: {
    borderRadius: 4
  }
})

const appBarHeight = 65

const Home = loadable(() => import('./Pages/Home/Home'))
const About = loadable(() => import('./Pages/About/About'))
const Contacts = loadable(() => import('./Pages/Contacts/Contacts'))
const JoinUs = loadable(() => import('./Pages/JoinUs/JoinUs'))
const Estatutos = loadable(() => import('./Pages/Estatutos/Estatutos'))
const Relatorios = loadable(() => import('./Pages/Relatorios/Relatorios'))
const Orgaos = loadable(() => import('./Pages/Orgaos/Orgaos'))
const Parcerias = loadable(() => import('./Pages/Parcerias/Parcerias'))
const Servicos = loadable(() => import('./Pages/Servicos/Servicos'))
const Donativo = loadable(() => import('./Pages/Donativo/Donativo'))

const App = () => {

  const history = React.useMemo(() => {
    return createBrowserHistory()
  }, [])

  
  React.useEffect(() => {
    return history.listen(()=>{
      window.scrollTo(0,0)
    })  
  }, [ history])
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter history={history}>
            <Nav height={appBarHeight}/>
            <main style={{marginTop: appBarHeight}}>
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/info" exact component={About} />
                <Route path="/contactos" exact component={Contacts} />
                <Route path="/associado" exact component={JoinUs} />
                <Route path="/estatutos" exact component={Estatutos} />
                <Route path="/relatorios" exact component={Relatorios} />
                <Route path="/organizacao" exact component={Orgaos} />
                <Route path="/parcerias" exact component={Parcerias} />
                <Route path="/servicos" exact component={Servicos} />
                <Route path="/donativo" exact component={Donativo} />


                <Route path="/*" render={() => <Redirect to="/home" />} />
              </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    
        <Snackbar
          key="cookie-banner"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open= {false}
          autoHideDuration={null}
          message="Este website utiliza cookies para analizar a performance e visitas do site."
          action={
            <Button
              color="secondary"
              size="small"
              >
              Aceitar
            </Button>
          } />
      </ThemeProvider>
  );
}

export default App;
