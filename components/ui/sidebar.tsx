'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
 <aside  className="fixed top-0 left-0 z-40 w-72 bg-primary h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-primary ">
        <div className='mt-6'>

        <a href="/" className="flex items-center ps-2.5 mb-5">
          <img src="../logo.svg" className="h-14 mx-auto" alt="Flowbite Logo" />
        </a>
        </div>
       <div className="h-7"/>
        <ul className="space-y-2 font-medium">
                <li>
                  <Link className={`sidebar-item ${pathname === '/home' ? 'active' : ''}`} href="/home">
                  <img src='../home.svg' alt='home'/>
                    <span className="mx-4 font-medium">Home</span>
                  </Link>
                </li>
                <li>
                <Link className={`sidebar-item ${pathname === '/leads' ? 'active' : ''}`}  href="/leads">
                  <img src='../leads.svg' alt='leads'/>
                    <span className="mx-4 font-medium">Leads</span>
                  </Link>
                </li>
                <li>
                  <Link className={`sidebar-item ${pathname === '/tips-faq' ? 'active' : ''}`} href="/tips-faq">
                  <img src='../tips.svg' alt='tips'/>
                    <span className="mx-4 font-medium">Tips & FAQs</span>
                  </Link>
                </li>
            
              </ul>
              <hr className="border-white my-8"/>
                <ul>
                  <li>
                  <Link className={`sidebar-item ${pathname === '/add-project' ? 'active' : ''}`} href="/add-project">
                    <img src='../add.svg' alt='add'/>
                      <span className="mx-4 font-medium">Add project</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`sidebar-item ${pathname === '/edit-project' ? 'active' : ''}`} href="/edit-project">
                    <img src='../edit.svg' alt='edit'/>
                      <span className="mx-4 font-medium">Edit project</span>
                    </Link>
                  </li>
                  <hr className="border-white my-4"/>
                  <li>
                    <Link className={`sidebar-item ${pathname === '/profile' ? 'active' : ''}`} href="/profile">
                    <img src='../profile.svg' alt='profile'/>
                      <span className="mx-4 font-medium">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`sidebar-item ${pathname === '/support' ? 'active' : ''}`} href="/support">
                    <img src='../email.svg' alt='email'/>
                      <span className="mx-4 font-medium">Support via email</span>
                    </Link>
                  </li>
                </ul>
            
      </div>
    </aside>
    </>
  );
};

export default Sidebar;