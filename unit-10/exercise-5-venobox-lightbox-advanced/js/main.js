const images = document.querySelectorAll(".image-box");

console.log(images);

images.forEach((element) => {
  const link = document.createElement("a");
  const imgHref = element.querySelector("img");
  link.classList.add("image-box-link");
  link.setAttribute("data-gall", "gallery01");
  link.href = imgHref.src;
  link.appendChild(imgHref);
  element.appendChild(link);
});

new VenoBox({
  selector: ".image-box-link",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "wave",
  fitView: true,
});
