import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  LogOut,
  MessageSquare,
  Settings,
 FolderGit2Icon,
  User,
  Github,
} from"lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                 <link rel="icon" type="image/png" href="https://res.cloudinary.com/drd28jqxh/image/upload/v1746939562/phl9pymmdoem3azzkrfj.png" />
              </div>
              <h1 className="text-lg font-bold">soSure</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
          
            <Link
              to={"https://github.com/iraajp/chat-app-01"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <FolderGit2Icon className="w-4 h-4" />
              <span className="hidden sm:inline">srcCode</span>
            </Link>
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
