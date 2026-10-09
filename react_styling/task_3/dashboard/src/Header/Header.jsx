import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
  return (
    <div className="App-header mb-10 flex min-h-32 items-center md:min-h-62.5">
      <img className="h-28 w-28 shrink-0 object-contain md:h-62.5 md:w-62.5" src={holbertonLogo} alt="holberton logo" />
      <h1 className="text-2xl font-bold text-[color:var(--main-color)] sm:text-4xl lg:text-5xl">School dashboard</h1>
    </div>
  )
}

export default Header
