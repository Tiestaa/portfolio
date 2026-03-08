const birthDate = new Date('2002-06-06')
const today = new Date()
let myAge = today.getFullYear() - birthDate.getFullYear()
const m = today.getMonth() - birthDate.getMonth()
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    myAge--
}

import { socials } from '~/data/socials.js'

export const info = [
    { label: { it: '👤 Nome', en: '👤 Name' }, value: 'Francesco' },
    { label: { it: '👤 Cognome', en: '👤 Surname' }, value: 'Testa' },
    { label: { it: '📍 Posizione', en: '📍 Location' }, value: socials.location },
    { label: { it: '🎂 Età', en: '🎂 Age' }, value: myAge.toString() },
    { label: { it: '🎓 Formazione', en: '🎓 Education' }, value: { it: 'Informatica', en: 'Computer Science' } },
    { label: { it: '💼 Stato', en: '💼 Status' }, value: { it: 'Aperto a opportunità', en: 'Open to work' } },
    { label: { it: '🌐 Lingue', en: '🌐 Languages' }, value: 'IT 🇮🇹 EN 🇬🇧' },
]

export const experience = [
    {
        role: { it: 'Docente', en: 'Teacher' },
        company: 'Iaros International',
        period: '01/2026 – 12/2026',
        desc: {
            it: 'Docente di Informatica (corsi su nozioni base di Informatica, Excel e Word) per un totale di 35 ore e docente di Matematica per un totale di 45 ore totali.',
            en: 'Teacher of Computer Science (courses on basic Computer Science, Excel and Word) for a total of 35 hours and Math teacher for a total of 45 hours.',
        },
    },
    {
        role: { it: 'Wordpress Developer', en: 'Wordpress Developer' },
        company: null,
        period: '05/2025 – now',
        desc: {
            it: 'Sviluppo e manutenzione di un sito web con Wordpress. Link al sito nella sezione progetti.',
            en: 'Development and maintenance of a website with Wordpress. Link to the site in the projects section.',
        },
    },
    {
        role: { it: 'Tirocinio', en: 'Internship' },
        company: 'Alma Mater Studiorum - Università di Bologna',
        period: { it: '06/2024 – 09/2024', en: '06/2024 – 09/2024' },
        desc: {
            it: 'Analisi del Cheshire Cat AI e sviluppo di alcuni plugin per testare il framework.',
            en: 'Analysis of the Cheshire Cat AI and development of some plugins to test the framework.',
        },
    }
]

export const education = [
    {
        degree: { it: 'Laurea Magistrale in Informatica', en: 'Masters\'s Degree in Computer Science' },
        institution: 'Università di Bologna',
        period: '2024 – now',
        desc: {
            it: 'Curriculum Tecniche del software',
            en: 'Curriculum Techniques of Software',
        },
        thesis: null,
        thesisUrl: null,
    },
    {
        degree: { it: 'Laurea Triennale in Informatica', en: 'Bachelor\'s Degree in Computer Science' },
        institution: 'Università di Bologna',
        period: '2021 – 2024',
        desc: null,
        thesis: 'Cheshire Cat AI: framework per la realizzazione di chatbot specializzati',
        thesisUrl: 'https://amslaurea.unibo.it/id/eprint/33476/1/CHESHIRE_CAT_AI_FRAMEWORK_PER_LA_REALIZZAZIONE_DI_CHATBOT_SPECIALIZZATI.pdf',
    },
]
