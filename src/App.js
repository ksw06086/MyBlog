import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '나의 코딩 일지';
  let [title, setTitle] = useState([1, 2, 3]);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={
          { color: 'gray', fontSize: '16px' }
        }>MyBlog</h4>
      </div>
      { title.map(day => (
        <div className='list' key={day}>
          <h4>React Blog { day }일차</h4>
          <p>2월 17일 발행</p>
        </div>
      )) }
    </div>
  );
}

export default App;
