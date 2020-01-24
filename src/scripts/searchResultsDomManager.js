const searchResultsDomManager = {
    busStopFactory(busStop) {
        return `
            <section class="bus-stop">
            <div class="bus-stop__route-name">${busStop.route_name}</div>
            <div class="bus-stop__stopname">${busStop.stopname}</div>
            </section>
        `;
    },
    renderSearchResults(searchResults) {
        const container = document.querySelector("#search-results");
        container.innerHTML = "";
        searchResults.forEach(busStop => {
            container.innerHTML += this.busStopFactory(busStop);
        });
    }
};