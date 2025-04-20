// geolocation.js

export function getLocation(callback, errorCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        callback(pos);
      },
      (err) => {
        errorCallback(err);
      },
      { enableHighAccuracy: true }
    );
  } else {
    errorCallback(new Error("Geolocation is not supported by this browser."));
  }
}
