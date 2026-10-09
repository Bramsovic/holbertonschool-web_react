import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
  return (
    <div className="App-footer fixed inset-x-3 bottom-0 z-20 border-t-4 border-[color:var(--main-color)] bg-white px-6 py-4 text-center">
      <p className="text-base italic md:text-xl">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </div>
  )
}

export default Footer
