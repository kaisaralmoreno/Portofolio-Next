import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css"
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";

const geistSans = Geist({
variable: "--font-geist-sans",
subjects: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subjects: ["latin"],
});

export const metadata = {
  title: {
    default: "Kaisar | Portofolio",
    template: "%s | Kaisar" ,
  },
  description:
    "Portofolio Kaisar, Frontend Developer dan UI/UX Designer.",
  
};

export default function RootLayout({ children }) {
  return (
    <html
     lang="id"
     className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
     >
  <body className="min-h-full flex flex-col bg-latar text-gray-800">
    <Navbar />
    {children}
    <Footer />
  </body>
</html>
  );
}