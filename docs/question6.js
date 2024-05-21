// Actions based on user's selection
  let act = /*value based on user selection*/;
  if (act === 1) {
    hggsp+= 1;
  }
  if (act === 2) {
    svt+= 1;
    math+= 1;
    phys+= 1;
  }
  if (act === 3) {
    nsi+= 1;
  }
  if (act === 4) {
    hlp+= 1;
  // Rediriger l'utilisateur vers la prochaine question du quiz
  window.location.href = "question7.html";
}
