type Props = {
  buildTimestamp: string
}

export default function Footer(props: Props) {
  return (
    <footer className="mt-8 flex flex-col items-center bg-slate-500 py-4 text-sm text-white">
      <div className="">
        Made by&nbsp;Pui Kit Li
        {/* <Popup content="It's me, Jack!" position="top center" trigger={<span>Pui Kit Li</span>} size="mini" /> */}
      </div>
      <div className="">Build with Next.JS</div>
      <div style={{ display: "none" }}>Build: {props.buildTimestamp}</div>
    </footer>
  )
}
