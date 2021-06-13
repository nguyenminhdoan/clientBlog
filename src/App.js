import { Layout } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import FooterBlog from "./components/layout/partials/FooterBlog";
import HeaderTop from "./components/layout/partials/HeaderTop";
import "./globalStyle.css";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import SinglePost from "./pages/singlePost/SinglePost";
import UserSetting from "./pages/userSetting/UserSetting";
import Write from "./pages/write/Write";

const { Header, Footer } = Layout;

function App() {
  const { isAuth } = useSelector((state) => state.userLogin);

  const currentUser = isAuth;
  return (
    <Router>
      <Switch>
        <>
          <Layout>
            <Header>
              <HeaderTop />
            </Header>
            <Route exact path="/">
              <DefaultLayout />
            </Route>
            <Route exact path="/posts">
              <DefaultLayout />
            </Route>
            <Route path="/register">
              {currentUser ? <DefaultLayout /> : <Register />}
            </Route>
            <Route path="/login">
              {currentUser ? <DefaultLayout /> : <Login />}
            </Route>
            <Route path="/post/:id">
              <SinglePost />
            </Route>
            <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
            <Route path="/settings">
              {currentUser ? <UserSetting /> : <Login />}
            </Route>

            <Footer>
              <FooterBlog />
            </Footer>
          </Layout>
        </>
      </Switch>
    </Router>
  );
}

export default App;
