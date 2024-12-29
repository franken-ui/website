<div>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    data-uk-toggle="target: #modal-full"
  >
    Open
  </button>
  <div id="modal-full" className="uk-modal-full" data-uk-modal>
    <div className="uk-modal-dialog">
      <button
        className="uk-modal-close absolute right-0 top-0 p-8"
        type="button"
        data-uk-close
      />
      <div className="grid md:grid-cols-2">
        <div
          className="h-screen bg-cover"
          style={{ backgroundImage: 'url("/images/photo.jpg")' }}
        />
        <div className="p-8">
          <h1 className="uk-h1">Headline</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>