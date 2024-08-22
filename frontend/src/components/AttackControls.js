import React, { useState } from 'react';

function AttackControls() {
    const [botId, setBotId] = useState('');
    const [target, setTarget] = useState('');
    const [attackType, setAttackType] = useState('DDoS');

    const startAttack = () => {
        fetch('/start_attack', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bot_id: botId, target, type: attackType })
        }).then(response => response.json())
          .then(data => alert(data.result));
    };

    return (
        <div>
            <h2>Attack Controls</h2>
            <input type="text" placeholder="Bot ID" value={botId} onChange={e => setBotId(e.target.value)} />
            <input type="text" placeholder="Target" value={target} onChange={e => setTarget(e.target.value)} />
            <select value={attackType} onChange={e => setAttackType(e.target.value)}>
                <option value="DDoS">DDoS</option>
                <option value="Spam">Spam</option>
            </select>
            <button onClick={startAttack}>Start Attack</button>
        </div>
    );
}

export default AttackControls;
