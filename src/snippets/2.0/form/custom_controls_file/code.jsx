<form>
  <div>
    <div data-uk-form-custom>
      <input type="file" aria-label="Custom controls" />
      <button className="uk-btn uk-btn-default" type="button" tabIndex={-1}>
        Select
      </button>
    </div>
  </div>
  <div className="mt-4">
    <span className="uk-text-middle">Here is a text</span>
    <div data-uk-form-custom>
      <input type="file" aria-label="Custom controls" />
      <span className="uk-link">upload</span>
    </div>
  </div>
  <div className="mt-4">
    <div data-uk-form-custom="target: true">
      <input type="file" aria-label="Custom controls" />
      <input
        className="uk-input max-w-sm"
        type="text"
        placeholder="Select file"
        aria-label="Custom controls"
        disabled
      />
    </div>
    <button className="uk-btn uk-btn-default">Submit</button>
  </div>
</form>