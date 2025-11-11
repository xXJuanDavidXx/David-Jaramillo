document.addEventListener('DOMContentLoaded', function() {
  var videoModal = document.getElementById('videoModal');
  var videoFrame = document.getElementById('videoFrame');
  var videoURL = "https://www.youtube.com/embed/TU_URL_AQUI?autoplay=1";

  videoModal.addEventListener('show.bs.modal', function () {
    videoFrame.src = videoURL;
  });
  videoModal.addEventListener('hidden.bs.modal', function () {
    videoFrame.src = "media/portfolio/videos/v1.mp4";
  });
});
