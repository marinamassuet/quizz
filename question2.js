// Actions based on user's selection
  let act = /*value based on user selection*/;
  if (act === "oui") {
    amc+= 2;
  }
  if (act === "non") {
    amc+= -2
  }
  // Rediriger l'utilisateur vers la prochaine question du quiz
  window.location.href = "question3.html";
}