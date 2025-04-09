const spotlightSection = document.getElementById("spotlights");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const members = data.members;

    
    const qualifiedMembers = members.filter(member =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    
    const spotlightCount = Math.min(3, shuffled.length);
    const selected = shuffled.slice(0, spotlightCount);

    // Gera o HTML para cada um
    selected.forEach(member => {
      const spotlight = document.createElement("div");
      spotlight.classList.add("spotlight");

      spotlight.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="Imagem de ${member.name}">
        <p><strong>Endereço:</strong> ${member.address}</p>
        <p><strong>Telefone:</strong> ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visite o site</a></p>
      `;

      spotlightSection.appendChild(spotlight);
    });
  } catch (error) {
    console.error("Erro ao carregar os dados dos membros:", error);
  }
}

loadSpotlights();
