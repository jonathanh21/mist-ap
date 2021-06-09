import React from 'react';
import '../styles/Sass/index.scss';
interface IStepsProps {
  text: string;
}

const StepsText = ({ text }: IStepsProps) => {
  return <div className='StepsText'>{text}</div>;
};

export default StepsText;
