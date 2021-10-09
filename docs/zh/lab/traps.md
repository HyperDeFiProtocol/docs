# 常见的陷阱

我们把市面上常见的 DeFi 类项目风险公示于此， 鉴于大部分散户没有合约代码审计能力，我们会尽量用简单的语言进行阐述，如果有更多时间，后续可能还会补充简单的鉴别方法……

## 预售、预留、预挖？

::: warning 巨大的后期砸盘风险

- 预留预挖都有巨大的后期砸盘风险
- 预售却未公示细节，基本可以视作团队无成本自留份额

:::

::: tip HyperDeFi 公开透明预售、无预留、无预挖

- 团队不占有预售资金，预售存入的所有 BUSD 全部用来建立初始流动性。
- 无预留、无预挖，没有团队砸盘风险

:::

## 偷偷启动无公示

::: warning 约等于预挖

- 基本等于团队自留了大量比例
- 因为新池价格相对较低，如果不是大家一起拼手速公平参与购买，项目方自己就可以在前期买到更多廉价的筹码，然后再套路性的对外发布消息说上线几天涨了多少多少，实际上是项目方更加隐蔽地制造了不公平……

:::

::: tip HyperDeFi 提前公示启动时间

团队成员参与项目也一样和大家在一个起跑线上，在确定的启动时间之后拼手速。

时间戳写入合约，并公示于官网首页、Twitter 和 Telegram

:::

``` solidity {1}
LAUNCH_TIMESTAMP = 1625571600;
```

## LP Token 存到私有地址？

::: warning 随时可以撤池跑路

- 没什么好说的
- 藏深一些的做法是，把初始流动池 LP Token 销毁，却在合约里回收到流动池时新产生的 LP Token 发到私有地址，是更过分的陷阱

:::

::: tip HyperDeFi 所有 LP Token 进入黑洞

- 代码开源可验证，没有跑路风险
- 黑洞地址 `0x000000000000000000000000000000000000dead` 任何人无权控制
- 部署合约时，开发地址得所的 HyperDeFi 全部用于建立初始流动性，对应的 LP Token
  也直接进入黑洞，对应交易 [0x7322...4358](https://testnet.bscscan.com/tx/0x7322e56dc9f8614f8afd4fe82965c0c29b1ed683fe55b60c79a2276a79d44358)
  链上可查验
- 每次缓冲池回到到流动池时所得的 LP Token，也直接进入黑洞（代码如下）

:::

``` solidity {6,20}
// ...

IERC20 private constant BUSD = IERC20(...);
IERC20 private constant HYPER_DEFI = IERC20(...);
IUniswapV2Router02 private constant PANCAKE = IUniswapV2Router02(...);
address private constant BLACK_HOLE = address(0xdead);

// ...

// add liquidity
uint256 busdBalance = BUSD.balanceOf(address(this));
BUSD.approve(address(PANCAKE), busdBalance);
(tokenAdded, busdAdded,) = PANCAKE.addLiquidity(
    address(HYPER_DEFI),
    address(BUSD),
    HYPER_DEFI.balanceOf(address(this)),
    busdBalance,
    0,
    0,
    BLACK_HOLE,
    block.timestamp
);

// ...
```

## FOMO 悬赏存到私有地址，甚至可以更改？

::: warning 团队可以偷奖金

- 私有地址意味着随时可以转走
- 如果可以更改奖金存放地址，那么就更容易的把历史奖金贪为己有

:::

