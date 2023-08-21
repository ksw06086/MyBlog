/* eslint-disable */                    // warning 안보여지게 하는 것

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '나의 코딩 일지';
  let [title, setTitle] = useState(['React Blog 1일차', 'React Blog 2일차', 'React Blog 3일차']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [clickId, setClickId] = useState(1);
  let [inputVal, setInputVal] = useState('');

  function sortTitle(){
    let copy = [...title];                   // 원본 보존(리랜더링 전까지 원본 보존)
    copy.sort();                             // 내림차순 정렬(가나다 순)
    setTitle(copy);
  }

  function clickLike(index) {
    let copy = [...like];                   // 원본 보존(리랜더링 전까지 원본 보존)
    copy[index] = copy[index] + 1;
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

      { title.map((main, i) => (
        <div className='list' key={i}>
          <h4>
            {/* e.stopPropagation() : 나의 이벤트가 상위 태그에 영향을 주지 않음 */}
            <span onClick={()=>{ setModal(!modal); setClickId(main); }}>{ main }</span>
            <span onClick={(e)=>{ clickLike(i); }}>👍</span> { like[i] } 
            <button onClick={()=>{
              title.splice(i, 1);
              like.splice(i, 1);
              setTitle([...title]);
              setLike([...like]);
             }}>삭제</button>
          </h4>
          <p>2월 17일 발행</p>
        </div>
      )) }

      <input type='text' onChange={(e)=>{ setInputVal(e.target.value); }} />
      <button onClick={()=>{ setTitle([inputVal, ...title]); setLike([0, ...like]); }}>등록</button>

      {/* 상세페이지 화면 */}
      { modal ? <Modal clickId={clickId} /> : null }
      <Modal2 />
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.clickId }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  // constructor, super, render 채워넣음
  constructor(props) {
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render() {
    return (
      <div>안녕 {this.props}
        <button onClick={()=>{
          this.setState({ name : 'Mike' });
        }}>버튼</button>
      </div>
    );
  }
}


export default App;
