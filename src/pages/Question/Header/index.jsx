export function Header(props) {
  return (
    <div className="header">
        <div>timer</div>
        <div>{`${props.number+1}/5"`}</div>
      </div>
  )
}
