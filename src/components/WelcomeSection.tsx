import Image from "next/image";
import Link from "next/link";

export function WelcomeSection() {
  return (
    <section className="bg-[#a8cf66] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-rpf-navy sm:text-4xl lg:text-5xl">
            You are Welcome Here!
          </h2>
          <p className="mt-6 text-base leading-relaxed text-rpf-navy/90 sm:text-lg">
            New here? Get ready to experience a warm family of love, where
            you&apos;re empowered to embrace greatness in life while serving God
            and humanity. At our core, we believe in living and leading
            differently.
          </p>
          <Link
            href="/connect"
            className="mt-8 inline-block rounded-md border border-white/60 bg-rpf-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rpf-navy/90"
          >
            Join our Family
          </Link>
        </div>

        <div className="relative w-full overflow-hidden rounded-sm bg-black shadow-lg">
          <Image
            src="/images/church-life.png"
            alt="Church life at Royal Priesthood Family Ministry"
            width={1200}
            height={800}
            unoptimized
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
