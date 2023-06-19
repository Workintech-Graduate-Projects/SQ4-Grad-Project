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
