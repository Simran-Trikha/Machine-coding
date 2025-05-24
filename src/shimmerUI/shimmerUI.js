import { useEffect, useState } from "react";
import "./shimmerUI.css";

export default function ShimmerUI() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchMemes();
    }, 5000);
  }, []);
  const fetchMemes = async () => {
    try {
      const resp = await fetch("https://api.imgflip.com/get_memes");
      if (resp.ok) {
        const data = await resp.json();
        console.log(data.data.memes);
        setMemes(data.data.memes);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setMemes([]);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setMemes([]);
    }
  };
  return (
    <div className=" shimmer-ui-container">
      <h1>Shimmer UI</h1>
      {isLoading &&
        Array(100)
          .fill(0)
          .map((meme, index) => <div className="shimmer-ui"></div>)}

        <div className="shimmer-main-ui-container">
      {!isLoading &&
        memes.length > 0 &&
        memes.map((meme, index) => (
          <div key={index} className="list">
            
            <p>{meme.name}</p>
            <img src={meme.url} alt={meme.title} />
          </div>
        ))}
        </div>
      {!isLoading && memes.length === 0 && <div>No meme present!</div>}
    </div>
  );
}
