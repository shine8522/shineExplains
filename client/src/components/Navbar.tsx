import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          ShineExplains
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/learn" className="text-sm text-white/70 hover:text-white">
            Learn
          </Link>

          <Link to="/mentorship" className="text-sm text-white/70 hover:text-white">
            Mentorship
          </Link>

          <Link to="/about" className="text-sm text-white/70 hover:text-white">
            About
          </Link>

          <Link to="/contact" className="text-sm text-white/70 hover:text-white">
            Contact
          </Link>
        </div>

        <Link
          to="/saved"
          className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
        >
          Saved
        </Link>

      </nav>
    </header>
  )
}

export default Navbar