const emojiContainer = document.querySelector("#emoji-container")
const pushBtn = document.querySelector("#push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const shiftBtn = document.querySelector("#shift-btn")
const popBtn = document.querySelector("#pop-btn")
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
    emojiInput.value = ""
    renderEmojis()
  }
})

unshiftBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    emojiArr.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})