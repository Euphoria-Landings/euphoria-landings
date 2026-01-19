const audioPlayers = document.querySelectorAll(".audio-player");

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  
  const isNegative = seconds < 0;
  seconds = Math.abs(seconds);
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  let timeStr;
  if (hours > 0) {
    timeStr = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  } else {
    timeStr = `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }
  
  return isNegative ? `-${timeStr}` : timeStr;
}

audioPlayers.forEach((player) => {
  const audio = player.querySelector(".audio");
  const playPauseBtn = player.querySelector(".play-pause");
  const progressBar = player.querySelector(".progress-bar");
  const progressContainer = player.querySelector(".progress-container");
  const currentTime = player.querySelector(".current-time");
  const duration = player.querySelector(".duration");

  if (!audio) {
    console.error("Audio element not found in player:", player);
    return;
  }

  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration || 0);
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
      const remainingTime = audio.duration - audio.currentTime;
      currentTime.textContent = formatTime(remainingTime);
    }
  });

  audio.addEventListener("error", (e) => {
    console.error("Audio error:", e);
    currentTime.textContent = "Error";
    duration.textContent = "Error";
  });

  playPauseBtn.addEventListener("click", () => {
    audioPlayers.forEach((otherPlayer) => {
      const otherAudio = otherPlayer.querySelector(".audio");
      const otherBtn = otherPlayer.querySelector(".play-pause");
      if (otherAudio && otherAudio !== audio && otherAudio.paused === false) {
        otherAudio.pause();
        otherBtn.classList.remove("pause");
      }
    });

    if (audio.paused) {
      audio.play().catch((e) => {
        console.error("Playback failed:", e);
      });
      playPauseBtn.classList.add("pause");
      duration.style.display = "none";
      currentTime.style.display = "inline";
    } else {
      audio.pause();
      playPauseBtn.classList.remove("pause");
    }
  });

  progressContainer.addEventListener("click", (e) => {
    if (audio.duration) {
      const rect = progressContainer.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const totalWidth = rect.width;
      const clickPercent = offsetX / totalWidth;
      audio.currentTime = clickPercent * audio.duration;
    }
  });
});