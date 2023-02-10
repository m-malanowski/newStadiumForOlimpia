import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div data-is-root-path={isRootPath}>
      <Nav />
      <main className="container">{children}</main>
    </div>
  )
}

export default Layout
