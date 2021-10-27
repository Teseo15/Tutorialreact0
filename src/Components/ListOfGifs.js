import React from "react";
import Gif from "./Gifs";
import { useState,useEffect } from "react";
import getGifs from "../services/GetGifs";
export default function ListofGifs({params}) {
    const { Keyword} = params
    const [ gifs, setGifs] = useState([])

    useEffect(function (){
     
      getGifs({Keyword})
        .then(gifs => setGifs(gifs))
    },[Keyword])
        
    return <div>
        {
            gifs.map(({id,title,url}) =>
                <Gif 
                  Key ={id}
                  title={title}
                  url ={url}
                  id ={id}
                />       
            )
        }
        </div>
}