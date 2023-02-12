import * as React from "react"
import Nav from "./nav";
import Sidebar from "./sidebar";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div data-is-root-path={isRootPath}>
      <Nav isOpen={isOpen}  toggleSideBar={toggleSideBar} />
        <Sidebar isOpen={isOpen}  toggleSideBar={toggleSideBar}/>

      <main className="container">{children}</main>
    </div>
  )
}

export default Layout
