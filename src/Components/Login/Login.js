import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <div className="form__container">
      <div class="img-bg"></div>

      <div className="loginForm">
        <div class="noi-dung">
          <div class="form">
            <div className="faQuizGrad">
              <div className="QuizGrad">
                <span>
                  Quiz<span className="Grad">Grad</span>
                </span>
              </div>
              <div className="loginText">
                <div>Welcome back!</div>
                <div>Please Login/Sign up to your account</div>
              </div>
            </div>

            <h2>Login Site</h2>
            <form action="">
              <div class="input-form">
                <span>Username</span>
                <input type="text" name="" />
              </div>
              <div className="input-form">
                <span>password</span>
                <input type="password" name="" />
              </div>
              <div class="nho-dang-nhap">
                <label>
                  <input type="checkbox" name="" /> Remember the name
                </label>
              </div>
              <div class="input-form">
                <input type="submit" value="Login" />
              </div>
              <div className="input-form">
                <p>
                  register <button>Sign up</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
