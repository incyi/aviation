---
layout: default
title: Home
---

# ✈️ My Aviation life

{% include menu.html %}

All my blog posts:
<ul style="margin: 5px 0 0 0; padding-left: 18px;">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
<br>

<p>
UTC Time : 
<span id="utc-clock"></span>
<span id="zulu-clock" class="zulu-blink"></span>
<br>
AMS Time : <span id="ams-clock"></span>    
</p>

Hi, welcome to my aviation portfolio.
Here I document my flights, training sessions, aircraft notes, and personal experiences as a student pilot.
I also share observations, insights, and milestones throughout my aviation journey.  
Full flying videos are available on my [YouTube channel.](https://youtube.com/@inanc64?si=KSc4CRotWbs08ldi)

## 👨‍✈️ whoami  
I’m IY, an enthusiastic student pilot with a passion for aviation, engineering, and everything that takes me to the sky.

## 🛫 Airports
Airports I have flown from:
- [EHHV](/airports/EHHV.md) - Hilversum Airfield *As GA passenger only
- [EHLE](/airports/EHLE.md) - Lelystad Airport
- [EHMM](/airports/EHMM.md) - Middenmeer Aerodrome
- EHLV - Vliegveld Langeveld

<br>

## 🛩️ Airplanes
Airplanes I have used during my lessons:
- PH-4V1 [TL Ultralight TL-3000 Sirius](/airplanes/TL3000.md)
- PH-EFL [Pipistrel Velis Electro](/airplanes/VelisElectro.md)
- PH-LEN [Cessna 172](/airplanes/C172.md) *As GA passenger only
- PH-AFW [Bristell B23](/airplanes/B23.md)
- PH-1637 Schleicher ASK 21 B

<br>

## 📘 RPL-MLA Pilot logbook

| Date       | From | To   | Aircraft Type | Registration | Crew Function | Flight Time | Operation Type | Remarks  |
|------------|------|------|---------------|--------------|---------------|-------------|----------------|----------|
| 2025‑08‑21 | EHMM | EHMM | TL‑3000       | PH‑4V1       | Dual          | 1.0         | VFR Training   | Lesson 1 |
| 2025‑09‑30 | EHMM | EHMM | TL‑3000       | PH‑4V1       | Dual          | 1.0         | VFR Training   | Lesson 2 |

<br>

## 📘 PPL Pilot logbook

| Date       | From | To   | Aircraft Type           | Registration | Crew Function | Flight Time | Operation Type | Remarks                 |
|------------|------|------|-------------------------|--------------|---------------|-------------|----------------|-------------------------|
| 2025‑12‑10 | EHLE | EHLE | Pipistrel Velis Electro | PH‑EFL       | Dual          | 0.7         | VFR Training   | Lesson 1 – Electric PPL |
| 2026-04-14 | EHMM | EHMM | Bristell B23            | PH-AFW       | Dual          | 1.0         | VFR Training   | Lesson 2                |

<br>

## 📘 Sailplane Pilot logbook

| Date       | From | To   | Aircraft Type         | Registration | Crew Function | Flight Time | Operation Type      | Remarks             |
|------------|------|------|-----------------------|--------------|---------------|-------------|---------------------|---------------------|
| 2026-05-20 | EHLV | EHLV | ASK 21                | PH-1637      | Dual          | 7m          | Introductory flight |                     |

<br>

## 📘 TMG Pilot logbook

| Date       | From | To   | Aircraft Type         | Registration | Crew Function | Flight Time | Operation Type     | Remarks                 |
|------------|------|------|-----------------------|--------------|---------------|-------------|--------------------|-------------------------|
|2026-00-00  |EHHV  |EHHV  |Super Dimona           |PH-AAA        |Dual           | 1.0         |Introductory flight |                         |

<br>

## 📘 GA Passenger logbook

| Date       | From | To   | Aircraft Type | Registration | Seat      | Flight Time | Operation Type     | Remarks                          |
|------------|------|------|---------------|--------------|-----------|-------------|--------------------|----------------------------------|
| 2026‑03‑08 | EHHV | EHHV | C172          | PH‑LEN       | Left back | 0.5         | Sightseeing flight | Ömer right front, Zeyd right back|

<br>

<!-- Put all scripts here, if possible. -->
<script>
function updateClocks() {
  const now = new Date();

  // UTC
  document.getElementById('utc-clock').textContent =
    now.toLocaleString('nl-NL', {
      timeZone: 'UTC',
      hour12: false
    }) + ' UTC';

  // Zulu (AVIATION FORMAT)
  const day = String(now.getUTCDate()).padStart(2, '0');
  const zulu = day + now.toISOString()
    .slice(11, 16)
    .replace(':', '') + 'Z';
  document.getElementById('zulu-clock').textContent = zulu;

  // Amsterdam
  document.getElementById('ams-clock').textContent =
    now.toLocaleString('nl-NL', {
      timeZone: 'Europe/Amsterdam',
      hour12: false
    });
}

// Function to add links dynamically to the Registration columns function
function linkifyRegistrationColumns() {
    document.querySelectorAll("table tbody tr").forEach(row => {
        const registrationCell = row.cells[4]; // 5th column
        if (!registrationCell)
          return;
        const regValue = registrationCell.textContent.trim();
        if (!regValue)
          return;
        const link = document.createElement("a");
        link.href = `https://www.flightradar24.com/data/aircraft/${encodeURIComponent(regValue.toLowerCase())}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = regValue;
        registrationCell.replaceChildren(link);
    });
}

// Run after the table is loaded
linkifyRegistrationColumns();
setInterval(updateClocks, 1000);
updateClocks();

</script>
<!-- Put all scripts here, if possible. -->
