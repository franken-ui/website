<div>
  <div className="space-y-1.5">
    <label className="uk-form-label">Select your planet</label>
    <div className="uk-form-controls">
      <div className="h-10">
        <uk-select cls-custom="button: uk-input-fake w-full; dropdown: w-full" value="Earth">
          <select hidden>
            <option>Mars</option>
            <option>Jupiter</option>
            <option>Saturn</option>
            <option>Earth</option>
          </select>
        </uk-select>
      </div>
    </div>
  </div>
  <div className="mt-4 space-y-1.5">
    <label className="uk-form-label">Select your cars</label>
    <div className="uk-form-controls">
      <div className="h-10">
        <uk-select cls-custom="button: uk-input-fake w-full; dropdown: w-full" multiple value="Mercedes-Benz,Bentley,Porsche,Lamborghini">
          <select hidden>
            <option>Mercedes-Benz</option>
            <option>Bentley</option>
            <option>Audi</option>
            <option>Porsche</option>
            <option>Lamborghini</option>
            <option>Ferrari</option>
          </select>
        </uk-select>
      </div>
    </div>
  </div>
</div>

