// Make Request API
class CovidAPI {
	// Query the rest api with a currency and a country
	async queryAPI(country) {
		// Query the URL
		const url = await fetch("./JS/req.json");
		// const url = await fetch(`https://corona.lmao.ninja/countries/${country}`);
		// Return as json
		const result = await url.json();

		// Return the object
		return result;
	}
}

// HMTML
class UI {
	constructor(elementShow) {
		this.elementShow = elementShow;
	}
	showStateContruy(e) {
		return (this.elementShow.innerHTML = `
		<h2> Angola </h2>
        <img src="./image/ao.png" alt="">
        <div id="valueContruy">
          <div class="border1">
             <div class="card border1" ><i class="fas fa-briefcase color1"></i></div>
            <h2 class="color1">CONFIRMADOS</h2>
            <span class="color1" data-js="confirmados">${e.cases}</span>
          </div>
          <div class="border2 color2">
             <div class="card border2" ><i class="fas fa-check-circle"></i></div>
            <h2 class="color2">ATIVOS</h2>
            <span data-js="activos">${e.active}</span>
          </div>
          <div class="border3 color3">
             <div class="card border3"><i class="fas fa-child"></i></div>
            <h2 class="color3">RECUPERADO</h2>
            <span data-js="recuperados">${e.recovered}</span>
          </div>
          <div>
             <div class="card"><i class="fas fa-cross"></i></div>
            <h2>ÓBITOS</h2>
            <span data-js="obitos">${e.deaths}</span>
          </div>
        </div>
        `);
	}
	showStateContruyMapa(tooltip) {
		var That = this;
		covidAPI.queryAPI(tooltip.text()).then(data => {
			// const countryFind = data.response.find(
			// 	resul => resul.country === tooltip.text(),
			// );
			That.showStateContruy(data);
		});
	}
	// Prints the spinner
	showSpinner() {
		this.elementShow.innerHTML = "";
		const spinnerGIF = document.createElement("img");
		spinnerGIF.src = "image/loading.gif";
		this.elementShow.appendChild(spinnerGIF);
	}
	// Print the Erro !
	showError() {
		this.elementShow.innerHTML = `<p> Erro ao encontrar o País ! -_-<p>`;
	}
}

// instancie the class
const covidAPI = new CovidAPI();
const ui = new UI(document.querySelector('[data-js="result"]'));
const map = new JsVectorMap({
	selector: "#map",
	map: "world",
	onRegionTooltipShow: tooltip => {
		ui.showStateContruyMapa(tooltip);
	},
});

document.querySelector("button.button").addEventListener("click", findCountry);
const input = document.querySelector("#input");

function findCountry() {
	var inputValor = input.value;
	covidAPI.queryAPI(inputValor).then(data => {
		ui.showSpinner();
		setTimeout(() => {
			const countryFind = data.response.find(
				resul => resul.country === inputValor,
			);
			ui.showStateContruy(countryFind);
		}, 3000);
	});
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
