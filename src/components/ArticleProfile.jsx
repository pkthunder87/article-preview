function ArticleProfile() {
  return (
    <div className="article-profile">
      <img
        className="article-profile__img"
        src="./assets/images/avatar-michelle.jpg"
        alt="Michelle Appleton profile pic"
      />
      <h2 className="article-profile__author">Michelle Appleton</h2>
      <p>28 Jun 2020 Share</p>
      <div className="article-profile__share">
        <img
          className="profile-image"
          src="./assets/images/icon-share.svg"
          alt="share button"
        />
      </div>
    </div>
  );
}

export default ArticleProfile;
