var inputHidden = document.querySelector("#tema-filtro");


function montaTr(star) {
	var starTr = document.createElement("tr");
	starTr.classList.add("pesquisa");
	if(inputHidden.value == 'planets') {
		starTr.appendChild(montaTd(star.name, "info-one"));
		starTr.appendChild(montaTd(star.rotation_period, "info-two"));
		starTr.appendChild(montaTd(star.orbital_period, "info-three"));
		starTr.appendChild(montaTd(star.climate, "info-four"));
		starTr.appendChild(montaTd(star.terrain, "info-five"));
	}
	
	if(inputHidden.value == 'starships') {
		starTr.appendChild(montaTd(star.name, "info-one"));
		starTr.appendChild(montaTd(star.model, "info-two"));
		starTr.appendChild(montaTd(star.manufacturer, "info-three"));
		starTr.appendChild(montaTd(star.cost_in_credits, "info-four"));
		starTr.appendChild(montaTd(star.starship_class, "info-five"));
	}
	
	if(inputHidden.value == 'vehicles') {
		starTr.appendChild(montaTd(star.name, "info-one"));
		starTr.appendChild(montaTd(star.model, "info-two"));
		starTr.appendChild(montaTd(star.manufacturer, "info-three"));
		starTr.appendChild(montaTd(star.cost_in_credits, "info-four"));
		starTr.appendChild(montaTd(star.vehicle_class, "info-five"));
	}
	if(inputHidden.value == 'people') {
		starTr.appendChild(montaTd(star.name, "info-one"));
		starTr.appendChild(montaTd(star.hair_color, "info-two"));
		starTr.appendChild(montaTd(star.birth_year, "info-three"));
		starTr.appendChild(montaTd(star.gender, "info-four"));
		starTr.appendChild(montaTd(star.films.length, "info-five"));
	}
	if(inputHidden.value == 'films') {
		starTr.appendChild(montaTd(star.title, "info-one"));
		starTr.appendChild(montaTd(star.episode_id, "info-two"));
		starTr.appendChild(montaTd(star.release_date, "info-three"));
		starTr.appendChild(montaTd(star.director, "info-four"));
		starTr.appendChild(montaTd(star.planets.length, "info-five"));
	}
	if(inputHidden.value == 'species') {
		starTr.appendChild(montaTd(star.name, "info-one"));
		starTr.appendChild(montaTd(star.language, "info-two"));
		starTr.appendChild(montaTd(star.designation, "info-three"));
		starTr.appendChild(montaTd(star.classification, "info-four"));
		starTr.appendChild(montaTd(star.skin_colors, "info-five"));
	}
	
	
	return starTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;
	
	return td;
}


function adicionaPesquisaNaTabela(star) {
	var starTr = montaTr(star);
	// console.log(starTr);
	
	
	if(inputHidden.value == 'planets') {
		var tabela = document.querySelector("#tabela-planeta");
	}
	if(inputHidden.value == 'starships') {
		var tabela = document.querySelector("#tabela-nave");
	}
	
	if(inputHidden.value == 'vehicles') {
		var tabela = document.querySelector("#tabela-carro");
	}
	if(inputHidden.value == 'people') {
		var tabela = document.querySelector("#tabela-pessoa");
	}
	if(inputHidden.value == 'films') {
		var tabela = document.querySelector("#tabela-filmes");
	}
	if(inputHidden.value == 'species') {
		var tabela = document.querySelector("#tabela-especie");
	}
	tabela.appendChild(starTr);
	
}
