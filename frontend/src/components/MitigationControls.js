import React, { useState } from 'react';

function MitigationControls() {
    const [botId, setBotId] = useState('');

    const mitigateBot = () => {
        fetch('/mitigate_bot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bot_id: botId })
        }).then(response => response.json())
          .then(data => alert(data.result));
    };

    return (
        <div>
            <h2>Mitigation Controls</h2>
            <input type="text" placeholder="Bot ID" value={botId} onChange={e => setBotId(e.target.value)} />
            <button onClick={mitigateBot}>Mitigate Bot</button>
        </div>
    );
}

export default MitigationControls;
