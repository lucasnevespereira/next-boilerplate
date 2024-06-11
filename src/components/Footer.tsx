import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-5 text-sm flex justify-center">
      <section className="container flex flex-col md:flex-row gap-5 justify-center items-center">
        <span>© {new Date().getFullYear()} made by <Link className="link" href="https://lucasnp.com" target="_blank">lucasnp</Link></span>
      </section>
    </footer>
  )
}

export default Footer;