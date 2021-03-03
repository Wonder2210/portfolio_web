import React from 'react'

const Header = () => {
  const [sticky, setSticky] = React.useState(false)

  const onScroll = () => {
    setSticky(window.scrollY > 0)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={sticky ? 'sticky' : ''}>
      <a href="#" className="logo">
        Icon
      </a>
      <div className="toggle"></div>
      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#posts">Posts</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
