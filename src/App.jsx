import { useState } from "react";
import AppLayout from "./components/AppLayout";
import ArticleImage from "./components/ArticleImage";
import ArticleInfo from "./components/ArticleInfo";
import ArticleProfile from "./components/ArticleProfile";
import "./sass/main.scss";
import ArticleShare from "./components/ArticleShare";

function App() {
  const [showShare, setShowShare] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <AppLayout>
      <div className="article">
        <ArticleImage />
        <ArticleInfo />
        <ArticleProfile />
        {/* <ArticleShare /> */}
      </div>
    </AppLayout>
  );
}

export default App;
