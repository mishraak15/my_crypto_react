import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loader from "./Loader";
import Cards from "./Cards";
import CompleteData from "./CompleteData";

function App() {
  const api_url = "https://api.coingecko.com/api/v3/coins/";
  const [inp, setInp] = useState("");
  const [statusCode, setStatusCode] = useState("0");
  const [data, setData] = useState({});
  const [completeInfo, setCompleteInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  function changeHandler(event) {
    setInp(event.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    fetchData();
  }

  async function fetchData() {
    setLoading(true);
    const x = inp.trim().toLowerCase().replace(" ", "-");
    try {
      const output = await axios.get(`${api_url}${x}`);
      setData(output);
      console.log(output);
      setStatusCode("200");
    } catch (error) {
      setStatusCode("404");
      setData({});
      console.log(error);
      alert("Error!! Please have a stable internet connection.");
    }
    setLoading(false);
  }

  async function fetchAllData() {
    setLoading(true);
    try {
      const output = await axios.get(api_url);
      setCompleteInfo(output.data);
      setStatusCode("200");
    } catch (error) {
      setStatusCode("404");
      setCompleteInfo([]);
      console.log(error);
      alert("Error!! Please have a stable internet connection.");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name=""
          onChange={changeHandler}
          value={inp}
          placeholder="Enter any Crypto to search"
        />
        <button>Search</button>
      </form>
      <div className="card-container">
        {loading ? (
          <Loader />
        ) : inp === "" ? (
          <CompleteData completeInfo={completeInfo} statusCode={statusCode} />
        ) : (
          <Cards data={data} statusCode={statusCode} />
        )}
      </div>
    </div>
  );
}

export default App;
