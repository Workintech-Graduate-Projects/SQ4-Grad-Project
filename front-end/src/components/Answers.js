import CreditScoreCalculator from "./calculating/calculate";


function Answers({ item }) {
  const answers = item.answers;
  const obj = {};
  answers.map((answer) => {
    const objKey = answer.field.ref;
    const a = answer.type;
    const objValue = answer[a];
    obj[objKey] = objValue;
    if (a === "choice") {
      obj[objKey] = objValue.label;
  }
  });
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return (
    <div style={{ marginTop: "20px", border: "1px solid black" }} key={item.id}>
      {keys.map((key, index) => {

        return (
          <p>
            {key}:{values[index]}
          </p>
        );
      })}
      <CreditScoreCalculator obj={obj} />
    </div>
  );
}
export default Answers;
