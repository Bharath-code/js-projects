const DEFAULT_STATE = {
  title: "old title",
  summary: "this is summary for the title",
}

const state = new Proxy(
  { ...DEFAULT_STATE },
  {
    set(obj, prop, value) {
      obj[prop] = value
      render(obj)
      return true
    },
  }
)

function render(state) {
  document.querySelector("#title").textContent = state.title
  document.querySelector("#summary").textContent = state.summary
}

state.title = "new title"
state.summary = "this is the new summary"
