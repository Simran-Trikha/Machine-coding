import { useEffect, useState } from "react";
import "./InifniteScroll.css";

export default function InfiniteScroll() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();

    const scrollContainer = document.getElementById("scrollable-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - 100
      ) {
        fetchMemes();
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMemes = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const resp = await fetch("https://meme-api.com/gimme/7");
      if (resp.ok) {
        const data = await resp.json();
        setMemes((prev) => [...prev, ...data.memes]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="scrollable-container" className="scrollable-container">
      <div className="infinite-list">
        {memes.map((meme, index) => (
          <div key={index} className="meme-container">
            <h3>{meme.title}</h3>
            <img src={meme.url} alt={meme.title} />
          </div>
        ))}
        {isLoading &&
          Array(7)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="shimmer-container"></div>
            ))}
      </div>
    </div>
  );
}
