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
    // console.log(slug,'<---slug value at api');
    return ncNewsApi.get("/articles").then((data)=>{
        return data.data;
    })
}

export const getNcArticleById = ()=>{
    // console.log(slug,'<---slug value at api');
    return ncNewsApi.get("/articles?article_id").then((data)=>{
        return data.data;
    })
}