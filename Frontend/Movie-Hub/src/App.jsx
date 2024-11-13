import './App.css'
import AddData from './components/AddData.jsx'
import DisplayData from './components/Displaydata.jsx'

function App() {
  return (
    <div className="app-container">
      <div className="add-data-container">
        <AddData />
      </div>
      <div className="display-data-container">
        <DisplayData />
      </div>
    </div>
  )
}

export default App
