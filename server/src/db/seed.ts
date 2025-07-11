import {reset, seed} from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'
import { questions } from './schema/questions.ts';

(async () => {
  await reset(db, schema);

  await seed(db, schema).refine((f) => {
    return{
      rooms:{
        count: 5,
        columns: {
          name: f.companyName(),
          description: f.loremIpsum(),
        },
      },
      questions: {
        count: 10,
      },
    }
  });

  await sql.end();

  //biome-ignore lint/suspicious/noConsole: only used in dev
  console.log('Database seeded');
})();
