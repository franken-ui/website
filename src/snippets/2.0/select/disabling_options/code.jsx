<div>
  <div className="space-y-1.5">
    <label className="uk-form-label">JavaScript Framework</label>
    <div className="uk-form-controls">
      <div className="h-10">
        <uk-select cls-custom="button: uk-input-fake w-full; dropdown: w-full">
          <select hidden>
            <option disabled>React</option>
            <option>Angular</option>
            <option>Astro</option>
            <option disabled>Ember.js</option>
            <option disabled>Backbone.js</option>
            <option disabled>jQuery</option>
            <option>Vue</option>
            <option>SvelteKit</option>
          </select>
        </uk-select>
      </div>
    </div>
    <p className="uk-form-help">Disabled options are library and not a framework.</p>
  </div>
  <div className="mt-4">
    <label className="uk-form-label">Select fruits</label>
    <div className="h-10">
      <uk-select cls-custom="button: uk-input-fake w-full; dropdown: w-full" multiple>
        <select hidden>
          <optgroup label="Letter A">
            <option value="apple">Apple</option>
            <option value="apricot">Apricot</option>
            <option value="avocado">Avocado</option>
            <option value="ackee">Ackee</option>
            <option value="asian_pear">Asian Pear</option>
            <option value="abiu">Abiu</option>
            <option value="ambarella">Ambarella</option>
          </optgroup>
          <optgroup label="Letter B" disabled>
            <option value="banana">Banana</option>
            <option value="blackberry">Blackberry</option>
            <option value="blueberry">Blueberry</option>
            <option value="boysenberry">Boysenberry</option>
            <option value="breadfruit">Breadfruit</option>
            <option value="bilberry">Bilberry</option>
            <option value="bael">Bael</option>
            <option value="black_sapote">Black Sapote</option>
          </optgroup>
          <optgroup label="Letter C">
            <option value="cherry">Cherry</option>
            <option value="coconut">Coconut</option>
            <option value="cranberry">Cranberry</option>
            <option value="cantaloupe">Cantaloupe</option>
            <option value="clementine">Clementine</option>
            <option value="cactus_pear">Cactus Pear</option>
            <option value="cherimoya">Cherimoya</option>
            <option value="cloudberry">Cloudberry</option>
            <option value="calamansi">Calamansi</option>
          </optgroup>
          <optgroup label="Letter D" disabled>
            <option value="date">Date</option>
            <option value="dragonfruit">Dragonfruit</option>
            <option value="durian">Durian</option>
            <option value="damson">Damson</option>
            <option value="dewberry">Dewberry</option>
            <option value="duku">Duku</option>
            <option value="dilly">Dilly</option>
          </optgroup>
        </select>
      </uk-select>
    </div>
  </div>
</div>
