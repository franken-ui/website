<form>
  <fieldset className="uk-fieldset space-y-4">
    <div>
      <input
        className="uk-input"
        type="text"
        placeholder="Input"
        aria-label="Input"
      />
    </div>
    <div>
      <select className="uk-select" aria-label="Select">
        <option>Option 01</option>
        <option>Option 02</option>
      </select>
    </div>
    <div>
      <textarea
        className="uk-textarea"
        rows={5}
        placeholder="Textarea"
        aria-label="Textarea"
        defaultValue={""}
      />
    </div>
    <div>
      <label className="mr-2">
        <input
          className="uk-radio mr-1"
          type="radio"
          name="radio2"
          defaultChecked
        />
        Option 1
      </label>
      <label>
        <input className="uk-radio mr-1" type="radio" name="radio2" /> Option 2
      </label>
    </div>
    <div>
      <label className="mr-2">
        <input className="uk-checkbox mr-1" type="checkbox" defaultChecked />{" "}
        Option 1
      </label>
      <label>
        <input className="uk-checkbox mr-1" type="checkbox" /> Option 2
      </label>
    </div>
    <div>
      <input
        className="uk-range"
        type="range"
        defaultValue={2}
        min={0}
        max={10}
        step="0.1"
        aria-label="Range"
      />
    </div>
  </fieldset>
</form>