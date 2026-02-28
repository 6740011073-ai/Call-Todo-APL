import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <div className="">
        <link href="/">Home</link>
        <link href="/about">About</link>
        <link href="/contact">Contact</link>
    </div>

    <div>
        <link href="/login">Login</link>
        <link href="/register">Register</link>
    </div>

    </>
  )
}
export default Navbar