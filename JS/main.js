document.querySelector('button.button').addEventListener('click', loadCountry);
function time(){

}
function show(e){
    console.log(e);
    document.querySelector('[data-js="result"]').innerHTML = `
    <div>
    <h1> ${e.country} </h1>
</div>
<span>Data ${e.time.slice(0,10)}</span>
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
    await   axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"00c807a539msh1b3934baa63aa46p1456f6jsnbd0191efd24b"
      }
      }).then((response)=>{
        return response.data;
      }).then((date)=>{
        
            date.response.forEach((e, id)=>{
                if(e.country.includes(input)){
                    show(e);
                }
        });
      }).catch((error)=>{
        console.log(error)
    });
 //   fetch('../config/api.json')
  //      .then((Dados)=>{
   //            return Dados.text();
   //        }).then((date)=>{
            
    //       });
}