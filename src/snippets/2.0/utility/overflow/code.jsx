<div className="h-80">
  <div className="js-wrapper space-y-4">
    <p>Some content before the overflow auto container.</p>
    <div uk-overflow-auto="selContainer: .h-80; selContent: .js-wrapper">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src="/images/light.jpg" width={1800} height={1200} alt />
        </div>
        <div>
          <img src="/images/dark.jpg" width={1800} height={1200} alt />
        </div>
        <div>
          <img src="/images/photo.jpg" width={1800} height={1200} alt />
        </div>
        <div>
          <img src="/images/photo2.jpg" width={1800} height={1200} alt />
        </div>
      </div>
    </div>
    <p>Some content after the overflow auto container.</p>
  </div>
</div>

