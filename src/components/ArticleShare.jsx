import { useEffect, useRef } from "react";
import IconLink from "./IconLink";
import ShareButton from "./ShareButton";

function ArticleShare({ showShare, setShowShare, isMobile }) {
  const shareRef = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (shareRef.current && !shareRef.current.contains(e.target)) {
          setShowShare(false);
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick);
    },
    [setShowShare]
  );

  useEffect(
    function () {
      function handleKeyPress(e) {
        if (showShare && e.keyCode === 27) {
          e.stopPropagation();
          setShowShare(false);
        }
      }

      document.addEventListener("keydown", handleKeyPress, true);

      return () => document.removeEventListener("keydown", handleKeyPress);
    },
    [showShare, setShowShare]
  );

  return (
    <div ref={shareRef} className="article-share">
      <div className="article-share--left">
        <h2 className="article-share__title">Share</h2>
        <ul className="list">
          <IconLink
            setShowShare={setShowShare}
            url="https://www.facebook.com/"
            siteName="facebook"
          />
          <IconLink
            setShowShare={setShowShare}
            url="https://x.com/"
            siteName="twitter"
          />
          <IconLink
            setShowShare={setShowShare}
            url="https://www.pinterest.com/"
            siteName="pinterest"
          />
        </ul>
      </div>

      {isMobile && (
        <ShareButton
          setShowShare={setShowShare}
          bgColor={"hsl(214deg, 17%, 51%)"}
          fill="white"
        />
      )}
    </div>
  );
}

export default ArticleShare;
