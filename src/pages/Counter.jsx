import { useState } from 'react';
import Menu from '../components/Menu';
import '../styles/default.css';
import '../styles/Counter.css';

function Counter() {
  let [count, setCount] = useState(0);

  function ClickEvent() {
    setCount(count+1);
    console.log(count)
  }

  return (
    <div>
      <div className="Header">
        <Menu />
      </div>
      <div className="Body">
        <div className="title_header">
          Counter
        </div>
        <div className='counter_container'>
          <div className='counter_value'>{count}</div>
          <button className='counter_button' onClick={ClickEvent}>Count</button>
        </div>
      </div>
    </div>

  )
}

export default Counter