import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm font-medium text-fd-muted-foreground">MirrorNeuron · Developer manual</p>
      <h1 className="text-4xl font-bold tracking-tight">Build workflows. Run them. Inspect the results.</h1>
      <p className="text-lg text-fd-muted-foreground">Install MirrorNeuron, launch your first blueprint, and connect your application through Python or the HTTP API.</p>
      <nav aria-label="Get started" className="flex flex-wrap gap-4">
        <Link href="/docs/quickstart" className="rounded-lg bg-fd-primary px-5 py-3 font-medium text-fd-primary-foreground">Run your first blueprint</Link>
        <Link href="/docs" className="rounded-lg border px-5 py-3 font-medium">Browse the manual</Link>
      </nav>
      <div className="grid gap-4 pt-6 sm:grid-cols-3">
        <Link href="/docs/blueprint-standard" className="rounded-lg border p-5">Author a blueprint</Link>
        <Link href="/docs/api" className="rounded-lg border p-5">Integrate the API</Link>
        <Link href="/docs/troubleshooting" className="rounded-lg border p-5">Troubleshoot a run</Link>
      </div>
    </main>
  );
}
