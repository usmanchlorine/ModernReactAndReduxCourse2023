import { createContext, useState } from 'react'; // creating a context and use state 

const BooksContext = createContext(); // creating a context

function Provider({ children }) {    ///create a provider that provides a count of books 
  const [count, setCount] = useState(5);

  const valueToShare = {  // an object that will be share across all components
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
