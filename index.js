const emojiContainer = document.querySelector("#emoji-container")
let emojiArr = ["😜", "😏", "😈"]

const renderEmojis = () => {
  let emojis = ""
  for (let i = 0; i < emojiArr.length; i++) {
    emojis += `<span>${emojiArr[i]}</span>`
  }
  emojiContainer.innerHTML = emojis
}
renderEmojis()