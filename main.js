const { event, sidebar, menu, core, overlay } = iina;

menu.addItem(
  menu.item("Cast to Chromecast", () => {
    sidebar.show();
    iina.postMessage("requestDevices");
  })
);

menu.addItem(
  menu.item("Stop Casting", () => {
    iina.postMessage("stopCast");
  })
);

iina.onMessage("castStatus", (data) => {
  if (data.connected) {
    overlay.show();
    overlay.setContent(`
      <div style="background:rgba(0,0,0,0.7);color:white;padding:8px 16px;border-radius:20px;font-size:14px;display:flex;align-items:center;gap:8px;">
        <span style="font-size:18px;">📡</span>
        Casting to <strong>${data.deviceName}</strong>
      </div>
    `);
  } else {
    overlay.hide();
  }
});

event.on("iina.pause", () => iina.postMessage("playerPause"));
event.on("iina.resume", () => iina.postMessage("playerResume"));
event.on("iina.seek", () => iina.postMessage("playerSeek", { position: core.status.position }));
event.on("iina.fileLoaded", () => iina.postMessage("newFile", { url: core.status.url, title: core.status.title }));
