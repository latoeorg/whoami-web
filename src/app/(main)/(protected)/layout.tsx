import { AuthenticatedRoute } from "@/components/guard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AuthenticatedRoute>{children}</AuthenticatedRoute>;
}
