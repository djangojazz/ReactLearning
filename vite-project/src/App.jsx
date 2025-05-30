import { Suspense, useCallback, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import ErrorBoundary from './components/ErrorBoundary';
import navValues from './helpers/navValues';
import navigationContext from './helpers/navigationContext';
import ComponentPicker from './components/ComponentPicker';
import { BrowserRouter, Route, Routes } from 'react-router';
import HouseList from './components/HouseList';
import House from './components/House';

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate}), 
    []
  );

  const [ nav, setNav ] = useState({ current: navValues.home, navigate} );
  return (
    // <navigationContext.Provider value={nav}>
    // <ErrorBoundary fallback="Something went wrong">
    //   <Banner>
    //     <div>Providing houses all over the world</div>
        
    //     </Banner>
    //   <Suspense fallback={<h3>Loading...</h3>}>
    //     <ComponentPicker currentNavLocation={nav.current} />
    //   </Suspense>
    // </ErrorBoundary>
    // </navigationContext.Provider>

    <BrowserRouter>
      <Banner>
        <div>Providing houses all over the world</div>
        </Banner>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route index element={<HouseList />} />
          <Route path="house" element={<House />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
