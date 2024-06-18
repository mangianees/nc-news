import { getNcArticles } from "../assets/utilities/api";
import { useState,useEffect,useParams } from "react";
import { ArticleCard } from "./articleCard";

export const Articles =()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [articles,setArticles] = useState('');
    // const { slug } = useParams();

    useEffect(()=>{
        setIsLoading(true)
        getNcArticles().then((articles)=>{
            setArticles(articles)   
            setIsLoading(false)
        })

    },[])

    if(isLoading){
        return <p>Loading.........</p>
    }
    
    return(        
        <>
        <div className="body">
        <ul>
            {
                articles.map((article) =>(
                    <ArticleCard article = {article}/>  
                ))
            }
            </ul>
            </div>
        </>
    )
}