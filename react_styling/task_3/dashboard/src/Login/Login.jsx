import WithLogging from '../HOC/WithLogging.jsx'

function Login() {
  return (
    <div className="App-body min-h-72 border-t-4 border-[color:var(--main-color)] px-4 py-5 md:min-h-110 md:px-10">
      <p className="text-xl">Login to access the full dashboard</p>

      <div className="mt-8 flex flex-wrap items-center gap-2 text-lg">
        <label htmlFor="email">Email:</label>
        <input className="h-8 w-52 max-w-full rounded border border-black px-2" id="email" name="email" type="email" />

        <label htmlFor="password">Password:</label>
        <input className="h-8 w-52 max-w-full rounded border border-black px-2" id="password" name="password" type="password" />

        <button className="cursor-pointer rounded border border-black px-1" type="button">OK</button>
      </div>
    </div>
  )
}

const LoginWithLogging = WithLogging(Login)

export default LoginWithLogging
