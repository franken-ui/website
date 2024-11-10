<div className="uk-card max-w-sm">
  <div className="uk-card-header">
    <h3 className="uk-card-title">Create project</h3>
    <p className="mt-2 text-muted-foreground">
      Deploy your new project in one-click.
    </p>
  </div>
  <div className="uk-card-body">
    <div className>
      <label className="uk-form-label" htmlFor="name">Name</label>
      <div className="uk-form-controls mt-2">
        <input className="uk-input" id="name" type="text" aria-describedby="name-help-block" placeholder="Name" />
        <div id="name-help-block" className="uk-form-help mt-2">
          The name of your project.
        </div>
      </div>
    </div>
    <div className="mt-4">
      <label className="uk-form-label" htmlFor="framework">Framework</label>
      <div className="uk-form-controls mt-2">
        <select className="uk-select" name="framework">
          <option value="sveltekit">Sveltekit</option>
          <option value="astro" selected>Astro</option>
        </select>
      </div>
    </div>
  </div>
  <div className="uk-card-footer flex justify-between">
    <button className="uk-btn uk-btn-default">Cancel</button>
    <button className="uk-btn uk-btn-primary">Deploy</button>
  </div>
</div>

