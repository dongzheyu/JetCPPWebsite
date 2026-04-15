# C# 从入门到精通（零基础到进阶）

**更新日期：** 2026-3-4 · **作者：** JetCPP Team

## 目录
1. [什么是编程？](#什么是编程)
2. [为什么选择 C#？](#为什么选择-c)
3. [开发环境搭建](#开发环境搭建)
4. [你的第一个 C# 程序](#你的第一个-c-程序)
5. [C# 基础语法](#c-基础语法)
6. [变量与数据类型](#变量与数据类型)
7. [运算符](#运算符)
8. [控制流语句](#控制流语句)
9. [方法](#方法)
10. [数组和集合](#数组和集合)
11. [字符串操作](#字符串操作)
12. [异常处理](#异常处理)
13. [文件操作](#文件操作)
14. [面向对象编程基础](#面向对象编程基础)
15. [面向对象高级特性](#面向对象高级特性)

---

## 什么是编程？

编程就是用计算机能理解的语言，告诉计算机一步一步该做什么。就像你教小朋友做手工，需要详细说明每一步："先拿一张纸，然后对折，再剪掉一个角..."。计算机很聪明但也很死板，必须把每一步都写清楚。

### 编程语言的分类
- **机器语言**：直接用 0 和 1 编写（计算机直接理解，但人类很难写）
- **汇编语言**：用助记符代替 0/1（如 ADD, MOV）
- **高级语言**：更接近人类语言（如 C#, Python, Java）

C# 是一种高级语言，由微软在 2000 年发布，结合了 C++ 的强大和 Java 的简洁。

## 为什么选择 C#？

1. **简单易学**：语法清晰，自动管理内存（不用手动释放）
2. **用途广泛**：
   - Windows 桌面应用（WPF, WinForms）
   - 游戏开发（Unity 引擎主要用 C#）
   - Web 后端（ASP.NET Core）
   - 移动应用（Xamarin）
3. **强大的工具支持**：Visual Studio 是业界最好的 IDE 之一
4. **活跃的社区**：遇到问题容易找到解决方案

## 开发环境搭建

### 安装 Visual Studio

1. 访问 [Visual Studio 官网](https://visualstudio.microsoft.com/)
2. 下载 **Visual Studio Community**（免费版）
3. 运行安装程序，选择 **".NET 桌面开发"** 工作负载
4. 点击安装，等待完成

### 验证安装

打开 Visual Studio，创建新项目：
1. 选择 "创建新项目"
2. 选择 "控制台应用(.NET Core)"
3. 命名项目，点击创建
4. 运行程序，看到 "Hello World!" 即成功

## 你的第一个 C# 程序

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("欢迎来到 C# 的世界！");
        }
    }
}
```

### 代码解析

- **`using System;`**：导入系统命名空间，包含基础功能
- **`namespace HelloWorld`**：命名空间，组织代码，防止命名冲突
- **`class Program`**：类，C# 中所有代码都在类中
- **`static void Main`**：程序入口点，每个程序必须有且只有一个
- **`Console.WriteLine`**：在控制台输出一行文字

## C# 基础语法

### 注释

```csharp
// 单行注释

/*
   多行注释
   可以写很多行
*/

/// <summary>
/// XML 文档注释，用于生成文档
/// </summary>
```

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 类名 | 大驼峰 | `MyClass` |
| 方法名 | 大驼峰 | `GetName()` |
| 变量名 | 小驼峰 | `userName` |
| 常量 | 全大写 | `MAX_SIZE` |

## 变量与数据类型

### 基本数据类型

```csharp
// 整数类型
int age = 25;           // 32位整数
long bigNumber = 1000000000L;  // 64位整数
short smallNumber = 100;       // 16位整数
byte tinyNumber = 255;         // 8位无符号整数

// 浮点数类型
float price = 19.99f;   // 单精度浮点数
double pi = 3.14159;    // 双精度浮点数（更精确）
decimal money = 100.50m; // 高精度十进制（用于金钱计算）

// 其他类型
char letter = 'A';      // 单个字符
string name = "张三";    // 字符串
bool isActive = true;   // 布尔值
```

### 类型转换

```csharp
// 隐式转换（自动，安全）
int num = 10;
long bigNum = num;  // int 自动转 long

// 显式转换（需要手动，可能丢失数据）
double price = 19.99;
int intPrice = (int)price;  // 结果为 19，小数部分丢失

// 使用 Convert 类
string numStr = "123";
int num = Convert.ToInt32(numStr);

// 使用 Parse 方法
int num2 = int.Parse("456");

// 使用 TryParse（安全转换）
int result;
bool success = int.TryParse("abc", out result);  // success = false
```

## 运算符

### 算术运算符

```csharp
int a = 10, b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3（整数除法）
Console.WriteLine(a % b);  // 1（取余）

// 复合赋值运算符
int x = 5;
x += 3;  // x = x + 3，结果为 8
x -= 2;  // x = x - 2，结果为 6
x *= 2;  // x = x * 2，结果为 12
```

### 比较运算符

```csharp
Console.WriteLine(a == b);  // false（等于）
Console.WriteLine(a != b);  // true（不等于）
Console.WriteLine(a > b);   // true（大于）
Console.WriteLine(a < b);   // false（小于）
Console.WriteLine(a >= b);  // true（大于等于）
Console.WriteLine(a <= b);  // false（小于等于）
```

### 逻辑运算符

```csharp
bool x = true, y = false;

Console.WriteLine(x && y);  // false（与：两者都为真才为真）
Console.WriteLine(x || y);  // true（或：有一个为真就为真）
Console.WriteLine(!x);      // false（非：取反）
```

## 控制流语句

### if-else 语句

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("优秀");
}
else if (score >= 80)
{
    Console.WriteLine("良好");
}
else if (score >= 60)
{
    Console.WriteLine("及格");
}
else
{
    Console.WriteLine("不及格");
}

// 三元运算符
string result = score >= 60 ? "及格" : "不及格";
```

### switch 语句

```csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("星期一");
        break;
    case 2:
        Console.WriteLine("星期二");
        break;
    case 3:
        Console.WriteLine("星期三");
        break;
    case 4:
    case 5:
        Console.WriteLine("周四或周五");
        break;
    default:
        Console.WriteLine("周末");
        break;
}

// C# 8.0+ 的 switch 表达式
string dayName = day switch
{
    1 => "星期一",
    2 => "星期二",
    3 => "星期三",
    _ => "其他"
};
```

### 循环语句

**for 循环：**
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"i = {i}");
}
```

**while 循环：**
```csharp
int count = 0;
while (count < 5)
{
    Console.WriteLine($"count = {count}");
    count++;
}
```

**do-while 循环：**
```csharp
int num = 0;
do
{
    Console.WriteLine($"num = {num}");
    num++;
} while (num < 5);
```

**foreach 循环（用于集合）：**
```csharp
string[] names = { "Alice", "Bob", "Charlie" };
foreach (string name in names)
{
    Console.WriteLine(name);
}
```

**break 和 continue：**
```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 3) continue;  // 跳过当前迭代
    if (i == 7) break;     // 退出循环
    Console.WriteLine(i);  // 输出 0, 1, 2, 4, 5, 6
}
```

## 方法

### 方法定义

```csharp
// 无参数、无返回值
void SayHello()
{
    Console.WriteLine("你好！");
}

// 有参数、有返回值
int Add(int a, int b)
{
    return a + b;
}

// 使用
SayHello();
int sum = Add(5, 3);  // sum = 8
```

### 参数传递

```csharp
// 值传递（默认）
void ModifyValue(int x)
{
    x = 100;  // 不影响原变量
}

// 引用传递（ref）
void ModifyReference(ref int x)
{
    x = 100;  // 会影响原变量
}

// 输出参数（out）
void GetValues(out int a, out int b)
{
    a = 10;
    b = 20;
}

// 使用
int num = 5;
ModifyValue(num);        // num 还是 5
ModifyReference(ref num); // num 变成 100

int x, y;
GetValues(out x, out y); // x = 10, y = 20
```

### 方法重载

```csharp
// 同名方法，不同参数
int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}

int Add(int a, int b, int c)
{
    return a + b + c;
}

// 使用
Console.WriteLine(Add(1, 2));       // 调用第一个
Console.WriteLine(Add(1.5, 2.5));   // 调用第二个
Console.WriteLine(Add(1, 2, 3));    // 调用第三个
```

## 数组和集合

### 数组

```csharp
// 声明和初始化
int[] numbers = new int[5];  // 长度为 5 的数组
int[] scores = { 85, 90, 78, 92, 88 };  // 直接初始化

// 访问元素
Console.WriteLine(scores[0]);  // 85
scores[0] = 95;  // 修改元素

// 数组长度
Console.WriteLine(scores.Length);  // 5

// 遍历数组
for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine(scores[i]);
}

foreach (int score in scores)
{
    Console.WriteLine(score);
}
```

### List 集合

```csharp
using System.Collections.Generic;

// 创建 List
List<string> names = new List<string>();

// 添加元素
names.Add("Alice");
names.Add("Bob");
names.Add("Charlie");

// 插入元素
names.Insert(1, "David");  // 在索引 1 处插入

// 删除元素
names.Remove("Bob");       // 删除第一个匹配的元素
names.RemoveAt(0);         // 删除指定索引的元素

// 访问元素
Console.WriteLine(names[0]);

// 遍历
foreach (string name in names)
{
    Console.WriteLine(name);
}
```

### Dictionary 集合

```csharp
using System.Collections.Generic;

// 创建 Dictionary（键值对）
Dictionary<string, int> ages = new Dictionary<string, int>();

// 添加元素
ages["Alice"] = 25;
ages.Add("Bob", 30);

// 访问元素
Console.WriteLine(ages["Alice"]);  // 25

// 检查键是否存在
if (ages.ContainsKey("Charlie"))
{
    Console.WriteLine(ages["Charlie"]);
}

// 安全获取值
if (ages.TryGetValue("Alice", out int age))
{
    Console.WriteLine($"Alice 的年龄是 {age}");
}

// 遍历
foreach (var pair in ages)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

## 字符串操作

### 字符串基础

```csharp
string firstName = "John";
string lastName = "Doe";

// 字符串拼接
string fullName = firstName + " " + lastName;
string fullName2 = $"{firstName} {lastName}";  // 字符串插值（推荐）

// 字符串长度
Console.WriteLine(fullName.Length);

// 大小写转换
Console.WriteLine(fullName.ToUpper());  // JOHN DOE
Console.WriteLine(fullName.ToLower());  // john doe
```

### 常用方法

```csharp
string text = "Hello, World!";

// 查找
Console.WriteLine(text.IndexOf("World"));  // 7
Console.WriteLine(text.Contains("Hello")); // true

// 截取
Console.WriteLine(text.Substring(7, 5));   // World

// 替换
Console.WriteLine(text.Replace("World", "C#"));  // Hello, C#!

// 分割
string[] parts = "apple,banana,orange".Split(',');

// 去除空白
string padded = "  hello  ";
Console.WriteLine(padded.Trim());      // "hello"
Console.WriteLine(padded.TrimStart()); // "hello  "
Console.WriteLine(padded.TrimEnd());   // "  hello"
```

## 异常处理

### try-catch

```csharp
try
{
    int result = 10 / 0;  // 会抛出异常
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"除零错误: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"其他错误: {ex.Message}");
}
finally
{
    Console.WriteLine("无论是否异常，都会执行");
}
```

### 抛出异常

```csharp
void CheckAge(int age)
{
    if (age < 0)
    {
        throw new ArgumentException("年龄不能为负数");
    }
    if (age > 150)
    {
        throw new ArgumentException("年龄不能超过150");
    }
}
```

## 文件操作

### 读写文本文件

```csharp
using System.IO;

// 写入文件
File.WriteAllText("test.txt", "Hello, World!");

// 追加文本
File.AppendAllText("test.txt", "\n新的一行");

// 读取文件
string content = File.ReadAllText("test.txt");
Console.WriteLine(content);

// 按行读取
string[] lines = File.ReadAllLines("test.txt");
foreach (string line in lines)
{
    Console.WriteLine(line);
}
```

### 使用 Stream（大文件）

```csharp
// 写入
using (StreamWriter writer = new StreamWriter("data.txt"))
{
    writer.WriteLine("第一行");
    writer.WriteLine("第二行");
}

// 读取
using (StreamReader reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}
```

## 面向对象编程基础

### 类和对象

```csharp
// 定义类
public class Person
{
    // 字段
    private string name;
    private int age;

    // 属性
    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public int Age
    {
        get { return age; }
        set 
        { 
            if (value >= 0)
                age = value; 
        }
    }

    // 自动属性（C# 3.0+）
    public string Address { get; set; }

    // 构造函数
    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    // 方法
    public void Introduce()
    {
        Console.WriteLine($"我叫 {name}，今年 {age} 岁");
    }
}

// 使用
Person person = new Person("张三", 25);
person.Introduce();
person.Address = "北京";
Console.WriteLine(person.Address);
```

### 继承

```csharp
// 基类
public class Animal
{
    public string Name { get; set; }

    public virtual void MakeSound()
    {
        Console.WriteLine("动物发出声音");
    }
}

// 派生类
public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("汪汪汪！");
    }

    public void Fetch()
    {
        Console.WriteLine($"{Name} 去捡球");
    }
}

// 使用
Dog dog = new Dog();
dog.Name = "旺财";
dog.MakeSound();  // 汪汪汪！
dog.Fetch();      // 旺财 去捡球
```

### 多态

```csharp
Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.MakeSound();  // 汪汪汪！
animal2.MakeSound();  // 喵喵喵！

// 统一处理
List<Animal> animals = new List<Animal> { new Dog(), new Cat() };
foreach (Animal animal in animals)
{
    animal.MakeSound();  // 根据实际类型调用相应方法
}
```

## 面向对象高级特性

### 抽象类

```csharp
public abstract class Shape
{
    public abstract double GetArea();  // 抽象方法，必须实现

    public void PrintInfo()  // 普通方法
    {
        Console.WriteLine($"面积: {GetArea()}");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public override double GetArea()
    {
        return Math.PI * Radius * Radius;
    }
}
```

### 接口

```csharp
public interface IPlayable
{
    void Play();
    void Pause();
    void Stop();
}

public interface IRecordable
{
    void Record();
}

// 实现多个接口
public class MediaPlayer : IPlayable, IRecordable
{
    public void Play() { Console.WriteLine("播放"); }
    public void Pause() { Console.WriteLine("暂停"); }
    public void Stop() { Console.WriteLine("停止"); }
    public void Record() { Console.WriteLine("录音"); }
}
```

## 总结

本指南涵盖了 C# 编程的核心概念：

1. **基础语法**：变量、数据类型、运算符
2. **控制流**：条件语句、循环
3. **方法**：定义、参数、重载
4. **集合**：数组、List、Dictionary
5. **字符串**：操作、格式化
6. **异常处理**：try-catch、自定义异常
7. **文件操作**：读写文件
8. **面向对象**：类、继承、多态、接口

继续深入学习：
- 泛型编程
- LINQ 查询
- 异步编程 (async/await)
- .NET Core / .NET 5+
- ASP.NET Core Web 开发
