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
    console.log('placeholder');
  };

  useEffect(() => {
    console.log('placeholder');
  });

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
      {shouldDisplayResult && <ResultScreen result={result} />}
    </>
  );
};

export default App;
