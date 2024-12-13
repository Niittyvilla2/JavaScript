'use strict';
document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = document.querySelector('#query').ariaValueMax;
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
