import { useRef } from "react";
import IconLink from "./IconLink";
import ShareButton from "./ShareButton";

function ArticleShare({ setShowShare, isMobile }) {
  const shareRef = useRef();

  const handleClick = (e) => {
    if (shareRef.current !== e.target) {
      setShowShare(false);
    }
  };

  return (
    <div ref={shareRef} onClick={handleClick} className="article-share">
      <div className="article-share--left">
        <h2 className="article-share__title">Share</h2>
        <ul className="list">
          <IconLink url="https://www.facebook.com/" siteName="facebook" />
          <IconLink url="https://x.com/" siteName="twitter" />
          <IconLink url="https://www.pinterest.com/" siteName="pinterest" />
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
