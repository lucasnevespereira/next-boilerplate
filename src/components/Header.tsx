import Link from "next/link";

export const Header = () => {
  return (
    <header className="container flex justify-between items-center mx-auto">
      <Link href="/" className="logo text-primary text-2xl">next-boilerplate.</Link>
      <div className="actions">
        <button className="btn btn-primary-900">Log in</button>
      </div>
    </header>
  )
}


export default Header;