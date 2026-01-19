
import { createIcons, Search, MapPin, ArrowRight, Menu, X, Clock, Smartphone, ChevronRight, Phone, Mail, Facebook, Instagram, XCircle, Check, TrainFront, Calendar, Info, ArrowLeft, CreditCard, RefreshCw, ShieldCheck, Wifi, Lock, CheckCircle, Award } from 'lucide';
import QRCode from 'qrcode';

const ICON_CONFIG = {
    icons: {
        Search, MapPin, ArrowRight, Menu, X, Clock, Smartphone, ChevronRight, Phone, Mail, Facebook, Instagram, XCircle, Check, TrainFront, Calendar, Info, ArrowLeft, CreditCard, RefreshCw, ShieldCheck, Wifi, Lock, CheckCircle, Award
    }
};

createIcons(ICON_CONFIG);

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    if (!mobileMenu.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

const newsData = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        title: 'Uruchomienie pociągów "Nocny Sprinter"',
        date: "20 lip 2025",
        tag: "WYDARZENIE",
        tagColor: "bg-red-800",
        image: "https://ilostan.forumkolejowe.pl/foto/37144.jpg",
        summary: 'W bogatej ofercie pociągów Kolei Podlaskich warto zwrócić uwagę na nocne pociągi pospieszne oznaczone jako "KP Nocny Sprinter". Dlaczego są one wyjątkowe? To proste: jeżdżą nocą, dzięki czemu w ciągu dnia możesz robić wszystko inne, a jednocześnie dojeżdżasz tam, gdzie trzeba, nawet gdy inni jeszcze śpią.',
        content: `
            <p>W bogatej ofercie pociągów Kolei Podlaskich warto zwrócić uwagę na nocne pociągi pospieszne oznaczone jako "KP Nocny Sprinter". Dlaczego są one wyjątkowe? To proste: jeżdżą nocą, dzięki czemu w ciągu dnia możesz robić wszystko inne, a jednocześnie dojeżdżasz tam, gdzie trzeba, nawet gdy inni jeszcze śpią.</p>
            
            <p>Nowoczesne elektryczne oraz spalinowe zespoły trakcyjne używane na trasach KP "Nocny Sprinter" posiadają:</p>
<p> - klimatyzację,</p>
<p> - ładowarki sieciowe z portami USB (tylko w składach EN57AL),</p>
<p> - internet bezprzewodowy WiFi.</p>
<p></p>
        `
    },
    {
        id: 5,
        title: "Modernizacja stref rowerowych w pociągach",
        date: "15.04.2025",
        tag: "TABOR",
        tagColor: "bg-green-500",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
        summary: "Zwiększyliśmy komfort przewozu rowerów dla turystów jadących do Biebrzy...",
        content: `
            <p>Zwiększyliśmy komfort przewozu rowerów dla turystów jadących do Biebrzy. W pociągach EN57AL zainstalowano dodatkowe, nowoczesne wieszaki na rowery.</p>
            <p>Ułatwi to podróż cyklistom oraz wypraw rowerowych po Biebrzańskim Parku Narodowym.</p>
        `
    },
    {
        id: 6,
        title: "Biletomaty na stacjach Mońki i Knyszyn",
        date: "05.11.2024",
        tag: "PASAŻER",
        tagColor: "bg-indigo-600",
        image: "/5f5227482c6e0_o_medium.webp",
        summary: "Nowoczesne urządzenia do zakupu biletów pojawiły się na kolejnych przystankach...",
        content: `
            <p>Nowoczesne urządzenia do zakupu biletów pojawiły się na kolejnych przystankach linii kolejowej nr 38. Zakończyliśmy instalację biletomatów na stacjach Białystok Zielone Wzgórza, Białystok Starosielce, Białystok Bacieczki, Dobrzyniewo Duże, Knyszyn, Mońki, Goniądz, Osowiec, Grajewo oraz Prostki.</p>
            <p>Urządzenia te umożliwiają szybki zakup biletów jednorazowych i okresowych przy użyciu kart płatniczych oraz systemu BLIK, co znacząco poprawia standard obsługi pasażerów na tych stacjach.</p>
        `
    },
    {
        id: 7,
        title: "Zniżka na zwiedzanie Twierdzy Osowiec",
        date: "22.09.2024",
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
        id: 8,
        title: "18 lat szynobusów SA133 Kolei Podlaskich",
        date: "10.05.2024",
        tag: "WYDARZENIE",
        tagColor: "bg-green-600",
        image: "/Image.jpg",
        summary: "Świętujemy rocznicę wprowadzenia nowoczesnego taboru na trasę do Grajewa...",
        content: `
            <p>Świętujemy rocznicę wprowadzenia nowoczesnego taboru na trasę do Grajewa. Mija dokładnie 18 lat od momentu, gdy pierwszy szynobus serii SA133 wyjechał na tory województwa podlaskiego.</p>
            <p>Pociągi te, zakupione przez Samorząd Województwa Podlaskiego w 2006 roku, stały się symbolem odrodzenia kolei regionalnej, oferując pasażerom klimatyzację i komfort nieosiągalny w starych składach.</p>
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
    {
        id: 12,
        title: "Bezpłatne przejazdy dla uchodźców z Ukrainy",
        date: "01.03.2022",
        tag: "INFO",
        tagColor: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1646061833509-0d85915d3119?auto=format&fit=crop&q=80&w=800",
        summary: "Koleje Podlaskie wprowadzają pomoc transportową dla osób potrzebujących...",
        content: `
            <p>Koleje Podlaskie wprowadzają pomoc transportową dla osób potrzebujących. W geście solidarności, obywatele Ukrainy mogą podróżować bezpłatnie wszystkimi naszymi pociągami.</p>
            <p>Program dotyczy również pociągów kursujących na trasie Białystok - Grajewo. Aby skorzystać z darmowego przejazdu, należy okazać dokument potwierdzający przekroczenie granicy po 24 lutego 2022 roku.</p>
        `
    }
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
const ALL_STATIONS = Array.from(new Set([
    ...STATIONS_P2.map(s => s.name), 
    ...STATIONS_P1.map(s => s.name),
    ...STATIONS_P3.map(s => s.name)
])).sort();

const fromSelect = document.getElementById('from-station');
const toSelect = document.getElementById('to-station');

ALL_STATIONS.forEach(stationName => {
    const optFrom = new Option(stationName, stationName);
    const optTo = new Option(stationName, stationName);
    fromSelect.add(optFrom);
    toSelect.add(optTo);
});

const searchForm = document.getElementById('search-form');
const resultsSection = document.getElementById('search-results-section');
const resultsContainer = document.getElementById('results-container');
const resultsTitle = document.getElementById('results-title');
const closeResultsBtn = document.getElementById('close-results');

const bookingModal = document.getElementById('booking-modal');
const closeBookingBtn = document.getElementById('close-booking-modal');
const bookingRouteInfo = document.getElementById('booking-route-info');
const finalPriceDisplay = document.getElementById('final-price');
const discountSelect = document.getElementById('pass-discount');


const stepContents = [
    document.getElementById('step-1-content'),
    document.getElementById('step-2-content'),
    document.getElementById('step-3-content'),
    document.getElementById('step-4-content')
];
const stepLabels = [
    document.getElementById('step-label-1'),
    document.getElementById('step-label-2'),
    document.getElementById('step-label-3'),
    document.getElementById('step-label-4')
];
const summaryPanel = document.getElementById('booking-summary-panel');

let currentStep = 0;
let currentBasePrice = 0;
let currentSearchData = {};
let selectedTrain = null;

function setStep(stepIndex) {
    currentStep = stepIndex;
    stepContents.forEach((el, idx) => {
        el.classList.toggle('hidden', idx !== stepIndex);
    });
    
    stepLabels.forEach((label, idx) => {
        const circle = label.querySelector('span:first-child');
        const baseClasses = "flex items-center gap-2 font-bold booking-step-label";
        if (idx < stepIndex) {
            label.className = `${baseClasses} text-green-700`;
            circle.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
            circle.className = "w-6 h-6 rounded-full bg-green-600 border-2 border-green-600 flex items-center justify-center text-white";
        } else if (idx === stepIndex) {
            label.className = `${baseClasses} text-green-600`;
            circle.innerHTML = `${idx + 1}`;
            circle.className = "w-6 h-6 rounded-full border-2 border-green-600 flex items-center justify-center";
        } else {
            label.className = `${baseClasses} text-gray-400`;
            circle.innerHTML = `${idx + 1}`;
            circle.className = "w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center";
        }
    });
    if (summaryPanel) {
        summaryPanel.classList.toggle('hidden', stepIndex === 3);
    }

    createIcons(ICON_CONFIG);
}

document.getElementById('next-to-step-2').addEventListener('click', () => {
    const name = document.getElementById('pass-name').value.trim();
    const surname = document.getElementById('pass-surname').value.trim();
    const email = document.getElementById('pass-email').value.trim();
    if (!name || !surname || !email) {
        alert("Proszę wypełnić wszystkie dane pasażera.");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Proszę podać poprawny adres e-mail.");
        return;
    }
    setStep(1);
});

document.getElementById('back-to-step-1').addEventListener('click', () => setStep(0));

document.getElementById('next-to-step-3').addEventListener('click', () => {
    const reg = document.getElementById('agree-regulations').checked;
    const rodo = document.getElementById('agree-rodo').checked;
    if (!reg || !rodo) {
        alert("Proszę zaakceptować wymagane zgody.");
        return;
    }
    setStep(2);
});

document.getElementById('back-to-step-2').addEventListener('click', () => setStep(1));

document.getElementById('final-pay-button').addEventListener('click', () => {
    const method = document.querySelector('.payment-method-btn.active').dataset.method;
    
    if (method === 'blik') {
        const blikCode = document.getElementById('blik-code').value;
        if (blikCode.length !== 6) {
            alert("Proszę podać poprawny 6-cyfrowy kod BLIK.");
            return;
        }
    } else {
        const nr = document.getElementById('card-number').value;
        if (nr.length < 16) {
            alert("Proszę podać poprawny numer karty.");
            return;
        }
    }
    
    const btn = document.getElementById('final-pay-button');
    const originalContent = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `
        <i data-lucide="refresh-cw" class="w-5 h-5 animate-spin"></i>
        <span>ŁĄCZENIE Z BANKIEM...</span>
    `;
    createIcons(ICON_CONFIG);

    setTimeout(() => {
        btn.innerHTML = `
            <i data-lucide="check" class="w-5 h-5"></i>
            <span>AUTORYZACJA...</span>
        `;
        createIcons(ICON_CONFIG);
        
        setTimeout(() => {
            populateTicket();
            setStep(3);
            btn.disabled = false;
            btn.innerHTML = originalContent;
            createIcons(ICON_CONFIG);
        }, 1200);
    }, 1500);
});

const cardNumberInput = document.getElementById('card-number');
const cardExpiryInput = document.getElementById('card-expiry');
const cardNameInput = document.getElementById('pass-name');
const cardSurnameInput = document.getElementById('pass-surname');

cardNumberInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formatted;
    document.getElementById('card-preview-number').innerText = formatted || '•••• •••• •••• ••••';
});

cardExpiryInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
    document.getElementById('card-preview-expiry').innerText = value || 'MM/YY';
});

document.getElementById('pass-name').addEventListener('change', (e) => {
    const full = `${e.target.value} ${document.getElementById('pass-surname').value}`;
    document.getElementById('card-preview-name').innerText = full.toUpperCase() || 'JAN KOWALSKI';
});
document.getElementById('pass-surname').addEventListener('change', (e) => {
    const full = `${document.getElementById('pass-name').value} ${e.target.value}`;
    document.getElementById('card-preview-name').innerText = full.toUpperCase() || 'JAN KOWALSKI';
});

function populateTicket() {
    const name = document.getElementById('pass-name').value.trim();
    const surname = document.getElementById('pass-surname').value.trim();
    const fullName = `${name} ${surname}`.trim();
    const discountText = document.getElementById('pass-discount').options[document.getElementById('pass-discount').selectedIndex].text;

    document.getElementById('ticket-passenger-name').innerText = fullName;
    document.getElementById('ticket-discount-type').innerText = discountText;
    document.getElementById('ticket-from').innerText = currentSearchData.from;
    document.getElementById('ticket-to').innerText = currentSearchData.to;
    document.getElementById('ticket-date-val').innerText = currentSearchData.date;
    document.getElementById('ticket-time-val').innerText = selectedTrain.depTime;
    document.getElementById('ticket-train-no-val').innerText = selectedTrain.id;

    const ticketCode = `KP-${Date.now().toString(36).toUpperCase().slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
    const ticketCodeEl = document.getElementById('ticket-code');
    if (ticketCodeEl) {
        ticketCodeEl.textContent = ticketCode;
    }

    const qrCanvas = document.getElementById('ticket-qr');
    if (qrCanvas) {
        const qrPayload = {
            v: 1,
            carrier: "Koleje Podlaskie",
            passenger: fullName,
            from: currentSearchData.from,
            to: currentSearchData.to,
            date: currentSearchData.date,
            time: selectedTrain.depTime,
            line: selectedTrain.id,
            discount: discountText,
            code: ticketCode
        };

        QRCode.toCanvas(
            qrCanvas,
            JSON.stringify(qrPayload),
            {
                width: 256,
                margin: 1,
                color: {
                    dark: "#111827",
                    light: "#ffffff"
                }
            },
            (error) => {
                if (error) {
                    console.error("QR generation error:", error);
                }
            }
        );
    }
}

document.getElementById('close-after-success').addEventListener('click', () => {
    closeBookingModal();
});

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
        { id: "Os 10014", depTime: "05:30", type: "Sprinter", unit: "EN57AL-1543" },
        { id: "Os 10016", depTime: "07:00", type: "Sprinter", unit: "SA108-009" },
        { id: "Os 10018", depTime: "08:30", type: "Sprinter", unit: "EN57AL-1551" },
        { id: "Os 10020", depTime: "10:00", type: "Sprinter", unit: "SA133-002" },
        { id: "Os 10022", depTime: "11:30", type: "Sprinter", unit: "EN57AL-1544" },
        { id: "Os 10024", depTime: "13:00", type: "Sprinter", unit: "SA133-009" },
        { id: "Os 10026", depTime: "14:30", type: "Sprinter", unit: "EN57AL-1555" },
        { id: "Os 10028", depTime: "16:00", type: "Sprinter", unit: "SA105-103" },
        { id: "Os 10030", depTime: "17:30", type: "Sprinter", unit: "SA133-020" },
        { id: "Os 10032", depTime: "19:00", type: "Sprinter", unit: "EN57AL-1529" },
        { id: "Os 10034", depTime: "20:30", type: "Sprinter", unit: "SA108-009" },
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
function generateTrains(fromName, toName, selectedTimeMinutes = 0) {
    const now = new Date();
    const currentRealMins = now.getHours() * 60 + now.getMinutes();
    const isToday = document.getElementById('travel-date').value === now.toLocaleDateString('en-CA');

    const s1L38 = STATIONS_L38.find(s => s.name === fromName);
    const s1L6 = STATIONS_L6.find(s => s.name === fromName);
    const s1P3 = STATIONS_P3.find(s => s.name === fromName);
    const s2L38 = STATIONS_L38.find(s => s.name === toName);
    const s2L6 = STATIONS_L6.find(s => s.name === toName);
    const s2P3 = STATIONS_P3.find(s => s.name === toName);

    const junctionStations = ["Białystok", "Białystok Zielone Wzgórza"];
    const isCrossLine = (s1L38 && (s2L6 || s2P3)) || (s1L6 && (s2L38 || s2P3)) || (s1P3 && (s2L38 || s2L6));
    const requiresSwitch = isCrossLine && !junctionStations.includes(fromName) && !junctionStations.includes(toName);

    const getLineData = (s1, s2) => {
        if (s1L38 && s2L38) return { key: s2.km > s1.km ? "Białystok->Grajewo" : "Grajewo->Białystok", speed: 50, originKm: s2.km > s1.km ? 0 : 82.477 };
        if (s1L6 && s2L6) return { key: s2.km < s1.km ? "Białystok->Czyżew" : "Czyżew->Białystok", speed: 50, originKm: s2.km < s1.km ? 177.305 : 111.848 };
        if (s1P3 && s2P3) return { key: s2.km > s1.km ? "Białystok->Czeremcha" : "Czeremcha->Białystok", speed: 40, originKm: s2.km > s1.km ? 0 : 77.003 };
        return null;
    };

    const getDurationStr = (mins) => mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}min` : `${mins}min`;

    if (!requiresSwitch) {
        const s1 = s1L38 || s1L6 || s1P3;
        const s2 = s2L38 || s2L6 || s2P3;
        const line = getLineData(s1, s2);
        if (!line) return [];

        const distanceKm = Math.abs(s1.km - s2.km);
        const distFromOrigin = Math.abs(s1.km - line.originKm);
        const timeFromOrigin = Math.round((distFromOrigin / line.speed) * 60);
        const travelTime = Math.max(5, Math.round((distanceKm / line.speed) * 60));

        const timetable = BASE_TIMETABLE[line.key] || [];
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
        // Cross-line via Białystok
        const s1 = s1L38 || s1L6 || s1P3;
        const s2 = s2L38 || s2L6 || s2P3;
        const biaName = "Białystok";
        const bia38 = STATIONS_L38.find(s => s.name === biaName);
        const bia6 = STATIONS_L6.find(s => s.name === biaName);
        const biaP3 = STATIONS_P3.find(s => s.name === biaName);
        const sBia = s1L38 ? bia38 : (s1L6 ? bia6 : biaP3);
        const eBia = s2L38 ? bia38 : (s2L6 ? bia6 : biaP3);

        const leg1 = getLineData(s1, sBia);
        const leg2 = getLineData(eBia, s2);
        if (!leg1 || !leg2) return [];

        const d1 = Math.abs(s1.km - sBia.km);
        const d2 = Math.abs(s2.km - eBia.km);
        const t1 = Math.round((d1 / leg1.speed) * 60);
        const t2 = Math.round((d2 / leg2.speed) * 60);
        const timeFromOrigin1 = Math.round((Math.abs(s1.km - leg1.originKm) / leg1.speed) * 60);

        const timetable1 = BASE_TIMETABLE[leg1.key] || [];
        const timetable2 = BASE_TIMETABLE[leg2.key] || [];

        return timetable1.map(slot => {
            const dep1Mins = timeToMinutes(slot.depTime) + timeFromOrigin1;
            const arrBiaMins = dep1Mins + t1;
            const conn = timetable2.find(s => timeToMinutes(s.depTime) >= arrBiaMins + 12);
            if (!conn) return null;

            const dep2Mins = timeToMinutes(conn.depTime);
            const arrFinalMins = dep2Mins + t2;
            const totalDuration = arrFinalMins - dep1Mins;

            return {
                id: slot.id, from: fromName, to: toName, distance: Math.floor(d1 + d2),
                depTime: minutesToTime(dep1Mins), arrTime: minutesToTime(arrFinalMins), duration: getDurationStr(totalDuration),
                price: parseFloat(((d1 + d2) * 0.34625).toFixed(2)), type: slot.type, requiresSwitch: true,
                connection: { station: "Białystok", arrivalTime: minutesToTime(arrBiaMins), departureTime: conn.depTime, nextTrainId: conn.id, nextTrainType: conn.type }
            };
        }).filter(t => {
            if (!t) return false;
            const m = timeToMinutes(t.depTime);
            return m >= selectedTimeMinutes && (!isToday || m >= currentRealMins);
        });
    }
}



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const from = fromSelect.value;
    const to = toSelect.value;
    
    if (from === to) {
        alert("Stacja początkowa i końcowa muszą być różne.");
        return;
    }
    
    const dateInputVal = document.getElementById('travel-date').value;
    const travelDate = new Date(dateInputVal);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (travelDate < today) {
        alert("Wybrana data już minęła. Proszę wybrać datę dzisiejszą lub przyszłą.");
        return;
    }

    const hour = parseInt(document.getElementById('travel-hour').value);
    const minute = parseInt(document.getElementById('travel-minute').value);
    const selectedMinutes = hour * 60 + minute;

    // Additional check: if date is today, ensure the selected time hasn't passed in real-world time 
    // (though for simulation purposes we primarily respect the user's dropdown choice)
    const isToday = travelDate.getTime() === today.getTime();
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const effectiveMins = isToday ? Math.max(selectedMinutes, currentMins) : selectedMinutes;
    const displayTime = minutesToTime(effectiveMins);
    
    currentSearchData = { from, to, date: dateInputVal };
    const trains = generateTrains(from, to, selectedMinutes);
    
    resultsContainer.innerHTML = '';
    resultsTitle.innerText = `Połączenia: ${from} ➔ ${to} (${dateInputVal})`;
    
    if (trains.length === 0) {
        resultsContainer.innerHTML = `
            <div class="bg-white p-12 rounded-3xl border border-gray-100 text-center space-y-4">
                <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                    <i data-lucide="clock" class="w-10 h-10"></i>
                </div>
                <h4 class="text-xl font-bold text-gray-800">Brak połączeń</h4>
                <p class="text-gray-500 max-w-sm mx-auto">W wybranym dniu po godzinie ${displayTime} nie kursują już żadne pociągi na tej trasie.</p>
                <button onclick="document.querySelector('.hero-panel').scrollIntoView({behavior:'smooth'})" class="text-green-600 font-bold hover:underline">Zmień godzinę lub datę</button>
            </div>
        `;
    }

    trains.forEach(train => {
        const card = document.createElement('div');
        const badgeColor = train.type === 'Nocny Sprinter' ? 'bg-indigo-700' : 'bg-green-600';
        card.className = "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition";
        card.innerHTML = `
            <div class="flex items-center gap-4 w-full md:w-auto">
                <div class="bg-green-100 p-3 rounded-xl text-green-700 shrink-0">
                    <i data-lucide="train-front" class="w-6 h-6"></i>
                </div>
                <div class="flex flex-col">
                    <div class="text-[10px] w-fit font-black text-white px-2 py-0.5 rounded ${badgeColor} uppercase tracking-wider mb-1">${train.type}</div>
                    <div class="flex items-center gap-3">
                        <div class="text-center">
                            <div class="text-[10px] text-gray-400 font-bold uppercase">Odjazd</div>
                            <div class="text-xl font-black text-gray-900">${train.depTime}</div>
                        </div>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-gray-300 mt-1"></i>
                        <div class="text-center">
                            <div class="text-[10px] text-gray-400 font-bold uppercase">Przyjazd</div>
                            <div class="text-xl font-black text-gray-900">${train.arrTime}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 text-center md:text-left">
                <div class="text-sm font-bold text-gray-700">Dystans: ${train.distance} km</div>
                <div class="text-xs text-gray-500">Czas przejazdu: ${train.duration}</div>
                <div class="text-xs text-gray-400">Pociąg: ${train.id}</div>
                ${train.requiresSwitch ? `
                    <div class="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                        <div class="flex items-center gap-2 text-[11px] font-black text-amber-800 uppercase mb-2">
                            <i data-lucide="info" class="w-3.5 h-3.5"></i>
                            Wymagana przesiadka
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex flex-col">
                                <span class="text-gray-500">Przyjazd do:</span>
                                <span class="font-bold">Białystok</span>
                                <span class="text-amber-700 font-black">${train.connection.arrivalTime}</span>
                            </div>
                            <div class="h-8 w-px bg-amber-200 mx-2"></div>
                            <div class="flex flex-col text-right">
                                <span class="text-gray-500">Przesiadka na:</span>
                                <span class="font-bold">Pociąg: ${train.connection.nextTrainId}</span>
                                <span class="text-green-700 font-black">${train.connection.departureTime}</span>
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
            <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div class="text-2xl font-black text-green-700">${train.price.toFixed(2)} zł</div>
                <button class="buy-btn bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition" 
                        data-price="${train.price}" data-id="${train.id}">
                    Wybierz
                </button>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
    
    createIcons(ICON_CONFIG);
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Add listeners to new buttons
    document.querySelectorAll('.buy-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentBasePrice = parseFloat(btn.dataset.price);
            document.getElementById('selected-train-id').value = btn.dataset.id;
            openBookingModal(trains[index]);
        });
    });
});

closeResultsBtn.addEventListener('click', () => {
    resultsSection.classList.add('hidden');
});

function openBookingModal(train) {
    selectedTrain = train;
    setStep(0);
    bookingRouteInfo.innerText = `${currentSearchData.from} ➔ ${currentSearchData.to}`;
    document.getElementById('booking-date-info').innerText = currentSearchData.date;
    document.getElementById('booking-time-info').innerText = train.depTime;
    document.getElementById('booking-train-type').innerText = `${train.type} ${train.id}`;
    updateFinalPrice();
    bookingModal.classList.remove('hidden');
    bookingModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    bookingModal.classList.add('hidden');
    bookingModal.classList.remove('flex');
    document.body.style.overflow = '';
}

function updateFinalPrice() {
    const discount = parseFloat(discountSelect.value);
    const final = (currentBasePrice * discount).toFixed(2);
    finalPriceDisplay.innerText = `${final} zł`;
}

discountSelect.addEventListener('change', updateFinalPrice);
closeBookingBtn.addEventListener('click', closeBookingModal);

document.querySelectorAll('.payment-method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.payment-method-btn').forEach(b => {
            b.classList.remove('active', 'border-green-600', 'bg-green-50', 'ring-4', 'ring-green-600/5', 'shadow-sm');
            b.classList.add('border-gray-100', 'bg-white');
            const check = b.querySelector('.absolute');
            if (check) check.remove();
        });
        btn.classList.add('active', 'border-green-600', 'bg-green-50', 'ring-4', 'ring-green-600/5', 'shadow-sm');
        btn.classList.remove('border-gray-100', 'bg-white');
        const checkDiv = document.createElement('div');
        checkDiv.className = "absolute top-2 right-2";
        checkDiv.innerHTML = '<div class="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white"><i data-lucide="check" class="w-3 h-3"></i></div>';
        btn.appendChild(checkDiv);
        createIcons(ICON_CONFIG);
        const isBlik = btn.dataset.method === 'blik';
        document.getElementById('payment-blik-details').classList.toggle('hidden', !isBlik);
        document.getElementById('payment-card-details').classList.toggle('hidden', isBlik);
    });
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
    if (window.scrollY > 50) {
        header.classList.add('py-1');
        header.classList.remove('py-3');
    } else {
        header.classList.add('py-3');
        header.classList.remove('py-1');
    }
});
