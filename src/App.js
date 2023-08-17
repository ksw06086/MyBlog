/* eslint-disable */                    // warning 안보여지게 하는 것

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '나의 코딩 일지';
  let [title, setTitle] = useState([1, 2, 3]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function sortTitle(){
    let copy = [...title];                   // 원본 보존(리랜더링 전까지 원본 보존)
    copy.sort();                             // 내림차순 정렬(가나다 순)
    setTitle(copy);
  }

  function clickLike(day) {
    let copy = [...like];                   // 원본 보존(리랜더링 전까지 원본 보존)
    copy[day-1] = copy[day-1] + 1;
    setLike(copy);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={
          { color: 'gray', fontSize: '16px' }
        }>MyBlog</h4>
      </div>

      <button onClick={()=>{ sortTitle }}>가나다순 정렬</button>

      { title.map(day => (
        <div className='list' key={day}>
          <h4>
            <span onClick={()=>{ setModal(!modal); }}>React Blog { day }일차</span>
            <span onClick={()=>{ clickLike(day); }}>👍</span> { like[day-1] } 
          </h4>
          <p>2월 17일 발행</p>
        </div>
      )) }

      {/* 상세페이지 화면 */}
      { modal ? <Modal /> : null }
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
