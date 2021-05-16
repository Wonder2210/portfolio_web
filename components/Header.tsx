import React from 'react'

const Header = () => {
  const [sticky, setSticky] = React.useState(false)
  const [menu, setMenu] = React.useState(false)

  const onScroll = () => {
    setSticky(window.scrollY > 0)
  }
  const toggleMenu = ()=>{
    setMenu(!menu);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={sticky ? 'sticky' : ''}>
      <a href="#" className="logo">
       <span>
       W
       </span>
        <p>
          onder
          </p>
      </a>
      <button className={`toggle ${menu ? 'active':''}`} onClick={toggleMenu}>
    </button>
      <ul className={`menu ${menu ? 'active':''}`}>
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
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#posts">Posts</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
