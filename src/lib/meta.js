// Minimal document head helper — no SEO library in this stack.
export function setMeta(title, description) {
  if (title) document.title = title
  if (description) {
    let tag = document.head.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }
}

export function setJsonLd(id, data) {
  let script = document.head.querySelector(`script[data-jsonld="${id}"]`)
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-jsonld', id)
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}
