import DefaultLayout from "./components/layout/DefaultLayout";
import "./globalStyle.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import SinglePost from "./pages/singlePost/SinglePost";
import HeaderTop from "./components/layout/partials/HeaderTop";
import FooterBlog from "./components/layout/partials/FooterBlog";
import Write from "./pages/write/Write";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <HeaderTop />
        </Header>
        {/* <DefaultLayout /> */}
        {/* <SinglePost /> */}
        <Write />
        <Footer>
          <FooterBlog />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
