# C++完全入门指南：从Hello World到结构体

**更新日期：** 2026-12-28 · **作者：** JetCPP Team

## 引言

C++是一门强大的编程语言，它结合了高级编程特性和底层系统编程能力。从1983年由Bjarne Stroustrup发明至今，C++已经广泛应用于系统软件、游戏开发、嵌入式系统、高性能计算等领域。本指南将带你从零开始，逐步学习C++编程。

## 0.环境准备

C++是一门编译型语言，所以需要一个编译器。
这里推荐使用MinGW+Clion编译器，也可以使用微软VS编译器
### 0.1.MinGW+Clion

首先下载MSYS2用来安装MinGW, [清华大学镜像站直链下载](https://mirrors.tuna.tsinghua.edu.cn/msys2/distrib/msys2-x86_64-latest.exe)。
下载安装后，打开**msys终端**，先把镜像站更换一下，这里是bash的命令，直接输入  
```
   # 1. 修改 MSYS 软件源
sed -i '1i Server = https://mirrors.huaweicloud.com/msys2/msys/$arch/' /etc/pacman.d/mirrorlist.msys

# 2. 修改 MinGW64 软件源
sed -i '1i Server = https://mirrors.huaweicloud.com/msys2/mingw/x86_64/' /etc/pacman.d/mirrorlist.mingw64

# 3. 修改 MinGW32 软件源
sed -i '1i Server = https://mirrors.huaweicloud.com/msys2/mingw/i686/' /etc/pacman.d/mirrorlist.mingw32

# 4. 刷新软件包数据库
pacman -Sy
```
然后关闭终端打开**MinGW64终端**
运行一下bash命令:
```
pacman -S --needed --noconfirm mingw-w64-x86_64-toolchain mingw-w64-x86_64-ninja
```
然后会让你选择，直接默认，全选y等待安装
安装完成后，在cmd执行:
```
gcc -v
```
如果输出类似于：
```
Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=D:/msys64/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/lto-wrapper.exe
Target: x86_64-w64-mingw32
Configured with: ../gcc-15.2.0/configure --prefix=/mingw64 --with-local-prefix=/mingw64/local --with-native-system-header-dir=/mingw64/include --libexecdir=/mingw64/lib --enable-bootstrap --enable-checking=release --with-arch=nocona --with-tune=generic --enable-mingw-wildcard --enable-languages=c,lto,c++,fortran,ada,objc,obj-c++,jit --enable-shared --enable-static --enable-libatomic --enable-threads=posix --enable-graphite --enable-fully-dynamic-string --enable-libstdcxx-backtrace=yes --enable-libstdcxx-filesystem-ts --enable-libstdcxx-time --disable-libstdcxx-pch --enable-lto --enable-libgomp --disable-libssp --disable-multilib --disable-rpath --disable-win32-registry --disable-nls --disable-werror --disable-symvers --with-libiconv --with-system-zlib --with-gmp=/mingw64 --with-mpfr=/mingw64 --with-mpc=/mingw64 --with-isl=/mingw64 --with-pkgversion='Rev8, Built by MSYS2 project' --with-bugurl=https://github.com/msys2/MINGW-packages/issues --with-gnu-as --with-gnu-ld --with-libstdcxx-zoneinfo=yes --disable-libstdcxx-debug --enable-plugin --with-boot-ldflags=-static-libstdc++ --with-stage1-ldflags=-static-libstdc++
Thread model: posix
Supported LTO compression algorithms: zlib zstd
gcc version 15.2.0 (Rev8, Built by MSYS2 project)
```
就说明安装成功了
接下来下载Clion, 打开Clion[下载页面](https://www.jetbrains.com.cn/clion/download/?section=windows)单击下载，然后正常流程安装。
安装后，打开clion，如果弹出订阅，选非商业使用（如果你有需要，请支持Clion[购买](https://www.jetbrains.com.cn/clion/buy/?section=personal&billing=monthly)）
然后单击左下角齿轮图标，单击设置，选择构建、执行、部署，再选择工具链，把工具集的路径改为刚才执行gcc -v里的COLLECT_LTO_WRAPPER=D:/msys64/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/lto-wrapper.exe前面的例如我是D:/msys64/mingw64就改成这个
>这样就MinGW+Clion的配置就完成了
### 0.2. VS的配置
首先打开VS的[官网](https://visualstudio.microsoft.com/zh-hans/downloads/)，选择Community版本下载，打开安装程序，选择版本安装，主页选择工作负载为C++桌面开发，然后直接开始安装就好了
>这样VS的配置就完成了

`不过我觉得MinGW+Clion会占用空间少一点，大概9GB，而VS2026至少得40GB`
#### 这样我们开发的环境就准备好了，开启你的编码之旅吧!🙃
## 1. Hello World程序详解

学习任何编程语言的第一步都是编写Hello World程序。这不仅是传统，更是检查开发环境是否配置正确的有效方法。让我们从一个简单的C++程序开始：

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### 1.1 代码解析

- **`#include <iostream>`**：这是一个预处理指令，告诉编译器包含输入输出流库。iostream库提供了输入输出功能，如`std::cout`（输出）和`std::cin`（输入）。
- **`int main()`**：这是程序的入口点。每个C++程序都必须有一个main函数，操作系统从这里开始执行程序。
- **`std::cout`**：这是标准输出流对象，用于向屏幕输出文本。`"std::"`表示使用标准命名空间。
- **`<<`**：这是流插入操作符，用于将数据插入到输出流中。
- **`std::endl`**：这不仅输出一个换行符，还刷新输出缓冲区，确保内容立即显示。
- **`return 0;`**：表示程序正常结束。返回值0通常表示成功执行。

### 1.2 编译和运行

要编译这个程序，你需要一个C++编译器（如g++、clang++或MSVC）。使用命令行编译和运行：

```bash
# 编译
g++ -o hello hello.cpp

# 运行
./hello
```

## 2. 变量和数据类型

C++提供了丰富的数据类型来处理不同类型的数据。了解这些类型是编程的基础。

### 2.1 基本数据类型

| 类型 | 说明 | 示例 |
|------|------|------|
| `int` | 整数 | `int age = 25;` |
| `float` | 单精度浮点数 | `float price = 19.99f;` |
| `double` | 双精度浮点数 | `double pi = 3.14159;` |
| `char` | 字符 | `char grade = 'A';` |
| `bool` | 布尔值 | `bool isValid = true;` |
| `string` | 字符串（需包含头文件） | `string name = "Alice";` |

### 2.2 变量声明和初始化

```cpp
#include <iostream>
#include <string>

int main() {
    // 声明并初始化变量
    int age = 25;
    double height = 1.75;
    char initial = 'J';
    std::string name = "John";
    bool isStudent = true;
    
    // 输出变量
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << "m" << std::endl;
    
    return 0;
}
```

## 3. 运算符

C++支持多种运算符，用于执行各种操作。

### 3.1 算术运算符

```cpp
int a = 10, b = 3;

std::cout << "a + b = " << (a + b) << std::endl;  // 13
std::cout << "a - b = " << (a - b) << std::endl;  // 7
std::cout << "a * b = " << (a * b) << std::endl;  // 30
std::cout << "a / b = " << (a / b) << std::endl;  // 3（整数除法）
std::cout << "a % b = " << (a % b) << std::endl;  // 1（取余）
```

### 3.2 比较运算符

```cpp
std::cout << (a == b) << std::endl;  // 0 (false)
std::cout << (a != b) << std::endl;  // 1 (true)
std::cout << (a > b) << std::endl;   // 1 (true)
std::cout << (a < b) << std::endl;   // 0 (false)
```

### 3.3 逻辑运算符

```cpp
bool x = true, y = false;

std::cout << (x && y) << std::endl;  // 0 (false，两者都为真才为真)
std::cout << (x || y) << std::endl;  // 1 (true，有一个为真就为真)
std::cout << (!x) << std::endl;      // 0 (false，取反)
```

## 4. 控制流语句

控制流语句决定了程序的执行顺序。

### 4.1 if-else语句

```cpp
#include <iostream>

int main() {
    int score = 85;
    
    if (score >= 90) {
        std::cout << "优秀" << std::endl;
    } else if (score >= 80) {
        std::cout << "良好" << std::endl;
    } else if (score >= 60) {
        std::cout << "及格" << std::endl;
    } else {
        std::cout << "不及格" << std::endl;
    }
    
    return 0;
}
```

### 4.2 switch语句

```cpp
#include <iostream>

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            std::cout << "星期一" << std::endl;
            break;
        case 2:
            std::cout << "星期二" << std::endl;
            break;
        case 3:
            std::cout << "星期三" << std::endl;
            break;
        default:
            std::cout << "其他" << std::endl;
    }
    
    return 0;
}
```

### 4.3 循环语句

**for循环：**
```cpp
for (int i = 0; i < 5; i++) {
    std::cout << "i = " << i << std::endl;
}
```

**while循环：**
```cpp
int count = 0;
while (count < 5) {
    std::cout << "count = " << count << std::endl;
    count++;
}
```

**do-while循环：**
```cpp
int num = 0;
do {
    std::cout << "num = " << num << std::endl;
    num++;
} while (num < 5);
```

## 5. 数组

数组是相同类型数据的集合。

```cpp
#include <iostream>

int main() {
    // 声明数组
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // 访问数组元素
    std::cout << "第一个元素: " << numbers[0] << std::endl;
    std::cout << "第三个元素: " << numbers[2] << std::endl;
    
    // 遍历数组
    std::cout << "所有元素: ";
    for (int i = 0; i < 5; i++) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
```

## 6. 函数

函数是可重用的代码块，用于执行特定任务。

```cpp
#include <iostream>

// 函数声明
int add(int a, int b);
void greet(std::string name);

int main() {
    // 调用函数
    int result = add(5, 3);
    std::cout << "5 + 3 = " << result << std::endl;
    
    greet("Alice");
    
    return 0;
}

// 函数定义
int add(int a, int b) {
    return a + b;
}

void greet(std::string name) {
    std::cout << "你好, " << name << "!" << std::endl;
}
```

## 7. 指针

指针是存储内存地址的变量。

```cpp
#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;  // ptr存储var的地址
    
    std::cout << "var的值: " << var << std::endl;
    std::cout << "var的地址: " << &var << std::endl;
    std::cout << "ptr的值（地址）: " << ptr << std::endl;
    std::cout << "ptr指向的值: " << *ptr << std::endl;  // 解引用
    
    // 通过指针修改值
    *ptr = 20;
    std::cout << "修改后var的值: " << var << std::endl;
    
    return 0;
}
```

## 8. 结构体

结构体允许你将多个相关的数据组合在一起。

```cpp
#include <iostream>
#include <string>

// 定义结构体
struct Student {
    std::string name;
    int age;
    double score;
};

int main() {
    // 创建结构体变量
    Student student1;
    student1.name = "张三";
    student1.age = 20;
    student1.score = 85.5;
    
    // 或者使用初始化列表
    Student student2 = {"李四", 21, 90.0};
    
    // 输出学生信息
    std::cout << "学生1: " << student1.name << ", " 
              << student1.age << "岁, 成绩: " << student1.score << std::endl;
    
    std::cout << "学生2: " << student2.name << ", " 
              << student2.age << "岁, 成绩: " << student2.score << std::endl;
    
    return 0;
}
```

## 9. 总结

本指南涵盖了C++编程的基础知识：

1. **环境准备**：安装编译器和IDE
2. **Hello World**：第一个C++程序
3. **变量和数据类型**：存储和操作数据
4. **运算符**：执行各种计算和比较
5. **控制流**：条件判断和循环
6. **数组**：存储多个相同类型的数据
7. **函数**：组织和重用代码
8. **指针**：直接操作内存
9. **结构体**：组合相关数据

这只是C++的冰山一角。C++还有更多强大的特性等待你去探索，如类与对象、继承、多态、模板、STL等。继续学习，享受编程的乐趣！

## 参考资源

- [C++ Reference](https://en.cppreference.com/)
- [LearnCpp.com](https://www.learncpp.com/)
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
