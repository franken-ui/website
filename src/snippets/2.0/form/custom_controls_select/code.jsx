<form>
  <div>
    <div data-uk-form-custom="target: true">
      <select aria-label="Custom controls">
        <option value={1}>Option 01</option>
        <option value={2}>Option 02</option>
        <option value={3}>Option 03</option>
        <option value={4}>Option 04</option>
      </select>
      <span />
    </div>
  </div>
  <div className="mt-4">
    <div data-uk-form-custom="target: > * > span:last-child">
      <select aria-label="Custom controls">
        <option value={1}>Option 01</option>
        <option value={2}>Option 02</option>
        <option value={3}>Option 03</option>
        <option value={4}>Option 04</option>
      </select>
      <span className="uk-flex-middle uk-link uk-flex">
        <span className="mr-2">
          <uk-icon icon="pencil-line" />
        </span>
        <span />
      </span>
    </div>
  </div>
  <div className="mt-4">
    <div data-uk-form-custom="target: > * > span:first-child">
      <select aria-label="Custom controls">
        <option value>Please select...</option>
        <option value={1}>Option 01</option>
        <option value={2}>Option 02</option>
        <option value={3}>Option 03</option>
        <option value={4}>Option 04</option>
      </select>
      <button className="uk-btn uk-btn-default" type="button" tabIndex={-1}>
        <span />
        <span className="ml-2">
          <uk-icon icon="chevron-down" />
        </span>
      </button>
    </div>
  </div>
</form>