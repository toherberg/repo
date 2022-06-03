async function loadIntoTable(url, table) {
    fetch(url).then((data) => {
        return data.json();
    }).then((objectData) => {
        let tableData = "";
        objectData.map((values) => {
            tableData += `<tr>
            <td>${values.country}</td>
            <td>${values.todayCases}</td>
            <td>${values.cases}</td>
            <td>${values.deaths}</td>
            <td>${values.recovered}</td>
            </tr>`
            document.getElementById("table_body").innerHTML = tableData;
        })
    })

}

loadIntoTable("https://corona.lmao.ninja/v2/countries?yesterday=&sort=todayCases", document.querySelector("table"));