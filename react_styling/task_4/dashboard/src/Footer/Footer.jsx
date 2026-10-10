import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
  return (
    <div className="App-footer mt-auto shrink-0 border-t-4 border-[color:var(--main-color)] bg-white px-1 py-3 text-center min-[520px]:px-6 min-[520px]:py-4">
      <p className="text-sm italic min-[520px]:text-base min-[912px]:text-xl">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </div>
  )
}

export default Footer
