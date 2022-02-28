import { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import Tour from "./components/tours/Tour";
import url from "./api";
import { ITour } from "./components/tours/Tour";

function App() {
  const [data, setData] = useState([]);

  const callUserApi = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      if (response && response.status === 200) {
        setData(response.data);
      }
    } catch (error: any) {
      alert(error.message || error);
    }
  };

  useEffect(() => {
    callUserApi();
  }, []);

  const onRemoveTour = (id: string) => {
    const newTours = data.filter((item: ITour) => item?.id !== id);
    setData(newTours);
  };
  if (data.length === 0) {
    return (
      <div className="wrapper">
        <h2 className="no-tour">There's no tours left</h2>
        <button className="refresh-btn" onClick={() => callUserApi()}>
          Refesh
        </button>
      </div>
    );
  }
  return (
    <div className="app">
      <h1>Our Tours</h1>
      <div className="app__container">
        {data &&
          data.length > 0 &&
          data.map((item: ITour) => {
            return (
              <Tour key={item.id} tourData={item} onRemoveTour={onRemoveTour} />
            );
          })}
      </div>
    </div>
  );
}

export default App;
