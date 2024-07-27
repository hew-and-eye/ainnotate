import { lilComponent } from "lil-framework"
import { globalState } from "../../state/globalState"

const name = "write-view"
const template = /*html*/`
<style>
  write-view {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<ain-input lfhandle="submitText:submitText"></ain-input>`

lilComponent({
  name,
  template,
  handlers: {
    submitText({ detail: text }: CustomEvent) {
      console.log("sending", globalState.socket, text)
      const socket = globalState.socket as WebSocket
      socket.send(text)
    }
  }
})