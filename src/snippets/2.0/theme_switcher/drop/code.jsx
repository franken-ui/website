<div className="uk-inline">
  <button className="uk-btn uk-btn-default">
    <uk-icon icon="palette" />
  </button>
  <div className="uk-card uk-card-body uk-drop w-96" data-uk-drop="mode: click; offset: 8">
    <div className="uk-h3">Customize</div>
    <p className="mb-4 mt-1 text-sm text-muted-foreground">
      Customize your Franken UI experience.
    </p>
    <uk-theme-switcher id="theme-switcher">
      <select hidden>
        <optgroup data-key="theme" label="Theme">
          <option data-hex="#52525b" value="uk-theme-zinc">Zinc</option>
          <option data-hex="#64748b" value="uk-theme-slate">Slate</option>
          <option data-hex="#78716c" value="uk-theme-stone">Stone</option>
          <option data-hex="#6b7280" value="uk-theme-gray">Gray</option>
          <option data-hex="#737373" value="uk-theme-neutral">Neutral</option>
          <option data-hex="#dc2626" value="uk-theme-red">Red</option>
          <option data-hex="#e11d48" value="uk-theme-rose">Rose</option>
          <option data-hex="#f97316" value="uk-theme-orange">Orange</option>
          <option data-hex="#16a34a" value="uk-theme-green">Green</option>
          <option data-hex="#2563eb" value="uk-theme-blue">Blue</option>
          <option data-hex="#facc15" value="uk-theme-yellow">Yellow</option>
          <option data-hex="#7c3aed" value="uk-theme-violet">Violet</option>
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
          <option data-icon="sun" value="light">Light</option>
          <option data-icon="moon" value="dark">Dark</option>
        </optgroup>
      </select>
    </uk-theme-switcher>
  </div>
</div>
