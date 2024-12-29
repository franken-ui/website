<div>
  <div className="flex flex-wrap gap-2">
    <button
      className="uk-btn uk-btn-default"
      type="button"
      data-uk-toggle="target: #offcanvas-slide"
    >
      Slide
    </button>
    <button
      className="uk-btn uk-btn-default"
      type="button"
      data-uk-toggle="target: #offcanvas-push"
    >
      Push
    </button>
    <button
      className="uk-btn uk-btn-default"
      type="button"
      data-uk-toggle="target: #offcanvas-reveal"
    >
      Reveal
    </button>
    <button
      className="uk-btn uk-btn-default"
      type="button"
      data-uk-toggle="target: #offcanvas-none"
    >
      None
    </button>
  </div>
  <div id="offcanvas-slide" data-uk-offcanvas="overlay: true">
    <div className="uk-offcanvas-bar">
      <button className="uk-offcanvas-close" type="button" data-uk-close />
      <h3 className="uk-h3">Title</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
  <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
    <div className="uk-offcanvas-bar">
      <button className="uk-offcanvas-close" type="button" data-uk-close />
      <h3 className="uk-h3">Title</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
  <div id="offcanvas-reveal" data-uk-offcanvas="mode: reveal; overlay: true">
    <div className="uk-offcanvas-bar">
      <button className="uk-offcanvas-close" type="button" data-uk-close />
      <h3 className="uk-h3">Title</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
  <div id="offcanvas-none" data-uk-offcanvas="mode: none; overlay: true">
    <div className="uk-offcanvas-bar">
      <button className="uk-offcanvas-close" type="button" data-uk-close />
      <h3 className="uk-h3">Title</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
</div>;
