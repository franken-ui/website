<div>
  <button
    className="uk-btn uk-btn-default mr-2"
    type="button"
    data-uk-toggle="target: #modal"
  >
    Open
  </button>
  <div className="uk-modal uk-flex-top" id="modal" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button
        className="uk-modal-close-default"
        type="button"
        aria-label="Close"
        data-uk-close
      />
      <h2 className="uk-modal-title">Are you absolutely sure?</h2>
      <div className="my-6 text-sm text-muted-foreground">
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </div>
      <div className="flex justify-end">
        <button
          className="uk-modal-close uk-btn uk-btn-default mr-2"
          type="button"
        >
          Cancel
        </button>
        <button className="uk-btn uk-btn-primary" type="button">
          Continue
        </button>
      </div>
    </div>
  </div>
</div>
