import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const element = document.getElementById('Animals')

  const randomAnimal = () => {
    const animalslist = ['dog', 'cat', 'donkey']
    return animalslist[Math.floor(Math.random() * animalslist.length)]
  }
  const Animal = (props) => {
    return (
      <>
        <p>{props.type}</p>
      </>
    )
  }

  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setCount(count + 1)
    setAnimals(animals.concat(<Animal type={randomAnimal()} />))

  }
  return (
    <div className="App">
      <h1>Animals</h1>
      <span style={{ display: 'flex ', gap: 5 }}>
        <button onClick={handleClick}>Add animals</button>
        <p>{count}animals are counted </p>
      </span>
      <div id='Animals' style={{ display: 'flex', gap: 5 }}>
        {
          animals.map(animal => animal)
        }


      </div>


    </div>
  );
}

export default App;
