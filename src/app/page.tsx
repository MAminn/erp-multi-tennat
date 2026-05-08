import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='flex max-w-xl flex-col items-center gap-4 text-center'>
        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
          ERP Platform
        </h1>
        <p className='text-base text-black/70 dark:text-white/70 sm:text-lg'>
          Bilingual operations ERP for wholesale and manufacturing
        </p>
      </div>

      <div className='flex flex-col items-stretch gap-3 sm:flex-row'>
        <Link
          href='/sign-in'
          className='flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]'>
          Sign in
        </Link>
        <Link
          href='/sign-up'
          className='flex h-11 items-center justify-center rounded-full border border-black/[.12] px-6 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]'>
          Sign up
        </Link>
      </div>
    </main>
  );
}
