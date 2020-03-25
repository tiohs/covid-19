const axios = require("axios");

axios({
      "method":"GET",
      "url":"https://covid-193.p.rapidapi.com/statistics",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-193.p.rapidapi.com",
      "x-rapidapi-key":"00c807a539msh1b3934baa63aa46p1456f6jsnbd0191efd24b"
    }
    }).then((response)=>{
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    });