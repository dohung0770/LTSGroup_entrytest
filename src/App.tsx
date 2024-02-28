import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
const Todos = lazy(() => import('@/pages/Todos'))

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<p>Loading...</p>}>
          <Todos />
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App
