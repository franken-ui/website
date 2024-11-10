<button
  className="demo uk-btn uk-btn-default"
  type="button"
  onClick={() => {
    window.UIkit.notification({
      message: `<div class='flex items-center'><span class='flex-none mr-2'><uk-icon icon='rocket'></uk-icon></span> Message with an icon</div>`,
    });
  }}
>
  With icon
</button>