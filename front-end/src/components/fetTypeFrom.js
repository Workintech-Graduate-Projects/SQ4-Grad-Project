import axios from "axios";
import Answers from "./Answers";
import { useState } from "react";

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
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-7 mb-7 border-b-4 border-blue-700 hover:border-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition  delay-100  hover:scale-110 duration-300" onClick={handleOnClick}>Typeform'dan Data Çek</button>
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
