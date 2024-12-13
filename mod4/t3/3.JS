'use strict';
document.getElementById('form').addEventListener('submit', async function(event){
    event.preventDefault();
    const query = document.getElementById('query').ariaValueMax.trim();
    if(!query){
        console.error('enter a show name');
        return;
    }
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

    }catch (error){
        console.error("Error fetching data: ", error);
    }
});

function display(tvShows){
    const div = document.getElementById("result");
    div.innerHTML="";

    tvShows.forEach(tvShow =>{
        const show = tvShow.show;
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        h2.textContent = show.name;
        article.appendChild(h2);
        if (show.url){
            const link = document.createElement("a");
            link.herf = show.url;
            link.textContent="Details";
            link.target = "_blank";
            article.appendChild(link);
        }
        if(show.image?.medium){
            const img = document.createElement("img")
            ? show.image.medium
            : 'https://via.placeholder.com/210x295?text=Not%20Found';
            img.alt = show.name;
            article.appendChild(img);
        }
        if(show.summary){
            const div = document.createElement("div");
            div.innerHTML = show.summary;
            article.appendChild(div);
        }

        div.appendChild(article);
    })
}