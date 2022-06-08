import './App.css';
import Header from './Components/Header';
import ReactQuiz from './Quizs/reactQuiz';
import FlutterQuiz from './Quizs/flutterQuiz';
import VueQuiz from './Quizs/vueQuiz';
import LaravelQuiz from './Quizs/laravelQuiz';
import AngularQuiz from './Quizs/angularQuiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <Header />
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <ReactQuiz />
          </Route>
          <Route exact path="/flutter">
            <FlutterQuiz />
          </Route>
          <Route exact path="/vue">
            <VueQuiz />
          </Route>
          <Route exact path="/laravel">
            <LaravelQuiz />
          </Route>
          <Route exact path="/angular">
            <AngularQuiz />
            </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
