function ArticleShare() {
  return (
    <div className="article-share">
      <div className="article-share--left">
        <h2 className="article-share__title">SHARE</h2>
        <ul className="list">
          <li className="list__item">
            <img
              className="facebook"
              src="./assets/images/icon-facebook.svg"
              alt="facebook logo"
            />
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
      <button className="article-share__share">
        <svg
          className="share-image"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
        >
          <path
            fill="#6E8098"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ArticleShare;
