<div data-uk-filter="target: .js-filter">
  <div className="flex items-center justify-between">
    <div className="flex-1">
      <div className="flex gap-x-4 divide-x divide-border">
        <div>
          <ul className="uk-subnav uk-subnav-primary" uk-margin>
            <li className="uk-active" data-uk-filter-control>
              <a href="#">All</a>
            </li>
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
    </div>
    <div className="flex flex-none gap-x-4">
      <span className="uk-active" data-uk-filter-control="sort: data-name">
        <a className="uk-icon-link" href="#" aria-label="Sort ascending">
          <uk-icon icon="arrow-down" />
        </a>
      </span>
      <span data-uk-filter-control="sort: data-name; order: desc">
        <a className="uk-icon-link" href="#" aria-label="Sort descending">
          <uk-icon icon="arrow-up" />
        </a>
      </span>
    </div>
  </div>
  <ul className="js-filter mt-4 grid grid-cols-2 text-center md:grid-cols-3" data-uk-grid="masonry: true">
    <li className="p-4" data-name="A" data-color="white" data-size="large">
      <div className="h-96">
        <div className="uk-position-center">A</div>
      </div>
    </li>
    <li className="p-4" data-name="B" data-color="blue" data-size="small">
      <div className="h-60 bg-blue-500 text-blue-50">
        <div className="uk-position-center">B</div>
      </div>
    </li>
    <li className="p-4" data-name="C" data-color="white" data-size="medium">
      <div className="h-80">
        <div className="uk-position-center">C</div>
      </div>
    </li>
    <li className="p-4" data-name="D" data-color="white" data-size="small">
      <div className="h-60">
        <div className="uk-position-center">D</div>
      </div>
    </li>
    <li className="p-4" data-name="E" data-color="black" data-size="medium">
      <div className="h-80 bg-black text-white">
        <div className="uk-position-center">E</div>
      </div>
    </li>
    <li className="p-4" data-name="F" data-color="black" data-size="small">
      <div className="h-60 bg-black text-white">
        <div className="uk-position-center">F</div>
      </div>
    </li>
    <li className="p-4" data-name="G" data-color="blue" data-size="medium">
      <div className="h-80 bg-blue-500 text-blue-50">
        <div className="uk-position-center">G</div>
      </div>
    </li>
    <li className="p-4" data-name="H" data-color="black" data-size="large">
      <div className="h-96 bg-black text-white">
        <div className="uk-position-center">H</div>
      </div>
    </li>
    <li className="p-4" data-name="I" data-color="blue" data-size="large">
      <div className="h-96 bg-blue-500 text-blue-50">
        <div className="uk-position-center">I</div>
      </div>
    </li>
    <li className="p-4" data-name="J" data-color="white" data-size="large">
      <div className="h-96">
        <div className="uk-position-center">J</div>
      </div>
    </li>
    <li className="p-4" data-name="K" data-color="blue" data-size="medium">
      <div className="h-80 bg-blue-500 text-blue-50">
        <div className="uk-position-center">K</div>
      </div>
    </li>
    <li className="p-4" data-name="L" data-color="black" data-size="small">
      <div className="h-60 bg-black text-white">
        <div className="uk-position-center">L</div>
      </div>
    </li>
  </ul>
</div>

