# GERSKILLBOT-FUSION — Solana + US Stocks

**Bot unifié pour trading : Solana (wallet tracking) + US stocks (backtesting fictif → trading futur).**

## ⚠️ STATUS ACTUEL

- **Mode:** Backtesting fictif (pas de trading réel)
- **Phase:** 1/3 — Stratégies de backtesting fictif US stocks
- **Phase:** 2/3 — Indicateurs personnalisés
- **Phase:** 3/3 — Mise en temps réel (à venir, quand demandé)

## 🎯 OBJECTIFS

1. **Backtesting fictif US stocks** → créer et tester des stratégies
2. **Comparaison Solana vs US stocks** → optimiser performance
3. **Mise en temps réel automatique** → quand l'utilisateur le demandera
4. **Indicateurs pour stratégie manuelle** → créer des indicateurs personnalisés

## 📦 STACK TECHNIQUE

| Composant | Tech | Status |
|-----------|------|--------|
| **Node.js** | v18+ | ✅ |
| **Solana** | RPC + DexScreener | ✅ |
| **US Stocks** | Financial Datasets API | ✅ |
| **Alertes** | Telegram | ✅ |

## 🏗️ ARCHITECTURE

```
Gerskillbot-Fusion/
├── SOUL.md
├── USER.md
├── AGENTS.md
├── MEMORY.md
├── TOOLS.md
├── HEARTBEAT.md
├── .env              # (non committé)
├── config/
│   ├── solana_wallet_tracker.json
│   └── us_stock_strategy.json
├── scripts/
│   ├── gerskillbot_wallet_tracker_live.js      # Solana tracking
│   ├── us_stock_backtest_runner.js             # Backtesting US stocks
│   ├── us_stock_strategy_engine.js             # Génération & optimisation
│   └── us_stock_manual_indicators.js           # Indicateurs personnalisés
├── lib/
│   ├── solana.js
│   └── financial-datasets.js   # Financial Datasets API wrapper
└── data/
    └── backtest_results.json
```

## 🚀 QUICK START

### 1. Installation

```bash
# Installer les dépendances (si scripts existent)
cd ~/Documents/Gerskillbot-Fusion
npm install axios dotenv
```

### 2. Configuration

```bash
# Créer .env (pas de commit)
cp .env.example .env
# Ajouter ta API key:
# FINANCIAL_DATASETS_API_KEY=1d8c5377-8f04-4c6c-97a0-0f1f7e90fd52
```

### 3. Lancer un backtest

```bash
# Backtest fictif US stocks
bash scripts/run_backtest.sh

# Ou directement Node
node scripts/us_stock_backtest_runner.js
```

## 🔧 STRATÉGIES DISPONIBLES (À créer)

| Stratégie | Description | Paramètres |
|-----------|-------------|------------|
| **Momentum** | Acheter quand prix monte, vendre quand baisse | Lookback period, threshold |
| **Mean Reversion** | Acheter quand prix baisse trop, vendre quand remonte | RSI, zones de correction |
| **Breakout** | Acheter quand prix casse un niveau | Resistance, volume |
| **RSI** | Acheter sur overbought, vendre sur oversold | Period, oversold/overbought |
| **Bollinger Bands** | Acheter sur bande basse, vendre sur bande haute | Period, std dev |

## 📊 OUTPUT BACKTEST

**Résultats stockés dans `data/backtest_results.json` :**

```json
{
  "strategy": "RSI",
  "symbol": "AAPL",
  "period": "1 year",
  "roi": 0.25,
  "win_rate": 0.58,
  "total_trades": 45,
  "sharpe_ratio": 1.2,
  "max_drawdown": -0.08
}
```

## 📝 NEXT STEPS

1. ✅ Créer workspace fusionné
2. 🆕 Configurer Financial Datasets API
3. 🆕 Créer script `us_stock_backtest_runner.js`
4. 🆕 Créer config `us_stock_strategy.json`
5. 🆕 Lancer premier backtest fictif (ex: RSI sur AAPL)
6. 🆕 Analyser les résultats
7. 🆕 Optimiser la stratégie
8. 🆕 Créer indicateurs personnalisés
9. 🆕 Comparer Solana vs US stocks
10. 🆕 (Quand demandé) Mise en temps réel

## 🔒 SÉCURITÉ

- **Pas de trading réel** → backtesting fictif uniquement
- **Pas de commits de `.env`** → fichier gitignored
- **API keys stockées localement** → jamais sur GitHub

## 📞 SUPPORT

- **Telegram:** @Gerskill
- **GitHub:** https://github.com/gerskill/Gerskillbot-Fusion

---

**Fusionné par Gerskill (@gerskill)**

**Géré par OpenClaw**
