$(document).ready(() => {
  setEvents();
  scrapeReferencies();
});

function setEvents() {
  $("#vacc").click(() => {
    $("#tableVacc").toggle(100);
  });

  $("#dose").click(() => {
    $("#tableDose").toggle(100);
  });

  $("#strategy").click(() => {
    $("#tableStrategy").toggle(100);
  });

  $("#servGroup").click(() => {
    $("#tableServGroup").toggle(100);
  });
}

function showResults() {
  $("#spinner").hide();
  $("#scrapedContent").show();
}

function hideResults() {
  $("#scrapedContent").hide();
  $("#spinner").show();
}