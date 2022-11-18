const ms = 100;

function setEvents() {
  $("#buttonRequest").click(() => scrape());
  $("#vaccRules").click(() => $("#tableVaccRules").toggle(ms));
  $("#vacc").click(() => $("#tableVacc").toggle(ms));
  $("#dose").click(() => $("#tableDose").toggle(ms));
  $("#strategy").click(() => $("#tableStrategy").toggle(ms));
  $("#servGroup").click(() => $("#tableServGroup").toggle(ms));
}

// Checkboxes.
function isVaccRulesChecked() { return $("#inputVaccRules").prop("checked"); }
function isVaccChecked() { return $("#inputVacc").prop("checked"); }
function isDoseChecked() { return $("#inputDose").prop("checked"); }
function isStrategyChecked() { return $("#inputStrategy").prop("checked"); }
function isServGroupChecked() { return $("#inputServGroup").prop("checked"); }

function isReferenciesChecked() {
  return (
    $("#inputDose").prop("checked") || 
    $("#inputStrategy").prop("checked") ||
    $("#inputServGroup").prop("checked") ||
    $("#inputVacc").prop("checked")
  );
}

function isSomethingChecked() {
  return (
    $("#inputVaccRules").prop("checked") ||
    $("#inputDose").prop("checked") || 
    $("#inputStrategy").prop("checked") ||
    $("#inputServGroup").prop("checked") ||
    $("#inputVacc").prop("checked")
  );
}
// End checkboxes.

// Containers.
function isVersionContainerVisible() {
  return !($("#versionContainer").css("display") === "none");
}

function showInfoMsg(msg) {
  $("#infoMsgContainer").html(msg);
  showInfoMsgContainer();
}

function createVersionStr(versionStr) {
  $("#version").html(`
    Versão do LEDI obtida: 
    <span
      class="version-link">
        <b>${versionStr}</b>
        <div class="changelog-btn-container">
          <button
            class="open-changelog-btn"
            onclick="scrapeChangelog()"
            title="Clique para visualizar as alterações mais recentes.">
            Changelog
          </button>
        </div>
    </span>
    `);
  showVersionContainer();
}

function createChangelogDialog(changelogHeaderStr, changelogBodyStr) {
  $("#changelog-dialog-header").html(changelogHeaderStr);
  $("#changelog-dialog-body").html(changelogBodyStr);
  $("#changelog-dialog-body").append(`
    <div
      id="changelog-dialog-close-btn"
      class="dialog-close-btn">
      <div class="centered-container">
        <i>URL Requisitada:
          <a
            href="https://integracao.esusab.ufsc.br/ledi/documentacao/principais_alteracoes.html"
            title="Abre em uma nova aba."
            target="_blank"
            rel="noreferrer noopener">
            Principais Alterações
          </a>
        </i>
      </div>
      <div class="centered-container"><button onClick="hideChangelogDialog()">Ok</button></div>
    </div>
  `);
  showChangelogDialog();
}

function showChangelogDialog() {
  $("#modal").show();
  $("#changelog-dialog").fadeIn(ms * 2);
}

function hideChangelogDialog() {
  $("#changelog-dialog").fadeOut(ms * 2);
  $("#modal").hide();
}

function showInfoMsgContainer() { $("#infoMsgContainer").show(ms); }
function showVersionContainer() { $("#versionContainer").show(); }
function showVaccRulesContainer() { $("#vaccRulesContainer").show(); }
const showVaccContainer = () => $("#vaccContainer").show();
const showDoseContainer = () => $("#doseContainer").show();
const showStrategyContainer = () => $("#strategyContainer").show();
const showServGroupContainer = () => $("#servGroupContainer").show();

function hideInfoMsgContainer() { $("#infoMsgContainer").hide(ms); }
function hideVersionContainer() { $("#versionContainer").hide(); }
function hideVaccRulesContainer() { $("#vaccRulesContainer").hide();}
function hideVaccContainer() { $("#vaccContainer").hide(); }
function hideDoseContainer() { $("#doseContainer").hide(); }
function hideStrategyContainer() { $("#strategyContainer").hide(); }
function hideServGroupContainer() { $("#servGroupContainer").hide(); }

function hideAllContainers() {
  hideChangelogDialog();
  hideInfoMsgContainer();
  hideVersionContainer();
  hideVaccRulesContainer();
  hideVaccContainer();
  hideDoseContainer();
  hideStrategyContainer(); 
  hideServGroupContainer();
}
// End containers.