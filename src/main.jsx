import { createRoot } from 'react-dom/client'
import { StateProvider } from './Components/StateProvider/StateProvider'
import reducer, {initialState} from './Components/StateProvider/reducer'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
)
