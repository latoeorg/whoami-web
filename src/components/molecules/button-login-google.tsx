import supabase from "@/lib/supabase";
import { Button } from "../atoms/button";
import { Icons } from "../atoms/icons";
import { siteConfig } from "@/constant";
import { toast } from "sonner";

export default function ButtonLoginGoogle() {
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: siteConfig.url,
      },
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    console.log(data);
    toast.success("Login success");
  };

  return (
    <Button variant="outline" onClick={signInWithGoogle}>
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Google
    </Button>
  );
}
