<div>
  {/* This is a button toggling the modal */}
  <button
    className="uk-btn uk-btn-default"
    type="button"
    data-uk-toggle="target: #modal-example"
  >
    Open
  </button>

  {/* This is the modal */}
  <div id="modal-example" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body">
      <h2 className="uk-modal-title">Headline</h2>
      <p className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="uk-text-right">
        <button
          className="uk-modal-close uk-btn uk-btn-default mr-2"
          type="button"
        >
          Cancel
        </button>
        <button className="uk-btn uk-btn-primary" type="button">
          Save
        </button>
      </p>
    </div>
  </div>
</div>
