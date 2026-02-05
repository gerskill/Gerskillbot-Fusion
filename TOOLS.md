# TOOLS.md - Local Notes

## What Goes Here

Things unique to Gerskillbot-Fusion:

### APIs

**Financial Datasets API**
- **Key:** `1d8c5377-8f04-4c6c-97a0-0f1f7e90fd52`
- **Endpoints:**
  - Prices: `https://financialdatasets.ai/v1/stocks/{symbol}/prices`
  - Financials: `https://financialdatasets.ai/v1/stocks/{symbol}/financials`
  - Options: `https://financialdatasets.ai/v1/stocks/{symbol}/options`
- **Rate limits:** Check docs
- **Free tier:** 5 stocks (AAPL, GOOGL, MSFT, NVDA, TSLA)

**Solana RPC**
- **Public:** `https://api.mainnet-beta.solana.com` (rate limited)
- **Recommended:** Helius, QuickNode, Ankr (private endpoint)

**DexScreener API**
- **Free:** No key required
- **Rate limits:** 300 req/min (search/tokens), 60 req/min (profiles)

**Jupiter API**
- **Free:** No key required
- **Used for:** Solana swap quotes

**OpenAI API**
- **Optional:** Can be added later for strategy generation
- **Alternative:** Ollama local (LLaMA 3, Mistral)

### Scripts

| Script | Purpose | Status |
|--------|---------|--------|
| `gerskillbot_wallet_tracker_live.js` | Real-time Solana wallet tracking | ✅ Existing |
| `us_stock_backtest_runner.js` | Backtest US stock strategies | 🆕 To create |
| `us_stock_strategy_engine.js` | Strategy generation & optimization | 🆕 To create |
| `us_stock_manual_indicators.js` | Custom indicator creation | 🆕 To create |
| `run_solana.sh` | Run Solana bot | 🆕 To create |
| `run_backtest.sh` | Run US stock backtest | 🆕 To create |

### Configuration Files

| File | Purpose | Location |
|------|---------|----------|
| `.env` | Environment variables (API keys) | Root (gitignored) |
| `config/solana_wallet_tracker.json` | Solana wallets & settings | `./config/` |
| `config/us_stock_strategy.json` | US stock strategy parameters | `./config/` |
| `data/backtest_results.json` | Backtesting results | `./data/` |

### Rate Limits

**Financial Datasets:**
- Check current limits in docs: https://docs.financialdatasets.ai
- Free tier: limited to 5 stocks by default

**Solana RPC:**
- Public: Limited, likely throttled
- Private: Higher limits, faster response

**DexScreener:**
- Search/tokens: 300 req/min
- Profiles: 60 req/min

### Performance Tuning

| Setting | Default | Effect |
|---------|---------|--------|
| `SOLANA_POLL_INTERVAL` | 10000ms | How often bot checks wallets |
| `BACKTEST_LOOKBACK_DAYS` | 365 | Days of historical data for backtest |
| `STRATEGY_OPTIMIZATION_ITERATIONS` | 100 | Number of parameter combinations to test |
| `RSI_PERIOD` | 14 | Period for RSI calculation |
| `RSI_OVERSOLD` | 30 | RSI threshold for oversold |
| `RSI_OVERBOUGHT` | 70 | RSI threshold for overbought |

### Security

**Never commit:**
- `.env` with real API keys
- Private keys or wallet secrets
- Sensitive credentials

**Only commit:**
- `.env.example` (template without keys)
- Public wallet addresses (tracking only)
- Public API keys (if safe)

---

## Why Separate?

Skills are shared. Your setup is unique. Keeping notes here means you can update scripts and configs without losing your personal setup details.
