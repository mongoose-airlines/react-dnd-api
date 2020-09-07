export function getClassList() {
  return fetch('https://www.dnd5eapi.co/api/classes')
  .then(res => res.json())
}

export function getClassDetails(classTitle){
  return fetch(`https://www.dnd5eapi.co/api/classes/${classTitle}`)
  .then(res => res.json())
}
