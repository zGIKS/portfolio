import { PostgreSQL } from "../icons/stack/databases/postgresql";
import { Redis } from "../icons/stack/databases/redis";
import { MySQL } from "../icons/stack/databases/mysql";
import { MongoDB } from "../icons/stack/databases/mongo";
import { IconTile } from "./icon-tile";
import { SectionHeader } from "../section-shared/section-header";
import { IconGrid } from "../section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface DatabasesStorageProps {
  locale: Locale;
}

export function DatabasesStorage({ locale }: DatabasesStorageProps) {
  const title = getDictionary(locale).section3.databasesTitle;

  return (
    <>
      <SectionHeader title={title} count={4} className="mt-6" />
      <IconGrid>
        <IconTile ariaLabel="PostgreSQL" href="https://www.postgresql.org/docs/">
          <PostgreSQL className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="MySQL" className="text-[#00758F]" href="https://dev.mysql.com/doc/">
          <MySQL className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="MongoDB" href="https://docs.mongodb.com/">
          <MongoDB className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Redis" href="https://redis.io/documentation">
          <Redis className="h-4 w-4" />
        </IconTile>
      </IconGrid>
    </>
  );
}
