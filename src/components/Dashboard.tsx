import React from 'react';
import Watch from './Watch';
import Form from './Form';
import { WatchType } from '../types';

function Dashboard() {
  const [watches, setWatches] = React.useState<WatchType[]>([
    { id: crypto.randomUUID(), name: 'Moscow', timezone: 3 },
  ]);

  const addWatch = (name: string, timezone: number) => {
    setWatches([...watches, { id: crypto.randomUUID(), name, timezone }]);
  };

  const deleteWatch = (id: string) => setWatches(watches.filter(w => w.id !== id));

  return (
    <div className="container">
      <Form addWatch={addWatch} />
      <div className="watches">
        {watches.map(w => <Watch key={w.id} data={w} onClose={deleteWatch}/>)}
      </div>
    </div>
  );
}

export default Dashboard;
