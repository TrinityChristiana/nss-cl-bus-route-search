const searchResultsDomManager = {
    busStopFactory(busStop) {
        return `
            <section class="bus-stop">
            <div class="bus-stop_route-name">${busStop.route_name}</div>
            <div class="bus-stop_stopname">${busStop.stopname}</div>
            </section>
        `;
    },
    renderSearchResults(searchResults) {
        const container = document.querySelector("#search-results");
        searchResults.forEach(busStop => {
            container.innerHTML += ;
        });
    }
};