import GlobalStyle from "./Globalstyle";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const Blog_Community = lazy(() => import("./Pages/Blog_Community"));
const Donate = lazy(() => import("./Pages/Donate"));
const LogIn = lazy(() => import("./Pages/LogIn"));
const SignUp = lazy(() => import("./Pages/SignUp"));

function App() {


  return (
    <>
    <GlobalStyle></GlobalStyle>
     <Suspense fallback={() => <div>loading</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Blog_Community" component={Blog_Community} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Donate" component={Donate} />
        </Switch>
      </Suspense>	


    </>
  );
  
}

export default App;
