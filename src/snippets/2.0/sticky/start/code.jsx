<div>
  <div className="uk-placeholder h-80">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
      <div>
        <div className="uk-position-z-index bg-muted p-4 text-center text-muted-foreground" data-uk-sticky="start: 200; end: !.h-80; offset: 80">
          200px
        </div>
      </div>
      <div>
        <div className="uk-position-z-index bg-muted p-4 text-center text-muted-foreground" data-uk-sticky="start: 100%; end: !.h-80; offset: 80">
          100%
        </div>
      </div>
      <div>
        <div className="uk-position-z-index bg-muted p-4 text-center text-muted-foreground" data-uk-sticky="start: 20vh; end: !.h-80; offset: 80">
          20vh
        </div>
      </div>
      <div>
        <div className="uk-position-z-index bg-muted p-4 text-center text-muted-foreground" data-uk-sticky="start: !.h-80; end: !.h-80 + div; offset: 80">
          Selector
        </div>
      </div>
    </div>
  </div>
  <div style={{height: 200}} />
</div>
