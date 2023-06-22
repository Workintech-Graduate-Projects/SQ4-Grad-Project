import axios from "axios";
import Answers from "./Answers";
import { useState } from "react";
import PataGrid from "./DatagridDeneme";

function TypeFormFetcher() {
  const [allAnswers, setAllAnswers] = useState(null);

  function handleOnClick() {
    console.log("handleclik Çalıştı");
    axios
      .get("http://localhost:9000/typeformfetch")
      .then((res) => {
        setAllAnswers(res.data.items);
        console.log("allAnswers:", res.data.items);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }
  return (
    <>

      <button onClick={handleOnClick}>Type Formdan Data Çek</button>
      {/*allAnswers === null ? (

      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-7 mb-7 border-b-4 border-blue-700 hover:border-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition  delay-100  hover:scale-110 duration-300" onClick={handleOnClick}>Typeform'dan Data Çek</button>
      {data === null ? (

        <></>
      ) : (
        allAnswers.map((item) => {
          return <Answers item={item} />;
        })
      )*/}
      {allAnswers === null ? <></> : <PataGrid allAnswers={allAnswers} />}
    </>
  );
}
export default TypeFormFetcher;
