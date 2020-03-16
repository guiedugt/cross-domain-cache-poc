console.log("*** MAIN DOMAIN ***")

const iframe = document.querySelector("iframe")

let count = 0
const message = () => {
    count++
    iframe.contentWindow.postMessage(count, "http://sub.localhost")
}

const handleMessage = ev => count = ev.data

window.addEventListener("message", handleMessage, false)