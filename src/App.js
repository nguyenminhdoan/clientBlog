import DefaultLayout from "./components/layout/DefaultLayout";
import "./globalStyle.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import SinglePost from "./pages/singlePost/SinglePost";
import HeaderTop from "./components/layout/partials/HeaderTop";
import FooterBlog from "./components/layout/partials/FooterBlog";
import Write from "./pages/write/Write";
import UserSetting from "./pages/userSetting/UserSetting";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./pages/posts/Posts";

const { Header, Footer } = Layout;

function App() {
  const currentUser = false;
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
