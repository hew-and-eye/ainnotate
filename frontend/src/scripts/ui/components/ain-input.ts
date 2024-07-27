import { lilComponent } from "lil-framework"

const name = "ain-input"

const template = /*html*/`
<style>
  ain-input {
    position: relative;
  }
  ain-input textarea {
    width: 600px;
    height: 300px;
    padding: 10px;
    font-size: 1.2em;
  }
  ain-input button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.2em;
    padding: 3px 6px;
    cursor: pointer;
  }
</style>
<textarea lfhandle="checkEnter:keyup" lfbind="textAreaValue:input"></textarea>
<button lfhandle="submitText:click">✨</button>
`

lilComponent({
  name,
  template,
  data: {
    buttonDisabled: true,
  },
  hooks: {
    mounted: [function() {
      this.textarea = this.querySelector("textarea")
      this.textarea.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Shift") {
          this.state.shiftDown = true
        }
      })
    }]
  },
  handlers: {
    checkEnter(event: KeyboardEvent) {
      if (event.key === "Shift") {
        this.state.shiftDown = false
      } else if (event.key === "Enter" && !this.state.shiftDown && this.state.textAreaValue) {
        console.log("dispatching event")
        this.dispatchEvent(new CustomEvent("submitText", { detail: this.state.textAreaValue }))
        this.textarea.value = ""
      }
    },
    submitText() {
      console.log("dispatching event", this.state.textAreaValue)
      if (!this.state.textAreaValue) {
        return
      }
      this.dispatchEvent(new CustomEvent("submitText", { detail: this.state.textAreaValue }))
      console.log(this.querySelector("textarea"))
      this.textarea.value = ""
    }
  }
})