import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function AppOld() {
  const [data, setState] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => setToggle(prev => !prev);

  useEffect(() => {
    setTimeout(() => setState({}), 100);
  }, []);

  return (
    <div className="App">
        {toggle && <div data-testid="toggle-elem">toggle</div>}
        {data && <div>Text</div>}
      <h1 data-testid="value-elem">{value}</h1>
      <button data-testid="toggle-btn" onClick={onClick}>click me</button>
      <input
          type="text"
          data-testid="app-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="input value ..."
      />
    </div>
  );
}

export default AppOld;
