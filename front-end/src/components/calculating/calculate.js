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
  const newObj = obj;

  const [sectorScore, setSectorScore] = useState(newObj.sektor);
  const [positionScore, setPositionScore] = useState(0);
  const [experienceScore, setExperienceScore] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [preference, setPreference] = useState(0);

  setSectorScore({
    "Araştırma ve Geliştirme": 85,
    "Bilgi Teknolojileri ve Medya": 80,
    Diğer: 70,
    "Diğer (kamu hariç)": 70,
    "Eğitim Hizmetleri": 90,
    "Finans ve Sigorta": 80,
    "Gayrimenkul ve kiralama ve kiralama": 75,
    "İdari ve destek hizmetleri": 70,
    İnşaat: 65,
    Kamu: 85,
    "Kamu hizmetleri (elektrik gaz su)": 85,
    "Konaklama ve yemek hizmetleri": 65,
    Madencilik: 60,
    "Ormancılık ve Balıkçılık": 70,
    "Perakende satış": 65,
    "Sağlık ve Sosyal Yardım": 90,
    "Sanat eğlence ve rekreasyon": 60,
    Tarım: 70,
    "Toptan ticaret": 70,
    "Ulaşım ve Depolama": 75,
    Üretim: 75,
  });

  setPositionScore({
    Aktör: 65,
    Analist: 52,
    "Araba tamircisi": 60,
    "Araştırmacı bilim adamı": 70,
    Aşçı: 75,
    "Asistan Avukat": 50,
    "Bakım Teknisyeni": 55,
    Barista: 48,
    Başkan: 52,
    "Başkan Vekili": 95,
    "Bilgi Teknolojileri Yöneticisi": 85,
    "Çağrı Merkezi Temsilcisi": 72,
    CEO: 50,
    CFO: 95,
    "Çiftlik Süpervizörü": 93,
    COO: 90,
    CTO: 93,
    Danışman: 92,
    "Depo çalışanı": 48,
    Diğer: 55,
    Doktor: 65,
    Eczacı: 65,
    "Eczane teknisyeni": 70,
    "Elektrik mühendisi": 55,
    Emlakçı: 75,
    "Fast food ekibi üyesi": 65,
    "Finans yöneticisi": 45,
    "Finansal Analist": 65,
    Garson: 75,
    "Genç analist": 48,
    "Genel Müdür": 70,
    "Genel Müdür Yardımcısı": 84,
    "Grafik tasarımcı": 90,
    "Güvenlik görevlisi": 70,
    "Halkla ilişkiler sorumlusu": 48,
    Hemşire: 75,
    "Hesap yönetici": 48,
    "İK Yöneticisi": 62,
    "İnşaat işçisi": 77,
    "İş Geliştirme Müdürü": 75,
    "İş Geliştirme Yöneticisi": 73,
    Jeolog: 63,
    Kasiyer: 60,
    "Kişisel asistan": 50,
    "Kıdemli analist": 70,
    "Kıdemli Başkan Yardımcısı": 65,
    "Kıdemli BT Yöneticisi": 88,
    "Kıdemli finans yöneticisi": 67,
    "Kıdemli Hesap Yöneticisi": 70,
    "Kıdemli İK Yöneticisi": 67,
    "Kıdemli İş Geliştirme Yöneticisi": 60,
    "Kıdemli mühendis": 68,
    "Kıdemli Operasyon Yöneticisi": 68,
    "Kıdemli Pazarlama Yöneticisi": 68,
    "Kıdemli Proje Yöneticisi": 65,
    "Kıdemli Satış Yöneticisi": 72,
    "Kıdemli tedarik yöneticisi": 65,
    "Kıdemli Yönetici": 60,
    Kuaför: 80,
    "Lojistik Yöneticisi": 60,
    "Maden mühendisi": 72,
    "Mağaza Müdürü": 65,
    "Montaj hattı işçisi": 65,
    Müdür: 45,
    "Müdür Yardımcısı": 82,
    "Muhasebe Müdürü": 75,
    Mühendis: 72,
    "Müşteri Destek Yöneticisi": 67,
    "Müşteri Hizmetleri Temsilcisi": 75,
    "Ofis Yöneticisi": 55,
    Öğretmen: 60,
    "Okul Müdürü": 65,
    "operasyon Sorumlusu": 45,
    "Operasyon Yöneticisi": 73,
    "Pazarlama Müdürü": 63,
    "Pazarlama Yöneticisi": 70,
    "Perakende satış sorumlusu": 75,
    "Portföy yönetim asistanı": 50,
    "Proje Müdürü": 48,
    Resepsiyonist: 75,
    "Restaurant yöneticisi": 55,
    "Satınalma Müdürü": 45,
    "Satış Müdürü": 65,
    "Satış Yöneticisi": 70,
    "Sigorta Acenta Operatörü": 60,
    "Sosyal Hizmet Uzmanı": 45,
    "Stajyer Avukat": 50,
    "Stajyer Mühendis": 85,
    "Takım Lideri": 65,
    "Taksi sürücüsü": 70,
    "Tedarik yöneticisi": 45,
    "Tesis Müdürü": 55,
    "Tesis operatörü": 70,
    "Teslimat Sürücüsü": 70,
    "Tıp asistanı": 45,
    "Üretim müdürü": 42,
    "Veri giriş elemanı": 60,
    "Yazılım geliştirici": 58,
    Yönetici: 85,
    "Yönetici Asistanı": 62,
  });

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
      <h1 class="mb-5 mt-0 text-4xl font-medium leading-tight text-primary underline underline-offset-8">
        Kredi Puanı Hesaplama
      </h1>
      <div>
        <label class="mb-2 mt-0 text-base  font-medium leading-tight text-primary ">
          Sektör Puanı :{" "}
        </label>
        {}
      </div>
      <div>
        <label class="mb-2 mt-0 text-base font-medium leading-tight text-primary">
          Pozisyon Puanı :{" "}
        </label>
        <input
          type="number"
          value={positionScore}
          onChange={(e) => setPositionScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label class="mb-2 mt-0 text-base font-medium leading-tight text-primary">
          Deneyim Puanı :{" "}
        </label>
        <input
          type="number"
          value={experienceScore}
          onChange={(e) => setExperienceScore(Number(e.target.value))}
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-7 mb-7 border-b-4 border-blue-700 hover:border-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition  delay-100  hover:scale-110 duration-300"
        onClick={handleCalculate}
      >
        Hesapla
      </button>
      <div>
        <p class="mb-2 mt-0 text-base font-medium leading-tight text-primary">
          Kredi Puanı : {creditScore}
        </p>
        <p class="mb-2 mt-0 text-base font-medium leading-tight text-primary">
          Tercih Sırası : {preference}
        </p>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-7 mb-7 border-b-4 border-blue-700 hover:border-blue-500 shadow-lg shadow-blue-500/50 rounded-full transition  delay-100  hover:scale-110 duration-300"
        onClick={handleOnclick}
      >
        PipeDrive'a Aktar{" "}
      </button>
    </div>
  );
}

export default CreditScoreCalculator;
