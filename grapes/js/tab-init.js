function omegaNavigate(evt, desiredActivity) {
  console.log(" Vérification click bouton : appel de omegaNavigate ( [" + "" + "], [" + "" + "]");
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(desiredActivity).style.display = "block";
  evt.currentTarget.className += " active";
  // $("#gjs").witdh('100%');

  // $("#gjs").witdh("100", "%");
  $("#gjs").height("950", "px");
}

$(document).ready(function() {
   // $("#gjs").witdh('100%');
   console.log(" Vérification click bouton : appel de docuement READY JQuery : ");
   console.log(JSON.stringify($("#gjs")));
   $("#gjs").witdh("100", "%");
   $("#gjs").height("800", "px");
   $("#gjs").height("950", "px");
});
