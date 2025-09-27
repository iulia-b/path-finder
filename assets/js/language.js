// Language switching functionality
const translations = {
    ro: {
        // Navigation
        'nav.home': 'Acasă',
        'nav.about': 'Despre noi',
        'nav.services': 'Servicii',
        'nav.mentors': 'Mentori',
        'nav.contact': 'Contact',
        
        // Homepage
        'home.title': 'PathFinder - Consiliere profesională pentru elevi',
        'home.hero.headline': 'Descoperă drumul tău profesional cu sprijinul unei echipe de mentori de succes.',
        'home.hero.subtitle': 'Sunt Anca Grecu, consilier vocațional cu peste 10 ani de experiență în educație. Împreună cu o echipă de profesioniști din domenii diverse, îi ajutăm pe elevi să afle ce li se potrivește și să facă primii pași siguri către o carieră de succes.',
        'home.hero.cta': 'Vezi pachetele de consiliere',
        'home.hero.cta2': 'Întâlnește mentorii',
        'home.features.title': 'De ce să alegi PathFinder?',
        'home.features.subtitle': 'Te ajutăm să-ți descoperi potențialul și să-ți planifici viitorul',
        'home.feature1.title': 'Ghidaj Expert',
        'home.feature1.desc': 'Mentori profesioniști cu experiență în industrie',
        'home.feature2.title': 'Abordare Personalizată',
        'home.feature2.desc': 'Sfaturi adaptate în funcție de interesele și abilitățile tale',
        'home.feature3.title': 'Resurse Complete',
        'home.feature3.desc': 'Acces la informații despre cariere și trasee educaționale',
        
        // About page
        'about.title': 'Despre noi - PathFinder',
        'about.header.title': 'Despre PathFinder',
        'about.header.subtitle': 'Experiență educațională și puterea mentoratului',
        'about.mission.title': 'Experiența noastră',
        'about.mission.text': 'Am lucrat peste 10 ani în pedagogie, inclusiv ca director de liceu, și am văzut cât de mult contează ghidajul în momentele de decizie. Am creat acest program pentru ca elevii să aibă parte de claritate, susținere și exemple reale de succes.',
        'about.team.title': 'Echipa noastră',
        'about.team.text': 'Nu sunt singură în acest demers: alături de mine este o echipă de oameni de succes din domenii variate – IT, medicină, business, artă și știință – care devin mentori și surse de inspirație pentru tineri.',
        'about.values.title': 'Valorile noastre',
        'about.value1': 'Încredere și autenticitate',
        'about.value2': 'Orientare practică, nu doar teorie',
        'about.value3': 'Conectarea elevilor cu oameni care inspiră',
        
        // Services page
        'services.title': 'Servicii - PathFinder',
        'services.header.title': 'Cum te putem sprijini',
        'services.header.subtitle': 'Pachete complete de consiliere profesională',
        'services.individual.title': 'Consiliere individuală',
        'services.individual.desc': 'O ședință de orientare cu mine, pentru a înțelege interesele și opțiunile disponibile.',
        'services.plan.title': 'Plan de orientare',
        'services.plan.desc': '3 ședințe + teste de aptitudini + discuții ghidate + întâlnire online cu un mentor din domeniul de interes.',
        'services.premium.title': 'Pachet Premium',
        'services.premium.desc': '5 ședințe de consiliere, acces la 2-3 mentori relevanți și un plan detaliat pentru admitere sau carieră.',
        'services.cta.title': 'Pregătit să începi călătoria?',
        'services.cta.desc': 'Contactează-ne astăzi pentru a afla mai multe despre serviciile noastre.',
        'services.cta.button': 'Programează o sesiune',
        
        // Mentors page
        'mentors.title': 'Mentori - PathFinder',
        'mentors.header.title': 'Inspirație din experiența reală',
        'mentors.header.subtitle': 'Elevii pot interacționa cu mentori din domenii variate',
        'mentors.it.title': 'IT & Tehnologie',
        'mentors.it.desc': 'Experți în software și startup-uri',
        'mentors.medicine.title': 'Medicină & Științe',
        'mentors.medicine.desc': 'Medici și cercetători dedicați',
        'mentors.business.title': 'Business & Management',
        'mentors.business.desc': 'Antreprenori și manageri cu experiență',
        'mentors.arts.title': 'Artă & Creativitate',
        'mentors.arts.desc': 'Artiști și creatori care au transformat pasiunea în carieră',
        'mentors.process.title': 'Cum funcționează?',
        'mentors.step1': 'Alege un mentor',
        'mentors.step2': 'Programează sesiuni',
        'mentors.step3': 'Primește ghidaj',
        'mentors.cta': 'Începe să lucrezi cu un mentor',
        
        // Contact page
        'contact.title': 'Contact - PathFinder',
        'contact.header.title': 'Contactează-ne',
        'contact.header.subtitle': 'Hai să vorbim despre viitorul tău',
        
        // Footer
        'footer.copyright': '© 2024 PathFinder. Toate drepturile rezervate.',
        'footer.tagline': 'Te ajutăm să-ți găsești drumul către succes'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.mentors': 'Mentors',
        'nav.contact': 'Contact',
        
        // Homepage
        'home.title': 'PathFinder - Career Guidance for Students',
        'home.hero.headline': 'Find Your Path to Success',
        'home.hero.subtitle': 'Professional orientation and guidance for students with experienced mentors from diverse fields.',
        'home.hero.cta': 'Our Services',
        'home.hero.cta2': 'Meet Our Mentors',
        'home.features.title': 'Why Choose PathFinder?',
        'home.features.subtitle': 'We help students discover their potential and plan their future',
        'home.feature1.title': 'Expert Guidance',
        'home.feature1.desc': 'Professional mentors with industry experience',
        'home.feature2.title': 'Personalized Approach',
        'home.feature2.desc': 'Tailored advice based on your interests and skills',
        'home.feature3.title': 'Comprehensive Resources',
        'home.feature3.desc': 'Access to career information and educational pathways',
        
        // About page
        'about.title': 'About - PathFinder',
        'about.header.title': 'About PathFinder',
        'about.header.subtitle': 'Educational experience and the power of mentoring',
        'about.mission.title': 'Our Experience',
        'about.mission.text': 'I have worked over 10 years in education, including as a high school principal, and I have seen how much guidance matters in moments of decision. I created this program so that students can have clarity, support and real examples of success.',
        'about.team.title': 'Our Team',
        'about.team.text': 'I am not alone in this endeavor: alongside me is a team of successful people from various fields - IT, medicine, business, arts and science - who become mentors and sources of inspiration for young people.',
        'about.values.title': 'Our Values',
        'about.value1': 'Trust and authenticity',
        'about.value2': 'Practical guidance, not just theory',
        'about.value3': 'Connecting students with inspiring people',
        
        // Services page
        'services.title': 'Services - PathFinder',
        'services.header.title': 'How We Can Support You',
        'services.header.subtitle': 'Comprehensive career guidance solutions',
        'services.individual.title': 'Individual Counseling',
        'services.individual.desc': 'One orientation session with me to understand interests and available options.',
        'services.plan.title': 'Guidance Plan',
        'services.plan.desc': '3 sessions + aptitude tests + guided discussions + online meeting with a mentor in the field of interest.',
        'services.premium.title': 'Premium Package',
        'services.premium.desc': '5 counseling sessions, access to 2-3 relevant mentors and a detailed plan for admission or career.',
        'services.cta.title': 'Ready to Start Your Journey?',
        'services.cta.desc': 'Contact us today to learn more about our services.',
        'services.cta.button': 'Schedule a Session',
        
        // Mentors page
        'mentors.title': 'Mentors - PathFinder',
        'mentors.header.title': 'Inspiration from Real Experience',
        'mentors.header.subtitle': 'Students can interact with mentors from various fields',
        'mentors.it.title': 'IT & Technology',
        'mentors.it.desc': 'Software and startup experts',
        'mentors.medicine.title': 'Medicine & Sciences',
        'mentors.medicine.desc': 'Dedicated doctors and researchers',
        'mentors.business.title': 'Business & Management',
        'mentors.business.desc': 'Experienced entrepreneurs and managers',
        'mentors.arts.title': 'Arts & Creativity',
        'mentors.arts.desc': 'Artists and creators who turned passion into career',
        'mentors.process.title': 'How It Works',
        'mentors.step1': 'Choose a mentor',
        'mentors.step2': 'Schedule sessions',
        'mentors.step3': 'Get guidance',
        'mentors.cta': 'Start Working with a Mentor',
        
        // Contact page
        'contact.title': 'Contact - PathFinder',
        'contact.header.title': 'Contact Us',
        'contact.header.subtitle': 'Get in touch to start your career guidance journey',
        
        // Footer
        'footer.copyright': '© 2024 PathFinder. All rights reserved.',
        'footer.tagline': 'Helping students find their path to success'
    }
};

let currentLanguage = 'ro'; // Default to Romanian

function initializeLanguage() {
    // Check if language preference is saved
    const savedLang = localStorage.getItem('pathfinder-language');
    if (savedLang && (savedLang === 'ro' || savedLang === 'en')) {
        currentLanguage = savedLang;
    }
    
    // Update document language
    document.documentElement.lang = currentLanguage;
    
    // Update language selector
    updateLanguageSelector();
    
    // Translate page
    translatePage();
}

function switchLanguage(lang) {
    if (lang !== 'ro' && lang !== 'en') return;
    
    currentLanguage = lang;
    localStorage.setItem('pathfinder-language', lang);
    document.documentElement.lang = lang;
    
    updateLanguageSelector();
    translatePage();
}

function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.textContent = currentLanguage.toUpperCase();
    }
    
    // Update dropdown items
    const roOption = document.getElementById('lang-ro');
    const enOption = document.getElementById('lang-en');
    
    if (roOption && enOption) {
        roOption.classList.toggle('bg-blue-50', currentLanguage === 'ro');
        enOption.classList.toggle('bg-blue-50', currentLanguage === 'en');
    }
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage][key];
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update page title
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-translate')) {
        const key = titleElement.getAttribute('data-translate');
        const translation = translations[currentLanguage][key];
        if (translation) {
            titleElement.textContent = translation;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage);