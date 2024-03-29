import Drawer from "./components/Drawer"
import logo from "../../../public/vite.svg"

const Nav = () => {
  return (
    <nav className="bg-primary px-4 py-5 grid grid-cols-2">
      <div className=" flex items-center gap-3">
        <img
          src={logo}
          className="aspect-square h-[2.5rem]"
        />
        <h2 className="text-font font-bold md:text-2xl text-xl">
          Rise N Shine
        </h2>
      </div>
      <div className="hidden justify-between md:flex">
        <Path title="Login" />
        <Path title="Service" />
        <Path title="Contact Us" />
        <Path title="About Us" />
      </div>
      <div className="flex justify-end items-center md:hidden">
        <Drawer />
      </div>
    </nav>
  )
}

export default Nav

const Path = ({ title }: { title: string }) => {
  return (
    <p className="text-font font-bold link-hover w-min text-nowrap h-min">
      {title}
    </p>
  )
}
