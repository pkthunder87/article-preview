import ShareButton from "./ShareButton";

function ArticleShare({ setShowShare }) {
  return (
    <div className="article-share">
      <div className="article-share--left">
        <h2 className="article-share__title">SHARE</h2>
        <ul className="list">
          <li className="list__item">
            <a
              className="site-links"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <img
                className="facebook"
                src="./assets/images/icon-facebook.svg"
                alt="facebook logo"
              />
            </a>
          </li>
          <li className="list__item">
            <img
              className="twitter"
              src="./assets/images/icon-twitter.svg"
              alt="twitter logo"
            />
          </li>
          <li className="list__item">
            <img
              className="pinterest"
              src="./assets/images/icon-pinterest.svg"
              alt="pinterest logo"
            />
          </li>
        </ul>
      </div>

      <ShareButton
        setShowShare={setShowShare}
        bgColor={"hsl(214deg, 17%, 51%)"}
        fill="white"
      />
    </div>
  );
}

export default ArticleShare;
