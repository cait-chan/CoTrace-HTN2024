import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <div className="h-72 w-48 rounded-md border">
      <div className="p-4 text-center">
        <h4 className="mb-3 text-sm font-medium leading-none">Vocabulary List</h4>

        {/* Add Button before the scrollable content */}
        <Button type="submit" className="mb-3">
          Add word to list
        </Button>

        {/* Scrollable area using basic div */}
        <div className="h-44 overflow-y-auto border-t p-2">
          {tags.map((tag) => (
            <div key={tag} className="text-sm">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

