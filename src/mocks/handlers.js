import {rest} from "msw"
import { db } from "./db"

export const handlers = [
    rest.get("http://localhost:3001/api/coins",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Bitcoin/marketdata",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Bitcoin_marketdata)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Ethereum/marketdata",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Ethereum_marketdata)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Tether/marketdata",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Tether_marketdata)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Bitcoin",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_bitcoin)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Ethereum",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Ethereum)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Tether",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Tether)
        )
    }),
    rest.get("http://localhost:3001/api/coins/USD Coin",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_USD_Coin)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Lido Staked Ether",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Lido_Staked_Ether)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Ethereum/chart",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Ethereum_chart)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Tether/chart",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_Tether_chart)
        )
    }),
    rest.get("http://localhost:3001/api/coins/Bitcoin/chart",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(db.api_coins_bitcoin_chart)
        )
    })
]