<div>
  <div className="flex flex-wrap gap-2">
    <a className="uk-btn uk-btn-default" href="#modal-group-1" data-uk-toggle>
      Modal 1
    </a>
    <a className="uk-btn uk-btn-default" href="#modal-group-2" data-uk-toggle>
      Modal 2
    </a>
  </div>
  <div id="modal-group-1" data-uk-modal>
    <div className="uk-modal-dialog">
      <button
        className="uk-modal-close absolute right-4 top-4"
        type="button"
        data-uk-close
      />
      <div className="uk-modal-header">
        <h2 className="uk-modal-title">Headline 1</h2>
      </div>
      <div className="uk-modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="uk-modal-footer uk-text-right">
        <button
          className="uk-modal-close uk-btn uk-btn-default mr-2"
          type="button"
        >
          Cancel
        </button>
        <a
          href="#modal-group-2"
          className="uk-btn uk-btn-primary"
          data-uk-toggle
        >
          Next
        </a>
      </div>
    </div>
  </div>
  <div id="modal-group-2" data-uk-modal>
    <div className="uk-modal-dialog">
      <button
        className="uk-modal-close absolute right-4 top-4"
        type="button"
        data-uk-close
      />
      <div className="uk-modal-header">
        <h2 className="uk-modal-title">Headline 2</h2>
      </div>
      <div className="uk-modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="uk-modal-footer uk-text-right">
        <button
          className="uk-modal-close uk-btn uk-btn-default mr-2"
          type="button"
        >
          Cancel
        </button>
        <a
          href="#modal-group-1"
          className="uk-btn uk-btn-primary"
          data-uk-toggle
        >
          Previous
        </a>
      </div>
    </div>
  </div>
</div>