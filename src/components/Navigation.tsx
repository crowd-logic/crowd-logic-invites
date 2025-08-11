export function Navigation() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-neutral-900/60 px-4 py-2.5 backdrop-blur-md">
          <a href="/" className="font-semibold tracking-wide text-white">CrowdLogic</a>
          <div className="flex items-center gap-1">
            <a href="#proof" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">Proof</a>
            <a href="#service" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">Service</a>
            <a href="#contact" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
