export function getClassList() {
  return fetch('https://www.dnd5eapi.co/api/classes')
  .then(res => res.json())
}

export function getClassDetails(classTitle){
  return fetch(`https://www.dnd5eapi.co/api/classes/${classTitle}`)
  .then(res => res.json())
}

export function getMonsterList() {
  return fetch('https://www.dnd5eapi.co/api/monsters')
  .then(res => res.json())
}

export function getMonsterDetails(monsterTitle) {
  return fetch(`https://www.dnd5eapi.co/api/monsters/${monsterTitle}`)
  .then(res => res.json())
}

export function spellSearch(formData) {
  return fetch(`https://www.dnd5eapi.co/api/spells/?name=${formData.query}`)
  .then(res => res.json())
}