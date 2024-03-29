import { Box, Button, Divider, Drawer as Dr } from "@mui/material"
import React from "react"
import { CgMenuRightAlt } from "react-icons/cg"
import { BiLogIn } from "react-icons/bi"
import { BiMessageAlt } from "react-icons/bi"
import { BiInfoSquare } from "react-icons/bi"
import { MdCleaningServices } from "react-icons/md"

const Drawer = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className=" space-y-2"
    >
      <section className="bg-primary rounded-b-md py-5 space-y-3">
        <h2 className="text-center text-font text-2xl font-bold ">
          Rise N Shine
        </h2>
        <button className="text-font bg-red-500 flex justify-center items-center px-4 py-1 rounded-md font-bold mx-auto">
          Login <BiLogIn size={20} />{" "}
        </button>
      </section>
      <div className="space-y-5 pt-3">
        <Btn
          title="Services"
          elm={<MdCleaningServices size={20} />}
        />
        <Btn
          title="Contact Us"
          elm={<BiMessageAlt size={20} />}
        />
        <Btn
          title="About Us"
          elm={<BiInfoSquare size={20} />}
        />
      </div>
    </Box>
  )
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <CgMenuRightAlt
          className="text-accent"
          size={35}
        />
      </Button>
      <Dr
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Dr>
    </div>
  )
}

export default Drawer

const Btn = ({ title, elm }: { title: string; elm: React.ReactElement }) => {
  return (
    <button className="text-font  font-bold flex justify-between items-center px-7 bg-secondary w-[80%] mx-auto text-nowrap rounded-md py-1">
      {title}
      {elm}
    </button>
  )
}
