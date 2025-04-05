import { useEffect, useState } from "react";
import "./main.styles.scss";

export default function Main() {
  const [arrayMemes, setArrayMemes] = useState([]);
  const [meme, setMeme] = useState({
    memeImageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const memes = await response.json();
      setArrayMemes(memes.data.memes);
    };
    fetchMemes();
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  const handleClick = () => {
    const randomNumber = (function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    })(1, 100);
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImageUrl: arrayMemes[randomNumber].url,
    }));
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleClick}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={`${meme.memeImageUrl}`} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
