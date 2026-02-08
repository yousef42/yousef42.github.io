import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-2">صفحه پیدا نشد</h1>
      <p className="text-foreground/70 mb-6">۴۰۴</p>
      <Link href="/" className="text-foreground/80 hover:text-foreground">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
