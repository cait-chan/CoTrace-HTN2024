import { DropdownMenuButton } from "./ui/dropdown-menu-button";
 
export default function LandingPage() {
  return (
    <>
        <div className="h-screen w-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('/landingpage.png')` }}>
        </div>
        <DropdownMenuButton />
    </>
  );
}