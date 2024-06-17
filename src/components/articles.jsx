import { getNcArticles } from "../assets/utilities/api";
import { useState,useEffect,useParams } from "react";

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
        <ul>
            {
                articles.map((article) =>(
                    
                    <div>
                    <li key={article.id}>
                    <p>{article.author}</p>
                    <p>{article.title}</p>
                    <p>{article.topic}</p>
                    <p>{article.created_at}</p>
                    <p>{article.votes}</p>
                    <p>{article.article_img_url}</p>
                    <p>{article.comment_count}</p>
                    </li>
                    </div>
                ))
            }
            </ul>
        </>
    )
}