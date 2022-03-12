import React, { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useInterval } from '../utils/common'

const texts = ["C#", "nodejs", "React", "C/C++", "java", "anything"];
const TechAnimation = () =>{
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  

    return (
        <h1>
            <TextTransition
                text={texts[index % texts.length]}
                springConfig={presets.gentle}
                style={{ margin: "0 4px" }}
                inline
                overflow
            />
        </h1>
    );
};
export default TechAnimation;