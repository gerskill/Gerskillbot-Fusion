# TOOLS.md - Local Notes

## What Goes Here

Things unique to Gerskillbot-Fusion:

## Secrets Management

**Secure Storage:**
- All API keys are stored in `secrets/` directory (excluded from git)
- `secrets/finance.env` → Financial Datasets API, Alpha Vantage, OpenAI
- `secrets/config.env` → RPC endpoints, poll intervals, backtest settings
- `secrets-loader.sh` → Script to load secrets (sourced before running scripts)

**Security:**
- ✅ No API keys in git history (verified)
- ✅ `.gitignore` excludes `secrets/` entirely
- ✅ Keys remain in local files only

## APIs

**Alpha Vantage (US Stocks)**
- **Key:** Stored in `secrets/finance.env` (ALPHA_VANTAGE_API_KEY)
- **Endpoints:**
  - Daily prices: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={SYMBOL}&apikey={KEY}`
  - Output size: "compact" = 100 days (free tier limit)
- **Rate limits:** 25 req/day (free tier)
- **Notes:** Limited historical data for backtesting

**Solana RPC**
- **Public:** `https://api.mainnet-beta.solana.com` (rate limited)
- **Recommended:** Helius, QuickNode, Ankr (private endpoint)
- **Config:** `secrets/config.env` → SOLANA_RPC

**DexScreener API**
- **Free:** No key required
- **Rate limits:** 300 req/min (search/tokens), 60 req/min (profiles)

**Jupiter API**
- **Free:** No key required
- **Used for:** Solana swap quotes

**OpenAI API (Optional)**
- **Key:** Stored in `secrets/finance.env` (OPENAI_API_KEY)
- **Status:** Not currently used

## Scripts

| Script | Purpose | Status |
|--------|---------|--------|
| `gerskillbot_wallet_tracker_live.js` | Real-time Solana wallet tracking | ✅ Existing |
| `us_stock_backtest_runner.js` | Backtest US stock strategies | 🆕 To create |
| `us_stock_strategy_engine.js` | Strategy generation & optimization | 🆕 To create |
| `us_stock_manual_indicators.js` | Custom indicator creation | 🆕 To create |
| `run_solana.sh` | Run Solana bot | 🆕 To create |
| `run_backtest.sh` | Run US stock backtest | 🆕 To create |

## Configuration Files

| File | Purpose | Location |
|------|---------|----------|
| `secrets/finance.env` | Financial API keys (not tracked) | `secrets/` |
| `secrets/config.env` | Config settings (not tracked) | `secrets/` |
| `config/solana_wallet_tracker.json` | Solana wallets & settings | `config/` |
| `config/us_stock_strategy.json` | US stock strategy parameters | `config/` |
| `data/backtest_results.json` | Backtesting results | `data/` |

## Rate Limits

**Alpha Vantage:**
- Free tier: 25 requests/day
- Compact output: 100 days (full output requires premium)

**Solana RPC:**
- Public: Limited, likely throttled
- Private: Higher limits, faster response

**DexScreener:**
- Search/tokens: 300 req/min
- Profiles: 60 req/min

## Security

**Never commit:**
- `secrets/` directory (API keys, secrets)
- `.env` files with real keys
- Private keys or wallet secrets
- Sensitive credentials

**Only commit:**
- `.env.example` (template without keys)
- Public wallet addresses (tracking only)
- Public API keys (if safe)
- `.gitignore` & `.env.example`

**To use secrets:**
```bash
source secrets/secrets-loader.sh
node scripts/us_stock_backtest_runner.js
```

## Performance Tuning

| Setting | Default | Effect |
|---------|---------|--------|
| `SOLANA_POLL_INTERVAL` | 10000ms | How often bot checks wallets |
| `BACKTEST_LOOKBACK_DAYS` | 365 | Days of historical data for backtest |
| `STRATEGY_OPTIMIZATION_ITERATIONS` | 100 | Number of parameter combinations to test |
| `RSI_PERIOD` | 14 | Period for RSI calculation |
| `RSI_OVERSOLD` | 30 | RSI threshold for oversold |
| `RSI_OVERBOUGHT` | 70 | RSI threshold for overbought |
