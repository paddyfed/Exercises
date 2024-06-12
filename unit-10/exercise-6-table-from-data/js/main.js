// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const contentContainer = document.getElementById("content");

  function renderTable(publicHolidays) {
    const outputHtml = `<div class="table-container">
        <h2>List of Public Holidays in Ireland for 2024</h2>
        <table class="blueTable">
        <thead>
        <tr>
        <th>Date</th>
        <th>Name (in Irish)</th>
        <th>Name</th>
        <th>Country Code</th>
        <th>Types</th>
        </tr>
        </thead>
        <tbody>        
        ${loopThroughHolsForTable(publicHolidays)}
        </tbody>
        </div>`;

    contentContainer.innerHTML = outputHtml;
  }

  function loopThroughHolsForTable(publicHolidays) {
    let outputHtml = "";
    for (const i in publicHolidays) {
      if (Object.hasOwnProperty.call(publicHolidays, i)) {
        outputHtml += `<tr>
                <td>${publicHolidays[i].date}</td>
                <td>${publicHolidays[i].localName}</td>
                <td>${publicHolidays[i].name}</td>
                <td>${publicHolidays[i].countryCode}</td>
                <td>${publicHolidays[i].types}</td>
                </tr>`;
      }
    }

    return outputHtml;
  }

  function init() {
    try {
      // load data as a JS object
      renderTable(data); // render table
    } catch (err) {
      console.error(err);
      contentContainer.innerHTML =
        "<h2>Error</h2><p>No public holidays to display.</p><p>" + err + "</p>";
    }
  }

  window.addEventListener("load", (event) => {
    init();
  });
})();
