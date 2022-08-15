import React, { useEffect, useState } from "react";
import "./Playing.css";
import getQuestion from "../../utils/Axios.js";

const Quiz = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getQuestion();
        if (res.status === 200) {
          setQuestion(res.data.data);
          console.log(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
        {question.map((el, qid) => (
          <div key={qid}>
            <div className="Title">
              <p>{el.text}</p>
            </div>
            {el.answer.map((e, id) => (
              <div className="answer" key={id}>
                <button className="mini-tag" tabIndex="1">
                  <div>{e.context}</div>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="foo">
        <div className="clock">60</div>
        <button className="next">
          <span className="caret right" />
          <span>Next</span>
        </button>
        <button className="skip">
          <span className="caret right" />
          <span className="caret right" />
          <span>Skip</span>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
