import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joyenglishschool.pl"),
  authors: [{ name: "Norbert Fila", url: "https://norbertfila.com" }],
  title: "JOY English School | Angielski dla dzieci w Koszalinie",
  description: "Szukasz w Koszalinie szkoły, w której nauka to radość, a nie przykry obowiązek? W JOY English School stawiamy na przyjazną atmosferę, brak stresu i realne efekty! ",
  icons: {
    icon: "/joy-icon.svg",
    shortcut: "/joy-icon.svg",
    apple: "/joy-icon.svg",
  },
  openGraph: {
    title: "JOY English School | Angielski dla dzieci w Koszalinie",
    description: "Kameralne zajęcia angielskiego dla dzieci, atmosfera bez stresu i realne opinie rodziców z Google.",
    url: "/",
    siteName: "JOY English School",
    images: [
      {
        url: "/og-joy-school.svg",
        width: 1200,
        height: 630,
        alt: "JOY English School - angielski dla dzieci w Koszalinie",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOY English School | Angielski dla dzieci w Koszalinie",
    description: "Kameralne zajęcia angielskiego dla dzieci w Koszalinie, bez stresu przed mówieniem.",
    images: ["/og-joy-school.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${nunito.variable} ${poppins.variable} font-sans text-text-main bg-white antialiased selection:bg-joy-red selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
