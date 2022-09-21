export const db = {
    api_coins_Bitcoin_marketdata: [
        {
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
                last_update_timestamp: 1660598250101,
                market_cap_rank: 1,
                market_cap_dominance: 38.076,
                h24_high: 19643.72,
                h24_low: 20136.88,
                d7_high: 19473.37,
                d7_low: 22534.61
            }
        }
    ],

    api_coins_Ethereum_marketdata: [
        {
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 2,
                market_cap_dominance: 16.794,
                h24_high: 1471.42,
                h24_low: 1376.34,
                d7_high: 1777.18,
                d7_low: 1379.89
            }
        }
    ],

    api_coins_Tether_marketdata: [
        {
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 3,
                market_cap_dominance: 6.853,
                h24_high: 1.0,
                h24_low: 0.9969,
                d7_high: 1.01,
                d7_low: 0.9969
            }
        }
    ],

    api_coins_bitcoin_chart: [
        {
            timestamp: 1663200000000,
            price: 20255.922978327133
        },
        {
            timestamp: 1663286400000,
            price: 19702.169889811717
        },
        {
            timestamp: 1663372800000,
            price: 19764.411712043777
        },
        {
            timestamp: 1663459200000,
            price: 20131.675305714027
        },
        {
            timestamp: 1663545600000,
            price: 19437.157867982634
        },
        {
            timestamp: 1663632000000,
            price: 19570.386709523507
        },
        {
            timestamp: 1663718400000,
            price: 18869.928809390534
        }
    ],

    api_coins_Tether_chart: [
        {
            timestamp: 1663200000000,
            price: 1.000629490269563
        },
        {
            timestamp: 1663286400000,
            price: 1.0002190356530958
        },
        {
            timestamp: 1663372800000,
            price: 0.9997480764150961
        },
        {
            timestamp: 1663459200000,
            price: 1.0002595756294854
        },
        {
            timestamp: 1659744000000,
            price: 1.0017357519975174
        },
        {
            timestamp: 1663632000000,
            price: 0.9999488114654055
        },
        {
            timestamp: 1663718400000,
            price: 0.999982284892132
        }
    ],

    api_coins_Ethereum_chart: [
        {
            timestamp: 1663200000000,
            price: 1635.3682061921256
        },
        {
            timestamp: 1663286400000,
            price: 1471.999592516298
        },
        {
            timestamp: 1663372800000,
            price: 1432.215807478607
        },
        {
            timestamp: 1663459200000,
            price: 1471.2039553630448
        },
        {
            timestamp: 1663545600000,
            price: 1335.8525523850524
        },
        {
            timestamp: 1663632000000,
            price: 1379.920704526258
        },
        {
            timestamp: 1663718400000,
            price: 1324.1905646155858
        }
    ],

    api_coins_bitcoin: [
        {
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
        }
    ],
    api_coins_Ethereum: [
        {
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
        }
    ],
    api_coins_Tether: [
        {
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
        }
    ],
    api_coins_Lido_Staked_Ether: [
        {
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
        }
    ],
    api_coins_USD_Coin: [
        {
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
        }
    ],
    api_coins_find_zig: [],
    api_coins_find_ether: [
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
        }
    ],

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
                last_update_timestamp: 1660598250101,
                market_cap_rank: 1,
                market_cap_dominance: 38.076,
                h24_high: 19643.72,
                h24_low: 20136.88,
                d7_high: 19473.37,
                d7_low: 22534.61
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 2,
                market_cap_dominance: 16.794,
                h24_high: 1471.42,
                h24_low: 1376.34,
                d7_high: 1777.18,
                d7_low: 1379.89
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 3,
                market_cap_dominance: 6.853,
                h24_high: 1,
                h24_low: 0.9969,
                d7_high: 1.01,
                d7_low: 0.9969
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 4,
                market_cap_dominance: 0.594,
                h24_high: 1459.44,
                h24_low: 1360.64,
                d7_high: 1730.34,
                d7_low: 1360.64
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 5,
                market_cap_dominance: 5.065,
                h24_high: 1.01,
                h24_low: 0.996,
                d7_high: 1.01,
                d7_low: 0.9958
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
                        pct: 0.0043,
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
                last_update_timestamp: 1660598250101,
                market_cap_rank: 1,
                market_cap_dominance: 38.076,
                h24_high: 19643.72,
                h24_low: 20136.88,
                d7_high: 19473.37,
                d7_low: 22534.61
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 2,
                market_cap_dominance: 16.794,
                h24_high: 1471.42,
                h24_low: 1376.34,
                d7_high: 1777.18,
                d7_low: 1379.89
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 3,
                market_cap_dominance: 6.853,
                h24_high: 1,
                h24_low: 0.9969,
                d7_high: 1.01,
                d7_low: 0.9969
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 4,
                market_cap_dominance: 0.594,
                h24_high: 1459.44,
                h24_low: 1360.64,
                d7_high: 1730.34,
                d7_low: 1360.64
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
                last_update_timestamp: 1661328419722,
                market_cap_rank: 5,
                market_cap_dominance: 5.065,
                h24_high: 1.01,
                h24_low: 0.996,
                d7_high: 1.01,
                d7_low: 0.9958
            }
        }
    ]
}
