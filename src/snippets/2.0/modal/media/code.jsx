<div>
  <div className="flex flex-wrap gap-2">
    <a className="uk-btn uk-btn-default" href="#modal-media-image" data-uk-toggle>
      Image
    </a>
    <a className="uk-btn uk-btn-default" href="#modal-media-video" data-uk-toggle>
      Video
    </a>
    <a className="uk-btn uk-btn-default" href="#modal-media-youtube" data-uk-toggle>
      YouTube
    </a>
    <a className="uk-btn uk-btn-default" href="#modal-media-vimeo" data-uk-toggle>
      Vimeo
    </a>
  </div>
  <div id="modal-media-image" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-margin-auto-vertical w-auto">
      <button className="uk-modal-close-outside" type="button" data-uk-close />
      <img src="/images/photo.jpg" width={1800} height={1200} alt />
    </div>
  </div>
  <div id="modal-media-video" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-margin-auto-vertical w-auto">
      <button className="uk-modal-close-outside" type="button" data-uk-close />
      <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width={1920} height={1080} controls playsInline data-uk-video />
    </div>
  </div>
  <div id="modal-media-youtube" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-margin-auto-vertical w-auto">
      <button className="uk-modal-close-outside" type="button" data-uk-close />
      <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA" width={1920} height={1080} loading="lazy" data-uk-video data-uk-responsive />
    </div>
  </div>
  <div id="modal-media-vimeo" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-margin-auto-vertical w-auto">
      <button className="uk-modal-close-outside" type="button" data-uk-close />
      <iframe src="https://player.vimeo.com/video/1084537" width={1280} height={720} loading="lazy" data-uk-video data-uk-responsive />
    </div>
  </div>
</div>

