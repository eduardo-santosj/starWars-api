var botaoAdicionar = document.querySelector("#buscar-filme");
var buscaTema = document.querySelector("#tema");
var inputHidden = document.querySelector("#tema-filtro");
var tituloH1 = document.querySelector("#NomeEscolha");
var sectionBg = document.querySelector("#bg");
var divFiltre = document.querySelector("#filtre");

//Tabelas
var tabelaPlaneta = document.querySelector("#table-planeta");
var tabelaNave = document.querySelector("#table-naves");
var tabelaCarros = document.querySelector("#table-carros");
var tabelaPessoa = document.querySelector("#table-people");
var tabelaFilmes = document.querySelector("#table-films");
var	tabelaEspecie = document.querySelector("#table-species");

buscaTema.addEventListener("change", function(element) {
	var elements = element.target;
	var text = elements.options[elements.selectedIndex].value;
	tituloH1.innerHTML = elements.options[elements.selectedIndex].label
	sectionBg.removeAttribute("class");
	sectionBg.setAttribute("class", elements.options[elements.selectedIndex].value );
	inputHidden.value = text;
	if(inputHidden.value == 'escolha') {
		tabelaPlaneta.style.display = 'none';
		tabelaNave.style.display = 'none';
		tabelaCarros.style.display = 'none';
		tabelaPessoa.style.display = 'none';
		tabelaFilmes.style.display = 'none';
		tabelaEspecie.style.display = 'none';
		botaoAdicionar.style.display = 'none';
		divFiltre.style.display = 'none';
	}
	if(inputHidden.value == 'planets') {
		tabelaPlaneta.style.display = 'table';
		tabelaNave.style.display = 'none';
		tabelaCarros.style.display = 'none';
		tabelaPessoa.style.display = 'none';
		tabelaFilmes.style.display = 'none';
		tabelaEspecie.style.display = 'none';
		botaoAdicionar.style.display = 'block';
		divFiltre.style.display = 'block';
	}
	if(inputHidden.value == 'starships') {
		tabelaPlaneta.style.display = 'none';
		tabelaNave.style.display = 'table';
		tabelaCarros.style.display = 'none';
		tabelaPessoa.style.display = 'none';
		tabelaFilmes.style.display = 'none';
		tabelaEspecie.style.display = 'none';
		botaoAdicionar.style.display = 'block';
		divFiltre.style.display = 'block';
	}
	if(inputHidden.value == 'vehicles') {
		tabelaPlaneta.style.display = 'none';
		tabelaNave.style.display = 'none';
		tabelaCarros.style.display = 'table';
		tabelaPessoa.style.display = 'none';
		tabelaFilmes.style.display = 'none';
		tabelaEspecie.style.display = 'none';
		botaoAdicionar.style.display = 'block';
		divFiltre.style.display = 'block';
	}
	if(inputHidden.value == 'people') {
		tabelaPlaneta.style.display = 'none';
		tabelaNave.style.display = 'none';
		tabelaCarros.style.display = 'none';
		tabelaPessoa.style.display = 'table';
		tabelaFilmes.style.display = 'none';
		tabelaEspecie.style.display = 'none';
		botaoAdicionar.style.display = 'block';
		divFiltre.style.display = 'block';
	}
	if(inputHidden.value == 'films') {
		tabelaPlaneta.style.display = 'none';
		tabelaNave.style.display = 'none';
		tabelaCarros.style.display = 'none';
		tabelaPessoa.style.display = 'none';
		tabelaFilmes.style.display = 'table';
		tabelaEspecie.style.display = 'none';
		botaoAdicionar.style.display = 'block';
		divFiltre.style.display = 'block';
	}
	if(inputHidden.value == 'species') {
		tabelaPlaneta.style.display = 'none';
		tabelaNave.style.display = 'none';
		tabelaCarros.style.display = 'none';
		tabelaPessoa.style.display = 'none';
		tabelaFilmes.style.display = 'none';
		tabelaEspecie.style.display = 'table';
		botaoAdicionar.style.display = 'block';
		divFiltre.style.display = 'block';
	}
	return;
})


botaoAdicionar.addEventListener("click", function() {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", "https://swapi.co/api/"+inputHidden.value+"/", true);
	
	xhr.addEventListener("load", function() {
		var erroAjax = document.querySelector("#erro-ajax");
		
		if (xhr.status == 200) {
			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText;
			var wars = JSON.parse(resposta);
			
			var result = '';
			
			var result = wars.results;
			
			
			result.forEach(function(star) {
				console.log(star);
				adicionaPesquisaNaTabela(star);
			});
		} else {
			erroAjax.classList.remove("invisivel");
		}
	});
	
	xhr.send();
});
