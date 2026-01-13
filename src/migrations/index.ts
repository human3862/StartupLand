import * as migration_20260111_024516 from './20260111_024516';
import * as migration_20260111_024624 from './20260111_024624';
import * as migration_20260111_081958 from './20260111_081958';

export const migrations = [
  {
    up: migration_20260111_024516.up,
    down: migration_20260111_024516.down,
    name: '20260111_024516',
  },
  {
    up: migration_20260111_024624.up,
    down: migration_20260111_024624.down,
    name: '20260111_024624',
  },
  {
    up: migration_20260111_081958.up,
    down: migration_20260111_081958.down,
    name: '20260111_081958'
  },
];
