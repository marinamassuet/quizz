// Actions based on user's selection
  let act = /*value based on user selection*/;
  if (act === "oui") {
    svt+= 2;
  }
  if (act === "non") {
    svt+= -2
  }
  // Rediriger l'utilisateur vers la prochaine question du quiz
  window.location.href = "résultats.html";
}
