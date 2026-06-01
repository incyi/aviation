document.addEventListener("DOMContentLoaded", () => {
  const utcEl = document.getElementById("utc-clock");
  const zuluEl = document.getElementById("zulu-clock");
  const amsEl = document.getElementById("ams-clock");

  if (!utcEl || !zuluEl || !amsEl) return;

  function updateClocks() {
    const now = new Date();

    utcEl.textContent =
      now.toLocaleString("nl-NL", { timeZone: "UTC", hour12: false }) + " UTC";

    const zuluTime = now
      .toLocaleTimeString("en-GB", {
        timeZone: "UTC",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(":", "");

    const day = String(now.getUTCDate()).padStart(2, "0");

    zuluEl.textContent = `${day}${zuluTime}Z`;

    amsEl.textContent = now.toLocaleString("nl-NL", {
      timeZone: "Europe/Amsterdam",
      hour12: false,
    });
  }

  function linkifyRegistrationColumns() {
    const rows = document.querySelectorAll("table tbody tr");

    for (const row of rows) {
      const registrationCell = row.cells?.[4];
      if (!registrationCell) continue;

      // prevent double linking when function runs again
      if (registrationCell.querySelector("a")) continue;

      const regValue = registrationCell.textContent.trim();
      if (!regValue) continue;

      const link = document.createElement("a");
      link.href = `https://www.flightradar24.com/data/aircraft/${encodeURIComponent(
        regValue.toLowerCase(),
      )}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = regValue;

      registrationCell.replaceChildren(link);
    }
  }

  // initial run
  updateClocks();
  linkifyRegistrationColumns();

  // interval cleanup-safe
  const intervalId = setInterval(updateClocks, 1000);

  window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
  });
});
