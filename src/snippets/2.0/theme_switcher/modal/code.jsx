<div>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    data-uk-toggle="target: #theme-switcher-modal"
  >
    Open
  </button>
  <div className="uk-modal" id="theme-switcher-modal" data-uk-modal>
    <div className="uk-modal-dialog">
      <button className="uk-modal-close-default" type="button" data-uk-close />
      <div className="uk-modal-header">
        <div className="uk-modal-title">Customize</div>
      </div>
      <div className="uk-modal-body">
        <uk-theme-switcher id="theme-switcher">
          <select hidden>
            <optgroup data-key="theme" label="Theme">
              <option data-hex="#52525b" value="uk-theme-zinc">
                Zinc
              </option>
              <option data-hex="#64748b" value="uk-theme-slate">
                Slate
              </option>
              <option data-hex="#78716c" value="uk-theme-stone">
                Stone
              </option>
              <option data-hex="#6b7280" value="uk-theme-gray">
                Gray
              </option>
              <option data-hex="#737373" value="uk-theme-neutral">
                Neutral
              </option>
              <option data-hex="#dc2626" value="uk-theme-red">
                Red
              </option>
              <option data-hex="#e11d48" value="uk-theme-rose">
                Rose
              </option>
              <option data-hex="#f97316" value="uk-theme-orange">
                Orange
              </option>
              <option data-hex="#16a34a" value="uk-theme-green">
                Green
              </option>
              <option data-hex="#2563eb" value="uk-theme-blue">
                Blue
              </option>
              <option data-hex="#facc15" value="uk-theme-yellow">
                Yellow
              </option>
              <option data-hex="#7c3aed" value="uk-theme-violet">
                Violet
              </option>
            </optgroup>
            <optgroup data-key="radii" label="Radii">
              <option value="uk-radii-none">None</option>
              <option value="uk-radii-sm">Small</option>
              <option value="uk-radii-md">Medium</option>
              <option value="uk-radii-lg">Large</option>
            </optgroup>
            <optgroup data-key="shadows" label="Shadows">
              <option value="uk-shadows-none">None</option>
              <option value="uk-shadows-sm">Small</option>
              <option value="uk-shadows-md">Medium</option>
              <option value="uk-shadows-lg">Large</option>
            </optgroup>
            <optgroup data-key="font" label="Font">
              <option value="uk-font-sm">Small</option>
              <option value="uk-font-base">Default</option>
            </optgroup>
            <optgroup data-key="mode" label="Mode">
              <option data-icon="sun" value="light">
                Light
              </option>
              <option data-icon="moon" value="dark">
                Dark
              </option>
            </optgroup>
          </select>
        </uk-theme-switcher>
      </div>
    </div>
  </div>
</div>