import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Book, GitFork, Lock, Scale, Twitter } from "lucide-react";
import Link from "next/link";
import { Icons } from "../Icons";

export default function Footer() {
  return (
    <footer className="p-5">
      <div>
        <div className="flex items-center gap-2">
          <Icons.logo className="h-10 w-10" />
          <div>
            <span className="block text-lg">Liam Doyle</span>
            <span className="block text-sm text-muted-foreground">
              @limegorilla
            </span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-medium">Links</h4>
        <Link
          className="flex items-center gap-2"
          href={"/docs/open-source/licences"}
        >
          <GitHubLogoIcon className="h-5 w-5" />
          GitHub
        </Link>
        <Link
          className="flex items-center gap-2"
          href={"/docs/open-source/licences"}
        >
          <Twitter className="h-5 w-5" />
          Twitter
        </Link>
        <Link
          className="flex items-center gap-2"
          href={"/docs/open-source/licences"}
        >
          <GitFork className="h-5 w-5" />
          Open Source Licences
        </Link>
        <Link className="flex items-center gap-2" href={"/blog"}>
          <Book className="h-5 w-5" />
          Blog
        </Link>
        <Link className="flex items-center gap-2" href={"/blog"}>
          <Scale className="h-5 w-5" />
          Ethics
        </Link>
        <Link className="flex items-center gap-2" href={"/blog"}>
          <Lock className="h-5 w-5" />
          Your Privacy
        </Link>
      </div>
    </footer>
  );
}
