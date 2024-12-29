<div>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    data-uk-toggle="target: #cmd2"
  >
    Open
  </button>
  <uk-command toggle="cmd2">
    <select hidden>
      <optgroup label="Suggestions">
        <option data-icon="calendar" value="/path/to/calendar">
          Calendar
        </option>
        <option data-icon="smile" value="/path/to/search-emoji">
          Search Emoji
        </option>
        <option data-icon="calculator" disabled value="/path/to/calculator">
          Calculator
        </option>
      </optgroup>
      <optgroup label="Settings">
        <option data-icon="user" value="/path/to/profile">
          Profile
        </option>
        <option data-icon="credit-card" value="/path/to/billing">
          Billing
        </option>
        <option data-icon="settings" value="/path/to/settings">
          Settings
        </option>
      </optgroup>
    </select>
  </uk-command>
</div>
