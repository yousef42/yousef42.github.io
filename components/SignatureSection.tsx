export function SignatureSection({ signature }: { signature: string }) {
  return (
    <section className="py-6">
      <p className="text-center text-xl font-medium text-foreground/90 italic">
        «{signature}»
      </p>
    </section>
  );
}
