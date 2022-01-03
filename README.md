# BigMak
 An open source project for multiplayer battle and skills using CPP & Typescript & Bluerpint.
![914](https://user-images.githubusercontent.com/6793989/147895830-36df06f3-6f14-4e4c-89f6-d7376938b0a9.jpg)


BigMak是用C++ & Typescript（puerts） & Blueprint 三层结构来制作的多人技能&战斗框架和demo。其中demo的玩法会比较偏放置战斗。

## 为什么不直接用Gameplay ability？
· GAS系统在一些方面过于简陋。例如buff改技能的数值，这在自走棋、炉石当中非常常见，但GAS中离这一层还比较远。
· GAS在一些方面偏笨重。cpp的部分用的宏很多，修改一些东西需要关注大量的编译错误。而在蓝图中有点事做不了，即使能做也不方便协作。

## 玩法是怎么样的？
里面计划加1-3个小demo，放置战斗、tps都会尝试。

## Typescript怎么引入的？
使用腾讯的puerts库，地址为：https://github.com/Tencent/puerts/tree/master/unreal/Puerts 
