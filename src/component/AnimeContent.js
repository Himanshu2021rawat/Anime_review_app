import React, { useState } from 'react'
import Anime from './Animeapi'
import Animedataget from './Animedataget';



const unqueList =[ 
      ...new Set(Anime.map((elm,index)=>{
      return elm.category
      
})
)
]

console.log(unqueList);
const AnimeContent = () => {

   



const [animedata , setAnimedata] = useState(Anime);


const filterItem = (category)=>{
  
  const updatedList = Anime.filter((elm)=>{
    return elm.category === category;
  });

  setAnimedata(updatedList);


}

  return (
  <>  

<div className="navbar">
        <button className="styled-button" onClick={()=>filterItem('Shonen')}  data-title="Action-packed anime with intense battles and themes of friendship and personal growth.">Shonen</button>
        <button className="styled-button" onClick={()=>filterItem('Shojo')} data-title='Romantic anime with a focus on love, relationships, and emotional storytelling.'>Shojo</button>
        <button className="styled-button" onClick={()=>filterItem('Seinen')} data-title=' Mature anime targeting adult males, exploring complex characters and realistic narratives.'>Seinen</button>
        <button className="styled-button" onClick={()=>filterItem('Josei')} data-title=' Anime for adult women, depicting the daily lives, relationships, and personal growth of female protagonists.'>Josei</button>
        <button className="styled-button" onClick={()=>filterItem('Isekai')} data-title='Anime featuring characters transported or reincarnated into a fantasy world, embarking on new adventures.'>Isekai</button>
        <button onClick={()=>setAnimedata(Anime)}>ALL</button>
    </div>

  <Animedataget animedata={ animedata}/>
    
  </>
  
  )
}

export default AnimeContent