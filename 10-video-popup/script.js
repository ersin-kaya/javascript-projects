const openVideoButtons = document.querySelectorAll("[data-video-layer-target]");
const closeVideoButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openVideoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const videoLayer = document.querySelector(button.dataset.videoLayerTarget);
    openVideoLayer(videoLayer);
  });
});

closeVideoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const videoLayers = document.querySelectorAll(".video-layer.active");
    closeVideoLayers(videoLayers);
  });
});

overlay.addEventListener("click", () => {
  const videoLayers = document.querySelectorAll(".video-layer.active");
  closeVideoLayers(videoLayers);
});

function openVideoLayer(videoLayer) {
  if (videoLayer == null) return;
  videoLayer.classList.add("active");
  overlay.classList.add("active");
}

function closeVideoLayer(videoLayer) {
  if (videoLayer == null) return;
  videoLayer.classList.remove("active");
  overlay.classList.remove("active");

  const video = videoLayer.querySelector(".video");
  video.pause();
  video.currentTime = 0;
}

function closeVideoLayers(videoLayers) {
  videoLayers.forEach((videoLayer) => {
    closeVideoLayer(videoLayer);
  });
}
