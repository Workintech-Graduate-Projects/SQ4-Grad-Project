import React, { useState } from "react";
import axios from "axios";

function CalculateCreditScore(sectorScore, positionScore, experienceScore) {
  const sectorWeight = 0.3;
  const positionWeight = 0.4;
  const experienceWeight = 0.2;

  const creditScore =
    sectorScore * sectorWeight +
    positionScore * positionWeight -
    experienceScore * experienceWeight;

  return creditScore;
}

function getPreference(creditScore) {
  if (creditScore >= 80) {
    return creditScore >= 90 ? 1 : 2;
  } else if (creditScore >= 60 && creditScore < 80) {
    return creditScore >= 70 ? 3 : 4;
  } else {
    return 5;
  }
}

function CreditScoreCalculator({ obj }) {
  const [sectorScore, setSectorScore] = useState(0);
  const [positionScore, setPositionScore] = useState(0);
  const [experienceScore, setExperienceScore] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [preference, setPreference] = useState(0);

  const newObj = obj;

  const handleCalculate = () => {
    const calculatedCreditScore = CalculateCreditScore(
      sectorScore,
      positionScore,
      experienceScore
    );
    const calculatedPreference = getPreference(calculatedCreditScore);

    newObj.creditScore = calculatedCreditScore;
    newObj.preference = calculatedPreference;
    console.log(newObj);
    setCreditScore(calculatedCreditScore);
    setPreference(calculatedPreference);
  };
  async function handleOnclick() {
    try {
      await axios.post("http://localhost:9000/users", { newObj });
      console.log("post işe yaradı");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 class="mb-5 mt-0 text-4xl font-medium leading-tight text-primary underline underline-offset-8" >Kredi Puanı Hesaplama</h1>
      <div>
        <label class="mb-2 mt-0 text-base  font-medium leading-tight text-primary " >Sektör Puanı : </label>
        <input 
          type="number"
          value={sectorScore}
          onChange={(e) => setSectorScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label class="mb-2 mt-0 text-base font-medium leading-tight text-primary" >Pozisyon Puanı : </label>
        <input 
          type="number"
          value={positionScore}
          onChange={(e) => setPositionScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label class="mb-2 mt-0 text-base font-medium leading-tight text-primary" >Deneyim Puanı : </label>
        <input
          type="number"
          value={experienceScore}
          onChange={(e) => setExperienceScore(Number(e.target.value))}
        />
      </div>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-7 mb-7 border-b-4 border-blue-700 hover:border-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition  delay-100  hover:scale-110 duration-300" onClick={handleCalculate}>Hesapla</button>
      <div>
        <p class="mb-2 mt-0 text-base font-medium leading-tight text-primary" >Kredi Puanı : {creditScore}</p>
        <p class="mb-2 mt-0 text-base font-medium leading-tight text-primary" >Tercih Sırası : {preference}</p>
      </div>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-7 mb-7 border-b-4 border-blue-700 hover:border-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition  delay-100  hover:scale-110 duration-300" onClick={handleOnclick}>PipeDrive'a Aktar </button>
    </div>
  );
}

export default CreditScoreCalculator;
