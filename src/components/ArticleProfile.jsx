function ArticleProfile() {
  return (
    <div className="article-profile">
      <div className="article-profile--left">
        <img
          className="article-profile__image"
          src="./assets/images/avatar-michelle.jpg"
          alt="Michelle Appleton profile pic"
        />
        <div className="article-profile__info">
          <h2 className="article-profile__author">Michelle Appleton</h2>
          <p className="article-profile__date">28 Jun 2020</p>
        </div>
      </div>
      <button className="article-profile__share">
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

export default ArticleProfile;
