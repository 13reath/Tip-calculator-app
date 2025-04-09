import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");

  // Вычисляемые значения
  const actualTip = getActualTip(customTip, tip);
  const tipAmount = calculateTipAmount(bill, person, actualTip);
  const totalPerPerson = calculateTotalPerPerson(bill, person, tipAmount);

  // Обработчики
  const handleReset = () => {
    setBill("");
    setPerson("");
    setTip("");
    setCustomTip("");
  };

  return (
    <main>
      <div className="card">
        <BillSection bill={bill} setBill={setBill} />

        <TipSection
          tip={tip}
          setTip={setTip}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />

        <PeopleSection person={person} setPerson={setPerson} />

        <ReceiptSection
          tipAmount={tipAmount}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}

// Вспомогательные функции
function getActualTip(customTip, tip) {
  return customTip !== "" ? customTip : tip;
}

function calculateTipAmount(bill, person, tipPercent) {
  if (!bill || !person || !tipPercent) return 0;
  return (bill * tipPercent) / (100 * person);
}

function calculateTotalPerPerson(bill, person, tipAmount) {
  if (!bill || !person) return 0;
  return bill / person + tipAmount;
}

// Компоненты секций
function BillSection({ bill, setBill }) {
  return (
    <div className="card-bill">
      <CardLabel label="Bill" />
      <CardInput icon="dollar" value={bill} setValue={setBill} />
    </div>
  );
}

function TipSection({ tip, setTip, customTip, setCustomTip }) {
  const tipValues = [5, 10, 15, 25, 50];

  return (
    <div className="card-tip">
      <CardLabel label="Select Tip %" />
      <div className="card-buttons-box">
        {tipValues.map((value) => (
          <Button
            key={value}
            text={`${value}%`}
            setValue={setTip}
            value={value}
            active={tip === value && !customTip}
          />
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => setCustomTip(Number(e.target.value) || "")}
        />
      </div>
    </div>
  );
}

function PeopleSection({ person, setPerson }) {
  return (
    <div className="card-people">
      <CardLabel label="Number of People" />
      <CardInput icon="person" value={person} setValue={setPerson} />
    </div>
  );
}

function ReceiptSection({ tipAmount, totalPerPerson, onReset }) {
  return (
    <div className="card-receipt">
      <ReceiptItem label="Tip" value={tipAmount} subtext="/ person" />
      <ReceiptItem label="Total" value={totalPerPerson} subtext="/ person" />
      <button
        className="reset-button"
        onClick={onReset}
        disabled={!tipAmount && !totalPerPerson}
      >
        Reset
      </button>
    </div>
  );
}

function ReceiptItem({ label, value, subtext }) {
  return (
    <div className={`card-receipt-${label.toLowerCase().replace(" ", "-")}`}>
      <div className="card-receipt-text">
        <p>{label}</p>
        <span>{subtext}</span>
      </div>
      <h1>${value.toFixed(2)}</h1>
    </div>
  );
}

// Базовые компоненты
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
        min="0"
        onChange={(e) => setValue(Number(e.target.value) || "")}
      />
    </div>
  );
}

function Button({ text, value, setValue, active }) {
  return (
    <button
      onClick={() => setValue(value)}
      className={`card-button ${active ? "active" : ""}`}
    >
      {text}
    </button>
  );
}

export default App;
