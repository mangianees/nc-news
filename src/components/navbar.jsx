import * as React from "react";
import { useEffect, useState } from "react";
import { getNcTopics } from "../assets/utilities/api";
import {Link, useParams} from "react-router-dom"
import { Articles } from "./articles";



export const  MyNavbar =()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [topics,setTopics] = useState('');
    const {slug} = useParams;

    useEffect(()=>{
        setIsLoading(true)
        getNcTopics().then((data)=>{
            setTopics(data)   
            setIsLoading(false)
        })

    },[slug])

    if(isLoading){
        return <p>Loading.........</p>
    }
    return(
        <>


    
      

<nav className="navbar navbar-dark bg-secondary">

    <div>
                { topics.map((topic,index)=> (
            <Link to={`/${topic.slug}`} key={index} className="links" style={{ textDecoration: 'none' }}> {topic.slug}</Link>
            
                                    )   
                    )
        }
    </div>
       </nav>

       <Articles />

        </>
    )
}