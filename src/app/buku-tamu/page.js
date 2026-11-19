
import { supabase } from "@/lib/supabase";
import FormBukuTamu from "@/components/FormBukuTamu";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Buku Tamu",
  description: "Tinggalkan kesan atau sapaan untuk Kaisar Al Moreno.",
};

export default async function BukuTamu() {
  const { data: daftarPesan, error } = await supabase
    .from("buku_tamu")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal mengambil pesan:", error.message);
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Buku Tamu
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        Tinggalkan kesan atau sapaan. Pesanmu akan tampil di bawah.
      </p>

      {/* Form Buku Tamu */}
      <Card className="mt-8">
        <CardContent>
          <FormBukuTamu />
        </CardContent>
      </Card>

      {/* Daftar Pesan */}
      <h2 className="mt-10 text-2xl font-bold text-primary">
        Pesan Terbaru
      </h2>

      <div className="mt-4 space-y-4">
        {daftarPesan && daftarPesan.length > 0 ? (
          daftarPesan.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.nama}</CardTitle>

                <p className="text-sm text-muted-foreground">
                  {new Date(item.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </CardHeader>

              <CardContent>
                <p className="whitespace-pre-wrap">{item.pesan}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground">
            Belum ada pesan. Jadilah orang pertama yang mengirim pesan!
          </p>
        )}
      </div>
    </main>
  );
}
