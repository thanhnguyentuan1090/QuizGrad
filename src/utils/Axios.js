import axios from "axios";
axios.defaults.baseURL = "http://quizgame12145.herokuapp.com";

const getQuestion = async (data) => {
  try {
    const res = await axios.get("/question");
    return res;
  } catch (error) {
    console.log("error");
    return error;
  }
};
export default getQuestion;
