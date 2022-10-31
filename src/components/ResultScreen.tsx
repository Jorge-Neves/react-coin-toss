import React, { FC } from 'react';

interface ResultScreenProps {
  result: string;
}

const ResultScreen: FC<ResultScreenProps> = ({ result }) => {
  return <div>{result}</div>;
};

export default ResultScreenProps;
