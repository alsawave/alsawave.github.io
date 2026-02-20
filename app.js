
import { createIcons, Search, MapPin, ArrowRight, Menu, X, Clock, Smartphone, ChevronRight, Phone, Mail, Facebook, Instagram, XCircle, Check, TrainFront, Calendar, Info, ArrowLeft, CreditCard, RefreshCw, ShieldCheck, Wifi, Lock, CheckCircle, Award } from 'lucide';


const ICON_CONFIG = {
    icons: {
        Search, MapPin, ArrowRight, Menu, X, Clock, Smartphone, ChevronRight, Phone, Mail, Facebook, Instagram, XCircle, Check, TrainFront, Calendar, Info, ArrowLeft, CreditCard, RefreshCw, ShieldCheck, Wifi, Lock, CheckCircle, Award
    }
};

createIcons(ICON_CONFIG);

const newsData = [
     {
        id: 1,
        title: "20 lat szynobusów SA133 Kolei Podlaskich",
        date: "20 luty 2026",
        tag: "WYDARZENIE",
        tagColor: "bg-blue-800",
        image: "/Image.jpg",
        summary: "Świętujemy rocznicę wprowadzenia nowoczesnego taboru na trasę do Grajewa...",
        content: `
            <p>To już 20 lat nowoczesnych autobusów szynowych SA133 we flocie Kolei Podlaskich!</p>
            <p>"Gdy w 2006 roku na podlaskie tory wyjechały pierwsze autobusy szynowe serii SA133, dla wielu pasażerów był to symbol prawdziwego przełomu. Niskopodłogowe szynobusy z biletomatami, klimatyzacją oraz innymi udogodnieniami - Koleje Podlaskie wkroczyły w nową epokę" - Stefan Tur, prezes Kolei Podlaskich. </p>
        `
    },
    {
        id: 2,
        title: "Wykolejenie pociągu EN57AL-1536 w Sokółce",
        date: "2 sty 2026",
        tag: "PILNE",
        tagColor: "bg-red-800",
        image: "https://ocdn.eu/images/pulscms/Y2U7MDA_/9673754f-4d0c-4f22-a270-ff0ef0d4155e.jpeg",
        summary: "Dziś w godzinach porannych na stacji Sokółka doszło do groźnego incydentu. Pociąg Kolei Podlaskich o numerze EN57AL-1536, wykonujący przejazd techniczny do miejscowego zaplecza (szopy), wypadł z szyn.",
        content: `
            <p>Dziś w godzinach porannych na stacji Sokółka doszło do groźnego incydentu. Pociąg Kolei Podlaskich o numerze EN57AL-1536, wykonujący przejazd techniczny do miejscowego zaplecza (szopy), wypadł z szyn.</p>
            <p>Na szczęście w momencie zdarzenia w pociągu znajdowała się jedynie obsługa, a nikt nie odniósł obrażeń. Uszkodzeniu uległ fragment torowiska oraz podwozie jednostki. Służby techniczne pracują nad postawieniem składu na tory przy użyciu specjalistycznego dźwigu kolejowego.</p>
            <p>Ruch pociągów w kierunku Suwałk i Kuźnicy Białostockiej może odbywać się z opóźnieniami ze względu na zajęcie części torów stacyjnych przez uszkodzony skład. Prosimy o śledzenie komunikatów na peronach.</p>
        `
    },
    {
        id: 3,
        title: "Rekordowa liczba pasażerów na linii P2",
        date: "1 sty 2026",
        tag: "WYDARZENIE",
        tagColor: "bg-blue-800",
        image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=800",
        summary: "Rok 2025 zakończyliśmy z historycznym wynikiem przewozów na linii nr P2...",
        content: `
            <p>Rok 2025 zakończyliśmy z historycznym wynikiem przewozów na linii nr P2. Zarząd Kolei Podlaskich informuje, że trasa Białystok - Grajewo cieszy się niesłabnącym zainteresowaniem, a liczba pasażerów wzrosła o 20% w skali roku.</p>
        `
    },
    {
        id: 4,
        title: "Nowy rozkład jazdy: Więcej pociągów do i z Czyżewa",
        date: "15 gru 2025",
        tag: "ROZKŁAD",
        tagColor: "bg-black",
        image: "https://imgs.search.brave.com/67G2vVJGy5Hh9L52SfBWi2k6A5JGthKsPuV-zExpUq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kLWFy/dC5wcHN0YXRpYy5w/bC9rYWRyeS9rL3Iv/MS83Ni9lYS82NGVj/Nzc1MjY4MWZmX29f/bWVkaXVtLmpwZw",
        summary: "Od połowy grudnia na linii P1 Białystok - Czyżew wprowadzane będą dodatkowe składy pociągów...",
        content: `
            <p>Od połowy grudnia na linii P1 Białystok – Czyżew wprowadzane będą dodatkowe składy pociągów "Nocny Sprinter".</p>
            <p>Projekt realizowany jest przy wsparciu Funduszu Europejskiego w ramach inicjatywy „Prace na linii kolejowej E75 na odcinku Czyżew – Białystok”.</p>
        `
    },
    {
        id: 5,
        title: "Otwarcie zaplecza w Sokółce",
        date: "12.09.2025",
        tag: "INFRASTRUKTURA",
        tagColor: "bg-gray-700",
        image:"/Zaplecze.jpg",
        summary: "Zarząd Kolei Podlaskich z radością ogłasza otwarcie nowego zaplecza w Sokółce...",
        content: `
            <p>Zarząd Kolei Podlaskich z radością ogłasza otwarcie nowego zaplecza w Sokółce. Na zapleczu będą operowane prace serwisowe szynobusów SA133 oraz elektrycznych zespołów trakcyjnych EN57AL.</p>
        `
    },
    {
        id: 6,
        title: 'Uruchomienie pociągów "Nocny Sprinter"',
        date: "20 lip 2025",
        tag: "WYDARZENIE",
        tagColor: "bg-blue-800",
        image: "https://ilostan.forumkolejowe.pl/foto/37144.jpg",
        summary: 'W bogatej ofercie pociągów Kolei Podlaskich warto zwrócić uwagę na nocne pociągi pospieszne oznaczone jako "KP Nocny Sprinter". Dlaczego są one wyjątkowe? To proste: jeżdżą nocą, dzięki czemu w ciągu dnia możesz robić wszystko inne, a jednocześnie dojeżdżasz tam, gdzie trzeba, nawet gdy inni jeszcze śpią.',
        content: `
            <p>W bogatej ofercie pociągów Kolei Podlaskich warto zwrócić uwagę na nocne pociągi pospieszne oznaczone jako "KP Nocny Sprinter". Dlaczego są one wyjątkowe? To proste: jeżdżą nocą, dzięki czemu w ciągu dnia możesz robić wszystko inne, a jednocześnie dojeżdżasz tam, gdzie trzeba, nawet gdy inni jeszcze śpią.</p>
            
            <p>Nowoczesne elektryczne oraz spalinowe zespoły trakcyjne używane na trasach KP "Nocny Sprinter" posiadają:</p>
<p> - klimatyzację,</p>
<p> - ładowarki sieciowe z portami USB (tylko w składach EN57AL),</p>
<p> - internet bezprzewodowy WiFi.</p>
        `
    },
    {
        id: 7,
        title: "Dzień dziecka z KP",
        date: "22 maj 2025",
        tag: "WYDARZENIE",
        tagColor: "bg-blue-800",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
        summary: "Zwiększyliśmy komfort przewozu rowerów dla turystów jadących do Biebrzy...",
        content: `
            <p>Najmłodsi z miłośników kolei 1 czerwca będzie mogła liczyć nie tylko na bezpłatne przewozy pociągami Kolei Podlaskich, lecz także na wiele atrakcji; spotkania z kolejarzami, upominki, zwiedzanie taboru - to tylko kilka z atrakcji zaplanowanych przez nas.</p>
            <p>Świętowanie z nami dnia dziecka to nie tylko przejazdy! W wielu miejscowościach przewoźnik zaprasza na wydarzenia:</p>
<p> - Białystok, 29 maja 2025 - na dworcu PKP na dzieci będzie czekać jednostka EN57AL-1551 otwarta do zwiedzania.</p>
<p> - Czeremcha, 30 maja 2025 - najmłodsi wezmą udział w darmowym przejeździe jednostką SA133-009.</p>
<p> - Mońki, 1 czerwca 2025 - Koleje Podlaskie i Stowarzyszenie Sympatyków Kolejnictwa "Kolejowe Podlasie" oferują zwiedzanie jednostki SA108-007 oraz SA108-009.</p>
<p>To nie wszystko - w pociągach na dzieci czekają również wiatraczki, słodycze, balony, kredki, kolorowanki i inne pamiątki!</p>
        `
    },
    {
        id: 8,
        title: "Zniżka na zwiedzanie Twierdzy Osowiec",
        date: "22 wrz 2024",
        tag: "OFERTA",
        tagColor: "bg-yellow-600",
        image: "/Twierdza Osowiec.webp",
        summary: "Pasażerowie KP otrzymają rabat na bilety wstępu do historycznej twierdzy...",
        content: `
            <p>Pasażerowie KP otrzymają rabat na bilety wstępu do historycznej twierdzy. Startuje program 'Kolej na Twierdzę', promujący turystykę kolejową w naszym regionie.</p>
            <p>Każdy, kto okaże ważny bilet Kolei Podlaskich do stacji Osowiec, otrzyma darmowe zwiedzanie Muzeum Twierdzy Osowiec. Promocja trwa do dnia 1 października 2024.</p>
        `
    },
    {
        id: 9,
        title: "Otwarcie stacji Białystok Zielone Wzgórza",
        date: "03.09.2023",
        tag: "INFRASTRUKTURA",
        tagColor: "bg-gray-700",
        image: "/4995e7a4f98f8ec48681c9006e5e1c6f.webp",
        summary: "Nowoczesna stacja Białystok Zielone Wzgórza została dziś oficjalnie otwarta...",
        content: `
            <p>Nowoczesna stacja Białystok Zielone Wzgórza została dziś oficjalnie otwarta. Koleje Podlaskie będą oferowały z przystanku ruch na liniach P1 Białystok-Czyżew oraz P2 Białystok-Grajewo.</p>
            <p>Stacja znajduje się przy osiedlu Zielone Wzgórza i będzie również obsługiwana przez dalekobieżne pociągi Intercity.</p>
        `
    },
    {
        id: 10,
        title: "Fotowoltaika w hali serwisowej w Szepietowie",
        date: "12.08.2023",
        tag: "EKOLOGIA",
        tagColor: "bg-green-500",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
        summary: "Główna hala serwisowa w Szepietowie od dziś będzie zasilana energią fotowoltaiczną...",
        content: `
            <p>Główna hala serwisowa w Szepietowie od dziś będzie zasilana energią fotowoltaiczną.</p>
            <p>Dzięki tej inwestycji, naprawy naszego taboru odbywają się przy użyciu czystej energii.</p>
        `
    },
    {
        id: 11,
        title: "Koniec pociągów do Małkinii",
        date: "15.12.2022",
        tag: "PILNE",
        tagColor: "bg-red-800",
        image: "https://imgs.search.brave.com/bGA8KX3IUdDXK5Cxe7N0DvT_ETfwEywLgG7KY3xXQMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rb2xl/am93eXBvcnRhbC5w/bC9maWxlcy9rbV80/NVdFLTAwNl9tbmsu/anBn",
        summary: "W związku z zakończeniem obowiązywania umowy z Kolejami Mazowieckimi, od dnia 1 stycznia 2023 r. pociągi obsługujące linię P1 kończą bieg na stacji Czyżew.",
        content: `
            <p>W związku z zakończeniem obowiązywania umowy z Kolejami Mazowieckimi, od dnia 1 stycznia 2023 r. pociągi obsługujące linię P1 kończą bieg na stacji Czyżew.</p>
            
<p>Jednocześnie Koleje Podlaskie informują o zakończeniu eksploatacji elektrycznych zespołów trakcyjnych typu 45WE NEWAG Impuls, użytkowanych dotychczas na podstawie umowy użyczenia zawartej z Kolejami Mazowieckimi.</p>
        `
    },

];

const newsContainer = document.getElementById('news-container');
const newsModal = document.getElementById('news-modal');
const closeNewsModal = document.getElementById('close-news-modal');
const closeNewsModalBtn = document.getElementById('close-news-modal-btn');
const showAllNewsBtn = document.getElementById('show-all-news');

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

function renderNews(showAll = false) {
    if (!newsContainer) return;
    newsContainer.innerHTML = '';
    
    const itemsToDisplay = showAll ? newsData : newsData.slice(0, 3);
    
    itemsToDisplay.forEach(item => {
        const card = document.createElement('div');

        card.className = `group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer news-card`;
        
        card.innerHTML = `
            <div class="h-48 bg-gray-200 overflow-hidden relative">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute top-4 left-4 ${item.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full">${item.tag}</span>
            </div>
            <div class="p-6">
                <span class="text-gray-400 text-sm">${item.date}</span>
                <h4 class="text-xl font-bold mt-2 mb-3 leading-tight transition-colors duration-300">${item.title}</h4>
                <p class="text-gray-600 text-sm line-clamp-2">${item.summary}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openNewsModal(item));
        newsContainer.appendChild(card);
    });

    if (showAll && showAllNewsBtn) {
        showAllNewsBtn.style.display = 'none';
    }
}

function openNewsModal(news) {
    document.getElementById('news-modal-img').src = news.image;
    document.getElementById('news-modal-title').innerText = news.title;
    document.getElementById('news-modal-date').innerText = news.date;
    const tagEl = document.getElementById('news-modal-tag');
    tagEl.innerText = news.tag;
    tagEl.className = `absolute bottom-4 left-6 px-4 py-1 rounded-full text-white text-xs font-bold uppercase ${news.tagColor}`;
    document.getElementById('news-modal-content').innerHTML = news.content;
    
    const selectionHex = TAILWIND_COLOR_MAP[news.tagColor] || '#16a34a';
    newsModal.style.setProperty('--selection-bg', selectionHex);

    newsModal.classList.remove('hidden');
    newsModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeNewsModalHandler() {
    newsModal.classList.add('hidden');
    newsModal.classList.remove('flex');
    document.body.style.overflow = '';
}

closeNewsModal.addEventListener('click', closeNewsModalHandler);
closeNewsModalBtn.addEventListener('click', closeNewsModalHandler);

if (showAllNewsBtn) {
    showAllNewsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderNews(true);
    });
}

renderNews(false);

const STATIONS_P2 = [
    { name: "Białystok", km: 0 },
    { name: "Białystok Zielone Wzgórza", km: 3.017 },
    { name: "Białystok Starosielce", km: 4.555 },
    { name: "Białystok Bacieczki", km: 8.013 },
    { name: "Fasty", km: 12.636 },
    { name: "Dobrzyniewo Duże", km: 15.147 },
    { name: "Borsukówka", km: 21.286 },
    { name: "Knyszyn", km: 28.437 },
    { name: "Zastocze", km: 32.843 },
    { name: "Czechowizna", km: 37.340 },
    { name: "Mońki", km: 43.872 },
    { name: "Goniądz", km: 52.317 },
    { name: "Osowiec", km: 57.232 },
    { name: "Podlasek", km: 70.379 },
    { name: "Ruda", km: 74.054 },
    { name: "Grajewo", km: 82.477 }
];

const STATIONS_P1 = [
    { name: "Czyżew", km: 111.848 },
    { name: "Kity", km: 118.107 },
    { name: "Dąbrowa-Łazy", km: 120.732 },
    { name: "Szepietowo", km: 127.376 },
    { name: "Szymbory", km: 132.363 },
    { name: "Jabłoń Kościelna", km: 135.825 },
    { name: "Racibory", km: 140.474 },
    { name: "Zdrody Nowe", km: 146.093 },
    { name: "Łapy Osse", km: 150.450 },
    { name: "Łapy", km: 154.035 },
    { name: "Uhowo", km: 156.433 },
    { name: "Bojary", km: 160.107 },
    { name: "Baciuty", km: 163.251 },
    { name: "Trypucie", km: 167.060 },
    { name: "Niewodnica", km: 168.992 },
    { name: "Klepacze", km: 172.150 },
    { name: "Białystok Zielone Wzgórza", km: 174.288 },
    { name: "Białystok", km: 177.305 }
];

const STATIONS_P3 = [
    { name: "Białystok", km: 0 },
    { name: "Białystok Zielone Wzgórza", km: 3.017 },
    { name: "Białystok Nowe Miasto", km: 4.418 },
    { name: "Białystok Stadion", km: 5.893 },
    { name: "Hryniewicze", km: 8.825 },
    { name: "Lewickie", km: 13.844 },
    { name: "Hołówki Duże", km: 20.693 },
    { name: "Zimnochy", km: 22.804 },
    { name: "Strabla", km: 29.350 },
    { name: "Rajsk", km: 36.174 },
    { name: "Orzechowicze", km: 40.097 },
    { name: "Bielsk Podlaski", km: 46.029 },
    { name: "Lewki", km: 49.858 },
    { name: "Podbiele", km: 54.375 },
    { name: "Gregorowce", km: 58.494 },
    { name: "Gregorowce Południowe", km: 60.160 },
    { name: "Suchowolce", km: 64.063 },
    { name: "Kleszczele", km: 70.563 },
    { name: "Repczyce", km: 73.968 },
    { name: "Czeremcha", km: 77.003 }
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
        createIcons(ICON_CONFIG);

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

const searchForm = document.getElementById('search-form');

const LINE_SPEED_KMPH = 50;

const BASE_TIMETABLE = {
    "Białystok->Grajewo": [
        { id: "Os 20001", depTime: "01:00", type: "Nocny Sprinter", unit: "SA133-019" },
        { id: "Os 20003", depTime: "04:30", type: "Nocny Sprinter", unit: "SA133-001" },
        { id: "Os 20005", depTime: "08:00", type: "Osobowy", unit: "EN57AL-1529" },
        { id: "Os 20007", depTime: "11:30", type: "Osobowy", unit: "SA133-009" },
        { id: "Os 20009", depTime: "15:00", type: "Osobowy", unit: "EN57AL-1555" },
        { id: "Os 20011", depTime: "18:30", type: "Osobowy", unit: "SA133-002" },
        { id: "Os 20013", depTime: "22:00", type: "Osobowy", unit: "EN57AL-1544" }
    ],
    "Grajewo->Białystok": [
        { id: "Os 20002", depTime: "02:45", type: "Nocny Sprinter", unit: "SA133-012" },
        { id: "Os 20004", depTime: "06:15", type: "Osobowy", unit: "EN57AL-1543" },
        { id: "Os 20006", depTime: "09:45", type: "Osobowy", unit: "SA133-001" },
        { id: "Os 20008", depTime: "13:15", type: "Osobowy", unit: "EN57AL-1551" },
        { id: "Os 20010", depTime: "16:45", type: "Osobowy", unit: "SA105-103" },
        { id: "Os 20012", depTime: "20:15", type: "Osobowy", unit: "SA133-020" },
        { id: "Os 20014", depTime: "23:45", type: "Osobowy", unit: "SA108-007" }
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
    // REMINDER: NEVER ADD "Nocny Sprinter" to the Czeremcha - Białystok line.
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
            return { key: p2s2.km > p2s1.km ? "Białystok->Grajewo" : "Grajewo->Białystok", speed: 50, originKm: p2s2.km > p2s1.km ? 0 : 82.477, s1: p2s1, s2: p2s2 };
        }
        if (STATIONS_P1.find(s => s.name === s1.name) && STATIONS_P1.find(s => s.name === s2.name)) {
            const p1s1 = STATIONS_P1.find(s => s.name === s1.name);
            const p1s2 = STATIONS_P1.find(s => s.name === s2.name);
            return { key: p1s2.km < p1s1.km ? "Białystok->Czyżew" : "Czyżew->Białystok", speed: 50, originKm: p1s2.km < p1s1.km ? 177.305 : 111.848, s1: p1s1, s2: p1s2 };
        }
        if (STATIONS_P3.find(s => s.name === s1.name) && STATIONS_P3.find(s => s.name === s2.name)) {
            const p3s1 = STATIONS_P3.find(s => s.name === s1.name);
            const p3s2 = STATIONS_P3.find(s => s.name === s2.name);
            return { key: p3s2.km > p3s1.km ? "Białystok->Czeremcha" : "Czeremcha->Białystok", speed: 40, originKm: p3s2.km > p3s1.km ? 0 : 77.003, s1: p3s1, s2: p3s2 };
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
});

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