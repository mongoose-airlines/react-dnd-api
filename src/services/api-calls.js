const baseUrl = "https://www.dnd5eapi.co/api"

export function getClassList() {
  return fetch(`${baseUrl}/classes`)
  .then(res => res.json())
}

export function getClassDetails(classTitle){
  return fetch(`${baseUrl}/classes/${classTitle}`)
  .then(res => res.json())
}

export function getMonsterList() {
  return fetch(`${baseUrl}/monsters`)
  .then(res => res.json())
}

export function getMonsterDetails(monsterTitle) {
  return fetch(`${baseUrl}/monsters/${monsterTitle}`)
  .then(res => res.json())
}

export function spellSearch(formData) {
  return fetch(`${baseUrl}/spells/?name=${formData.query}`)
  .then(res => res.json())
}

export function getSpellDetails(spellName) {
  return fetch(`${baseUrl}/spells/${spellName}`)
  .then(res => res.json())
}


