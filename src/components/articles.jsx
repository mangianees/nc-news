import { useState,useEffect} from "react";
import { ArticleCard } from "./articleCard";
import { useParams } from "react-router-dom";
import { getNcArticleById } from "../assets/utilities/api";


export const Articles =({articles,onSelectArticle})=>{

    const [isLoading,setIsLoading]=useState(true)
    const [allArticles,setAllArticles] = useState('');
    const {article_id} = useParams();
    
    

    
    if(article_id){
              useEffect(()=>{
              setIsLoading(true)
              setAllArticles('')
              getNcArticleById(article_id).then((articlesFromApi)=>{
              setAllArticles(articlesFromApi)  
              })
              setIsLoading(false)
            },[article_id])
    }else{
        useEffect(()=>{
            setIsLoading(true)
            setAllArticles('')
            setAllArticles(articles)
            setIsLoading(false)
        },[article_id])

    }
    
    return isLoading?(<p>Loading.........</p>):
                      (         
        <>
        <div className="body">
            {   !allArticles ? null :allArticles.map((article) =>{
                                    return (<>
                                    <ArticleCard key={article.article_id} article = {article} onSelectArticle={onSelectArticle}/>
                                    </>)
                                    })
            
                
            }
            </div>
        </>
    )
}