<div data-uk-filter="target: .js-filter">
  <div className="flex gap-x-4 divide-x divide-border">
    <div>
      <ul className="uk-subnav uk-subnav-primary" uk-margin>
        <li className="uk-active" data-uk-filter-control><a href="#">All</a></li>
      </ul>
    </div>
    <div>
      <ul className="uk-subnav uk-subnav-primary" uk-margin>
        <li data-uk-filter-control="[data-color='white']">
          <a href="#">White</a>
        </li>
        <li data-uk-filter-control="[data-color='blue']">
          <a href="#">Blue</a>
        </li>
        <li data-uk-filter-control="[data-color='black']">
          <a href="#">Black</a>
        </li>
      </ul>
    </div>
    <div>
      <ul className="uk-subnav uk-subnav-primary" uk-margin>
        <li data-uk-filter-control="[data-size='small']">
          <a href="#">Small</a>
        </li>
        <li data-uk-filter-control="[data-size='medium']">
          <a href="#">Medium</a>
        </li>
        <li data-uk-filter-control="[data-size='large']">
          <a href="#">Large</a>
        </li>
      </ul>
    </div>
  </div>
  <ul className="js-filter mt-4 grid grid-cols-2 text-center md:grid-cols-3" data-uk-grid="masonry: true">
    <li className="p-4" data-color="white" data-size="large">
      <div className="h-96">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="blue" data-size="small">
      <div className="h-60 bg-blue-500 text-blue-50">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="white" data-size="medium">
      <div className="h-80">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="white" data-size="small">
      <div className="h-60">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="black" data-size="medium">
      <div className="h-80 bg-black text-white">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="black" data-size="small">
      <div className="h-60 bg-black text-white">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="blue" data-size="medium">
      <div className="h-80 bg-blue-500 text-blue-50">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="black" data-size="large">
      <div className="h-96 bg-black text-white">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="blue" data-size="large">
      <div className="h-96 bg-blue-500 text-blue-50">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="white" data-size="large">
      <div className="h-96">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="blue" data-size="medium">
      <div className="h-80 bg-blue-500 text-blue-50">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
    <li className="p-4" data-color="black" data-size="small">
      <div className="h-60 bg-black text-white">
        <div className="uk-position-center">Item</div>
      </div>
    </li>
  </ul>
</div>

