import React, {useState} from 'react'

function Search({getQuery}) {
    const [texts, setTexts] = useState('') 
    const onChange =(q)=>{
        setTexts(q);
        getQuery(q)
    }
    return (
        <section className="search">
            <input 
             className="form-control" 
             type="text"
             placeholder="Seatch character" 
             value={texts}
             onChange={(e) => onChange(e.target.value)}
             autoFocus
             />
        </section>
    )
}

export default Search
