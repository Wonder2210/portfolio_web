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
    
      <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.1119 0L51.7957 11.5989L57.9203 24.9651L63.2404 13.3578L57.1184 0H57.1119Z" fill="#F05A28"/>
<path d="M46.4796 0H46.4743L23.5573 50H34.1974L57.1119 0H46.4796Z" fill="#F6921E"/>
<path d="M69.3611 0L51.7063 38.5253L57.0948 49.9805L80 0H69.3611Z" fill="#F6921E"/>
<path d="M45.5028 25.3322L40.2406 36.8153L46.448 49.9972L46.452 50H57.0869L57.0948 49.9805L45.5028 25.3322Z" fill="#F05A28"/>
<path d="M23.5507 50H23.5573L28.809 38.5407L10.6888 0H0L23.5507 50Z" fill="#F05A28"/>
<path d="M22.9013 0L34.8482 25.3657L40.1144 13.8757L33.5888 0H22.9013Z" fill="#F05A28"/>
</svg>
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
