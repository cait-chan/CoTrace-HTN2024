"use client";

import { Button } from "@/components/ui/button";
import { ScrollAreaDemo } from "@/components/ui/scroll-area";

export function VocabList() {
  return (
    <div className="flex items-start justify-between border-b py-4">
      <div className="container flex flex-col gap-2">
        <h1 className=" text-lg font-semibold md:text-2xl">Vocabulary List</h1>
        <p className="hidden sm:block text-sm text-muted-foreground">
          Hi my name is Kashish and I have 27 children.
        </p>
        <Button type="submit">
                    Add word to list
        </Button>
        <ScrollAreaDemo />
      </div>
    </div>
  );
}