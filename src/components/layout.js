import * as React from "react"
import Nav from "./nav";
import Sidebar from "./sidebar";
import { motion, AnimatePresence } from "framer-motion"
import { layoutVariants, transition } from '../components/variants'
import FakeLoader from "./fakeLoader";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div data-is-root-path={isRootPath}>

      <FakeLoader/>

      <Nav isOpen={isOpen}  toggleSideBar={toggleSideBar} />
        <Sidebar isOpen={isOpen}  toggleSideBar={toggleSideBar} />
        <AnimatePresence initial={true} exitBeforeEnter>
            <motion.main className="container"
                  location={location}
                  key={location.key}
                  variants={layoutVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    </div>
  )
}

export default Layout
