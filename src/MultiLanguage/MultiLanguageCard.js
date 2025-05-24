export default function MultiLanguage({ data }) {
  return (
    <div className="outer-container">
      <div className="multilnaguage-container">
        <div>{data.title}</div>
        <div>{data.desc}</div>
      </div>
    </div>
  );
}
