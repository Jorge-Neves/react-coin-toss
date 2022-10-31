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
  const [result, setResult] = useState<CoinTossPossibilities>(
    CoinTossPossibilities.DEFAULT
  );
  const [shouldDisplayResult, setShouldDisplayResult] =
    useState<boolean>(false);

  const beginGameHandler = () => {
    const coinPossibilitiesArray = [
      CoinTossPossibilities.HEADS,
      CoinTossPossibilities.HEADS,
    ];
    const rareChanceDraw = Math.floor(Math.random() * 100);
    const normalChanceDraw = Math.floor(Math.random() * 1);
    if (rareChanceDraw > 90) {
      setResult(CoinTossPossibilities.SIDE);
    } else {
      setResult(coinPossibilitiesArray[normalChanceDraw]);
    }
  };

  const closeResultHandler = () => {
    setShouldDisplayResult(false);
  };

  useEffect(() => {
    if (result !== CoinTossPossibilities.DEFAULT) {
      setShouldDisplayResult(true);
    }
  }, [result]);

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
