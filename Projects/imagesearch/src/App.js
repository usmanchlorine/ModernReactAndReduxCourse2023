import logo from './logo.svg';
import './App.css';
import searchapi from './components/api'
import { useState } from 'react'
import ImageList from './components/ImageList';
function App() {
  const [text, setText] = useState('');
  const [data, setdata] = useState([]);
  const handleEnter = async (e) => {
    if (e.key == "Enter") {
      const tempdata = await searchapi(text)
      setdata(tempdata)

    }

  }

  return (
    <div className="App">
      <h1>
        Image Search Text
      </h1>
      <input type='text' value={text} onKeyDown={handleEnter} onChange={(e) => setText(e.target.value)} />
      {
        data.length > 1 && <ImageList data={data} />
      }


    </div>
  );
}

export default App;
