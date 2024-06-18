
import { useState,useEffect} from "react";
import { ArticleCard } from "./articleCard";

export const Articles =({articles})=>{
    const [isLoading,setIsLoading]=useState(true)
    const [allArticles,setAllArticles] = useState('');
    useEffect(()=>{
        setIsLoading(true)
        setAllArticles(articles)
        setIsLoading(false)
    },[])

    return isLoading?(<p>Loading.........</p>):
                      (         
        <>
        <div className="body">
            {   
                allArticles.map((article) =>{
                    return (<>
                    <ArticleCard article = {article}/>
                    </>)
                })

                
            }
            </div>
        </>
    )
}