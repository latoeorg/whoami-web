import { Button } from "../atoms/button";
import { Icons } from "../atoms/icons";

export default function ButtonLoginGoogle() {
  return (
    <Button variant="outline">
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Google
    </Button>
  );
}
