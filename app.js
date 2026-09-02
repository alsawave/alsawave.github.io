lucide.createIcons();
const P1 = [
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

const P2 = [
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

const P3 = [
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
    { name: "Mikłasze", km: 57 },
    { name: "Orlanka", km: 59 },
    { name: "Morze", km: 64 },
    { name: "Stare Berezowo", km: 66 },
    { name: "Chytra", km: 71 },
    { name: "Hajnówka", km: 75 },
    { name: "Orzeszkowo", km: 83 },
    { name: "Witowo", km: 89 },
    { name: "Policzna", km: 96 },
    { name: "Dobrowoda", km: 100 },
    { name: "Czeremcha", km: 106 },
    { name: "Borowiki", km: 117 },
    { name: "Nowy Nurzec", km: 120 },
    { name: "Nurzec", km: 127 },
    { name: "Sycze", km: 134 },
    { name: "Siemiatycze", km: 140 },
    { name: "Fronołów", km: 143 },
    { name: "Sarnaki", km: 148 },
    { name: "Platerów", km: 153 },
    { name: "Patków", km: 160 },
    { name: "Niemojki", km: 163 },
    { name: "Cierpigórz", km: 171 },
    { name: "Mordy Miasto", km: 177 },
    { name: "Mordy", km: 179 },
    { name: "Krzymosze", km: 182 },
    { name: "Stok Lacki", km: 186 },
    { name: "Siedlce", km: 195 }
];

const P30 = [
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
]

const linie = {};
[
    { list: P1, tag: "P1" },
    { list: P10, tag: "P10" },
    { list: P2, tag: "P2" },
    { list: P3, tag: "P3" },
    { list: P30, tag: "P30" }
].forEach(config => {
    config.list.forEach(station => {
        if (!linie[station.name]) {
            linie[station.name] = new Set();
        }
        linie[station.name].add(config.tag);
    });
});

const stacje = Object.keys(linie).sort((a, b) => a.localeCompare(b, 'pl')).map(name => ({
    name: name,
    lines: Array.from(linie[name]).sort()
}));

function wyszukiwarka(inputId, suggestionsId) {
    const input = document.getElementById(inputId);
    const suggestions = document.getElementById(suggestionsId);
    const sugestie = (filter = "") => {
        const sugestie1 = stacje.filter(szukaj => 
            szukaj.name.toLowerCase().contains(filter.toLowerCase())
        );
        if (sugestie1.length === 0 || filter === "") {
            suggestions.classList.add('hidden');
            return;
        }
        suggestions.innerHTML = sugestie1.map(stacja => `
            <div class="suggestion-item p-3 border-b last:border-0 flex items-center gap-3" data-value="${stacja.name}">
                <div class="p-1.5 bg-gray-50 rounded-lg text-gray-400">
                    <i data-lucide="train-front" class="w-4 h-4"></i>
                </div>
                <div>
                    <div class="font-bold text-sm text-gray-800">${stacja.name}</div>
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">${stacja.lines.join(', ')}</div>
                </div>
            </div>
        `).join('');
        suggestions.classList.remove('hidden');
        suggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.dataset.value;
                suggestions.classList.add('hidden');
            });
        });
    input.addEventListener('input', (e) => sugestie(e.target.value));
    input.addEventListener('focus', () => sugestie(input.value));
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.classList.add('hidden');
        }
    });
};
};
document.addEventListener('DOMContentLoaded', () => {
  wyszukiwarka('from-station-input', 'from-suggestions');
  wyszukiwarka('to-station-input', 'to-suggestions');
});
