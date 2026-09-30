function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

          {/* Small Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            DSA, explained differently.
          </div>

          {/* Main Heading */}
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            DSA isn't hard.
            <br />

            <span className="text-gray-500">
              Understanding how to think about it is.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Stop memorizing solutions.
            <br />
           Learn how to look at a problem, figure out what to think about, and build the solution yourself.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/learn"
              className="rounded-full bg-white px-7 py-3.5 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Start Learning →
            </a>

            <a
              href="/mentorship"
              className="rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              1:1 DSA Clarity
            </a>

          </div>

        </div>

      </section>

{/* Problem Section */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

    {/* Section Introduction */}
    <div className="max-w-3xl">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        The real problem
      </p>

      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        You understand the solution.
        <br />

        <span className="text-gray-500">
          But can you find it yourself?
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
        Most students don't struggle because they can't code.
        They struggle with knowing what to think about when a new
        problem appears.
      </p>

    </div>


    {/* Pain Points */}
    <div className="mt-16 grid gap-4 md:grid-cols-3">

      {/* Card 1 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">

        <span className="text-sm text-gray-600">
          01
        </span>

        <h3 className="mt-10 text-xl font-medium">
          "I know the algorithm..."
        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          But when the question changes, I don't know where to start.
        </p>

      </div>


      {/* Card 2 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">

        <span className="text-sm text-gray-600">
          02
        </span>

        <h3 className="mt-10 text-xl font-medium">
          "I understood it..."
        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          But when I see the problem again, I can't solve it without
          looking at the solution.
        </p>

      </div>


      {/* Card 3 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">

        <span className="text-sm text-gray-600">
          03
        </span>

        <h3 className="mt-10 text-xl font-medium">
          "What should I think first?"
        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          That's the skill we want to build.
        </p>

      </div>

    </div>

  </div>
</section>

{/* ShineExplains Method */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

    {/* Section Header */}
    <div className="max-w-3xl">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        The ShineExplains way
      </p>

      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        We don't start with the code.
        <br />
        <span className="text-gray-500">
          We start with the thinking.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
        Every problem is broken down into simple questions.
        What is happening? What would we try first? What should
        we notice? And why does the final approach work?
      </p>

    </div>


    {/* Thinking Process */}
    <div className="mt-16 grid gap-4 md:grid-cols-5">

      {/* Step 1 */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <span className="text-sm text-gray-600">
          01
        </span>

        <h3 className="mt-8 text-lg font-medium">
          Understand
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          What is the problem actually asking?
        </p>
      </div>


      {/* Step 2 */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <span className="text-sm text-gray-600">
          02
        </span>

        <h3 className="mt-8 text-lg font-medium">
          Brute Force
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          What would we naturally try first?
        </p>
      </div>


      {/* Step 3 */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <span className="text-sm text-gray-600">
          03
        </span>

        <h3 className="mt-8 text-lg font-medium">
          Observe
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Where is the bottleneck or missing insight?
        </p>
      </div>


      {/* Step 4 */}
      <div className="rounded-3xl border border-blue-500/30 bg-blue-500/[0.04] p-6">
        <span className="text-sm text-blue-400">
          04
        </span>

        <h3 className="mt-8 text-lg font-medium">
          Intuition
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          What changes the way we think about the problem?
        </p>
      </div>


      {/* Step 5 */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <span className="text-sm text-gray-600">
          05
        </span>

        <h3 className="mt-8 text-lg font-medium">
          Code
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Now turn the idea into a clean solution.
        </p>
      </div>

    </div>

  </div>
</section>

    </main>
    
  );
}

export default Home;