# C# From Beginner to Master (Zero to Advanced)

**Updated:** 2026-3-4 · **Author:** JetCPP Team

## Table of Contents
1. [What is Programming?](#what-is-programming)
2. [Why Choose C#?](#why-choose-c)
3. [Development Environment Setup](#development-environment-setup)
4. [Your First C# Program](#your-first-c-program)
5. [C# Basic Syntax](#c-basic-syntax)
6. [Variables and Data Types](#variables-and-data-types)
7. [Operators](#operators)
8. [Control Flow Statements](#control-flow-statements)
9. [Methods](#methods)
10. [Arrays and Collections](#arrays-and-collections)
11. [String Operations](#string-operations)
12. [Exception Handling](#exception-handling)
13. [File Operations](#file-operations)
14. [Object-Oriented Programming Basics](#object-oriented-programming-basics)
15. [Advanced OOP Features](#advanced-oop-features)

---

## What is Programming?

Programming is telling the computer what to do step by step in a language it can understand. It's like teaching a child to do crafts - you need to explain each step in detail: "First take a piece of paper, then fold it in half, then cut a corner..." Computers are smart but also very rigid; you must write out every step clearly.

### Programming Language Categories
- **Machine Language**: Written directly in 0s and 1s (computers understand directly, but hard for humans to write)
- **Assembly Language**: Uses mnemonics instead of 0/1 (like ADD, MOV)
- **High-Level Languages**: Closer to human language (like C#, Python, Java)

C# is a high-level language released by Microsoft in 2000, combining the power of C++ with the simplicity of Java.

## Why Choose C#?

1. **Easy to Learn**: Clear syntax, automatic memory management (no manual release needed)
2. **Wide Range of Uses**:
   - Windows desktop applications (WPF, WinForms)
   - Game development (Unity engine primarily uses C#)
   - Web backend (ASP.NET Core)
   - Mobile applications (Xamarin)
3. **Powerful Tool Support**: Visual Studio is one of the best IDEs in the industry
4. **Active Community**: Easy to find solutions when you encounter problems

## Development Environment Setup

### Installing Visual Studio

1. Visit [Visual Studio Official Website](https://visualstudio.microsoft.com/)
2. Download **Visual Studio Community** (free version)
3. Run the installer and select the **".NET Desktop Development"** workload
4. Click Install and wait for completion

### Verify Installation

Open Visual Studio and create a new project:
1. Select "Create a new project"
2. Choose "Console App (.NET Core)"
3. Name the project and click Create
4. Run the program, seeing "Hello World!" means success

## Your First C# Program

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("Welcome to the world of C#!");
        }
    }
}
```

### Code Analysis

- **`using System;`**: Imports the System namespace, containing basic functionality
- **`namespace HelloWorld`**: Namespace, organizes code, prevents naming conflicts
- **`class Program`**: Class, all code in C# is inside classes
- **`static void Main`**: Program entry point, every program must have exactly one
- **`Console.WriteLine`**: Outputs a line of text to the console

## C# Basic Syntax

### Comments

```csharp
// Single-line comment

/*
   Multi-line comment
   Can write many lines
*/

/// <summary>
/// XML documentation comment, used for generating documentation
/// </summary>
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Class names | PascalCase | `MyClass` |
| Method names | PascalCase | `GetName()` |
| Variable names | camelCase | `userName` |
| Constants | ALL_CAPS | `MAX_SIZE` |

## Variables and Data Types

### Basic Data Types

```csharp
// Integer types
int age = 25;           // 32-bit integer
long bigNumber = 1000000000L;  // 64-bit integer
short smallNumber = 100;       // 16-bit integer
byte tinyNumber = 255;         // 8-bit unsigned integer

// Floating point types
float price = 19.99f;   // Single-precision
double pi = 3.14159;    // Double-precision (more accurate)
decimal money = 100.50m; // High-precision decimal (for money calculations)

// Other types
char letter = 'A';      // Single character
string name = "Zhang San"; // String
bool isActive = true;   // Boolean
```

### Type Conversion

```csharp
// Implicit conversion (automatic, safe)
int num = 10;
long bigNum = num;  // int automatically converts to long

// Explicit conversion (manual, may lose data)
double price = 19.99;
int intPrice = (int)price;  // Result is 19, decimal part lost

// Using Convert class
string numStr = "123";
int num = Convert.ToInt32(numStr);

// Using Parse method
int num2 = int.Parse("456");

// Using TryParse (safe conversion)
int result;
bool success = int.TryParse("abc", out result);  // success = false
```

## Operators

### Arithmetic Operators

```csharp
int a = 10, b = 3;

Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3 (integer division)
Console.WriteLine(a % b);  // 1 (modulo)

// Compound assignment operators
int x = 5;
x += 3;  // x = x + 3, result is 8
x -= 2;  // x = x - 2, result is 6
x *= 2;  // x = x * 2, result is 12
```

### Comparison Operators

```csharp
Console.WriteLine(a == b);  // false (equal)
Console.WriteLine(a != b);  // true (not equal)
Console.WriteLine(a > b);   // true (greater than)
Console.WriteLine(a < b);   // false (less than)
Console.WriteLine(a >= b);  // true (greater than or equal)
Console.WriteLine(a <= b);  // false (less than or equal)
```

### Logical Operators

```csharp
bool x = true, y = false;

Console.WriteLine(x && y);  // false (AND: both must be true)
Console.WriteLine(x || y);  // true (OR: one true is enough)
Console.WriteLine(!x);      // false (NOT: negation)
```

## Control Flow Statements

### if-else Statement

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("Excellent");
}
else if (score >= 80)
{
    Console.WriteLine("Good");
}
else if (score >= 60)
{
    Console.WriteLine("Pass");
}
else
{
    Console.WriteLine("Fail");
}

// Ternary operator
string result = score >= 60 ? "Pass" : "Fail";
```

### switch Statement

```csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 4:
    case 5:
        Console.WriteLine("Thursday or Friday");
        break;
    default:
        Console.WriteLine("Weekend");
        break;
}

// C# 8.0+ switch expression
string dayName = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    3 => "Wednesday",
    _ => "Other"
};
```

### Loop Statements

**for loop:**
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"i = {i}");
}
```

**while loop:**
```csharp
int count = 0;
while (count < 5)
{
    Console.WriteLine($"count = {count}");
    count++;
}
```

**do-while loop:**
```csharp
int num = 0;
do
{
    Console.WriteLine($"num = {num}");
    num++;
} while (num < 5);
```

**foreach loop (for collections):**
```csharp
string[] names = { "Alice", "Bob", "Charlie" };
foreach (string name in names)
{
    Console.WriteLine(name);
}
```

**break and continue:**
```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 3) continue;  // Skip current iteration
    if (i == 7) break;     // Exit loop
    Console.WriteLine(i);  // Outputs 0, 1, 2, 4, 5, 6
}
```

## Methods

### Method Definition

```csharp
// No parameters, no return value
void SayHello()
{
    Console.WriteLine("Hello!");
}

// With parameters and return value
int Add(int a, int b)
{
    return a + b;
}

// Usage
SayHello();
int sum = Add(5, 3);  // sum = 8
```

### Parameter Passing

```csharp
// Value passing (default)
void ModifyValue(int x)
{
    x = 100;  // Does not affect original variable
}

// Reference passing (ref)
void ModifyReference(ref int x)
{
    x = 100;  // Affects original variable
}

// Output parameter (out)
void GetValues(out int a, out int b)
{
    a = 10;
    b = 20;
}

// Usage
int num = 5;
ModifyValue(num);        // num is still 5
ModifyReference(ref num); // num becomes 100

int x, y;
GetValues(out x, out y); // x = 10, y = 20
```

### Method Overloading

```csharp
// Same name, different parameters
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

// Usage
Console.WriteLine(Add(1, 2));       // Calls first
Console.WriteLine(Add(1.5, 2.5));   // Calls second
Console.WriteLine(Add(1, 2, 3));    // Calls third
```

## Arrays and Collections

### Arrays

```csharp
// Declaration and initialization
int[] numbers = new int[5];  // Array of length 5
int[] scores = { 85, 90, 78, 92, 88 };  // Direct initialization

// Access elements
Console.WriteLine(scores[0]);  // 85
scores[0] = 95;  // Modify element

// Array length
Console.WriteLine(scores.Length);  // 5

// Iterate array
for (int i = 0; i < scores.Length; i++)
{
    Console.WriteLine(scores[i]);
}

foreach (int score in scores)
{
    Console.WriteLine(score);
}
```

### List Collection

```csharp
using System.Collections.Generic;

// Create List
List<string> names = new List<string>();

// Add elements
names.Add("Alice");
names.Add("Bob");
names.Add("Charlie");

// Insert element
names.Insert(1, "David");  // Insert at index 1

// Remove elements
names.Remove("Bob");       // Remove first matching element
names.RemoveAt(0);         // Remove element at specified index

// Access element
Console.WriteLine(names[0]);

// Iterate
foreach (string name in names)
{
    Console.WriteLine(name);
}
```

### Dictionary Collection

```csharp
using System.Collections.Generic;

// Create Dictionary (key-value pairs)
Dictionary<string, int> ages = new Dictionary<string, int>();

// Add elements
ages["Alice"] = 25;
ages.Add("Bob", 30);

// Access element
Console.WriteLine(ages["Alice"]);  // 25

// Check if key exists
if (ages.ContainsKey("Charlie"))
{
    Console.WriteLine(ages["Charlie"]);
}

// Safely get value
if (ages.TryGetValue("Alice", out int age))
{
    Console.WriteLine($"Alice is {age} years old");
}

// Iterate
foreach (var pair in ages)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

## String Operations

### String Basics

```csharp
string firstName = "John";
string lastName = "Doe";

// String concatenation
string fullName = firstName + " " + lastName;
string fullName2 = $"{firstName} {lastName}";  // String interpolation (recommended)

// String length
Console.WriteLine(fullName.Length);

// Case conversion
Console.WriteLine(fullName.ToUpper());  // JOHN DOE
Console.WriteLine(fullName.ToLower());  // john doe
```

### Common Methods

```csharp
string text = "Hello, World!";

// Search
Console.WriteLine(text.IndexOf("World"));  // 7
Console.WriteLine(text.Contains("Hello")); // true

// Substring
Console.WriteLine(text.Substring(7, 5));   // World

// Replace
Console.WriteLine(text.Replace("World", "C#"));  // Hello, C#!

// Split
string[] parts = "apple,banana,orange".Split(',');

// Trim whitespace
string padded = "  hello  ";
Console.WriteLine(padded.Trim());      // "hello"
Console.WriteLine(padded.TrimStart()); // "hello  "
Console.WriteLine(padded.TrimEnd());   // "  hello"
```

## Exception Handling

### try-catch

```csharp
try
{
    int result = 10 / 0;  // Will throw exception
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Divide by zero error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Other error: {ex.Message}");
}
finally
{
    Console.WriteLine("Executes regardless of exception");
}
```

### Throwing Exceptions

```csharp
void CheckAge(int age)
{
    if (age < 0)
    {
        throw new ArgumentException("Age cannot be negative");
    }
    if (age > 150)
    {
        throw new ArgumentException("Age cannot exceed 150");
    }
}
```

## File Operations

### Reading and Writing Text Files

```csharp
using System.IO;

// Write file
File.WriteAllText("test.txt", "Hello, World!");

// Append text
File.AppendAllText("test.txt", "\nNew line");

// Read file
string content = File.ReadAllText("test.txt");
Console.WriteLine(content);

// Read by lines
string[] lines = File.ReadAllLines("test.txt");
foreach (string line in lines)
{
    Console.WriteLine(line);
}
```

### Using Stream (Large Files)

```csharp
// Write
using (StreamWriter writer = new StreamWriter("data.txt"))
{
    writer.WriteLine("First line");
    writer.WriteLine("Second line");
}

// Read
using (StreamReader reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}
```

## Object-Oriented Programming Basics

### Classes and Objects

```csharp
// Define class
public class Person
{
    // Fields
    private string name;
    private int age;

    // Properties
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

    // Auto-properties (C# 3.0+)
    public string Address { get; set; }

    // Constructor
    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    // Method
    public void Introduce()
    {
        Console.WriteLine($"My name is {name}, I'm {age} years old");
    }
}

// Usage
Person person = new Person("Zhang San", 25);
person.Introduce();
person.Address = "Beijing";
Console.WriteLine(person.Address);
```

### Inheritance

```csharp
// Base class
public class Animal
{
    public string Name { get; set; }

    public virtual void MakeSound()
    {
        Console.WriteLine("Animal makes sound");
    }
}

// Derived class
public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof woof!");
    }

    public void Fetch()
    {
        Console.WriteLine($"{Name} goes to fetch the ball");
    }
}

// Usage
Dog dog = new Dog();
dog.Name = "Wang Cai";
dog.MakeSound();  // Woof woof!
dog.Fetch();      // Wang Cai goes to fetch the ball
```

### Polymorphism

```csharp
Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.MakeSound();  // Woof woof!
animal2.MakeSound();  // Meow meow!

// Unified processing
List<Animal> animals = new List<Animal> { new Dog(), new Cat() };
foreach (Animal animal in animals)
{
    animal.MakeSound();  // Calls appropriate method based on actual type
}
```

## Advanced OOP Features

### Abstract Classes

```csharp
public abstract class Shape
{
    public abstract double GetArea();  // Abstract method, must be implemented

    public void PrintInfo()  // Regular method
    {
        Console.WriteLine($"Area: {GetArea()}");
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

### Interfaces

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

// Implement multiple interfaces
public class MediaPlayer : IPlayable, IRecordable
{
    public void Play() { Console.WriteLine("Play"); }
    public void Pause() { Console.WriteLine("Pause"); }
    public void Stop() { Console.WriteLine("Stop"); }
    public void Record() { Console.WriteLine("Record"); }
}
```

## Summary

This guide covered the core concepts of C# programming:

1. **Basic Syntax**: Variables, data types, operators
2. **Control Flow**: Conditional statements, loops
3. **Methods**: Definition, parameters, overloading
4. **Collections**: Arrays, List, Dictionary
5. **Strings**: Operations, formatting
6. **Exception Handling**: try-catch, custom exceptions
7. **File Operations**: Reading and writing files
8. **Object-Oriented**: Classes, inheritance, polymorphism, interfaces

Continue learning:
- Generic Programming
- LINQ Queries
- Asynchronous Programming (async/await)
- .NET Core / .NET 5+
- ASP.NET Core Web Development
