import React from 'react'
import CharactersItem from './charactersItem'
import Spinner from '../ui/spiner'


function charactersGrid({items , isLoading}) {
     return (
       isLoading ? (
       <Spinner />
       ) : (
        <section className="cards">
           {items.map((item) => (
                <CharactersItem key={item.char_id} item={item}></CharactersItem>
           ))} 
       </section>
       ))
}

export default charactersGrid
