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

        getNcArticleById(article_id).then((articlesFromApi)=>{
        setArticle(articlesFromApi)
        })

        getNcArticleByIdWithComments(article_id).then((commentsFromApi)=>{
            setComments(commentsFromApi)
        })
    }
        
    },[article_id])

    return !article?(null):(
        <>
        {comments.map((comment) =>{
                                    return (<div key={comment.comment_id} >
                                    <CommentCard comment = {comment}/>
                                    </div>)
                                    })}
        </>
    )
}