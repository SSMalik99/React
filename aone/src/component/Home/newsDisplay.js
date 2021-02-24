import React from "react";

const NewsDisplay=(props)=>{
    let newsData = props.newsDisplay.map(data=>{
        return(
            <div>
                <h1>{data.name}</h1>
                <h3>{data.author}</h3>
                <p>{data.title}</p>
            </div>
        )
    })
    return(
        <div>{newsData}</div>
    )
}


export default NewsDisplay;