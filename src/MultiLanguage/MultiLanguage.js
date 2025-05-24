import React from "react";
import { useState } from "react";
import MultiLanguageCard from "./MultiLanguageCard";
const MultiLanguage = () => {
  const data = [
    {
      id: "1",
      title: "English",
      desc: "This is English Language",
    },
    {
      id: "2",
      title: "हिंदी",
      desc: "यह हिंदी भाषा है",
    },
    {
      id: "3",
      title: "Español",
      desc: "Este es el idioma español",
    },
    {
      id: "4",
      title: "Latina",
      desc: "Haec est lingua Latina",
    },
  ];
  const [selectedData, setSelectedData] = useState({});
  const handleSelectedOption = (id) => {
    const index = data.findIndex((f) => f.id === id);
    if (index != -1) {
      setSelectedData(data[index]);
    }
  };

  return (
    <div className="multil-language-container">
      <select
        onChange={(event) => {
          handleSelectedOption(event.target.value);
        }}
      >
        {data.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.title}
          </option>
        ))}
      </select>
      <MultiLanguageCard data={selectedData} />
    </div>
  );
};

export default MultiLanguage;
