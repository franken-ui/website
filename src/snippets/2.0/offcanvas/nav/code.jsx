<div>
  <button className="uk-btn uk-btn-default mr-2" type="button" data-uk-toggle="target: #offcanvas-nav-primary">
    Primary Nav
  </button>
  <button className="uk-btn uk-btn-default" type="button" data-uk-toggle="target: #offcanvas-nav">
    Default Nav
  </button>
  <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
    <div className="uk-offcanvas-bar p-4">
      <ul className="uk-nav-center uk-nav uk-nav-primary">
        <li className="uk-active"><a href="#">Active</a></li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
        <li className="uk-nav-header">Header</li>
        <li>
          <a href="#">
            <uk-icon custom-class="mr-2" icon="table" />
            Item
          </a>
        </li>
        <li>
          <a href="#">
            <uk-icon custom-class="mr-2" icon="bell" />
            Item
          </a>
        </li>
        <li className="uk-nav-divider" />
        <li>
          <a href="#">
            <uk-icon custom-class="mr-2" icon="trash" />
            Item
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
    <div className="uk-offcanvas-bar p-4">
      <ul className="uk-nav uk-nav-default">
        <li className="uk-active"><a href="#">Active</a></li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
        <li className="uk-nav-header">Header</li>
        <li>
          <a href="#">
            <uk-icon custom-class="mr-2" icon="table" />
            Item
          </a>
        </li>
        <li>
          <a href="#">
            <uk-icon custom-class="mr-2" icon="bell" />
            Item
          </a>
        </li>
        <li className="uk-nav-divider" />
        <li>
          <a href="#">
            <uk-icon custom-class="mr-2" icon="trash" />
            Item
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

