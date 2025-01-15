import AppLayout from "./components/AppLayout";
import ArticleImage from "./components/ArticleImage";
import ArticleInfo from "./components/ArticleInfo";
import ArticleProfile from "./components/ArticleProfile";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <div className="article">
        <ArticleImage />
        <ArticleInfo />
        <ArticleProfile />
      </div>
    </AppLayout>
  );
}

export default App;
