import * as fs from 'fs';
import { SAMPLE_DATA } from '../apps/web/src/app/pageRenderer/library/sample-data';

fs.mkdirSync('./data', { recursive: true });
fs.writeFileSync(
  './data/component-tree.json',
  JSON.stringify(SAMPLE_DATA, null, 2)
);
console.log('✅ Database initialized');
