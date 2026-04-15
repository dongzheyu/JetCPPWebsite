# C++ Complete Guide: From Hello World to Structs

**Updated:** 2026-12-28 · **Author:** JetCPP Team

## Introduction

C++ is a powerful programming language that combines high-level programming features with low-level system programming capabilities. Since its invention by Bjarne Stroustrup in 1983, C++ has been widely used in system software, game development, embedded systems, high-performance computing, and more. This guide will take you from zero to learning C++ programming step by step.

## 0. Environment Setup

C++ is a compiled language, so you need a compiler.
We recommend using MinGW + CLion, or Microsoft's VS compiler.

### 0.1. MinGW + CLion Setup

First, download MSYS2 to install MinGW, [Tsinghua Mirror Direct Download](https://mirrors.tuna.tsinghua.edu.cn/msys2/distrib/msys2-x86_64-latest.exe).
After downloading and installing, open the **msys terminal**, first change the mirror site, here are the bash commands, just type them:
```
   # 1. Modify MSYS software source
sed -i '1i Server = https://mirrors.huaweicloud.com/msys2/msys/$arch/' /etc/pacman.d/mirrorlist.msys

# 2. Modify MinGW64 software source
sed -i '1i Server = https://mirrors.huaweicloud.com/msys2/mingw/x86_64/' /etc/pacman.d/mirrorlist.mingw64

# 3. Modify MinGW32 software source
sed -i '1i Server = https://mirrors.huaweicloud.com/msys2/mingw/i686/' /etc/pacman.d/mirrorlist.mingw32

# 4. Refresh package database
pacman -Sy
```
Then close the terminal and open the **MinGW64 terminal**
Run the following bash command:
```
pacman -S --needed --noconfirm mingw-w64-x86_64-toolchain mingw-w64-x86_64-ninja
```
Then it will ask you to choose, just use the defaults, select all y and wait for the installation to complete.
After installation, execute in cmd:
```
gcc -v
```
If the output is similar to:
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
It means the installation was successful.
Next, download CLion, open the CLion [download page](https://www.jetbrains.com.cn/clion/download/?section=windows), click download, and then follow the normal installation process.
After installation, open CLion. If a subscription pops up, choose non-commercial use (if you need it, please support CLion [purchase](https://www.jetbrains.com.cn/clion/buy/?section=personal&billing=monthly))
Then click the gear icon in the lower left corner, click Settings, select Build, Execution, Deployment, then select Toolchains, and change the path of the toolchain set to the one from the gcc -v output earlier. For example, if mine is D:/msys64/mingw64, change it to that.
> That's it for the MinGW + CLion configuration!

### 0.2. VS Configuration
First, open the VS [official website](https://visualstudio.microsoft.com/zh-hans/downloads/), select the Community version to download, open the installer, select the version to install, on the main page select the workload as C++ desktop development, and then just start the installation.
> That's it for the VS configuration!

`However, I think MinGW + CLion will take up less space, about 9GB, while VS2026 needs at least 40GB`
#### Now that our development environment is ready, start your coding journey! 🙃

## 1. Hello World Program Explained

The first step in learning any programming language is writing a Hello World program. This is not just tradition, but an effective way to check if the development environment is configured correctly. Let's start with a simple C++ program:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### 1.1 Code Analysis

- **`#include <iostream>`**: This is a preprocessor directive that tells the compiler to include the input/output stream library. The iostream library provides input/output functions, such as `std::cout` (output) and `std::cin` (input).
- **`int main()`**: This is the entry point of the program. Every C++ program must have a main function; the operating system starts executing the program from here.
- **`std::cout`**: This is the standard output stream object, used to output text to the screen. `"std::"` indicates using the standard namespace.
- **`<<`**: This is the stream insertion operator, used to insert data into the output stream.
- **`std::endl`**: This not only outputs a newline character but also flushes the output buffer to ensure the content is displayed immediately.
- **`return 0;`**: Indicates the program ended normally. A return value of 0 usually means successful execution.

### 1.2 Compile and Run

To compile this program, you need a C++ compiler (such as g++, clang++, or MSVC). Use the command line to compile and run:

```bash
# Compile
g++ -o hello hello.cpp

# Run
./hello
```

## 2. Variables and Data Types

C++ provides a rich set of data types for handling different kinds of data. Understanding these types is fundamental to programming.

### 2.1 Basic Data Types

| Type | Description | Example |
|------|-------------|---------|
| `int` | Integer | `int age = 25;` |
| `float` | Single-precision floating point | `float price = 19.99f;` |
| `double` | Double-precision floating point | `double pi = 3.14159;` |
| `char` | Character | `char grade = 'A';` |
| `bool` | Boolean | `bool isValid = true;` |
| `string` | String (requires header) | `string name = "Alice";` |

### 2.2 Variable Declaration and Initialization

```cpp
#include <iostream>
#include <string>

int main() {
    // Declare and initialize variables
    int age = 25;
    double height = 1.75;
    char initial = 'J';
    std::string name = "John";
    bool isStudent = true;
    
    // Output variables
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << "m" << std::endl;
    
    return 0;
}
```

## 3. Operators

C++ supports various operators for performing different operations.

### 3.1 Arithmetic Operators

```cpp
int a = 10, b = 3;

std::cout << "a + b = " << (a + b) << std::endl;  // 13
std::cout << "a - b = " << (a - b) << std::endl;  // 7
std::cout << "a * b = " << (a * b) << std::endl;  // 30
std::cout << "a / b = " << (a / b) << std::endl;  // 3 (integer division)
std::cout << "a % b = " << (a % b) << std::endl;  // 1 (modulo)
```

### 3.2 Comparison Operators

```cpp
std::cout << (a == b) << std::endl;  // 0 (false)
std::cout << (a != b) << std::endl;  // 1 (true)
std::cout << (a > b) << std::endl;   // 1 (true)
std::cout << (a < b) << std::endl;   // 0 (false)
```

### 3.3 Logical Operators

```cpp
bool x = true, y = false;

std::cout << (x && y) << std::endl;  // 0 (false, both must be true)
std::cout << (x || y) << std::endl;  // 1 (true, one true is enough)
std::cout << (!x) << std::endl;      // 0 (false, negation)
```

## 4. Control Flow Statements

Control flow statements determine the execution order of the program.

### 4.1 if-else Statement

```cpp
#include <iostream>

int main() {
    int score = 85;
    
    if (score >= 90) {
        std::cout << "Excellent" << std::endl;
    } else if (score >= 80) {
        std::cout << "Good" << std::endl;
    } else if (score >= 60) {
        std::cout << "Pass" << std::endl;
    } else {
        std::cout << "Fail" << std::endl;
    }
    
    return 0;
}
```

### 4.2 switch Statement

```cpp
#include <iostream>

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday" << std::endl;
            break;
        case 3:
            std::cout << "Wednesday" << std::endl;
            break;
        default:
            std::cout << "Other" << std::endl;
    }
    
    return 0;
}
```

### 4.3 Loop Statements

**for loop:**
```cpp
for (int i = 0; i < 5; i++) {
    std::cout << "i = " << i << std::endl;
}
```

**while loop:**
```cpp
int count = 0;
while (count < 5) {
    std::cout << "count = " << count << std::endl;
    count++;
}
```

**do-while loop:**
```cpp
int num = 0;
do {
    std::cout << "num = " << num << std::endl;
    num++;
} while (num < 5);
```

## 5. Arrays

Arrays are collections of data of the same type.

```cpp
#include <iostream>

int main() {
    // Declare array
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Access array elements
    std::cout << "First element: " << numbers[0] << std::endl;
    std::cout << "Third element: " << numbers[2] << std::endl;
    
    // Iterate array
    std::cout << "All elements: ";
    for (int i = 0; i < 5; i++) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
```

## 6. Functions

Functions are reusable blocks of code that perform specific tasks.

```cpp
#include <iostream>

// Function declaration
int add(int a, int b);
void greet(std::string name);

int main() {
    // Call functions
    int result = add(5, 3);
    std::cout << "5 + 3 = " << result << std::endl;
    
    greet("Alice");
    
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}
```

## 7. Pointers

Pointers are variables that store memory addresses.

```cpp
#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;  // ptr stores the address of var
    
    std::cout << "Value of var: " << var << std::endl;
    std::cout << "Address of var: " << &var << std::endl;
    std::cout << "Value of ptr (address): " << ptr << std::endl;
    std::cout << "Value pointed by ptr: " << *ptr << std::endl;  // Dereference
    
    // Modify value through pointer
    *ptr = 20;
    std::cout << "Value of var after modification: " << var << std::endl;
    
    return 0;
}
```

## 8. Structs

Structs allow you to group multiple related data together.

```cpp
#include <iostream>
#include <string>

// Define struct
struct Student {
    std::string name;
    int age;
    double score;
};

int main() {
    // Create struct variable
    Student student1;
    student1.name = "Zhang San";
    student1.age = 20;
    student1.score = 85.5;
    
    // Or use initialization list
    Student student2 = {"Li Si", 21, 90.0};
    
    // Output student info
    std::cout << "Student 1: " << student1.name << ", " 
              << student1.age << " years old, Score: " << student1.score << std::endl;
    
    std::cout << "Student 2: " << student2.name << ", " 
              << student2.age << " years old, Score: " << student2.score << std::endl;
    
    return 0;
}
```

## 9. Summary

This guide covered the basics of C++ programming:

1. **Environment Setup**: Installing compilers and IDEs
2. **Hello World**: Your first C++ program
3. **Variables and Data Types**: Storing and manipulating data
4. **Operators**: Performing various calculations and comparisons
5. **Control Flow**: Conditional statements and loops
6. **Arrays**: Storing multiple data of the same type
7. **Functions**: Organizing and reusing code
8. **Pointers**: Direct memory manipulation
9. **Structs**: Grouping related data

This is just the tip of the iceberg. C++ has many more powerful features waiting for you to explore, such as classes and objects, inheritance, polymorphism, templates, STL, and more. Keep learning and enjoy the fun of programming!

## Reference Resources

- [C++ Reference](https://en.cppreference.com/)
- [LearnCpp.com](https://www.learncpp.com/)
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
