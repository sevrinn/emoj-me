const emojiContainer = document.querySelector("#emoji-container")
const pushBtn = document.querySelector("#push-btn")
const emojiInput = document.querySelector("#emoji-input")
let emojiArr = ["😜", "😏", "😈"]



const renderEmojis = () => {
  let emojis = ""
  for (let i = 0; i < emojiArr.length; i++) {
    emojis += `<span>${emojiArr[i]}</span>`
  }
  emojiContainer.innerHTML = emojis
}
renderEmojis()

pushBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    emojiArr.push(emojiInput.value)
    emojiInput.value = []
    renderEmojis()
  }
})