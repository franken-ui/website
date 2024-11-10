<div>
  <div className="space-y-1.5">
    <label className="uk-form-label">Select your planet</label>
    <div className="uk-form-controls">
      <div className="h-10">
        <uk-select cls-custom="button: uk-input-fake w-full; dropdown: w-full">
          <select hidden>
            <option>Mars</option>
            <option>Jupiter</option>
            <option>Saturn</option>
            <option selected>Earth</option>
          </select>
        </uk-select>
      </div>
    </div>
  </div>
  <div className="mt-4 space-y-1.5">
    <label className="uk-form-label">Select your cars</label>
    <div className="uk-form-controls">
      <div className="h-10">
        <uk-select cls-custom="button: uk-input-fake w-full; dropdown: w-full" multiple>
          <select hidden>
            <option selected>Mercedes-Benz</option>
            <option selected>Bentley</option>
            <option>Audi</option>
            <option selected>Porsche</option>
            <option selected>Lamborghini</option>
            <option>Ferrari</option>
          </select>
        </uk-select>
      </div>
    </div>
  </div>
</div>

