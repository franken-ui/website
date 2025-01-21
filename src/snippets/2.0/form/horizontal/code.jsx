<form className="uk-form-horizontal space-y-4">
  <div>
    <label className="uk-form-label" htmlFor="form-horizontal-text">
      Text
    </label>
    <div className="uk-form-controls">
      <input
        className="uk-input"
        id="form-horizontal-text"
        type="text"
        placeholder="Some text"
      />
    </div>
  </div>
  <div>
    <label className="uk-form-label" htmlFor="form-horizontal-select">
      Select
    </label>
    <div className="uk-form-controls">
      <select className="uk-select" id="form-horizontal-select">
        <option>Option 01</option>
        <option>Option 02</option>
      </select>
    </div>
  </div>
  <div>
    <div className="uk-form-label">Radio</div>
    <div className="uk-form-controls uk-form-controls-text">
      <label className="mr-2">
        <input className="uk-radio mr-1" type="radio" name="radio1" /> Option 01
      </label>
      <label>
        <input className="uk-radio mr-1" type="radio" name="radio1" /> Option 02
      </label>
    </div>
  </div>
</form>