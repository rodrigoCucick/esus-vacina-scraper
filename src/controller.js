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
    $("#inpuStrategy").prop("checked") ||
    $("#inputServGroup").prop("checked") ||
    $("#inputVacc").prop("checked")
  );
}

function isSomethingChecked() {
  return (
    $("#inputVaccRules").prop("checked") ||
    $("#inputDose").prop("checked") || 
    $("#inpuStrategy").prop("checked") ||
    $("#inputServGroup").prop("checked") ||
    $("#inputVacc").prop("checked")
  );
}
// End checkboxes.

// Containers.
function showInfoMsg(msg) {
  $("#infoMsgContainer").html(msg);
  showInfoMsgContainer();
}

function showInfoMsgContainer() { $("#infoMsgContainer").show(ms); }
function showVersionContainer() { $("#versionContainer").show(); }
function showVaccRulesContainer() { $("#vaccRulesContainer").show(); }
function showVaccContainer() { $("#vaccContainer").show(); }
function showDoseContainer() { $("#doseContainer").show(); }
function showStrategyContainer() { $("#strategyContainer").show(); }
function showServGroupContainer() { $("#servGroupContainer").show(); }

function hideInfoMsgContainer() { $("#infoMsgContainer").hide(ms); }
function hideVersionContainer() { $("#versionContainer").hide(); }
function hideVaccRulesContainer() { $("#vaccRulesContainer").hide();}
function hideVaccContainer() { $("#vaccContainer").hide(); }
function hideDoseContainer() { $("#doseContainer").hide(); }
function hideStrategyContainer() { $("#strategyContainer").hide(); }
function hideServGroupContainer() { $("#servGroupContainer").hide(); }

function hideAllContainers() {
  hideInfoMsgContainer();
  hideVersionContainer();
  hideVaccRulesContainer();
  hideVaccContainer();
  hideDoseContainer();
  hideStrategyContainer(); 
  hideServGroupContainer();
}
// End containers.