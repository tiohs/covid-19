// Make Request API
class CovidAPI {
	// Query the rest api with a currency and a country
	async queryAPI(country) {
		// Query the URL
		// const url = await fetch("./JS/req.json");
		const url = await fetch(
			`https://corona.lmao.ninja/v2/countries/${country}`,
		);
		// Return as json
		const result = await url.json();

		// Return the object
		return result;
	}
}
function startQuestion() {
	var Sintomas = {
		covid: ["Febre", "Tosse", "Dificuldade para respirar"],
		resfriado: [
			"Tosse",
			"Congestão Nasal",
			"coriza",
			"Dor no Corpo",
			"Dor leve de gargata",
		],
		gripe: [
			"febre",
			"Dor da garganta",
			"Tosse",
			"Dor no Corpo",
			"Dor de cabeça",
			"Mal-estar",
			"Secreção nasal",
		],
		alergia: [
			"Corrimento excessivo de muco nasal",
			"Obstrução, coceira nasal",
			"Espiros em sequência",
			"Coceira nos olhos",
			"Lacrimejamento",
		],
	};
}

// HMTML
class UI {
	constructor(elementShow) {
		this.elementShow = elementShow;
	}
	showStateContruy(e) {
		return (this.elementShow.innerHTML = `
		<h2> ${e.country} </h2>
        <img src="${e.countryInfo.flag}" alt="">
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
	backgroundColor: "#ffffff",
	regionStyle: {
		initial: {
			fill: "#033149",
			"fill-opacity": 1,
			stroke: "#000",
			"stroke-width": 0,
			"stroke-opacity": 0,
		},
		hover: {
			"fill-opacity": 0.8,
			fill: "#033149",
			stroke: "#FFFB00",
		},
		selected: {
			fill: "#FFFB00",
		},
	},
	onRegionTooltipShow: tooltip => {
		ui.showStateContruyMapa(tooltip);
	},
});

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
