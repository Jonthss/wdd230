// Base URL for GitHub Pages or your repository
const baseURL = "https://jonthss.github.io/wdd230/";

// Link to the JSON data
const linksURL = "https://jonthss.github.io/wdd230/data/links.json";

// Function to fetch links data
async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

// Function to dynamically display links
function displayLinks(weeks) {
  const weeksList = document.getElementById('weeks'); // Get the container where links will be added

  // Clear the current content of the container
  weeksList.innerHTML = '';

  weeks.forEach(week => {
    // Create a list item for each week
    const weekItem = document.createElement('li');
    const weekTitle = document.createElement('strong');
    weekTitle.textContent = week.week + ":"; // Week number
    weekItem.appendChild(weekTitle);

    // Create an unordered list for the week's links
    const linkList = document.createElement('ul');

    week.links.forEach(link => {
      // Create a list item for each link
      const linkItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.href = baseURL + link.url; // Link URL
      linkElement.textContent = link.title; // Link title
      linkItem.appendChild(linkElement);
      linkList.appendChild(linkItem);
    });

    weekItem.appendChild(linkList);
    weeksList.appendChild(weekItem);
  });
}

// Call the function to get the links data when the page loads
getLinks();
