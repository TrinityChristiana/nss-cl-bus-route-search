const getData = () => {
    const dataURL = "http://localhost:8088/item-name";
    fetch(dataURL)
        .then(response => response.json())
        .then(data => console.log(data));
}

getData();