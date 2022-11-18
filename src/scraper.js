const urlVaccRules = "https://integracao.esusab.ufsc.br/ledi/documentacao/regras/validar_regras_vacinacao.html";
const urlReferencies = "https://integracao.esusab.ufsc.br/ledi/documentacao/referencias/dicionario.html";
const urlChangelog = "https://integracao.esusab.ufsc.br/ledi/documentacao/principais_alteracoes.html";

const selVersion = ".back-link";
const selVaccRules = ".post-content > table:nth-child(2)";
const selVacc = "#imunobiologico + table";
const selDose = "#dose + table";
const selStrategy = "#estrategiavacinacao + table";
const selServGroup = "#grupodeatendimento + table";
const selChangelogHeader = ".post-title";
const selChangelogBody = ".post-content";

const tableVaccRulesId = "#tableVaccRules";
const tableVaccId = "#tableVacc";
const tableDoseId = "#tableDose";
const tableStrategyId = "#tableStrategy";
const tableServGroupId = "#tableServGroup";

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
      parseVersionStr(data);
      $(tableVaccRulesId).html($(data).find(selVaccRules)[0].innerHTML);
      showVaccRulesContainer();
    },
    error: () => showRequestErrorMsg()
  });
};

function scrapeReferencies() {
  $.ajax({
    url: urlReferencies,
    success: data => {
      parseVersionStr(data);
      createReferenciesTables(data);
    },
    error: () => showRequestErrorMsg()
  });
};

function scrapeChangelog() {
  $.ajax({
    url: urlChangelog,
    success: data => {
      createChangelogDialog(
        $(data).find(selChangelogHeader)[0].innerHTML,
        $(data).find(selChangelogBody)[0].innerHTML
      );
    },
    error: () => showRequestErrorMsg()
  });
};

function createReferenciesTables(data) {
  createTable(isVaccChecked(), tableVaccId, $(data).find(selVacc)[0].innerHTML, showVaccContainer);
  createTable(isDoseChecked(), tableDoseId, $(data).find(selDose)[0].innerHTML, showDoseContainer);
  createTable(isStrategyChecked(), tableStrategyId, $(data).find(selStrategy)[0].innerHTML, showStrategyContainer);
  createTable(isServGroupChecked(), tableServGroupId, $(data).find(selServGroup)[0].innerHTML, showServGroupContainer);
}

function createTable(tableCheckboxFlag, tableId, tableHTML, showContainerFunction) {
  if (tableCheckboxFlag) {
    $(tableId).html(tableHTML);
    showContainerFunction();
  }
}

function parseVersionStr(data) {
  if (!isVersionContainerVisible()) {
    createVersionStr($(data).find(selVersion)[0].title.match(/[1234567890.]/g).join(''));
  }
}

function showRequestErrorMsg() {
  showInfoMsg("Ocorreu um erro durante a requisição! Tente novamente em alguns instantes.");
}