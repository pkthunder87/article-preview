function IconLink({ url, siteName }) {
  return (
    <li className="list__item">
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
