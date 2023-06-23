export default function creditScoreCalculator(obj) {
  const newObj = obj;

  const sectors = [
    { veri: "Araştırma ve Geliştirme", sayi: 85 },
    { veri: "Bilgi Teknolojileri ve Medya", sayi: 80 },
    { veri: "Diğer", sayi: 70 },
    { veri: "Diğer (kamu hariç)", sayi: 70 },
    { veri: "Eğitim Hizmetleri", sayi: 90 },
    { veri: "Finans ve Sigorta", sayi: 80 },
    { veri: "Gayrimenkul ve kiralama ve kiralama", sayi: 75 },
    { veri: "İdari ve destek hizmetleri", sayi: 70 },
    { veri: "İnşaat", sayi: 65 },
    { veri: "Kamu", sayi: 85 },
    { veri: "Kamu hizmetleri (elektrik gaz su)", sayi: 85 },
    { veri: "Konaklama ve yemek hizmetleri", sayi: 65 },
    { veri: "Madencilik", sayi: 60 },
    { veri: "Ormancılık ve Balıkçılık", sayi: 70 },
    { veri: "Perakende satış", sayi: 65 },
    { veri: "Sağlık ve Sosyal Yardım", sayi: 90 },
    { veri: "Sanat eğlence ve rekreasyon", sayi: 60 },
    { veri: "Tarım", sayi: 70 },
    { veri: "Toptan ticaret", sayi: 70 },
    { veri: "Ulaşım ve Depolama", sayi: 75 },
    { veri: "Üretim", sayi: 75 },
  ];

  const positions = [
    { isim: "Aktör", puan: 65 },
    { isim: "Analist", puan: 52 },
    { isim: "Araba tamircisi", puan: 60 },
    { isim: "Araştırmacı bilim adamı", puan: 70 },
    { isim: "Aşçı", puan: 75 },
    { isim: "Asistan Avukat", puan: 50 },
    { isim: "Bakım Teknisyeni", puan: 55 },
    { isim: "Barista", puan: 48 },
    { isim: "Başkan", puan: 52 },
    { isim: "Başkan Vekili", puan: 95 },
    { isim: "Bilgi Teknolojileri Yöneticisi", puan: 85 },
    { isim: "Çağrı Merkezi Temsilcisi", puan: 72 },
    { isim: "CEO", puan: 50 },
    { isim: "CFO", puan: 95 },
    { isim: "Çiftlik Süpervizörü", puan: 93 },
    { isim: "COO", puan: 90 },
    { isim: "CTO", puan: 93 },
    { isim: "Danışman", puan: 92 },
    { isim: "Depo çalışanı", puan: 48 },
    { isim: "Diğer", puan: 55 },
    { isim: "Doktor", puan: 65 },
    { isim: "Eczacı", puan: 65 },
    { isim: "Eczane teknisyeni", puan: 70 },
    { isim: "Elektrik mühendisi", puan: 55 },
    { isim: "Emlakçı", puan: 75 },
    { isim: "Fast food ekibi üyesi", puan: 65 },
    { isim: "Finans yöneticisi", puan: 45 },
    { isim: "Finansal Analist", puan: 65 },
    { isim: "Garson", puan: 75 },
    { isim: "Genç analist", puan: 48 },
    { isim: "Genel Müdür", puan: 70 },
    { isim: "Genel Müdür Yardımcısı", puan: 84 },
    { isim: "Grafik tasarımcı", puan: 90 },
    { isim: "Güvenlik görevlisi", puan: 70 },
    { isim: "Halkla ilişkiler sorumlusu", puan: 48 },
    { isim: "Hemşire", puan: 75 },
    { isim: "Hesap yönetici", puan: 48 },
    { isim: "İK Yöneticisi", puan: 62 },
    { isim: "İnşaat işçisi", puan: 77 },
    { isim: "İş Geliştirme Müdürü", puan: 75 },
    { isim: "İş Geliştirme Yöneticisi", puan: 73 },
    { isim: "Jeolog", puan: 63 },
    { isim: "Kasiyer", puan: 60 },
    { isim: "Kişisel asistan", puan: 50 },
    { isim: "Kıdemli analist", puan: 70 },
    { isim: "Kıdemli Başkan Yardımcısı", puan: 65 },
    { isim: "Kıdemli BT Yöneticisi", puan: 88 },
    { isim: "Kıdemli finans yöneticisi", puan: 67 },
    { isim: "Kıdemli Hesap Yöneticisi", puan: 70 },
    { isim: "Kıdemli İK Yöneticisi", puan: 67 },
    { isim: "Kıdemli İş Geliştirme Yöneticisi", puan: 60 },
    { isim: "Kıdemli mühendis", puan: 68 },
    { isim: "Kıdemli Operasyon Yöneticisi", puan: 68 },
    { isim: "Kıdemli Pazarlama Yöneticisi", puan: 68 },
    { isim: "Kıdemli Proje Yöneticisi", puan: 65 },
    { isim: "Kıdemli Satış Yöneticisi", puan: 72 },
    { isim: "Kıdemli tedarik yöneticisi", puan: 65 },
    { isim: "Kıdemli Yönetici", puan: 60 },
    { isim: "Kuaför", puan: 80 },
    { isim: "Lojistik Yöneticisi", puan: 60 },
    { isim: "Maden mühendisi", puan: 72 },
    { isim: "Mağaza Müdürü", puan: 65 },
    { isim: "Montaj hattı işçisi", puan: 65 },
    { isim: "Müdür", puan: 45 },
    { isim: "Müdür Yardımcısı", puan: 82 },
    { isim: "Muhasebe Müdürü", puan: 75 },
    { isim: "Mühendis", puan: 72 },
    { isim: "Müşteri Destek Yöneticisi", puan: 67 },
    { isim: "Müşteri Hizmetleri Temsilcisi", puan: 75 },
    { isim: "Ofis Yöneticisi", puan: 55 },
    { isim: "Öğretmen", puan: 60 },
    { isim: "Okul Müdürü", puan: 65 },
    { isim: "operasyon Sorumlusu", puan: 45 },
    { isim: "Operasyon Yöneticisi", puan: 73 },
    { isim: "Pazarlama Müdürü", puan: 63 },
    { isim: "Pazarlama Yöneticisi", puan: 70 },
    { isim: "Perakende satış sorumlusu", puan: 75 },
    { isim: "Portföy yönetim asistanı", puan: 50 },
    { isim: "Proje Müdürü", puan: 48 },
    { isim: "Resepsiyonist", puan: 75 },
    { isim: "Restaurant yöneticisi", puan: 55 },
    { isim: "Satınalma Müdürü", puan: 45 },
    { isim: "Satış Müdürü", puan: 65 },
    { isim: "Satış Yöneticisi", puan: 70 },
    { isim: "Sigorta Acenta Operatörü", puan: 60 },
    { isim: "Sosyal Hizmet Uzmanı", puan: 45 },
    { isim: "Stajyer Avukat", puan: 50 },
    { isim: "Stajyer Mühendis", puan: 85 },
    { isim: "Takım Lideri", puan: 65 },
    { isim: "Taksi sürücüsü", puan: 70 },
    { isim: "Tedarik yöneticisi", puan: 45 },
    { isim: "Tesis Müdürü", puan: 55 },
    { isim: "Tesis operatörü", puan: 70 },
    { isim: "Teslimat Sürücüsü", puan: 70 },
    { isim: "Tıp asistanı", puan: 45 },
    { isim: "Üretim müdürü", puan: 42 },
    { isim: "Veri giriş elemanı", puan: 60 },
    { isim: "Yazılım geliştirici", puan: 58 },
    { isim: "Yönetici", puan: 85 },
    { isim: "Yönetici Asistanı", puan: 62 },
  ];

  let sectorScore = 70;

  for (let i = 0; i < sectors.length; i++) {
    if (sectors[i].veri === newObj.sektor) {
      sectorScore = sectors[i].sayi;
    }
  }

  let positionScore = 55;

  for (let i = 0; i < positions.length; i++) {
    if (newObj.title === positions[i].isim) {
      positionScore = positions[i].puan;
    }
  }

  let experienceScore = newObj.tecrube;

  function calculateCreditScore(sectorScore, positionScore, experienceScore) {
    const sectorWeight = 0.5;
    const positionWeight = 0.7;
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
  const creditScore = calculateCreditScore(
    sectorScore,
    positionScore,
    experienceScore
  );
  const prefrence = getPreference(creditScore);
  /*const handleCalculate = () => {
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
    };*/

  /*async function handleOnclick() {
      try {
        await axios.post("http://localhost:9000/users", { newObj });
        console.log("post işe yaradı");
      } catch (error) {
        console.log(error);
      }
    }*/
  const returnObj = { creditScore: creditScore, preference: prefrence };
  return returnObj;
}
