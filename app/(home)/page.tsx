import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">MirrorNeuron Runtime user guide</h1>
      <p className="text-lg text-fd-muted-foreground">Set up a runtime, run a blueprint, and inspect the results.</p>
      <nav aria-label="Get started" className="flex flex-wrap gap-4">
        <Link href="/docs/installation" className="rounded-lg bg-fd-primary px-5 py-3 font-medium text-fd-primary-foreground">Install MirrorNeuron</Link>
        <Link href="/docs/quickstart" className="rounded-lg border px-5 py-3 font-medium">Run your first blueprint</Link>
      </nav>
      <div className="grid gap-4 pt-6 sm:grid-cols-3">
        <Link href="/docs/monitor" className="rounded-lg border p-5">Monitor a run</Link>
        <Link href="/docs/api" className="rounded-lg border p-5">Use the HTTP API</Link>
        <Link href="/docs/troubleshooting" className="rounded-lg border p-5">Troubleshoot a run</Link>
      </div>
    </main>
  );
}
