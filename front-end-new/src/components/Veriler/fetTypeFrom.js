import axios from "axios";

import { useState } from "react";
import PataGrid from "./DatagridDeneme";

function TypeFormFetcher() {
  const [allAnswers, setAllAnswers] = useState(null);

  async function handleOnClick() {
    console.log("handleclik Çalıştı");
    await axios
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
      <button
        onClick={handleOnClick}
        className="py-2 px-4 shadow-xl bg-blue-500 text-white font-semibold rounded-full mt-4 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        TypeForm'dan Data Çek
      </button>

      {allAnswers === null ? <></> : <PataGrid allAnswers={allAnswers} />}
    </>
  );
}
export default TypeFormFetcher;
