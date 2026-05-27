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

<p>UTC Time: <span id="utc-clock"></span></p>

<script>
function updateUTC() {
  const now = new Date();
  const utcString = now.toLocaleString('nl-NL', {
    timeZone: 'UTC',
    hour12: false
  });
  document.getElementById('utc-clock').textContent = utcString + ' UTC';
}
setInterval(updateUTC, 1000);
updateUTC();
</script>

<p>Amsterdam Time: <span id="ams-clock"></span></p>

<script>
function updateAMS() {
  const now = new Date();
  const amsString = now.toLocaleString('nl-NL', {
    timeZone: 'Europe/Amsterdam',
    hour12: false
  });
  document.getElementById('ams-clock').textContent = amsString;
}
setInterval(updateAMS, 1000);
updateAMS();
</script>

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

## 🛩️ Airplanes
Airplanes I have used during my lessons:
- PH-4V1 [TL Ultralight TL-3000 Sirius](/airplanes/TL3000.md)
- PH-EFL [Pipistrel Velis Electro](/airplanes/VelisElectro.md)
- PH-LEN [Cessna 172](/airplanes/C172.md) *As GA passenger only
- PH-AFW [Bristell B23](/airplanes/B23.md)
- PH-1637 Schleicher ASK 21 B

## 📘 RPL-MLA Pilot logbook

| Date       | From | To   | Aircraft Type | Registration | Crew Function | Flight Time | Operation Type | Remarks  |
|------------|------|------|---------------|--------------|---------------|-------------|----------------|----------|
| 2025‑08‑21 | EHMM | EHMM | TL‑3000       | PH‑4V1       | Dual          | 1.0         | VFR Training   | Lesson 1 |
| 2025‑09‑30 | EHMM | EHMM | TL‑3000       | PH‑4V1       | Dual          | 1.0         | VFR Training   | Lesson 2 |

## 📘 PPL Pilot logbook

| Date       | From | To   | Aircraft Type           | Registration | Crew Function | Flight Time | Operation Type | Remarks                 |
|------------|------|------|-------------------------|--------------|---------------|-------------|----------------|-------------------------|
| 2025‑12‑10 | EHLE | EHLE | Pipistrel Velis Electro | PH‑EFL       | Dual          | 0.7         | VFR Training   | Lesson 1 – Electric PPL |
| 2026-04-14 | EHMM | EHMM | Bristell B23            | PH-AFW       | Dual          | 1.0         | VFR Training   | Lesson 2                |

## 📘 Sailplane Pilot logbook

| Date       | From | To   | Aircraft Type         | Registration | Crew Function | Flight Time | Operation Type      | Remarks             |
|------------|------|------|-----------------------|--------------|---------------|-------------|---------------------|---------------------|
| 2026-05-20 | EHLV | EHLV | ASK 21                | PH-1637      | Dual          | 7m          | Introductory flight |                     |

## 📘 TMG Pilot logbook

| Date       | From | To   | Aircraft Type         | Registration | Crew Function | Flight Time | Operation Type     | Remarks                 |
|------------|------|------|-----------------------|--------------|---------------|-------------|--------------------|-------------------------|
|2026-00-00  |EHHV  |EHHV  |Super Dimona           |PH-AAA        |Dual           | 1.0         |Introductory flight |                         |

## 📘 GA Passenger logbook

| Date       | From | To   | Aircraft Type | Registration | Seat      | Flight Time | Operation Type     | Remarks                          |
|------------|------|------|---------------|--------------|-----------|-------------|--------------------|----------------------------------|
| 2026‑03‑08 | EHHV | EHHV | C172          | PH‑LEN       | Left back | 0.5         | Sightseeing flight | Ömer right front, Zeyd right back|
