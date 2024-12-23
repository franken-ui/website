<div className="h-10">
  <uk-select cls-custom="button: uk-btn uk-btn-default" drop="mode: click; pos: right-center" searchable>
    <select hidden>
      <option data-description="Can view and comment." value="viewer">
        Viewer
      </option>
      <option data-description="Can view, comment and edit." value="developer">
        Developer
      </option>
      <option data-description="Can view, comment and manage billing." value="billing">
        Billing
      </option>
      <option data-description="Admin-level to all resources." value="owner">
        Owner
      </option>
    </select>
  </uk-select>
</div>

