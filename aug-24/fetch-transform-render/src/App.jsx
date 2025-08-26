import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [regions, setRegins] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,population,area"
    )
      .then((res) => res.json())
      .then((countries) => {
        const data = {};
        countries.forEach((country) => {
          if (!country.region) return;

          if (!data[country.region])
            data[country.region] = { populations: [], densities: [] };

          data[country.region]["populations"].push(country.population || 0);

          if (country.area > 0) {
            data[country.region]["densities"].push(
              country.population / country.area
            );
          }
        });

        console.log("data", data);

        const result = Object.entries(data).map(
          ([region, { populations, densities }]) => {
            return {
              region,
              population: populations.reduce((a, b) => a + b, 0),
              countryCount: populations.length,
              avgDensity:
                densities.length > 0
                  ? densities.reduce((a, b) => a + b, 0) / densities.length
                  : null,
            };
          }
        );

        setRegins(result);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Region Stats</h1>
        <ul>
          {regions.map((r) => (
            <li key={r.region}>
              <strong>{r.region}</strong> — Countries: {r.countryCount},
              Population: {r.totalPopulation}, Avg Density:{" "}
              {r.avgDensity.toFixed(2) ?? "N/A"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
