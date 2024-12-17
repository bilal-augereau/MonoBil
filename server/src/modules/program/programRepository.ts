import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Item = {
  id: number;
  title: string;
  user_id: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from program");
    return rows as Item[];
  }
}

export default new ProgramRepository();
