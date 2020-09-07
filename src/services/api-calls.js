export function getClassList() {
  return fetch('https://www.dnd5eapi.co/api/classes')
  .then(res => res.json())
}