const urlReferencies = "https://integracao.esusab.ufsc.br/ledi/documentacao/referencias/dicionario.html";
const urlVaccRules = "https://integracao.esusab.ufsc.br/ledi/documentacao/regras/validar_regras_vacinacao.html";

const selDose = "#dose + table";
const selEstrategy = "#estrategiavacinacao + table";
const selServGroup = "#grupodeatendimento + table";
const selVacc = "#imunobiologico + table";
const selVaccRules = ".post-content > table:nth-child(2)";
const selVersion = ".back-link";

function scrapeReferencies() {
  $.ajax({
    url: urlReferencies,
    beforeSend: () => hideResults(),
    success: data => {
      $("#version").html(
        `Dados referentes à versão ${$(data).find(selVersion)[0].title.slice(-5)} do LEDI (versão atual).
         URLs acessadas: <a href="${urlReferencies}" title="Abre em uma nova aba." target="_blank" rel="noreferrer noopener">Dicionário de Dados</a>, <a href="${urlVaccRules}" title="Abre em uma nova aba." target="_blank" rel="noreferrer noopener">Regras Vacinais</a>.`
      );

      $("#tableDose").html($(data).find(selDose)[0].innerHTML);
      $("#tableStrategy").html($(data).find(selEstrategy)[0].innerHTML);
      $("#tableServGroup").html($(data).find(selServGroup)[0].innerHTML);
      $("#tableVacc").html($(data).find(selVacc)[0].innerHTML);
    },
    error: () => { },
    complete: () => scrapeVaccRules()
  });
};

function scrapeVaccRules() {
  $.ajax({
    url: urlVaccRules,
    success: data => { },
    error: () => { },
    complete: () => showResults()
  });
};