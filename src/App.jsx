import { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout";
import ArticleImage from "./components/ArticleImage";
import ArticleInfo from "./components/ArticleInfo";
import ArticleProfile from "./components/ArticleProfile";
import "./sass/main.scss";
import ArticleShare from "./components/ArticleShare";

function App() {
  const [showShare, setShowShare] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 440) setIsMobile(true);
  }, []);

  if (isMobile)
    return (
      <AppLayout>
        <div className="article">
          <ArticleImage />
          <ArticleInfo />
          {showShare ? (
            <ArticleShare setShowShare={setShowShare} />
          ) : (
            <ArticleProfile setShowShare={setShowShare} />
          )}
        </div>
      </AppLayout>
    );

  if (!isMobile)
    return (
      <AppLayout>
        <div className="article">
          <ArticleImage />
          <ArticleInfo />
          <ArticleProfile setShowShare={setShowShare} />
          {showShare && <ArticleShare setShowShare={setShowShare} />}
        </div>
      </AppLayout>
    );
}

export default App;
