import { Route } from "react-router-dom";
import { StartPage } from "../pages/StartPage/StartPage"; 
import { QuestionPage } from "../pages/QuestionPage/QuestionPage"
import { AnswerPage } from "../pages/AnswerPage/AnswerPage"
import { SummaryPage } from "../pages/SummaryPage/SummaryPage" 

export const routes = (
  <>
    <Route path="/" element={<StartPage />} />
    <Route path="/question" element={<QuestionPage />} />
    <Route path="/answer" element={<AnswerPage />} />
    <Route path="/summary" element={<SummaryPage />} />
  </>
);

