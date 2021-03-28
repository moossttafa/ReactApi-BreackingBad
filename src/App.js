import React, {useState , useEffect} from 'react';
 import Header from "./component/ui/Header"
 import Characters from "./component/characters/charactersGrid"
import './App.css'
import Search from './component/ui/Search';
 
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  const fetchItems = async () => {
    try{
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const data = await response.json();
    //  console.log(data) 
      setItems(data )
      setIsLoading(false)
     }catch(erorr){
       console.log(erorr);
      }
    }
  useEffect(() => { 
    fetchItems()
  }, [query])
  return (  
    <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <Characters isLoading={isLoading} items={items} />
    </div>
    );
}

export default App;
