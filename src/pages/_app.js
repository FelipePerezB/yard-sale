import '../styles/globals.css'
import AppContext from '../context/AppContext.js'
import useInitialState from '@hooks/useInitialState.js'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
    )
}

export default MyApp