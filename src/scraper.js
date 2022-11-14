const urlVaccRules = "https://integracao.esusab.ufsc.br/ledi/documentacao/regras/validar_regras_vacinacao.html";
const urlReferencies = "https://integracao.esusab.ufsc.br/ledi/documentacao/referencias/dicionario.html";

const selVersion = ".back-link";
const selVaccRules = ".post-content > table:nth-child(2)";
const selVacc = "#imunobiologico + table";
const selDose = "#dose + table";
const selEstrategy = "#estrategiavacinacao + table";
const selServGroup = "#grupodeatendimento + table";

function scrape() {
  if (!isSomethingChecked()) {
    showInfoMsg("É necessário selecionar ao menos uma tabela!");
    return;
  }

  hideAllContainers();

  if (isVaccRulesChecked()) {
    scrapeVaccRules();
  }

  if (isReferenciesChecked()) {
    scrapeReferencies();
  }
}

function scrapeVaccRules() {
  $.ajax({
    url: urlVaccRules,
    success: data => {
      createVersionHeader($(data).find(selVersion)[0].title.slice(-5));
      $("#tableVaccRules").html($(data).find(selVaccRules)[0].innerHTML);
      showVaccRulesContainer();
    },
    error: () => showRequestErrorMsg()
  });
};

function scrapeReferencies() {
  $.ajax({
    url: urlReferencies,
    success: data => {
      createVersionHeader($(data).find(selVersion)[0].title.slice(-5));

      if (isVaccChecked()) {
        $("#tableVacc").html($(data).find(selVacc)[0].innerHTML);
        showVaccContainer();
      }

      if (isDoseChecked()) {
        $("#tableDose").html($(data).find(selDose)[0].innerHTML);
        showDoseContainer();
      }

      if (isStrategyChecked()) {
        $("#tableStrategy").html($(data).find(selEstrategy)[0].innerHTML);
        showStrategyContainer();
      }

      if (isServGroupChecked()) {
        $("#tableServGroup").html($(data).find(selServGroup)[0].innerHTML);
        showServGroupContainer();
      }
    },
    error: () => showRequestErrorMsg()
  });
};

function createVersionHeader(versionStr) {
  if ($("#versionContainer").css("display") === "none") {
    $("#version").html(`Versão do LEDI obtida: <b>${versionStr}</b>`);
    showVersionContainer();
  }
}

function showRequestErrorMsg() {
  showInfoMsg("Ocorreu um erro durante a requisição! Tente novamente em alguns instantes.");
}