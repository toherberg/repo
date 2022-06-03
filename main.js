async function loadIntoTable(url, table) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

}

loadIntoTable("https://corona.lmao.ninja/v2/countries?yesterday=&sort=", document.querySelector("table"));