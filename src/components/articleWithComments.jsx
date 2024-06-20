import { useEffect, useState } from "react"
import { getNcArticleById, getNcArticleByIdWithComments } from "../assets/utilities/api";
import { useParams } from "react-router-dom";
import { CommentCard } from "./commentCard";

export const ArticleWithComments =()=>{
    const[article,setArticle] = useState(null);
    const[comments,setComments] = useState([]);
    const {article_id} = useParams();

    
    useEffect(()=>{
    if(article_id){ 
        console.log(article_id,'<--article_id');
        getNcArticleById(article_id).then((articlesFromApi)=>{
            console.log(articlesFromApi,'<---articlesFromApi');
        setArticle(articlesFromApi)
        })

        getNcArticleByIdWithComments(article_id).then((commentsFromApi)=>{
            console.log(commentsFromApi,'commentsFromApi');
            setComments(commentsFromApi)
        })
    }
        
    },[article_id])

    return !article?(null):(
        
        <>
        

        {comments.map((comment) =>{
                                    return (<>
                                    <CommentCard key={comment.comment_id} comment = {comment}/>
                                    </>)
                                    })}
        </>
    )
}