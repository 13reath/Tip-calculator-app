import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");

  const actualTip = customTip !== "" ? customTip : tip;

  // Вычисляем сумму чаевых
  const tipAmount =
    bill > 0 && person > 0 && actualTip > 0
      ? (bill * actualTip) / (100 * person)
      : 0;

  // Вычисляем общую сумму на человека
  const totalPerPerson = bill > 0 && person > 0 ? bill / person + tipAmount : 0;

  function handleReset() {
    setBill("");
    setPerson("");
    setTip("");
    setCustomTip("");
  }

  return (
    <main>
      <div className="card">
        <div className="card-bill">
          <CardLabel label="Bill" />
          <CardInput icon="dollar" value={bill} setValue={setBill} />
        </div>

        <div className="card-tip">
          <CardLabel label="Select Tip %" />
          <div className="card-buttons-box">
            <Button text="5%" setValue={setTip} value={5} />
            <Button text="10%" setValue={setTip} value={10} />
            <Button text="15%" setValue={setTip} value={15} />
            <Button text="25%" setValue={setTip} value={25} />
            <Button text="50%" setValue={setTip} value={50} />
            <input
              type="number"
              placeholder="Custom"
              value={customTip}
              onChange={(e) => setCustomTip(+e.target.value)}
            />
          </div>
        </div>

        <div className="card-people">
          <CardLabel label="Number of People" />
          <CardInput icon="person" value={person} setValue={setPerson} />
        </div>
        <div className="card-receipt">
          <div className="card-receipt-tip">
            <div className="card-receipt-text">
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <h1>${tipAmount.toFixed(2)}</h1>
          </div>
          <div className="card-receipt-total">
            <div className="card-receipt-text">
              <p>Total</p>
              <span>/ person</span>
            </div>
            <h1>${totalPerPerson.toFixed(2)}</h1>
          </div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </main>
  );
}

function CardLabel({ label }) {
  return <label className="card-label">{label}</label>;
}

function CardInput({ icon, value, setValue }) {
  return (
    <div className="card-bill-input">
      <img
        src={process.env.PUBLIC_URL + `/images/icon-${icon}.svg`}
        alt={icon}
      />
      <input
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}

function Button({ text, value, setValue }) {
  return (
    <button onClick={() => setValue(value)} className="card-button">
      {text}
    </button>
  );
}

export default App;
