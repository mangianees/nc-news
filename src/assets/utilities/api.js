import axios from "axios";

const ncNewsApi = axios.create({
    baseURL : "https://anncreddit.onrender.com/api/"
})

export const getNcTopics=()=>{
    return ncNewsApi.get("/topics").then((data)=>{
        return data.data;
    })
}

export const getNcArticles = ()=>{
    return ncNewsApi.get("/articles").then((data)=>{
        return data.data;
    })
}

export const getNcArticleById = (article_id)=>{
    return ncNewsApi.get(`/articles?article_id=${article_id}`).then((data)=>{
        return data.data;
    })
}

export const getNcArticleByIdWithComments = (article_id)=>{
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((data)=>{
        return data.data;
    })
}

export const patchNCVote = (article_id,patchObject)=>{

    return ncNewsApi.patch(`/articles/${article_id}`,patchObject).then(({data})=>{
        
        return data;
    })
}