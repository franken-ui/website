<button
  className="demo uk-btn uk-btn-default"
  type="button"
  onClick={() => {
    window.UIkit.notification({
      message: "Destructive message",
      status: "destructive",
    });
  }}
>
  Destructive
</button>