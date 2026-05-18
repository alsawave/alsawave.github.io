lucide.createIcons();
const searchForm = document.getElementById('searchForm');

const TAILWIND_COLOR_MAP = {
    'bg-red-800': '#991b1b',
    'bg-green-600': '#16a34a',
    'bg-green-500': '#22c55e',
    'bg-gray-900': '#111827',
    'bg-gray-700': '#374151',
    'bg-pink-600': '#db2777',
    'bg-indigo-600': '#4f46e5',
    'bg-yellow-600': '#ca8a04',
    'bg-blue-500': '#3b82f6'
};

const STATIONS_P2 = [
    { name: "Białystok", km: 0 },
    { name: "Białystok Zielone Wzgórza", km: 3 },
    { name: "Białystok Starosielce", km: 5 },
    { name: "Białystok Bacieczki", km: 8 },
    { name: "Fasty", km: 13 },
    { name: "Dobrzyniewo Duże", km: 15 },
    { name: "Borsukówka", km: 21 },
    { name: "Knyszyn", km: 28 },
    { name: "Zastocze", km: 33 },
    { name: "Czechowizna", km: 37 },
    { name: "Mońki", km: 44 },
    { name: "Goniądz", km: 52 },
    { name: "Osowiec", km: 57 },
    { name: "Podlasek", km: 70 },
    { name: "Ruda", km: 74 },
    { name: "Grajewo", km: 82 },
    { name: "Prostki", km: 88 },
    { name: "Lipińskie Małe", km: 93 },
    { name: "Ełk Szyba Wschód", km: 100 },
    { name: "Ełk", km: 103 }
];

const STATIONS_P1 = [
    { name: "Białystok", km: 0 },
    { name: "Białystok Zielone Wzgórza", km: 3 },
    { name: "Klepacze", km: 5},
    { name: "Niewodnica", km: 8 },
    { name: "Trypucie", km: 10 },
    { name: "Baciuty", km: 14 },
    { name: "Bojary", km: 17 },
    { name: "Uhowo", km: 21 },
    { name: "Łapy", km: 23 },
    { name: "Łapy Osse", km: 27 },
    { name: "Zdrody Nowe", km: 31 },
    { name: "Racibory", km: 37 },
    { name: "Jabłoń Kościelna", km: 42 },
    { name: "Szymbory", km: 45 },
    { name: "Szepietowo", km: 50 },
    { name: "Dąbrowa-Łazy", km: 57 },
    { name: "Kity", km: 59 },
    { name: "Czyżew", km: 65 }
    
];

const STATIONS_P3 = [
    { name: "Białystok", km: 0 },
    { name: "Białystok Zielone Wzgórza", km: 3 },
    { name: "Białystok Nowe Miasto", km: 4 },
    { name: "Białystok Stadion", km: 6 },
    { name: "Hryniewicze", km: 9 },
    { name: "Lewickie", km: 14 },
    { name: "Hołówki Duże", km: 21 },
    { name: "Zimnochy", km: 23 },
    { name: "Strabla", km: 29 },
    { name: "Rajsk", km: 36 },
    { name: "Orzechowicze", km: 40 },
    { name: "Bielsk Podlaski", km: 46 },
    { name: "Lewki", km: 50 },
    { name: "Podbiele", km: 54 },
    { name: "Gregorowce", km: 58 },
    { name: "Gregorowce Południowe", km: 60 },
    { name: "Suchowolce", km: 64 },
    { name: "Kleszczele", km: 70 },
    { name: "Repczyce", km: 74 },
    { name: "Czeremcha", km: 77 }
];
let STATIONS_L38 = STATIONS_P2;
let STATIONS_L6 = STATIONS_P1;
const STATION_LINES_MAP = {};
[
    { list: STATIONS_P1, tag: "P1" },
    { list: STATIONS_P2, tag: "P2" },
    { list: STATIONS_P3, tag: "P3" }
].forEach(config => {
    config.list.forEach(station => {
        if (!STATION_LINES_MAP[station.name]) {
            STATION_LINES_MAP[station.name] = new Set();
        }
        STATION_LINES_MAP[station.name].add(config.tag);
    });
});

const ALL_STATIONS_DATA = Object.keys(STATION_LINES_MAP).sort((a, b) => a.localeCompare(b, 'pl')).map(name => ({
    name: name,
    lines: Array.from(STATION_LINES_MAP[name]).sort()
}));

function setupSearch(inputId, suggestionsId) {
    const input = document.getElementById(inputId);
    const suggestions = document.getElementById(suggestionsId);

    const renderSuggestions = (filter = "") => {
        const filtered = ALL_STATIONS_DATA.filter(s => 
            s.name.toLowerCase().includes(filter.toLowerCase())
        );
        
        if (filtered.length === 0 || filter === "") {
            suggestions.classList.add('hidden');
            return;
        }

        suggestions.innerHTML = filtered.map(station => `
            <div class="suggestion-item p-3 border-b last:border-0 flex items-center gap-3" data-value="${station.name}">
                <div class="p-1.5 bg-gray-50 rounded-lg text-gray-400">
                    <i data-lucide="map-pin" class="w-4 h-4"></i>
                </div>
                <div>
                    <div class="font-bold text-sm text-gray-800">${station.name}</div>
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">${station.lines.join(', ')}</div>
                </div>
            </div>
        `).join('');
        
        suggestions.classList.remove('hidden');
        lucide.createIcons();

        suggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.dataset.value;
                suggestions.classList.add('hidden');
            });
        });
    };

    input.addEventListener('input', (e) => renderSuggestions(e.target.value));
    input.addEventListener('focus', () => renderSuggestions(input.value));
    
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.classList.add('hidden');
        }
    });
}

setupSearch('from-station-input', 'from-suggestions');
setupSearch('to-station-input', 'to-suggestions');

const LINE_SPEED_KMPH = 100;

const BASE_TIMETABLE = {
    "Białystok->Ełk": [
        { id: "Os 15201", depTime: "05:34", type: "Osobowy", unit: "EN57AL-1529" },
        { id: "Os 15203", depTime: "10:43", type: "Osobowy", unit: "EN57AL-1543" },
        { id: "Os 15205", depTime: "14:35", type: "Osobowy", unit: "EN57AL-1555" },
        { id: "Os 15207", depTime: "18:05", type: "Osobowy", unit: "EN57AL-1536" },
    ],
    "Ełk->Białystok": [
        { id: "Os 51202", depTime: "05:25", type: "Osobowy", unit: "EN57AL-1536" },
        { id: "Os 51204", depTime: "07:39", type: "Osobowy", unit: "EN57AL-1529" },
        { id: "Os 51206", depTime: "14:33", type: "Osobowy", unit: "EN57AL-1543" },
        { id: "Os 51208", depTime: "17:28", type: "Osobowy", unit: "EN57AL-1555" }
    ],
    "Białystok->Czyżew": [
        { id: "Os 10011", depTime: "01:15", type: "Nocny Sprinter", unit: "SA133-001" },
        { id: "Os 10013", depTime: "04:45", type: "Nocny Sprinter", unit: "SA133-019" },
        { id: "Os 10015", depTime: "06:15", type: "Osobowy", unit: "EN57AL-1529" },
        { id: "Os 10017", depTime: "07:45", type: "Osobowy", unit: "SA108-009" },
        { id: "Os 10019", depTime: "09:15", type: "Osobowy", unit: "EN57AL-1543" },
        { id: "Os 10021", depTime: "10:45", type: "Osobowy", unit: "SA133-002" },
        { id: "Os 10023", depTime: "12:15", type: "Osobowy", unit: "EN57AL-1551" },
        { id: "Os 10025", depTime: "13:45", type: "Osobowy", unit: "SA133-009" },
        { id: "Os 10027", depTime: "15:15", type: "Osobowy", unit: "EN57AL-1544" },
        { id: "Os 10029", depTime: "16:45", type: "Osobowy", unit: "SA133-020" },
        { id: "Os 10031", depTime: "18:15", type: "Osobowy", unit: "EN57AL-1555" },
        { id: "Os 10033", depTime: "19:45", type: "Osobowy", unit: "SA105-103" },
        { id: "Os 10035", depTime: "21:15", type: "Osobowy", unit: "EN57AL-1529" },
        { id: "Os 10037", depTime: "22:45", type: "Nocny Sprinter", unit: "SA133-012" }
    ],
    "Czyżew->Białystok": [
        { id: "Os 10012", depTime: "04:00", type: "Nocny Sprinter", unit: "SA108-007" },
        { id: "Os 10014", depTime: "05:30", type: "Osobowy", unit: "EN57AL-1543" },
        { id: "Os 10016", depTime: "07:00", type: "Osobowy", unit: "SA108-009" },
        { id: "Os 10018", depTime: "08:30", type: "Osobowy", unit: "EN57AL-1551" },
        { id: "Os 10020", depTime: "10:00", type: "Osobowy", unit: "SA133-002" },
        { id: "Os 10022", depTime: "11:30", type: "Osobowy", unit: "EN57AL-1544" },
        { id: "Os 10024", depTime: "13:00", type: "Osobowy", unit: "SA133-009" },
        { id: "Os 10026", depTime: "14:30", type: "Osobowy", unit: "EN57AL-1555" },
        { id: "Os 10028", depTime: "16:00", type: "Osobowy", unit: "SA105-103" },
        { id: "Os 10030", depTime: "17:30", type: "Osobowy", unit: "SA133-020" },
        { id: "Os 10032", depTime: "19:00", type: "Osobowy", unit: "EN57AL-1529" },
        { id: "Os 10034", depTime: "20:30", type: "Osobowy", unit: "SA108-009" },
        { id: "Os 10036", depTime: "22:00", type: "Nocny Sprinter", unit: "SA133-012" },
        { id: "Os 10038", depTime: "23:30", type: "Nocny Sprinter", unit: "SA133-001" }
    ],
    "Białystok->Czeremcha": [
        { id: "Os 30031", depTime: "06:52", type: "Osobowy", unit: "SA108-009" },
        { id: "Os 30033", depTime: "15:00", type: "Osobowy", unit: "SA105-103" }
    ],
    "Czeremcha->Białystok": [
        { id: "Os 30032", depTime: "04:54", type: "Osobowy", unit: "SA108-009" },
        { id: "Os 30034", depTime: "18:00", type: "Osobowy", unit: "SA105-103" },
    ]
};

function timeToMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
}

function minutesToTime(mins) {
    const m = ((mins % (24 * 60)) + (24 * 60)) % (24 * 60); // mod 24h
    const h = Math.floor(m / 60);
    const mm = m % 60;
    return `${h.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;
}
function generateTrains(fromName, toName, selectedTimeMinutes = 0, targetDateStr = null) {
    const now = new Date();
    const currentRealMins = now.getHours() * 60 + now.getMinutes();
    const dateToCompare = targetDateStr || document.getElementById('travel-date').value;
    const isToday = dateToCompare === now.toLocaleDateString('en-CA');

    const getDurationStr = (mins) => mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}min` : `${mins}min`;

    const getLineDataForStations = (s1, s2) => {
        if (!s1 || !s2) return null;
        if (STATIONS_P2.find(s => s.name === s1.name) && STATIONS_P2.find(s => s.name === s2.name)) {
            const p2s1 = STATIONS_P2.find(s => s.name === s1.name);
            const p2s2 = STATIONS_P2.find(s => s.name === s2.name);
            return { key: p2s2.km > p2s1.km ? "Białystok->Grajewo" : "Grajewo->Białystok", speed: 100, originKm: p2s2.km > p2s1.km ? 0 : 82.477, s1: p2s1, s2: p2s2 };
        }
        if (STATIONS_P1.find(s => s.name === s1.name) && STATIONS_P1.find(s => s.name === s2.name)) {
            const p1s1 = STATIONS_P1.find(s => s.name === s1.name);
            const p1s2 = STATIONS_P1.find(s => s.name === s2.name);
            return { key: p1s2.km < p1s1.km ? "Białystok->Czyżew" : "Czyżew->Białystok", speed: 100, originKm: p1s2.km < p1s1.km ? 177.305 : 111.848, s1: p1s1, s2: p1s2 };
        }
        if (STATIONS_P3.find(s => s.name === s1.name) && STATIONS_P3.find(s => s.name === s2.name)) {
            const p3s1 = STATIONS_P3.find(s => s.name === s1.name);
            const p3s2 = STATIONS_P3.find(s => s.name === s2.name);
            return { key: p3s2.km > p3s1.km ? "Białystok->Czeremcha" : "Czeremcha->Białystok", speed: 100, originKm: p3s2.km > p3s1.km ? 0 : 77.003, s1: p3s1, s2: p3s2 };
        }
        return null;
    };

    const directLine = getLineDataForStations({name: fromName}, {name: toName});

    if (directLine) {
        const { s1, s2, key, speed, originKm } = directLine;
        const distanceKm = Math.abs(s1.km - s2.km);
        const distFromOrigin = Math.abs(s1.km - originKm);
        const timeFromOrigin = Math.round((distFromOrigin / speed) * 60);
        const travelTime = Math.max(5, Math.round((distanceKm / speed) * 60));

        const timetable = BASE_TIMETABLE[key] || [];
        return timetable.map(slot => {
            const depMins = timeToMinutes(slot.depTime) + timeFromOrigin;
            const arrMins = depMins + travelTime;
            return {
                id: slot.id, from: fromName, to: toName, distance: Math.max(1, Math.floor(distanceKm)),
                depTime: minutesToTime(depMins), arrTime: minutesToTime(arrMins), duration: getDurationStr(travelTime),
                price: parseFloat((distanceKm * 0.34625).toFixed(2)), type: slot.type, requiresSwitch: false
            };
        }).filter(t => {
            const m = timeToMinutes(t.depTime);
            return m >= selectedTimeMinutes && (!isToday || m >= currentRealMins);
        });
    } else {
        // Different lines: Route through junction (Białystok)
        const biaName = "Białystok";
        const leg1Line = getLineDataForStations({name: fromName}, {name: biaName});
        const leg2Line = getLineDataForStations({name: biaName}, {name: toName});

        if (!leg1Line || !leg2Line) return [];

        const s1 = leg1Line.s1;
        const s1Junction = leg1Line.s2;
        const s2Junction = leg2Line.s1;
        const s2 = leg2Line.s2;

        const d1 = Math.abs(s1.km - s1Junction.km);
        const d2 = Math.abs(s2.km - s2Junction.km);
        const t1 = Math.round((d1 / leg1Line.speed) * 60);
        const t2 = Math.round((d2 / leg2Line.speed) * 60);
        
        const leg1FromOrigin = Math.round((Math.abs(s1.km - leg1Line.originKm) / leg1Line.speed) * 60);
        const leg2JunctionFromOrigin = Math.round((Math.abs(s2Junction.km - leg2Line.originKm) / leg2Line.speed) * 60);

        const timetable1 = BASE_TIMETABLE[leg1Line.key] || [];
        const timetable2 = BASE_TIMETABLE[leg2Line.key] || [];

        const results = [];
        timetable1.forEach(slot1 => {
            const dep1Mins = timeToMinutes(slot1.depTime) + leg1FromOrigin;
            const arrJunctionMins = dep1Mins + t1;

            timetable2.forEach(slot2 => {
                const dep2JunctionMins = timeToMinutes(slot2.depTime) + leg2JunctionFromOrigin;
                
                if (dep2JunctionMins >= arrJunctionMins + 10) {
                    const arrFinalMins = dep2JunctionMins + t2;
                    const totalDuration = arrFinalMins - dep1Mins;

                    results.push({
                        id: slot1.id, from: fromName, to: toName, distance: Math.floor(d1 + d2),
                        depTime: minutesToTime(dep1Mins), arrTime: minutesToTime(arrFinalMins), duration: getDurationStr(totalDuration),
                        price: parseFloat(((d1 + d2) * 0.34625).toFixed(2)), type: slot1.type, requiresSwitch: true,
                        connection: { 
                            station: "Białystok", 
                            arrivalTime: minutesToTime(arrJunctionMins), 
                            departureTime: minutesToTime(dep2JunctionMins), 
                            nextTrainId: slot2.id, 
                            nextTrainType: slot2.type 
                        }
                    });
                }
            });
        });

        const uniqueLeg1 = new Map();
        results.forEach(r => {
            const m = timeToMinutes(r.depTime);
            if (m >= selectedTimeMinutes && (!isToday || m >= currentRealMins)) {
                if (!uniqueLeg1.has(r.id) || timeToMinutes(r.arrTime) < timeToMinutes(uniqueLeg1.get(r.id).arrTime)) {
                    uniqueLeg1.set(r.id, r);
                }
            }
        });
        
        return Array.from(uniqueLeg1.values()).sort((a, b) => timeToMinutes(a.depTime) - timeToMinutes(b.depTime));
    }
}



function formatDatePolish(date) {
    const months = ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
});



window.addEventListener('DOMContentLoaded', () => {
    const hourSelect = document.getElementById('travel-hour');
    const minuteSelect = document.getElementById('travel-minute');
    const dateInput = document.getElementById('travel-date');
    const now = new Date();
    if (hourSelect) {
        for (let i = 0; i < 24; i++) {
            const val = i.toString().padStart(2, '0');
            const opt = new Option(val, val);
            if (i === now.getHours()) opt.selected = true;
            hourSelect.add(opt);
        }
    }
    if (minuteSelect) {
        for (let i = 0; i < 60; i += 5) {
            const val = i.toString().padStart(2, '0');
            const opt = new Option(val, val);
            const currentMin = Math.round(now.getMinutes() / 5) * 5;
            if (i === (currentMin >= 60 ? 0 : currentMin)) opt.selected = true;
            minuteSelect.add(opt);
        }
    }
    if (dateInput) {
        dateInput.value = now.toLocaleDateString('en-CA');
    }

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add('py-1');
        header.classList.remove('py-3');
    } else {
        header.classList.add('py-3');
        header.classList.remove('py-1');
    }
});
