// useLocale – SSR-safe singleton using Nuxt's useState
// useState is shared across components and hydration-safe.
export function useLocale() {
    const locale = useState('locale', () => 'it')

    // Sync from localStorage on client mount (only once)
    if (import.meta.client) {
        const saved = localStorage.getItem('locale')
        if (saved && saved !== locale.value) locale.value = saved
    }

    function setLocale(lang) {
        locale.value = lang
        if (import.meta.client) localStorage.setItem('locale', lang)
    }

    /**
     * t(field) – returns the localised string.
     * Accepts a plain string (returned as-is) or { it, en } object.
     */
    function t(field) {
        if (!field) return ''
        if (typeof field === 'string') return field
        return field[locale.value] ?? field.it ?? ''
    }

    return { locale, setLocale, t }
}
