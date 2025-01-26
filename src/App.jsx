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
    if (window.innerWidth < 701) setIsMobile(true);
  }, []);

  if (isMobile)
    return (
      <div>
        <AppLayout>
          <div className="article">
            <ArticleImage />
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
        </AppLayout>
        <Attribution />
      </div>
    );

  if (!isMobile)
    return (
      <div>
        <AppLayout>
          <div className="article">
            <ArticleImage />
            <ArticleInfo />
            <ArticleProfile setShowShare={setShowShare} />
            {showShare && (
              <ArticleShare setShowShare={setShowShare} showShare={showShare} />
            )}
          </div>
        </AppLayout>
        <Attribution />
      </div>
    );
}

export default App;
