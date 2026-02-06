import { ProgrammingLanguages } from "./programming-languages";
import { FrontendUI } from "./frontend-ui";
import { DatabasesStorage } from "./databases-storage";
import { DevOpsCloud } from "./devops-cloud";

export function Stack() {
  return (
    <>
      <ProgrammingLanguages />
      <FrontendUI />
      <DatabasesStorage />
      <DevOpsCloud />
    </>
  );
}
