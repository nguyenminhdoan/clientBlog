import DefaultLayout from "./components/layout/DefaultLayout";
import "./globalStyle.css";
import SinglePost from "./pages/singlePost/SinglePost";
function App() {
  return (
    <div className="App">
      {/* <DefaultLayout /> */}
      <SinglePost />
    </div>
  );
}

export default App;
