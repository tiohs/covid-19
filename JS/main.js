document.querySelector('button.button').addEventListener('click', loadCountry);

function show(e){
    console.log(e);
    document.querySelector('[data-js="result"]').innerHTML = `
    <div>
    <h1> ${e.country} </h1>
</div>
<span>Data 2020-03-21 22:36</span>
<div id="estatistica">
    <div>
        <h3>Cases New</h3>
        <span>${e.cases.new}</span>
    </div>
    <div>
        <h3>Total</h3>
        <span>${e.cases.total}</span>
    </div>
    <div>
        <h3>Active</h3>
        <span>${e.cases.active}</span>
    </div>
    <div>
        <h3>Critical</h3>
        <span>${e.cases.critical}</span>
    </div>
    <div>
        <h3>Recovered</h3>
        <span>${e.cases.recovered}</span>
    </div>
    
    <div>
        <h3>Deths Total</h3>
        <span>${e.deaths.total}</span>
    </div>
</div>
    `;
}
async function loadCountry(){
    const input =  document.querySelector('input').value;
    await fetch('../config/api.json')
        .then((Dados)=>{
            return Dados.text();
        }).then((date)=>{
            var date = JSON.parse(date);
            date.response.forEach((e, id)=>{
                if(e.country.includes(input)){
                    show(e);
                }
            });
        });
}