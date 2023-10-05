import { React, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "../components/NewsCards";
import "./NewsReader.css";

const alanKey =
  "4c77011f1f59a42214bf1f58239a36592e956eca572e1d8b807a3e2338fdd0dc/stage";

const NewsReader = () => {
  const [newsArticles, setNewsarticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        if (commandData.command === "newNews") {
          setNewsarticles(commandData.articles);
        }
      },
    });
  }, []);
  return (
    <div className="news-reader">
      <h1 className="news-head">AI NEWS READER</h1>
      {console.log(newsArticles)}
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default NewsReader;
