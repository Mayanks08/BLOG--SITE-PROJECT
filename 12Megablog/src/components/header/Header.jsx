import { useState } from 'react';
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const  navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


  const navItems= [
    {
      name: 'Home',
      slug:"/",
      active:true
    },
    {
      name: 'Login',
      slug:"/Login",
      active:!authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
   <header className='py-3 shadow bg-gray-500 rounded-xl'>
    <Container>
    
    <nav className='flex items-center justify-between flex-wrap'>
  <div className="mr-4">
    <Link to="/">
      <Logo width='70px' />
    </Link>
  </div>

  {/* Hamburger Menu Button - Visible on Mobile */}
  <div className="block lg:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200"
    >
      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>

  {/* Navigation Links */}
  <div className={`${menuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
    <ul className='lg:flex lg:ml-auto space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0'>
      {navItems.map((item) =>
        item.active ? (
          <li key={item.name}>
           
            <button
                onClick={() => {
                  navigate(item.slug);
                  setMenuOpen(false);
                }}
                className={`inline-block px-6 py-2 duration-200 rounded-full w-full text-left lg:text-center ${
                  location.pathname === item.slug ? 'bg-white text-black font-semibold' : 'hover:bg-blue-100 text-white'
                }`}
              >
                {item.name}
              </button>
          </li>
        ) : null
      )}
      {authStatus && (
        <li>
          <LogoutBtn />
        </li>
      )}
    </ul>
  </div>
</nav>


    </Container>
   </header>
  );
}

export default Header;
