import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "sans-serif"],
  },
})

ReactDOM.render(<App />, document.getElementById("root"))
