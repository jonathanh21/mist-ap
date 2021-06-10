import React from 'react';
import '../styles/Css/index.css';

interface ITitleProps {
  text: string;
}

const TitleText = ({ text }: ITitleProps) => {
  return <div className='TitleText'>{text}</div>;
};

export default TitleText;
