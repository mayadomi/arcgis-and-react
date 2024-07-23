import { useState } from 'react'
import { MapComponent } from './components/mapView/mapView'
import TableComponent from './components/tableView/tableView'
import './App.css'

function App() {
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  return (
    <>
      <div className='App'>
        <MapComponent selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>
        <TableComponent selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      </div>
    </>
  )
}


export default App
