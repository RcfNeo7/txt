echo "Installing dependencies"
Installing dependencies
npm install

up to date, audited 587 packages in 3s

97 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
forge install
Updating dependencies in /workspaces/polymer-template/lib
root ➜ /workspaces/polymer-template (main) $ cp .env.example .env
root ➜ /workspaces/polymer-template (main) $ just do-it
echo "Running the full E2E flow..."
Running the full E2E flow...
just set-contracts optimism XCounter && just set-contracts base XCounter
echo "Updating config.json with contract type..."
Updating config.json with contract type...
node scripts/set-contracts-config.js optimism XCounter
echo "Updating config.json with contract type..."
Updating config.json with contract type...
node scripts/set-contracts-config.js base XCounter
just deploy optimism base false
Deploying contracts with Hardhat...

          ✅   Deployment Successful   ✅
          -------------------------------
          📄 Contract Type: XCounter
          📍 Address: 0x0276AEa61bFEeF36dD6b40022B22E425cEb1eAa9
          🌍 Network: base
          -------------------------------

      
Updated config.json with address 0x0276AEa61bFEeF36dD6b40022B22E425cEb1eAa9 on network base

          ✅   Deployment Successful   ✅
          -------------------------------
          📄 Contract Type: XCounter
          📍 Address: 0x2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
          🌍 Network: optimism
          -------------------------------

      
Updated config.json with address 0x2775eAF0AB6D011DC579F8feB76DC1Bf4526e735 on network optimism
just create-channel
echo "Attempting to create a channel with the values from the config..."
Attempting to create a channel with the values from the config...
node scripts/create-channel-config.js
👂 Listening for IBC channel events on optimism...
👂 Listening for IBC channel events on base...

          -------------------------------------------

          🙋‍♀️   CHANNEL OPEN INIT !!!   🙋‍♀️

          -------------------------------------------
          🔔 Event name: OpenIbcChannel
          ⛓️  Network: optimism
          🔗 Port Address: 0x2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
          🔗 Counterparty Port ID: polyibc.base-sim.0276AEa61bFEeF36dD6b40022B22E425cEb1eAa9
          🛣️  Counterparty Channel ID: 
          🦘 Connection Hops: connection-0,connection-5
          🔀 Ordering: 0
          💰 Fee Enabled: false
          #️⃣  Version: 1.0
          -------------------------------------------
          🧾 TxHash: 0x0312a9c6e4fc0776ba6b6dc7acac3d30cc7c8852ed668b64d3c949b6467efd2b
          🔍 Explorer URL: https://optimism-sepolia.blockscout.com/tx/0x0312a9c6e4fc0776ba6b6dc7acac3d30cc7c8852ed668b64d3c949b6467efd2b
          -------------------------------------------

 ⏱️  Waiting for channel open try...

          -------------------------------------------

          🙋‍♂️   CHANNEL OPEN TRY !!!   🙋‍♂️

          -------------------------------------------
          🔔 Event name: OpenIbcChannel
          ⛓️  Network: base
          🔗 Port Address: 0x0276AEa61bFEeF36dD6b40022B22E425cEb1eAa9
          🔗 Counterparty Port ID: polyibc.optimism-sim.2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
          🛣️  Counterparty Channel ID: channel-11836
          🦘 Connection Hops: connection-4,connection-1
          🔀 Ordering: 0
          💰 Fee Enabled: false
          #️⃣  Version: 1.0
          -------------------------------------------
          🧾 TxHash: 0x6fccf857cd659becb5351591ec713ff8950734aa47c15410ed97ebdef72f5b3f
          🔍 Explorer URL: https://base-sepolia.blockscout.com/tx/0x6fccf857cd659becb5351591ec713ff8950734aa47c15410ed97ebdef72f5b3f
          -------------------------------------------

 ⏱️  Waiting for channel open ack...

          -------------------------------------------

          👩‍❤️‍💋‍👨   CHANNEL OPEN ACK !!!   👩‍❤️‍💋‍👨

          -------------------------------------------
          🔔 Event name: ConnectIbcChannel
          ⛓️  Network: optimism
          🔗 Port Address: 0x2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
          🛣️  Channel ID: channel-11836
          -------------------------------------------
          🧾 TxHash: 0x7b5928acfe16949b1d156397e6ba383ae11ce6899be20e894e577400957fb775
          🔍 Explorer URL: https://optimism-sepolia.blockscout.com/tx/0x7b5928acfe16949b1d156397e6ba383ae11ce6899be20e894e577400957fb775
          -------------------------------------------

 ⏱️  Waiting for channel open confirm...

          -------------------------------------------

          🤵‍♂️💍👰‍♀️   CHANNEL OPEN CONFIRM !!!   👰‍♀️💍🤵‍♂️

          -------------------------------------------
          🔔 Event name: ConnectIbcChannel
          ⛓️  Network: base
          🔗 Port Address: 0x0276AEa61bFEeF36dD6b40022B22E425cEb1eAa9
          🛣️  Channel ID: channel-11837
          -------------------------------------------
          🧾 TxHash: 0x3734d15a45a09d842b5f93d999b3c006a409e151091b6f1bdf4307dbe975e0b9
          🔍 Explorer URL: https://base-sepolia.blockscout.com/tx/0x3734d15a45a09d842b5f93d999b3c006a409e151091b6f1bdf4307dbe975e0b9
          -------------------------------------------

 ⏱️  Waiting for channel creation overview...

          🎊   Created Channel   🎊
          -----------------------------------------
          🛣️  Channel ID: channel-11836
          🔗 Port ID: polyibc.optimism-sim.2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
          🌍 Network: optimism
          -----------------------------------------
          🛣️  Counterparty Channel ID: channel-11837
          🪐 Counterparty Network: base
          -----------------------------------------

Updated config.json with channel-11836 on network optimism and channel-11837 on network base
just send-packet optimism false
Attempting to send a packet over a custom channel as defined in the config...
👂 Listening for IBC packet events on optimism...
👂 Listening for IBC packet events on base...
Fetching IBC app on optimism at address: 0x2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
 
          -------------------------------------------
          📦 📮   PACKET HAS BEEN SENT !!!   📦 📮
          -------------------------------------------
          🔔 Event name: SendPacket
          ⛓️  Network: optimism
          🔗 Source Port Address: 0x2775eAF0AB6D011DC579F8feB76DC1Bf4526e735
          🛣️  Source Channel ID: channel-11836
          📈 Sequence: 1
          ⏳ Timeout Timestamp: 1710175544000000000
          -------------------------------------------
          🧾 TxHash: 0x115c15d45a663fbc7945ee9d67beb70d42370a0fab29de7723ef7205e1a0dddd
          🔍 Explorer URL: https://optimism-sepolia.blockscout.com/tx/0x115c15d45a663fbc7945ee9d67beb70d42370a0fab29de7723ef7205e1a0dddd
          -------------------------------------------

 ⏱️  Waiting for packet receipt...
echo "You've done it!"
You've done it!
root ➜ /workspaces/polymer-template (main) $ 
