function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        
        <p>
          © {new Date().getFullYear()} ShineExplains
        </p>

        <p>
          DSA, explained with intuition.
        </p>

      </div>
    </footer>
  )
}

export default Footer