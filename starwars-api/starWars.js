const apiUrl = 'https://swapi.dev/api/people';

async function fetchStarWarsData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function getCharactersInfo() {
  const characters = [];
  try {
    const data = await fetchStarWarsData(apiUrl);
    if (data && data.results) {
      const charactersData = data.results.slice(0, 10); 
      for (const character of charactersData) {
        const homeworldData = await fetchStarWarsData(character.homeworld);
        const characterObj = {
          name: character.name,
          height: character.height,
          hair: character.hair_color,
          planet: {
            name: homeworldData.name,
            population: homeworldData.population,
          },
        };
        characters.push(characterObj);
      }
    }
  } catch (error) {
    console.error('Error getting characters information:', error);
  }
  return characters;
}

async function displayCharactersTable() {
    const charactersInfo = await getCharactersInfo();
    const tableBody = document.getElementById('charactersTableBody');

    charactersInfo.forEach(character => {
      const row = tableBody.insertRow();
      const nameCell = row.insertCell(0);
      const heightCell = row.insertCell(1);
      const hairColorCell = row.insertCell(2);
      const planetCell = row.insertCell(3);
      const populationCell = row.insertCell(4);

      nameCell.textContent = character.name;
      heightCell.textContent = character.height;
      hairColorCell.textContent = character.hair;
      planetCell.textContent = character.planet.name;
      populationCell.textContent = character.planet.population;
    });
  }

  displayCharactersTable();
