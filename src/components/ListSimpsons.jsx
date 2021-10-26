import React from "react";

 function ListSimpsons ({quotes}) {

    return (
       // quotes && ( 
            <div className="ListSimpsons">
                <img src={quotes.image}></img>
                <div> name :{quotes.character}</div>
                <div> quote :{quotes.quote}</div>
                <div> characterDirection :{quotes.characterDirection}</div>
            </div>
       // )
    )
    
 }

    










export default ListSimpsons