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
      createVersionHeader($(data).find(selVersion)[0].title.slice(-5));
      $("#tableDose").html($(data).find(selDose)[0].innerHTML);
      $("#tableStrategy").html($(data).find(selEstrategy)[0].innerHTML);
      $("#tableServGroup").html($(data).find(selServGroup)[0].innerHTML);
      $("#tableVacc").html($(data).find(selVacc)[0].innerHTML);
      scrapeVaccRules();
    },
    error: () => showErrorMsg()
  });
};

function scrapeVaccRules() {
  $.ajax({
    url: urlVaccRules,
    success: data => {
      $("#tableVaccRules").html($(data).find(selVaccRules)[0].innerHTML);
      hideErrorMsg();
      showResults();
    },
    error: () => showErrorMsg()
  });
};

function createVersionHeader(versionStr) {
  $("#version").html(
    `Versão do LEDI obtida: <b>${versionStr}</b><br />
     URLs acessadas:
     <a
      href="${urlReferencies}"
      title="Abre em uma nova aba."
      target="_blank"
      rel="noreferrer noopener">
        Dicionário de Dados</a>, 
     <a href="${urlVaccRules}"
      title="Abre em uma nova aba."
      target="_blank" 
      rel="noreferrer noopener">
        Regras Vacinais
     </a><br />
     <button
      onClick="scrapeReferencies()"
      title="Realiza uma nova requisição para atualizar os dados exibidos na tela.">
        Atualizar Página
     </button>
     `
  );
}