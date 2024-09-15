import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuButtonProps {
  onLanguageChange: (language: string) => void; // New prop
}

export function DropdownMenuButton({
  onLanguageChange
}: DropdownMenuButtonProps) {
  // Function to handle the selection of any language
  const handleSelectLanguage = (value: string) => {
    if (value) {
      onLanguageChange(value); // Notify the parent of the selected language
    }
  };

  return (
    <div>
      <div className="absolute top-[501px] left-[700px] transform -translate-x-1/2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-30 h-12 text-lg p-4">
              Select Language <span className="ml-2">▲</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup onValueChange={handleSelectLanguage}>
              <DropdownMenuRadioItem value="Inuktitut">Inuktitut</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Ojibwe">Ojibwe</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Javanese">Javanese</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Mongolian">Mongolian</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
