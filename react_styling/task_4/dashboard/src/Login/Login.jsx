import WithLogging from '../HOC/WithLogging.jsx'

function Login() {
  return (
    <div className="App-body min-h-100 border-t-4 border-[color:var(--main-color)] px-1 py-5 min-[520px]:px-10 min-[912px]:min-h-110">
      <p className="text-xl">Login to access the full dashboard</p>

      <div className="mt-8 flex flex-col items-start gap-2 text-lg min-[520px]:flex-row min-[520px]:flex-wrap min-[520px]:items-end">
        <div className="flex w-full flex-col min-[520px]:w-auto min-[520px]:flex-row min-[520px]:items-center min-[520px]:gap-2">
          <label htmlFor="email">Email:</label>
          <input className="h-8 w-60 max-w-full min-[520px]:w-52 rounded border border-black px-2" id="email" name="email" type="email" />

        </div>

        <div className="flex w-full flex-col min-[520px]:w-auto min-[520px]:flex-row min-[520px]:items-center min-[520px]:gap-2">
          <label htmlFor="password">Password:</label>
          <input className="h-8 w-60 max-w-full min-[520px]:w-52 rounded border border-black px-2" id="password" name="password" type="password" />

        </div>

        <button className="cursor-pointer rounded border border-black px-1" type="button">OK</button>
      </div>
    </div>
  )
}

const LoginWithLogging = WithLogging(Login)

export default LoginWithLogging
