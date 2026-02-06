import { PostgreSQL } from "../icons/stack/databases/postgresql";
import { Redis } from "../icons/stack/databases/redis";
import { MySQL } from "../icons/stack/databases/mysql";
import { MongoDB } from "../icons/stack/databases/mongo";
import { IconTile } from "./icon-tile";

export function DatabasesStorage() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Databases</span>
        <span className="text-base font-semibold text-black">4</span>
      </div>
      <div className="mt-3 flex gap-1 px-4 md:grid md:grid-cols-4 md:gap-2">
        <IconTile ariaLabel="PostgreSQL">
          <PostgreSQL className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="MySQL" className="text-[#00758F]">
          <MySQL className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="MongoDB">
          <MongoDB className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Redis">
          <Redis className="h-4 w-4" />
        </IconTile>
      </div>
    </>
  );
}
