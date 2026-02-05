#!/usr/bin/env node

// Test script for Alpha Vantage API
// Run with: source secrets-loader.sh && node scripts/test_alpha_vantage.js

// Load secrets before running
require('./secrets/secrets-loader.js');

const https = require('https');

const symbol = process.argv[2] || 'AAPL';
const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

if (!apiKey) {
  console.error('❌ ALPHA_VANTAGE_API_KEY not found in secrets');
  console.error('Please source secrets-loader.sh first:');
  console.error('  source secrets/secrets-loader.sh');
  process.exit(1);
}

console.log(`🔍 Fetching data for ${symbol}...`);

const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json['Error Message']) {
        console.error('❌ API Error:', json['Error Message']);
        process.exit(1);
      }
      if (json.Note || json['Information']) {
        console.log('ℹ️', json.Note || json['Information']);
      }

      if (json['Time Series (Daily)']) {
        const latestDate = Object.keys(json['Time Series (Daily)'])[0];
        const latestData = json['Time Series (Daily)'][latestDate];

        console.log(`\n📊 Latest ${symbol} data (${latestDate}):`);
        console.log(`   Open:   $${latestData['1. open']}`);
        console.log(`   High:   $${latestData['2. high']}`);
        console.log(`   Low:    $${latestData['3. low']}`);
        console.log(`   Close:  $${latestData['4. close']}`);
        console.log(`   Volume: ${latestData['5. volume']}`);

        console.log('\n✅ Success! API key is working.');
      } else {
        console.log('⚠️  No daily data found');
        console.log(JSON.stringify(json, null, 2));
      }
    } catch (err) {
      console.error('❌ Failed to parse response:', err.message);
      console.log('Response:', data);
    }
  });
}).on('error', (err) => {
  console.error('❌ Request failed:', err.message);
});
