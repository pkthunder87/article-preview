import { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout";
import ArticleImage from "./components/ArticleImage";
import ArticleInfo from "./components/ArticleInfo";
import ArticleProfile from "./components/ArticleProfile";
import "./sass/main.scss";
import ArticleShare from "./components/ArticleShare";
import Attribution from "./components/Attribution";

function App() {
  const [showShare, setShowShare] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 830) setIsMobile(true);
  }, []);

  if (isMobile)
    return (
      <>
        <AppLayout>
          <div className="article">
            <Attribution />
            <ArticleImage />
            <div className="article--right">
              <ArticleInfo />
              {showShare ? (
                <ArticleShare
                  setShowShare={setShowShare}
                  isMobile={isMobile}
                  showShare={showShare}
                />
              ) : (
                <ArticleProfile setShowShare={setShowShare} />
              )}
            </div>
          </div>
        </AppLayout>
      </>
    );

  if (!isMobile)
    return (
      <>
        <AppLayout>
          <div className="article">
            <Attribution />
            <ArticleImage />
            <div className="article--right">
              <ArticleInfo />
              <ArticleProfile setShowShare={setShowShare} />
              {showShare && (
                <ArticleShare
                  setShowShare={setShowShare}
                  showShare={showShare}
                />
              )}
            </div>
          </div>
        </AppLayout>
      </>
    );
}

export default App;
