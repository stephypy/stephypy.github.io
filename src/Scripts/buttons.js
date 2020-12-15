window.onload = function() {
  const artBtn = document.getElementById("art-btn");
  artBtn.addEventListener("click", function(){goToPage(artBtn.id)});

  const codeBtn = document.getElementById("code-btn");
  codeBtn.addEventListener("click", function(){goToPage(codeBtn.id)});
}

/* Go to the page indicated by the button */
function goToPage(btn) {
  switch(btn){
    case "art-btn":
      window.location.replace(btn + ".html");

    case "code-btn":
      window.location.replace(btn + ".html");

    default:
      window.location.replace(btn + ".html");
}
