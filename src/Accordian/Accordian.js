import React from 'react';
import { useState } from "react";
import './Accordian.css'
import AccordianList from './AccordianList';
const Accordian = () => {
    const [data, setData] = useState([
        {
          id: "1",
          title: "Accordian 1",
          isOpen: false,
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: "2",
          title: "Accordian 2",
          isOpen: false,
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: "3",
          title: "Accordian 3",
          isOpen: false,
          desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ]);
    
      const handleAccordianOpen = (id) => {
        const updatedList = data.map((acc) => {
          if (acc.id === id) {
            // Toggle if it's the same accordion
            return { ...acc, isOpen: !acc.isOpen };
          }
          // Close all other accordions
          return { ...acc, isOpen: false };
        });
    
        setData(updatedList);
      };
      return (
        <div className="App">
         
    
          <AccordianList data={data} handleAccordianOpen={handleAccordianOpen} />
        </div>
      );
}

export default Accordian