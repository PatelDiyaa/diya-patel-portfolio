import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./case-study.css";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="cs-page">{children}</main>
      <Footer />
    </>
  );
}
