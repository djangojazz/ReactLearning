import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import HouseList from './components/HouseList'
import House from './components/House';

function App() {
  const [ selectedHouse, setSelectedHouse ] = useState();

  return (
    <>
      <Banner>Providing houses all over the world</Banner>
      <Suspense fallback={<h3>Loading...</h3>}>
        {selectedHouse 
          ? <House house={selectedHouse} /> 
          : <HouseList selectHouse={setSelectedHouse}/>}
      </Suspense>
    </>
  )
}

export default App
