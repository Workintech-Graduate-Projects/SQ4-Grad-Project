import axios from "axios";
import Answers from "./Answers";
import { useEffect, useState } from "react";

function TypeFormFetcher() {
  const [data, setData] = useState(null);

  function handleOnClick() {
    console.log("handleclik Çalıştı");
    axios
      .get("http://localhost:9000/typeformfetch")
      .then((res) => {
        setData(res.data.items);
        console.log(res);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }

  console.log("setData", data);
  return (
    <>
      <button onClick={handleOnClick}>Type Formdan Data Çek</button>
      {data === null ? (
        <></>
      ) : (
        data.map((item) => {
          return <Answers item={item} />;
        })
      )}
    </>
  );
}
export default TypeFormFetcher;
