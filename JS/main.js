// Make Request API
class CovidAPI {
        // Query the rest api with a currency and a country
        async queryAPI(country) {
            // Query the URL
            const url = await fetch(`https://corona.lmao.ninja/countries/${country}`);

            // Return as json
            const result = await url.json();

            // Return the object
            return {
                 result
            }

       }
}


// HMTML
class UI {
    // async showCont(numberContry){
        
    //     document.querySelector('[data-js="confirmados"]');
    //     document.querySelector('[data-js="activos"]');
    //     document.querySelector('[data-js="recuperados"]');
    //     document.querySelector('[data-js="obitos"]');
    // }
    showStateContruy(e) {
        return document.querySelector('[data-js="result"]').innerHTML = `
       Olá
        `;
    }
    // Prints the spinner
   showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'image/loading.gif';
        document.querySelector('[data-js="result"]').appendChild(spinnerGIF);
   }
   // Print the Erro !
   showError (){
    document.querySelector('[data-js="result"]').innerHTML = `<p> Erro ao encontrar o País ! -_-<p>`;
   }
}



// instancie the class
const covidAPI = new CovidAPI();
const ui = new UI();

document.querySelector('button.button').addEventListener('click', findCountry)

function findCountry(){
    const input = document.querySelector('input').value;
    if(input){
        document.querySelector('[data-js="result"]').innerHTML = '';
        setTimeout(()=>{
            ui.showSpinner();
        }, 3000);
        covidAPI.queryAPI(input)
            .then((data)=> {
                const {country, cases, todayCases, deaths, todayDeaths, recovered} = data.result;
            })
    }
}



// /* Auto complete */
// // (async function () {
// //     const valorCountry = {
// //         stateGet: [],
// //         stateSet: function (valor) {
// //             return this.stateGet = valor;
// //         },
// //         autoComplete: function (country) {
// //             const countryComplete = this.stateGet;
// //             return countryComplete.filter((value) => {
// //                 return value.country.includes(country);
// //             })
// //         }
// //     };
// //     const Sugestao = document.querySelector('#sugestao');
// //     function addEvente(){
// //         document.querySelectorAll('.sugg').forEach((a)=>{
// //             a.addEventListener('click', ()=>{
// //                 document.querySelector('input').value = a.childNodes[0].wholeText;
// //                 Sugestao.innerHTML = '';
// //                 loadCountry();
// //             })
// //         })
// //     }
// //     await fetch('./JS/req.json')
// //         .then((dados) => dados.json())
// //         .then((dados) => {
// //             return valorCountry.stateSet(dados.response);
// //         })
// //         .catch((error) => {
// //             console.log(error)
// //         });

// //     document.querySelector('#input').addEventListener("input", autocompleteDisplay)

// //     function autocompleteDisplay({ target }) {
// //         const dataCamp = target.value;
// //         if (dataCamp.length) {
// //             const valueComplet = valorCountry.autoComplete(dataCamp);
// //             Sugestao.innerHTML = ``;
// //             for (let index = 0; index < 3; index++) {
// //                 if(valueComplet[index]){
// //                     Sugestao.innerHTML += `
// //                     <p class="sugg">${valueComplet[index].country}</p>
// //                     `;
// //                 }

// //             }
// //             if(!!valueComplet[0]){
// //                 addEvente();
// //             }
// //         } else {
// //             Sugestao.innerHTML = ``;
// //         }

// //     }
// // })();
