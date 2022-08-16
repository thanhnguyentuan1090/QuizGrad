import React, { useEffect, useState } from "react";
import "./Playing.css";
import getQuestion from "../../utils/Axios.js";

const Quiz = () => {
  const [question, setQuestion] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getQuestion();
        if (res.status === 200) {
          setQuestion(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let timer
    if (seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      handleSkipClick();
    }
    return () => {
      clearTimeout(timer)
    }
  });

  const handleSkipClick = () => {
    if (questionIndex < question.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSeconds(60);
    }
  };

  const handleNextClick = () => {
    handleSkipClick();
  };

  return (
    <div className="Question">
      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter">1</div>
        </div>
        <div className="stepper-item completed">
          <div className="step-counter">2</div>
        </div>
        <div className="stepper-item active">
          <div className="step-counter">3</div>
        </div>
        <div className="stepper-item">
          <div className="step-counter">4</div>
        </div>
        <div className="stepper-item">
          <div className="step-counter">5</div>
        </div>
      </div>

      <div className="box">
        <div className="Title">
          <p>{question[questionIndex] && question[questionIndex].text}</p>
        </div>
        <div className="answerGroup">
          {question[questionIndex] &&
            question[questionIndex].answer.map((e, id) => (
              <div className="answer" key={id}>
                <button className="mini-tag" tabIndex="1">
                  <div>{e.context}</div>
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="foo">
        <div className="clock">{seconds}</div>
        <div className="btnGroup">
          <button className="next" onClick={() => handleNextClick()}>
            <span className="caret right" />
            <span>Next</span>
          </button>
          <button className="skip" onClick={() => handleSkipClick()}>
            <span className="caret right" />
            <span className="caret right" />
            <span>Skip</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
