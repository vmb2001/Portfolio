import { React, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const NewsReader = () => {
  useEffect(() => {
    alanBtn({
      key: "4c77011f1f59a42214bf1f58239a36592e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "testcommand") {
          alert("hi there");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>News Reader</h1>
    </div>
  );
};

export default NewsReader;
