function updatePoint() {
  const points = document.querySelector(".points");
  points.innerHTML = "";

  Player.allInstances.forEach((p) => {
    points.innerHTML += `<p style="color: ${p.color};">${p.name}: ${p.win}</p>`;
  });
}
