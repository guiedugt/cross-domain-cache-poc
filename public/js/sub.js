console.log("*** SUB DOMAIN ***")

const p = document.createElement("p")

const count = window.localStorage.getItem("count") || 0
p.innerText = `Messages Count: ${count}`
document.body.appendChild(p)

const handleMessage = ev => {
  if (ev.origin !== "http://localhost") {
    return
  }

  const count = ev.data
  p.innerText = `Messages Count: ${count}`
  window.localStorage.setItem("count", count)
}

const handleLoad = ev => {
  window.parent.postMessage(count, "http://localhost")
}

window.addEventListener("message", handleMessage)
window.addEventListener("load", handleLoad)
