import { useEffect, useRef, useState } from "react";
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

  const bodyRef = useRef();

  const handleClick = (e) => {
    console.log(e);
    if (bodyRef.current !== e.target) {
      setShowShare(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 440) setIsMobile(true);
  }, []);

  if (isMobile)
    return (
      <div>
        <AppLayout>
          <div ref={bodyRef} onClick={handleClick} className="article">
            <ArticleImage />
            <ArticleInfo />
            {showShare ? (
              <ArticleShare setShowShare={setShowShare} isMobile={isMobile} />
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
            {showShare && <ArticleShare setShowShare={setShowShare} />}
          </div>
        </AppLayout>
        <Attribution />
      </div>
    );
}

export default App;
