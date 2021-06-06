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

const { Header, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <HeaderTop />
        </Header>
        {/* <DefaultLayout /> */}
        {/* <SinglePost /> */}
        {/* <Write /> */}
        {/* <UserSetting /> */}
        {/* <Login /> */}
        <Register />
        <Footer>
          <FooterBlog />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
