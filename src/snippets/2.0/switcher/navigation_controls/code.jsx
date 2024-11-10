<div>
  <ul className="uk-subnav uk-subnav-primary" uk-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
  </ul>
  <ul className="uk-switcher mt-4">
    <li>
      Hello! <a className="uk-link" href="#" uk-switcher-item={2}>Switch to item 3</a>
    </li>
    <li>
      Hello again!
      <a className="uk-link" href="#" uk-switcher-item="next">Next item</a>
    </li>
    <li>
      Bazinga!
      <a className="uk-link" href="#" uk-switcher-item="previous">Previous item</a>
    </li>
  </ul>
</div>

