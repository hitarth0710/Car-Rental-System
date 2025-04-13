import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fine } from "@/lib/fine";
import { Loader2 } from "lucide-react";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      await fine.auth.signOut();
      navigate("/");
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-lg">Logging out...</p>
      </div>
    </div>
  );
}