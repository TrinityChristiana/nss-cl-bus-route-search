const searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("search-btn");
        button.addEventListener("click", () => {
            const input = document.getElementById("search-criteria");
            const searchCriteria = input.value;
            const searchResultPromise = apiManager.searchBusStops(searchCriteria);
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults);
            });
        });
    }
};