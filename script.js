function corrigerQuiz() {
  let score = 0;
  const bonnesReponses = {
    q1: "c",
    q2: "b",
    q3: "b"
  };
  let fautes = 0;
  for (let q in bonnesReponses) {
    const rep = document.querySelector(`input[name="${q}"]:checked`);
    if (rep && rep.value === bonnesReponses[q]) score++;
    else fautes++;
  }
  const res = document.getElementById("resultatZone");
  if (score === 3) {
    res.innerHTML = "🎉 Bravo, tu as tout bon !";
  } else {
    res.innerHTML = `😬 Tu as fait ${fautes} erreur(s). Essaie encore !`;
  }
}