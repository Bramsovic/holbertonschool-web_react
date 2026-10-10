import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
  return (
    <div className="App-header mb-10 flex flex-col items-center gap-2 pt-4 min-[520px]:min-h-62.5 min-[520px]:flex-row min-[520px]:gap-0 min-[520px]:pt-0">
      <img className="h-60 w-60 shrink-0 object-contain min-[520px]:h-62.5 min-[520px]:w-62.5" src={holbertonLogo} alt="holberton logo" />
      <h1 className="text-center text-[clamp(1.5rem,8vw,2.25rem)] font-bold text-[color:var(--main-color)] min-[520px]:text-left min-[520px]:text-4xl min-[912px]:text-5xl">School dashboard</h1>
    </div>
  )
}

export default Header
