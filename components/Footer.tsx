import React from "react"
import { Popup } from "semantic-ui-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        Made by&nbsp;
        <Popup
          content="It's me, Jack!"
          position="top center"
          trigger={<span>Pui Kit Li</span>}
          size="mini"
        />
      </div>
      <div className="footer__text">Build with Next.JS</div>
    </footer>
  )
}
