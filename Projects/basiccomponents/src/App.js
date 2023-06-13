import { useState } from 'react';
import Dropdown from './components/Dropdown';


function App() {
  const [selected, SetSelected] = useState({ label: "Select..." })
  const option = [
    { label: "mild taste", value: "mild" },
    { label: "Spicy Taste", value: "Spicy" },
    { label: "Very spicy taste", value: "very Spicy" },
  ]
  return (
    <>
      <Dropdown options={option} selected={selected} SetSelected={SetSelected} />
    </>

  )
}

export default App;
