import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          < HamburgerMenuIcon />
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <a href="#experience">
            <DropdownMenuItem>
              Experience
            </DropdownMenuItem>
          </a>

          <a href="#works">
            <DropdownMenuItem>
              Works
            </DropdownMenuItem>
          </a>

          {/* <a href="#contact">
            <DropdownMenuItem>
              Contact
            </DropdownMenuItem>
          </a> */}

          <a href="">
            <DropdownMenuItem>
              CV
            </DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

