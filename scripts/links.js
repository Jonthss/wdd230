const baseURL = "https://jonthss.github.io/wdd230/";
const linksURL = "https://jonthss.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);  
  }
  
  function displayLinks(weeks) {
    const activitiesDiv = document.getElementById("learning-activities"); 
    const ul = document.createElement("ul");
  
    weeks.forEach(week => {
      const li = document.createElement("li");
      li.textContent = `${week.week}: `;
  
      week.links.forEach((link, index) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.title;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
  
        li.appendChild(a);
  
        if (index < week.links.length - 1) {
          li.appendChild(document.createTextNode(" | "));
        }
      });
  
      ul.appendChild(li);
    });
  
    activitiesDiv.appendChild(ul);
  }
  
  getLinks();