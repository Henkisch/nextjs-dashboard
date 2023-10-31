import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      <div className="flex w-full justify-between space-x-2">
        <div className="flex gap-8">
          <Link
            className="flex bg-gray-100 rounded-md items-end justify-start p-4"
            href="/"
          >
            <AcmeLogo />
          </Link>
          <NavLinks />
        </div>
        <form>
          <button className="flex items-center justify-center gap-2 p-3 text-sm font-medium transition hover:bg-yellow-100 hover:text-yellow-900 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
