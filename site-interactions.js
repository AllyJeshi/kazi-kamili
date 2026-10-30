document.querySelectorAll(".menu-toggle").forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));
  const icon = button.querySelector("i");

  if (!menu || !icon) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpening = menu.hidden;
    menu.hidden = !isOpening;
    button.setAttribute("aria-expanded", String(isOpening));
    button.classList.toggle("is-open", isOpening);
    icon.classList.toggle("fa-bars", !isOpening);
    icon.classList.toggle("fa-xmark", isOpening);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.classList.remove("is-open");
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });
});

document.querySelectorAll(".testimonial-card").forEach((card) => {
  const comment = card.querySelector(".testimonial-comment");
  const toggle = card.querySelector(".testimonial-more-toggle");

  if (!comment || !toggle) {
    return;
  }

  const moreLabel = toggle.querySelector(".testimonial-more-label");
  const lessLabel = toggle.querySelector(".testimonial-less-label");

  if (!moreLabel || !lessLabel) {
    return;
  }

  card.classList.add("testimonial-card--collapsible");

  const updateToggleVisibility = () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    comment.classList.remove("is-expanded");
    const hasMoreContent = comment.scrollHeight > comment.clientHeight + 1;
    comment.classList.toggle("is-expanded", isExpanded);
    toggle.hidden = !hasMoreContent;
  };

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const shouldExpand = !isExpanded;
    comment.classList.toggle("is-expanded", shouldExpand);
    toggle.setAttribute("aria-expanded", String(shouldExpand));
    moreLabel.hidden = shouldExpand;
    lessLabel.hidden = !shouldExpand;
    updateToggleVisibility();
  });

  updateToggleVisibility();
  window.addEventListener("resize", updateToggleVisibility);
});

const videoModal = document.querySelector(".video-modal");
const videoButton = document.querySelector(".video-btn");

if (videoModal && videoButton) {
  const video = videoModal.querySelector("video");
  const closeButton = videoModal.querySelector(".video-close");
  const status = videoModal.querySelector(".video-status");
  let closeTimer;

  const closeVideo = () => {
    if (videoModal.hidden || videoModal.classList.contains("is-closing")) {
      return;
    }

    video.pause();
    video.currentTime = 0;
    videoButton.setAttribute("aria-expanded", "false");
    videoModal.classList.remove("is-open");
    videoModal.classList.add("is-closing");
    closeTimer = window.setTimeout(() => {
      videoModal.hidden = true;
      videoModal.classList.remove("is-closing");
      videoButton.focus();
    }, 200);
  };

  videoButton.addEventListener("click", () => {
    window.clearTimeout(closeTimer);
    videoModal.hidden = false;
    videoModal.classList.remove("is-closing");
    videoModal.classList.add("is-open");
    videoButton.setAttribute("aria-expanded", "true");
    status.hidden = true;
    closeButton.focus();

    video.play().catch(() => {
      const sourceMessage = "La vidéo ne démarre pas automatiquement. Appuyez sur lecture.";
      const languageTranslations = typeof translations !== "undefined"
        ? translations[document.documentElement.lang]
        : null;
      status.textContent = languageTranslations && languageTranslations[sourceMessage]
        ? languageTranslations[sourceMessage]
        : sourceMessage;
      status.hidden = false;
    });
  });

  closeButton.addEventListener("click", closeVideo);
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeVideo();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !videoModal.hidden) {
      closeVideo();
    }
  });
}
