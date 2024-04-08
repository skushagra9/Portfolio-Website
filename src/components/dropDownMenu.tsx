"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from 'next/link'

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Works", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "CV", href: "https://drive.google.com/file/d/1pdSCNN5qCNnyOkYpSdRXeb3i2PwXX8QK/view?usp=sharing" },
];

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          < HamburgerMenuIcon />
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

