import "./Accordian.css";

export default function AccordianList({ data, handleAccordianOpen }) {
  return (
    <div className="Accordian-Container">
      {data.map((acc, index) => (
        <div
          key={acc.id}
          onClick={() => handleAccordianOpen(acc.id)}
          className="accordian-inner-container"
        >
          <div>{acc.title}</div>
          {acc.isOpen && <div>{acc.desc}</div>}
        </div>
      ))}
    </div>
  );
}