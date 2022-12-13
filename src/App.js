import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let posts = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "강남 맛집 추천",
    "성수 카페 추천",
    "자바스크립트 책 추천",
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function 함수() {
    console.log(1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {[1, 2, 3].map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>12월 17일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경([
            "여자 코트 추천",
            "성수 카페 추천",
            "자바스크립트 책 추천",
          ]);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>안녕</div>;
  }
}

export default App;
