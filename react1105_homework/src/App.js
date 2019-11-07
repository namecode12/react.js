import React from 'react';
import './App.css';
import apps from './apps.svg'
import logo from './logo.png'
import search from './search.svg'
import keyboard from './keyboard.svg'
import mic from './mic.svg'
function App() {
  return (
    <div className="root">
      <header>
        <ul>
          <li>Gmail</li>
          <li>이미지</li>
          <li><img src={apps} alt="apps"/></li>
          <li><div id="login">로그인</div></li>
        </ul>
      </header>
      <section id="main">
        <img src={logo} alt="logo" width="300px" height="100px" id="logo"/>
        <div id="searchbar">
          <img src={search} alt="search" id="searchlogo"/><input placeholder="Google 검색 또는 URL 입력" />
        </div>
        <div id="box">
          <div id="search">Google 검색</div>
          <div id="Lucky">I'm Feeling Lucky</div>
        </div>
      </section>
    </div>
  );
}

export default App;
