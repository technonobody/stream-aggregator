const channels = [
  { name: "Aaj Tak Live", url: "https://www.youtube.com/embed/9Auq9mYxFEE" },
  { name: "NASA Live", url: "https://www.youtube.com/embed/21X5lGlDOfg" },
  { name: "M3U8 Demo", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
];

const container = document.getElementById("channels");
channels.forEach(ch => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${ch.name}</h3>`;
  card.onclick = () => {
    const win = window.open();
    win.document.write(`
      <html><body style="margin:0">
        ${ch.url.endsWith(".m3u8") ? `
          <video controls autoplay width="100%" height="100%">
            <source src="${ch.url}" type="application/x-mpegURL">
          </video>` : `
          <iframe src="${ch.url}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`}
      </body></html>
    `);
  };
  container.appendChild(card);
});
