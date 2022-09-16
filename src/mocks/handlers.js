import { rest } from "msw"
import { db } from "./db"

export const handlers = [
    rest.get("http://localhost:3001/api/coins", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins))
    }),
    rest.get("http://localhost:3001/api/coins/btc/marketdata", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Bitcoin_marketdata))
    }),
    rest.get("http://localhost:3001/api/coins/eth/marketdata", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Ethereum_marketdata))
    }),
    rest.get("http://localhost:3001/api/coins/usdt/marketdata", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Tether_marketdata))
    }),
    rest.get("http://localhost:3001/api/coins/usdc/marketdata", (req, res, ctx) => {
        return res(
            ctx.status(404),
            ctx.json({
                message: "Not found"
            })
        )
    }),
    rest.get("http://localhost:3001/api/coins/steth/marketdata", (req, res, ctx) => {
        return res(
            ctx.status(404),
            ctx.json({
                message: "Not found"
            })
        )
    }),
    rest.get("http://localhost:3001/api/coins/btc", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_bitcoin))
    }),
    rest.get("http://localhost:3001/api/coins/eth", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Ethereum))
    }),
    rest.get("http://localhost:3001/api/coins/usdt", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Tether))
    }),
    rest.get("http://localhost:3001/api/coins/usdc", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_USD_Coin))
    }),
    rest.get("http://localhost:3001/api/coins/steth", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Lido_Staked_Ether))
    }),
    rest.get("http://localhost:3001/api/coins/eth/chart", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Ethereum_chart))
    }),
    rest.get("http://localhost:3001/api/coins/usdt/chart", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_Tether_chart))
    }),
    rest.get("http://localhost:3001/api/coins/btc/chart", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_bitcoin_chart))
    }),
    rest.get("http://localhost:3001/api/coins/usdc/chart", (req, res, ctx) => {
        return res(
            ctx.status(404),
            ctx.json({
                message: "Not found"
            })
        )
    }),
    rest.get("http://localhost:3001/api/coins/steth/chart", (req, res, ctx) => {
        return res(
            ctx.status(404),
            ctx.json({
                message: "Not found"
            })
        )
    }),
    rest.get("http://localhost:3001/api/coins/search/ether", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_search_ether))
    }),
    rest.get("http://localhost:3001/api/coins/search/zig", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(db.api_coins_search_zig))
    })
]
