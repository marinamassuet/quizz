// Actions based on user's selection
  let act = /*value based on user selection*/;
  if (act === "oui") {
    nsi+= 2;
  }
  if (act === "non") {
    nsi+= -2
  }
  // Rediriger l'utilisateur vers la prochaine question du quiz
  window.location.href = "question4.html";
}
