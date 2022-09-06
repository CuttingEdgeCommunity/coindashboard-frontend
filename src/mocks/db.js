export const db = {
    api_coins_Bitcoin_marketdata: {
        name: "Bitcoin",
        symbol: "btc",
        CurrentQuote: {
            price: 24073.4,
            deltas: [
                {
                    interval: "ONE_HOUR",
                    pct: 0.086318,
                    nominal: 24131.6
                },
                {
                    interval: "ONE_DAY",
                    pct: 0.036318,
                    nominal: 24144.6
                },
                {
                    interval: "SEVEN_DAY",
                    pct: 0.036318,
                    nominal: 24144.6
                }
            ],
            market_cap: 460513164207,
            daily_volume: 27508459604,
            last_update_timestamp: 1660598250101
        }
    },

    api_coins_Ethereum_marketdata: {
        name: "Ethereum",
        symbol: "eth",
        CurrentQuote: {
            price: 1628.42,
            deltas: [
                {
                    interval: "ONE_HOUR",
                    pct: -1.1,
                    nominal: 24131.6
                },
                {
                    interval: "ONE_DAY",
                    pct: 1.1,
                    nominal: 24144.6
                },
                {
                    interval: "SEVEN_DAY",
                    pct: -13.4,
                    nominal: 24144.6
                }
            ],
            market_cap: 195682139657,
            daily_volume: 17390482685,
            last_update_timestamp: 1661328419722
        }
    },

    api_coins_Tether_marketdata: {
        name: "Tether",
        symbol: "usdt",
        CurrentQuote: {
            price: 0.997218,
            deltas: [
                {
                    interval: "ONE_HOUR",
                    pct: 0.0,
                    nominal: 24131.6
                },
                {
                    interval: "ONE_DAY",
                    pct: -0.1,
                    nominal: 24144.6
                },
                {
                    interval: "SEVEN_DAY",
                    pct: -0.1,
                    nominal: 24144.6
                }
            ],
            market_cap: 67587929903,
            daily_volume: 39961582354,
            last_update_timestamp: 1661328419722
        }
    },

    api_coins_bitcoin_chart: [
        {
            timestamp: 1659398400000,
            price: 23333.749243312184
        },
        {
            timestamp: 1659484800000,
            price: 23053.846847482677
        },
        {
            timestamp: 1659571200000,
            price: 22860.42098438317
        },
        {
            timestamp: 1659657600000,
            price: 22678.363633874185
        },
        {
            timestamp: 1659744000000,
            price: 23225.036201942938
        },
        {
            timestamp: 1659830400000,
            price: 22984.57953144855
        },
        {
            timestamp: 1659916800000,
            price: 23197.603469525384
        },
        {
            timestamp: 1660003200000,
            price: 23823.679442453606
        },
        {
            timestamp: 1660089600000,
            price: 23203.680696781623
        },
        {
            timestamp: 1660176000000,
            price: 23948.829553271633
        },
        {
            timestamp: 1660262400000,
            price: 23948.75170368143
        },
        {
            timestamp: 1660348800000,
            price: 24411.379871522615
        },
        {
            timestamp: 1660435200000,
            price: 24433.653747243658
        },
        {
            timestamp: 1660521600000,
            price: 24312.541424891562
        },
        {
            timestamp: 1660593695000,
            price: 24040.452576597032
        }
    ],

    api_coins_Tether_chart: [
        {
            timestamp: 1659398400000,
            price: 33.749243312184
        },
        {
            timestamp: 1659484800000,
            price: 53.846847482677
        },
        {
            timestamp: 1659571200000,
            price: 86.42098438317
        },
        {
            timestamp: 1659657600000,
            price: 678.363633874185
        },
        {
            timestamp: 1659744000000,
            price: 125.036201942938
        },
        {
            timestamp: 1659830400000,
            price: 184.57953144855
        },
        {
            timestamp: 1659916800000,
            price: 97.603469525384
        },
        {
            timestamp: 1660003200000,
            price: 223.679442453606
        },
        {
            timestamp: 1660089600000,
            price: 23.680696781623
        },
        {
            timestamp: 1660176000000,
            price: 348.829553271633
        },
        {
            timestamp: 1660262400000,
            price: 248.75170368143
        },
        {
            timestamp: 1660348800000,
            price: 111.379871522615
        },
        {
            timestamp: 1660435200000,
            price: 433.653747243658
        },
        {
            timestamp: 1660521600000,
            price: 312.541424891562
        },
        {
            timestamp: 1660593695000,
            price: 40.452576597032
        }
    ],

    api_coins_Ethereum_chart: [
        {
            timestamp: 1659398400000,
            price: 2333.749243312184
        },
        {
            timestamp: 1659484800000,
            price: 2053.846847482677
        },
        {
            timestamp: 1659571200000,
            price: 2860.42098438317
        },
        {
            timestamp: 1659657600000,
            price: 2678.363633874185
        },
        {
            timestamp: 1659744000000,
            price: 2225.036201942938
        },
        {
            timestamp: 1659830400000,
            price: 2984.57953144855
        },
        {
            timestamp: 1659916800000,
            price: 2197.603469525384
        },
        {
            timestamp: 1660003200000,
            price: 2823.679442453606
        },
        {
            timestamp: 1660089600000,
            price: 2203.680696781623
        },
        {
            timestamp: 1660176000000,
            price: 2948.829553271633
        },
        {
            timestamp: 1660262400000,
            price: 2948.75170368143
        },
        {
            timestamp: 1660348800000,
            price: 2411.379871522615
        },
        {
            timestamp: 1660435200000,
            price: 2433.653747243658
        },
        {
            timestamp: 1660521600000,
            price: 2312.541424891562
        },
        {
            timestamp: 1660593695000,
            price: 2040.452576597032
        }
    ],

    api_coins_bitcoin: {
        name: "Bitcoin",
        symbol: "BTC",
        image_url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        genesis_date: 1233681305000,
        is_token: false,
        contract_address: "address...",
        links: [
            {
                title: "Official Website",
                url: "https://bitcoin.org/en/"
            },
            {
                title: "Github project",
                url: "https://github.com/bitcoin/bitcoin.git"
            }
        ],
        description:
            "Bitcoin, often described as a cryptocurrency, a virtual currency or a digital currency - is a type of money that is completely virtual. It's like an online version of cash. You can use it to buy products and services, but not many shops accept Bitcoin yet and some countries have banned it altogether."
    },
    api_coins_Ethereum: {
        name: "Ethereum",
        symbol: "eth",
        image_url:
            "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
        genesis_date: 1438207200000,
        is_token: false,
        contract_address: "address...",
        links: [
            {
                title: "Official Website",
                url: "https://ethereum.org/en/"
            },
            {
                title: "Github project",
                url: "https://github.com/ethereum"
            }
        ],
        description:
            "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization."
    },
    api_coins_Tether: {
        name: "Tether",
        symbol: "usdt",
        image_url:
            "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
        genesis_date: 1412613555000,
        is_token: false,
        contract_address: "address...",
        links: [
            {
                title: "Official Website",
                url: "https://tether.to/"
            },
            {
                title: "Github project",
                url: "https://github.com/ethereum"
            }
        ],
        description:
            "Tether, is an asset-backed cryptocurrency stablecoin. It was launched by the company Tether Limited Inc. in 2014. Tether Limited is owned by the Hong Kong-based company iFinex Inc."
    },
    api_coins_Lido_Staked_Ether: {
        name: "Lido Staked Ether",
        symbol: "steth",
        image_url:
            "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png?1608607546",
        genesis_date: 1535666400000,
        is_token: false,
        contract_address: "address...",
        links: [
            {
                title: "Official Website",
                url: "https://lido.fi/"
            },
            {
                title: "Github project",
                url: "https://github.com/lidofinance"
            }
        ],
        description:
            "Lido is a staking pool that allows people to stake any amount of their ETH through smart contracts –automated self-executing financial contracts. Users earn yields in stETH, which currently cannot be redeemed 1:1 for Ethereum, though after the merge it will be."
    },
    api_coins_USD_Coin: {
        name: "USD Coin",
        symbol: "usdc",
        image_url:
            "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
        genesis_date: 1412613555000,
        is_token: false,
        contract_address: "address...",
        links: [
            {
                title: "Official Website",
                url: "https://www.circle.com/en/usdc"
            },
            {
                title: "Github project",
                url: "https://github.com/centrehq"
            }
        ],
        description:
            "USD Coin is a digital stablecoin that was pegged to the United States dollar. USD Coin is managed by a consortium called Centre, which was founded by Circle and includes members from the cryptocurrency exchange Coinbase and Bitcoin mining company Bitmain, an investor in Circle."
    },

    api_coins: [
        {
            name: "Bitcoin",
            symbol: "BTC",
            image_url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            CurrentQuote: {
                price: 24073.4,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: 0.086318,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: 0.036318,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: 0.036318,
                        nominal: 24144.6
                    },
                    {
                        interval: "THIRTY_DAY",
                        pct: 12.552752825351243,
                        nominal: 2613.986893569027
                    }
                ],
                market_cap: 460513164207,
                daily_volume: 27508459604,
                last_update_timestamp: 1660598250101
            }
        },
        {
            name: "Ethereum",
            symbol: "eth",
            image_url:
                "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
            CurrentQuote: {
                price: 1628.42,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: -1.1,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: 1.1,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -13.4,
                        nominal: 24144.6
                    }
                ],
                market_cap: 195682139657,
                daily_volume: 17390482685,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "Tether",
            symbol: "usdt",
            image_url:
                "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
            CurrentQuote: {
                price: 0.997218,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: 0.0,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: -0.1,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -0.1,
                        nominal: 24144.6
                    }
                ],
                market_cap: 67587929903,
                daily_volume: 39961582354,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "Lido Staked Ether",
            symbol: "steth",
            image_url:
                "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png?1608607546",
            CurrentQuote: {
                price: 1589.25,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: -1.0,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: 1.6,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -13.3,
                        nominal: 24144.6
                    },
                    {
                        interval: "THIRTY_DAY",
                        pct: 12.552752825351243,
                        nominal: 2613.986893569027
                    }
                ],
                market_cap: 6791063466,
                daily_volume: 4714629,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "USD Coin",
            symbol: "usdc",
            image_url:
                "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
            CurrentQuote: {
                price: 0.997321,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: -0.0,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: -0.0,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -0.1,
                        nominal: 24144.6
                    },
                    {
                        interval: "THIRTY_DAY",
                        pct: 12.552752825351243,
                        nominal: 2613.986893569027
                    }
                ],
                market_cap: 52317345999,
                daily_volume: 7127309860,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "Bitcoin",
            symbol: "BTC",
            image_url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            CurrentQuote: {
                price: 24073.4,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: 0.086318,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: 0.036318,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: 0.036318,
                        nominal: 24144.6
                    },
                    {
                        interval: "THIRTY_DAY",
                        pct: 12.552752825351243,
                        nominal: 2613.986893569027
                    }
                ],
                market_cap: 460513164207,
                daily_volume: 27508459604,
                last_update_timestamp: 1660598250101
            }
        },
        {
            name: "Ethereum",
            symbol: "eth",
            image_url:
                "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
            CurrentQuote: {
                price: 1628.42,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: -1.1,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: 1.1,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -13.4,
                        nominal: 24144.6
                    }
                ],
                market_cap: 195682139657,
                daily_volume: 17390482685,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "Tether",
            symbol: "usdt",
            image_url:
                "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
            CurrentQuote: {
                price: 0.997218,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: 0.0,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: -0.1,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -0.1,
                        nominal: 24144.6
                    }
                ],
                market_cap: 67587929903,
                daily_volume: 39961582354,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "Lido Staked Ether",
            symbol: "steth",
            image_url:
                "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png?1608607546",
            CurrentQuote: {
                price: 1589.25,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: -1.0,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: 1.6,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -13.3,
                        nominal: 24144.6
                    },
                    {
                        interval: "THIRTY_DAY",
                        pct: 12.552752825351243,
                        nominal: 2613.986893569027
                    }
                ],
                market_cap: 6791063466,
                daily_volume: 4714629,
                last_update_timestamp: 1661328419722
            }
        },
        {
            name: "USD Coin",
            symbol: "usdc",
            image_url:
                "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
            CurrentQuote: {
                price: 0.997321,
                deltas: [
                    {
                        interval: "ONE_HOUR",
                        pct: -0.0,
                        nominal: 24131.6
                    },
                    {
                        interval: "ONE_DAY",
                        pct: -0.0,
                        nominal: 24144.6
                    },
                    {
                        interval: "SEVEN_DAY",
                        pct: -0.1,
                        nominal: 24144.6
                    },
                    {
                        interval: "THIRTY_DAY",
                        pct: 12.552752825351243,
                        nominal: 2613.986893569027
                    }
                ],
                market_cap: 52317345999,
                daily_volume: 7127309860,
                last_update_timestamp: 1661328419722
            }
        }
    ]
}
