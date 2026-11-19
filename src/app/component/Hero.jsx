
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <Image
        src="/pp.jpeg"
        alt={`foto profil ${nama}`}
        width={180}
        height={180}
        loading="eager"
        className="rounded-full border-4 border-aksen"
      />

      <div>
        <h1 className="text-3xl font-bold text-utama md:text-5xl">
          Hallo, saya {nama}
        </h1>

        <p className="mt-3 text-lg text-gray-700">
          {tagline}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button render={<Link href="/proyek" />}>
            Lihat Proyek
          </Button>

          <Button
            variant="outline"
            render={<Link href="/kontak" />}
          >
            Hubungi Saya
          </Button>
        </div>
      </div>
    </section>
  );
}
