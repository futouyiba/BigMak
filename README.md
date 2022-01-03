# BigMak
 An open source project for multiplayer battle and skills using CPP & Typescript & Bluerpint.
![QQ截图20220103103207](https://user-images.githubusercontent.com/6793989/147896165-2f04738f-07b3-4afe-87fb-5549867f1076.png)


BigMak是用C++ & Typescript（puerts） & Blueprint 三层结构来制作的多人技能&战斗框架和demo。其中demo的玩法会比较偏放置战斗。
## 可以用来做什么？
- 用来制作带技能、带战斗的独立游戏。比如war3地图编辑器的制作者们创造了无数精彩的玩法，但是很少有能制作成独立游戏的（比如战就战、军团战争做出来了，但大多数没有）。Unreal是非常棒的引擎，易用性很强，但做个技能确实太麻烦了。
- 把它放在云端，大家没事可以上去做做图、做做游戏、一起娱乐。这个是超越Roblox的乐趣的。Roblox我体验过，里面做个技能太麻烦了，所以都是Adopt me这样的小游戏。如果大家感兴趣我可能会搞两台服务器这么去干。
- 用来参考Typescript在UE4中的一些用法。

## 为什么不直接用Gameplay ability？
· GAS系统在一些方面过于简陋。例如buff改技能的数值，这在自走棋、炉石当中非常常见，但GAS中离这一层还比较远。当然，我们通过大量的封装也是能达到一个“技能系统”的效果的。但这个封装对于GAS来说较为难做。我可能会在这个工程做完之后，再思考封装GAS系统。
· GAS在一些方面偏笨重。cpp的部分用的宏很多，修改一些东西需要关注大量的编译错误。而在蓝图中有点事做不了，即使能做也不方便协作。

## 玩法是怎么样的？
里面计划加1-3个小demo，可能会围绕射击、动作。

## Typescript怎么引入的？
使用腾讯的puerts库，地址为：https://github.com/Tencent/puerts/tree/master/unreal/Puerts 

## 用Typescript作为夹心层有什么好处？
- 便于协作，没有蓝图的merge冲突问题。
- 可读性强，便于写大量的业务逻辑（事实上对于一个技能系统、战斗框架来说，业务逻辑那可太多了）。
- 易于定制，这一点主要是由第二点引申而来。由于可读，在回头改的时候就比较容易理清楚，而不会陷入一团spaghetti中不能自拔。
- 易于维护，由于Typescript是强类型的，大量的问题在IDE里就能发现，而不用在运行时纠结。

## 怎么联系？
- 加我QQ吧，313017350
- 可以在github当中提issue
