export function sanitize(text) {
    return text.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
