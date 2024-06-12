// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const contentContainer = document.getElementById("content");

  function renderImages(images) {
    let imagesHtml = "";

    imagesHtml = `<div class="image-container">`;

    for (const i in images.hits) {
      imagesHtml += `<div class="image">
            <a title="Click to see a large version of this image" class="my-image-links" data-gall="gallery01" href="${images.hits[i].largeImageURL}">
            <img src="${images.hits[i].webformatURL}">
            </a>
            <div class="image-info">
            <div class="tags">`;

      let tagsArray = images.hits[i].tags.split(",");
      for (const j in tagsArray) {
        if (Object.hasOwnProperty.call(tagsArray, j)) {
          const linkQuery = encodeURI(tagsArray[j].trim());
          const linkText = tagsArray[j].trim();
          imagesHtml += `<a href="#" onClick="loadImages(${linkQuery})">${linkText}</a>`;
        }
      }
      imagesHtml += `</div>
            <div class="right">
                <span class="downloads">${images.hits[i].downloads}</span>
                <span class="likes">${images.hits[i].likes}</span>
                <span class="comments">${images.hits[i].comments}</span>
            </div>
            </div></div>`;
    }

    contentContainer.innerHTML = imagesHtml;
  }

  function init() {
    try {
      // option 1 - load data as a JB object
      console.log("dataOption1");
      console.log(dataOption1);
      renderImages(dataOption1); // render images
      // option 2 - load data as a string variable
      const dataOption2 = JSON.parse(dataStringOption2);
      console.log("dataOption2");
      console.log(dataOption2);
      //renderImages(dataOption2); // render images
      // option 3 - embed data in html
      const dataOption3 = JSON.parse(
        document.getElementById("dataStringOption3").text
      );
      console.log("dataOption3");
      console.log(dataOption3);

      new VenoBox({
        selector: ".my-image-links",
        numeration: true,
        infinigall: true,
        share: true,
        spinner: "plane",
      });
    } catch (err) {
      console.error(err);
      contentContainer.innerHTML =
        "<h2>Error</h2><p>No images to display.</p><p>" + err + "</p>";
    }
  }

  window.addEventListener("load", (event) => {
    init();
  });
})();
