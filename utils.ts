import { CardData, TagData } from "./models"

function sortTags(arr1: Array<string>): string[] {
  const importance = ["ReactJS", "JavaScript", "Python", "R"]
  importance.reverse()

  let arr2 = Array.from(arr1)

  for (const tag of importance) {
    const itemIndex = arr2.indexOf(tag)
    if (itemIndex !== -1) {
      arr2.splice(itemIndex, 1)
      arr2.unshift(tag)
    }
  }

  return arr2
}

function reduceTags(cardsArray: any[]): string[] {
  return Array.from(
    new Set(
      cardsArray.reduce((prev, curr) => {
        return [...prev, ...curr.tags]
      }, [])
    )
  )
}

/* Returns descending ordered TagData[] */
function calculateTags(cardsArray: CardData[]): TagData[] {
  const counter: any = {}

  for (const card of cardsArray) {
    for (const tag of card.tags) {
      if (tag in counter) {
        counter[tag] += 1
      } else {
        counter[tag] = 1
      }
    }
  }

  const pairs = Object.keys(counter).map((key) => ({
    name: key,
    count: counter[key],
  }))

  pairs.sort((a, b) => b.count - a.count)

  return pairs
}

export { sortTags, reduceTags, calculateTags }
