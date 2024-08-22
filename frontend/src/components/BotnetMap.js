import React, { useEffect, useState } from 'react';

function BotnetMap() {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch('/bots')
            .then(response => response.json())
            .then(data => setBots(data));
    }, []);

    return (
        <div>
            <h2>Botnet Map</h2>
            <ul>
                {bots.map(bot => (
                    <li key={bot.id}>
                        {bot.ip_address} - Status: {bot.status} - Last Active: {new Date(bot.last_active).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BotnetMap;
