console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.results);
  const result = data.results.map(({ name, birth_year }) => ({
    name,
    birth_year,
  }));
  console.log(result);
  console.log("R2-2D's eyes are " + data.results[2].eye_color);
}

fetchData();

// async function fetchData() {
//   try {
//     const response = await fetch(url);

//     if (response.ok) {
//       // Success (Good Response)
//       const data = await response.json();
//       console.log(data.results);
//     } else {
//       // Failure (Bad Response)
//       console.error("Bad Response");
//     }
//   } catch (error) {
//     // Failure (Network error, etc)
//     console.error("An Error occurred");
//   }
// }

// fetchData();
