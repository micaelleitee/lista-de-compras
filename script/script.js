const inputContent = document.querySelector(".input")
const button = document.querySelector(".button")
const ulContext = document.querySelector(".ulList")
const alertMessage = document.querySelector(".alert")
const removeIconContainer = document.querySelector(".delete-icon")
const backButton = document.querySelector(".backButton")

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

button.addEventListener("click", () => {
  if (inputContent.value.trim() !== "") {
    addItemList(inputContent.value)
    inputContent.value = ""
  }
})

function ReloadPage() {
  backButton.addEventListener("click", () => {
    window.location.reload()
  })
}

removeIconContainer.addEventListener("click", hideMessage)

function addItemList(itemText) {
  const newItem = document.createElement("li")
  newItem.className = "list-item"

  const itemContent = document.createElement("div")
  itemContent.className = "flex-row align content-label-checkbox"

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.name = "checkbox-list"
  checkbox.id = `checkbox-${Date.now()}`

  const label = document.createElement("label")
  label.htmlFor = checkbox.id
  label.className = "paragraph"
  label.textContent = itemText

  itemContent.appendChild(checkbox)
  itemContent.appendChild(label)

  const trashIcon = document.createElement("div")
  trashIcon.className = "trash-icon"
  trashIcon.innerHTML = '<img src="assets/trash.svg" alt="Remover item">'

  newItem.appendChild(itemContent)
  newItem.appendChild(trashIcon)
  ulContext.appendChild(newItem)

  trashIcon.addEventListener("click", () => {
    newItem.remove()
    showMessage()
  })
}

function showMessage() {
  alertMessage.style.display = "flex"
  alertMessage.style.opacity = "1"

  if (alertMessage.timeoutId) {
    clearTimeout(alertMessage.timeoutId)
  }

  alertMessage.timeoutId = setTimeout(hideMessage, 3000)
}

function hideMessage() {
  alertMessage.style.opacity = "0"

  setTimeout(() => {
    alertMessage.style.display = "none"
  }, 300)
}
