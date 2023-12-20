import { useState} from "react";
import countriesJson from "./countries.json";

import TopPage from './pages/TopPage';
import './App.css';

function App() {

  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    data: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  const getCountryData = () => {
      fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }


  return (
    <div >
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
    </div>
  );
}

export default App;
