# 订单管理

## 订单相关统计

[ ]订单数量
[ ]订单金额
[ ]微信支付金额
[ ]余额支付金额

## 订单状态

[ ]按钮显示订单所有的状态，文字描述+当前状态订单的数量
[ ]点击按钮，根据状态筛选出符合的订单显示在订单列表

## 创建时间

[ ]点击控件，显示时间选择框
[ ]时间选择框左侧有个列表，可以点击选择时段，所显示的时段显示在控件上
[ ]时间选择框右侧上半部分为日历，可以自定义选择时段，所显示的时段显示在控件上
[ ]时间选择框右侧下半部分，左侧按钮为选择时间和选择日期的切换，即时分和日历的切换
[ ]时间选择框右侧下半部分，右侧清空按钮，能清空显示在控件上的时段
[ ]时间选择框右侧下半部分，右侧确定按钮，根据控件上显示的时段筛选出符合的订单显示在订单列表
[ ]当控件上有时段，鼠标移入控件，控件上的日历图标变成 ×，点击 × 也可以清空显示在控件上的时段

## 搜索

[ ]下拉菜单，以全部、订单号、UID、用户姓名、用户电话或商品名称（模糊）为关键词进行搜索
[ ]输入框，输入具体的搜索关键词
[ ]搜索按钮，根据关键词筛选出符合的订单显示在订单列表

## 订单列表

[×]表格头内容：全选|全不选、订单号、订单类型、用户信息、商品信息、实际支付、支付时间、支付状态、订单状态、操作
[ ]操作包含两个按钮，编辑、更多
[ ]点击编辑按钮，出现【修改订单】模态框，内容包含：
_ 订单编号（只读）
_ 商品总价，可编辑，具有递增递减按钮
_ 原始邮费，可编辑，具有递增递减按钮
_ 实际支付金额，可编辑，具有递增递减按钮
_ 实际支付邮费，可编辑，具有递增递减按钮
_ 赠送积分，可编辑，具有递增递减按钮
[ ]【修改订单】模态框底部有提交按钮，可以保存修改
[ ]【修改订单】模态框顶部有 × 按钮，可以取消修改
[ ]点击更多按钮，出现下拉菜单，包含订单详情、订单记录、删除订单
[ ]订单详情，暂时还看不到长啥样
[ ]点击订单记录，出现【订单记录】模态框，内容为表格，表格头包含：订单 ID、操作记录、操作时间
[ ]点击删除订单，出现【删除订单】模态框，包含取消、确定两个按钮
[ ]分页，显示共几条、分页按钮、每页显示几条的下拉框、跳至第几页的输入框
[ ]每行有个箭头，点击展开一个详情，详情内容包括商品总价 下单时间 用户备注 商家备注