import React from "react";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({text}) => <h2>{text}</h2>

export default Title;