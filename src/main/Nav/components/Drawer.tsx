import { Box, Button, Drawer as Dr } from "@mui/material"
import React from "react"
import { CgMenuRightAlt } from "react-icons/cg"

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
    >
      hii
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
