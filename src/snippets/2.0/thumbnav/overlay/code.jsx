<div className="uk-position-relative" data-uk-slideshow="animation: fade">
  <ul className="uk-slideshow-items">
    <li>
      <img src="/images/photo.jpg" alt data-uk-cover />
    </li>
    <li>
      <img src="/images/dark.jpg" alt data-uk-cover />
    </li>
    <li>
      <img src="/images/light.jpg" alt data-uk-cover />
    </li>
  </ul>
  <div className="uk-position-small uk-position-bottom-center">
    <ul className="uk-thumbnav">
      <li data-uk-slideshow-item={0}>
        <a href="#">
          <img src="/images/photo.jpg" width={100} height={67} alt />
        </a>
      </li>
      <li data-uk-slideshow-item={1}>
        <a href="#">
          <img src="/images/dark.jpg" width={100} height={67} alt />
        </a>
      </li>
      <li data-uk-slideshow-item={2}>
        <a href="#">
          <img src="/images/light.jpg" width={100} height={67} alt />
        </a>
      </li>
    </ul>
  </div>
</div>

