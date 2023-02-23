import { useState, useEffect } from "react";
import "./App.css";
// import countriesJson from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data.reverse());
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />
      {countries && 
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            
            <Route path="/:countryCode"  element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
}
</div>
  );
}

export default App;
