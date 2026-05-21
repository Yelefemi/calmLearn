window.CalmLearnAudioReader = (function () {
  let utterance = null;
  let speaking = false;
  let paused = false;

  function canSpeak() {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function stop() {
    if (!canSpeak()) return;
    window.speechSynthesis.cancel();
    utterance = null;
    speaking = false;
    paused = false;
  }

  function readText(text) {
    if (!canSpeak() || !text.trim()) return false;
    stop();
    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onstart = function () {
      speaking = true;
      paused = false;
    };
    utterance.onend = function () {
      speaking = false;
      paused = false;
    };
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function togglePause() {
    if (!canSpeak() || !speaking) return;
    if (paused) {
      window.speechSynthesis.resume();
      paused = false;
      return;
    }
    window.speechSynthesis.pause();
    paused = true;
  }

  function collectText(selectors) {
    return selectors
      .map((selector) => Array.from(document.querySelectorAll(selector)).map((n) => n.textContent.trim()).join(" "))
      .join(" ")
      .trim();
  }

  function mountControls(selectors, mountSelector) {
    const mount = document.querySelector(mountSelector);
    if (!mount) return;

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.gap = "8px";
    wrap.style.flexWrap = "wrap";
    wrap.style.marginTop = "10px";

    const readBtn = document.createElement("button");
    readBtn.type = "button";
    readBtn.textContent = "Read Aloud";
    readBtn.className = "audio-btn";

    const pauseBtn = document.createElement("button");
    pauseBtn.type = "button";
    pauseBtn.textContent = "Pause / Resume";
    pauseBtn.className = "audio-btn";

    const stopBtn = document.createElement("button");
    stopBtn.type = "button";
    stopBtn.textContent = "Stop";
    stopBtn.className = "audio-btn";

    readBtn.onclick = function () {
      const text = collectText(selectors);
      const ok = readText(text);
      if (!ok) alert("Audio read is not supported in this browser.");
    };
    pauseBtn.onclick = togglePause;
    stopBtn.onclick = stop;

    wrap.appendChild(readBtn);
    wrap.appendChild(pauseBtn);
    wrap.appendChild(stopBtn);
    mount.appendChild(wrap);
  }

  return {
    mountControls,
    stop
  };
})();
