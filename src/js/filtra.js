var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pesquisas = document.querySelectorAll(".pesquisa");

    if (this.value.length > 0) {
        for (var i = 0; i < pesquisas.length; i++) {
            var pesquisa = pesquisas[i];
            var tdNome = pesquisa.querySelector(".info-one");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                pesquisa.classList.add("invisivel");
            } else {
                pesquisa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pesquisas.length; i++) {
            var pesquisa = pesquisas[i];
            pesquisa.classList.remove("invisivel");
        }
    }
});
