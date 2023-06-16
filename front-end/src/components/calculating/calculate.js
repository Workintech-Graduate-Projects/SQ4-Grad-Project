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
      <h1>Kredi Puanı Hesaplama</h1>
      <div>
        <label>Sektör Puanı:</label>
        <input
          type="number"
          value={sectorScore}
          onChange={(e) => setSectorScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Pozisyon Puanı:</label>
        <input
          type="number"
          value={positionScore}
          onChange={(e) => setPositionScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Deneyim Puanı:</label>
        <input
          type="number"
          value={experienceScore}
          onChange={(e) => setExperienceScore(Number(e.target.value))}
        />
      </div>
      <button onClick={handleCalculate}>Hesapla</button>
      <div>
        <p>Kredi Puanı: {creditScore}</p>
        <p>Tercih Sırası: {preference}</p>
      </div>
      <button onClick={handleOnclick}>PipeDrive Aktar </button>
    </div>
  );
}

export default CreditScoreCalculator;
