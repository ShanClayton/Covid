 // navigation
//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//open menu when clicked
selectElement('.open').addEventListener('click', ()=>{
    selectElement('.nav__list').classList.add('active');
});

//close menu when clicked
selectElement('.close').addEventListener('click', ()=>{
    selectElement('.nav__list').classList.remove('active')
});



// Tracker
//fetching api to show data
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


    //animation