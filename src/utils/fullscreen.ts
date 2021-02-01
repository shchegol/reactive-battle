declare global {
  interface Document {
    webkitExitFullscreen: () => void;
    webkitFullscreenElement: Element | null;
  }

  interface HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
  }
}

export const activateFullscreen = (element: HTMLElement | null) => {
  if (!element) return undefined;

  if (element.requestFullscreen) {
    return element.requestFullscreen();
  }

  if (element.webkitRequestFullscreen) {
    return element.webkitRequestFullscreen();
  }

  return undefined;
};

export const deactivateFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
