import React from 'react';
import BotnetMap from './components/BotnetMap';
import AttackControls from './components/AttackControls';
import MitigationControls from './components/MitigationControls';

function App() {
    return (
        <div>
            <BotnetMap />
            <AttackControls />
            <MitigationControls />
        </div>
    );
}

export default App;
