// Tracker
// Tracker
fetch('https://corona.lmao.ninja/v2/countries/USA')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recovery").innerHTML = data.recovered.toLocaleString();
        document.getElementById("test").innerHTML = data.tests.toLocaleString();
    });

    // navigation

    //animation