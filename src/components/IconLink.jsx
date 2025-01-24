function IconLink({ url, siteName, setShowShare }) {
  function handleClick() {
    setShowShare(false);
  }

  return (
    <li onClick={handleClick} className="list__item">
      <a target="_blank" rel="noreferrer" href={url}>
        <img
          className={siteName}
          src={`./assets/images/icon-${siteName}.svg`}
          alt={`${siteName} logo`}
        />
      </a>
    </li>
  );
}

export default IconLink;
