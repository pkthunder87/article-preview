import ShareButton from "./ShareButton";

function ArticleProfile({ setShowShare }) {
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
      <ShareButton
        setShowShare={setShowShare}
        bgColor={"hsl(210deg, 46%, 95%)"}
        fill="#6E8098"
      />
    </div>
  );
}

export default ArticleProfile;
