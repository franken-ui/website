<div>
  {/* Unstyled */}
  <div className="h-10">
    <uk-select placeholder="Unstyled">
      <select hidden>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </select>
    </uk-select>
  </div>
  {/* Custom */}
  <div className="h-10">
    <uk-select cls-custom="button: bg-lime-500 text-lime-50 w-full flex justify-between; icon: bg-orange-500 text-orange-50; dropdown: bg-purple-500 text-purple-50 w-full;" icon="chevron-down">
      <select hidden>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </select>
    </uk-select>
  </div>
</div>

