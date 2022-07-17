import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

//COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {

  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader 
          headText={"App"} 
          leftChild={
            <MyButton text={"왼쪽버튼"} onClick={() => alert("왼쪽 클릭")} /> 
          }
          rightChild={
            <MyButton text={"오른쪽버튼"} onClick={() => alert("오른쪽 클릭")} /> 
          }
        />
        <h2>App</h2>
{/*   <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> */}
        <MyButton 
          text={"버튼"} 
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <MyButton 
          text={"버튼"} 
          onClick={() => alert("버튼클릭")}
          type={"negative"}
        />
        <MyButton 
          text={"버튼"} 
          onClick={() => alert("버튼클릭")}
        />
        {/* 페이지가 바뀔때 변화하는건 routes부분뿐 */}
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
        {/* <a href='/new'>NEW로 이동</a> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
