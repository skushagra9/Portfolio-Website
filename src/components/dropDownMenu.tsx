"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from 'next/link';

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Works", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "CV", href: "/Kushagra_Sharma_Resume.pdf" },
];

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>

        {navigation.map((menuItem) => {
          return (
            <DropdownMenuItem asChild key={menuItem.name}>
              <Link href={menuItem.href}>
                {menuItem.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>);
}

