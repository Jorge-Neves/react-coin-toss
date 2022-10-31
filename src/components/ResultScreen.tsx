import React, { FC } from 'react';

interface ResultScreenProps {
  result: string;
  closeResultHandler: () => void;
}

enum CoinTossPossibilities {
  DEFAULT = 'default',
  HEADS = 'heads',
  TAILS = 'tails',
  SIDE = 'side',
}

const ResultScreen: FC<ResultScreenProps> = ({
  result,
  closeResultHandler,
}) => {
  return (
    <div className="result-screen-background">
      <div className="result-screen">
        <div className="close-button-container">
          <button className="close-button" onClick={() => closeResultHandler()}>
            X
          </button>
        </div>
        <div>
          <p>Results</p>
          <div className="result-container">
            <span>
              {result === CoinTossPossibilities.HEADS && (
                <span className="icon"> &#128100;</span>
              )}
              {result === CoinTossPossibilities.TAILS && (
                <span className="icon">&#128187;</span>
              )}
              {result === CoinTossPossibilities.SIDE && (
                <span className="icon">&#127937;</span>
              )}
            </span>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
