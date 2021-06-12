import React from 'react';
import '../styles/Css/index.css';

interface ITextProps {
  text: string;
}

const LabelText = (props: ITextProps): JSX.Element => {
  return <div className='labelText'>{props.text}</div>;
};

export default LabelText;
