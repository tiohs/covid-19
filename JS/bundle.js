(()=>{"use strict";document.querySelector("button.button").addEventListener("click",(async function(){var n=document.querySelector("input").value;await axios({method:"GET",url:"https://covid-193.p.rapidapi.com/statistics",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"00c807a539msh1b3934baa63aa46p1456f6jsnbd0191efd24b"}}).then((function(n){return n.data})).then((function(a){a.response.forEach((function(a,t){a.country.includes(n)&&function(n){console.log(n),document.querySelector('[data-js="result"]').innerHTML="\n    <div>\n    <h1> "+n.country+' </h1>\n</div>\n<span>Data 2020-03-21 22:36</span>\n<div id="estatistica">\n    <div>\n        <h3>Cases New</h3>\n        <span>'+n.cases.new+"</span>\n    </div>\n    <div>\n        <h3>Total</h3>\n        <span>"+n.cases.total+"</span>\n    </div>\n    <div>\n        <h3>Active</h3>\n        <span>"+n.cases.active+"</span>\n    </div>\n    <div>\n        <h3>Critical</h3>\n        <span>"+n.cases.critical+"</span>\n    </div>\n    <div>\n        <h3>Recovered</h3>\n        <span>"+n.cases.recovered+"</span>\n    </div>\n    \n    <div>\n        <h3>Deths Total</h3>\n        <span>"+n.deaths.total+"</span>\n    </div>\n</div>\n    "}(a)}))})).catch((function(n){console.log(n)}))}))})();