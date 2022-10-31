import React, { FC, useState, useEffect } from 'react';
import Button from './components/Button';
import ResultScreen from './components/ResultScreen';
import './App.css';

enum CoinTossPossibilities {
  DEFAULT = 'default',
  HEADS = 'heads',
  TAILS = 'tails',
  SIDE = 'side',
}

const App: FC = () => {
  const [beginGame, setBeginGame] = useState<boolean>(false);
  const [result, setResult] = useState<CoinTossPossibilities>(
    CoinTossPossibilities.DEFAULT
  );
  const [shouldDisplayResult, setShouldDisplayResult] =
    useState<boolean>(false);

  const beginGameHandler = () => {
    setBeginGame(true);
  };

  const closeResultHandler = () => {
    setShouldDisplayResult(false);
    setResult(CoinTossPossibilities.DEFAULT);
  };

  useEffect(() => {
    if (beginGame) {
      const gameHandler = () => {
        const chanceDraw = Math.floor(Math.random() * 100);

        if (chanceDraw <= 49) {
          setResult(CoinTossPossibilities.HEADS);
        } else if (chanceDraw <= 98) {
          setResult(CoinTossPossibilities.TAILS);
        } else {
          setResult(CoinTossPossibilities.SIDE);
        }
      };
      gameHandler();
      setShouldDisplayResult(true);
      setBeginGame(false);
    }
  }, [beginGame]);

  return (
    <>
      <div className="App">
        <div className="screen">
          <div className="control">
            <span className="icon">&#129689;</span>
            <Button beginGameHandler={beginGameHandler} />
          </div>
        </div>
      </div>
      {shouldDisplayResult && (
        <ResultScreen result={result} closeResultHandler={closeResultHandler} />
      )}
    </>
  );
};

export default App;
