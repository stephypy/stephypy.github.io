window.onload = function() {
  var currURL = window.location.href.split("/").pop();

  if (currURL == "index.html") {
    const exploreButton = document.getElementById("explore");
    exploreButton.addEventListener("click", function(){goToPage(exploreButton.id)});
  }
  else if (currURL == "explore.html") {
    const index = document.getElementById("index");
    index.addEventListener("click", function(){goToPage(index.id)});

    const internships = document.getElementById("internships");
    internships.addEventListener("click",  function(){goToPage(internships.id)});

    const hackathons = document.getElementById("hackathons");
    hackathons.addEventListener("click",  function(){goToPage(hackathons.id)});

    const ugta = document.getElementById("ugta");
    ugta.addEventListener("click",  function(){goToPage(ugta.id)});

    const research = document.getElementById("research");
    research.addEventListener("click",  function(){goToPage(research.id)});

    const school = document.getElementById("school");
    school.addEventListener("click",  function(){goToPage(school.id)});

    const extracurricular = document.getElementById("extracurricular");
    extracurricular.addEventListener("click",  function(){goToPage(extracurricular.id)});
  }
  else {
    const goback = document.getElementById("explore");
    goback.addEventListener("click", function(){goToPage(goback.id)});
  }
}

/* Go to the page indicated by the button */
function goToPage(pageName) {
  window.location.replace(pageName + ".html");
}
