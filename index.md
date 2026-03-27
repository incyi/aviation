---
layout: default
title: Home
---

# ✈️ My Aviation life.

## Airports

{% raw %}

{% for file in site.static_files %}
  {% if file.path contains '/airports/' %}
    {{ file.path }}{{ file.name }}
  {% endif %}
{% endfor %}

{% endraw %}

Welcome to my aviation portfolio.
Here I document my flights, training sessions, aircraft notes, and personal experiences as a student pilot.
I also share observations, insights, and milestones throughout my aviation journey.  
Full flying videos are available on my [YouTube channel.](https://youtube.com/@inanc64?si=KSc4CRotWbs08ldi)

## 👨‍✈️ whoami  
I’m İnanç Yiğit, an enthusiastic student pilot with a passion for aviation, engineering, and everything that takes to the sky.

## 🛫 Airports
Airports I have flown from.
- [EHHV](/airports/EHHV.md) - Hilversum Airfield *As GA passenger only
- [EHLE](/airports/EHLE.md) - Lelystad Airport
- [EHMM](/airports/EHMM.md) - Middenmeer Aerodrome

## 🛩️ Airplanes
Airplanes I have used during my lessons.
- PH-4V1 [TL Ultralight TL-3000 Sirius](/airplanes/TL3000.md)
- PH-EFL [Pipistrel Velis Electro](/airplanes/VelisElectro.md)
- PH-LEN [Cessna 172](/airplanes/C172.md) *As GA passenger only

## 📘 RPL-MLA Pilot logbook

| Date       | From | To   | Aircraft Type | Registration | Crew Function | Flight Time | Operation Type | Remarks  |
|------------|------|------|---------------|--------------|---------------|-------------|----------------|----------|
| 2025‑08‑21 | EHMM | EHMM | TL‑3000       | PH‑4V1       | Dual          | 1.0         | VFR Training   | Lesson 1 |
| 2025‑09‑30 | EHMM | EHMM | TL‑3000       | PH‑4V1       | Dual          | 1.0         | VFR Training   | Lesson 2 |

## 📘 PPL Pilot logbook

| Date       | From | To   | Aircraft Type           | Registration | Crew Function | Flight Time | Operation Type | Remarks                 |
|------------|------|------|-------------------------|--------------|---------------|-------------|----------------|-------------------------|
| 2025‑12‑10 | EHLE | EHLE | Pipistrel Velis Electro | PH‑EFL       | Dual          | 0.7         | VFR Training   | Lesson 1 – Electric PPL |

## 📘 GA Passenger logbook

| Date       | From | To   | Aircraft Type | Registration | Seat      | Flight Time | Operation Type     | Remarks                          |
|------------|------|------|---------------|--------------|-----------|-------------|--------------------|----------------------------------|
| 2026‑03‑08 | EHHV | EHHV | C172          | PH‑LEN       | Left back | 0.5         | Sightseeing flight | Ömer right front, Zeyd right back|
