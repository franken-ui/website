<div className="flex flex-wrap gap-2">
  <button
    className="uk-btn uk-btn-default"
    type="button"
    onClick={() => {
      window.UIkit.notification({ message: "Top Left", pos: "top-left" });
    }}
  >
    Top Left
  </button>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    onClick={() => {
      window.UIkit.notification({ message: "Top Center", pos: "top-center" });
    }}
  >
    Top Center
  </button>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    onClick={() => {
      window.UIkit.notification({ message: "Top Right", pos: "top-right" });
    }}
  >
    Top Right
  </button>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    onClick={() => {
      window.UIkit.notification({ message: "Bottom Left", pos: "bottom-left" });
    }}
  >
    Bottom Left
  </button>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    onClick={() => {
      window.UIkit.notification({
        message: "Bottom Center",
        pos: "bottom-center",
      });
    }}
  >
    Bottom Center
  </button>
  <button
    className="uk-btn uk-btn-default"
    type="button"
    onClick={() => {
      window.UIkit.notification({
        message: "Bottom Right",
        pos: "bottom-right",
      });
    }}
  >
    Bottom Right
  </button>
</div>