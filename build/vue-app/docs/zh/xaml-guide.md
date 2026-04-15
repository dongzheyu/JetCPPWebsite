# XAML 从入门到精通（零基础到进阶）

**更新日期：** 2026-3-4 · **作者：** JetCPP Team

## 目录
1. [什么是 XAML？](#什么是-xaml)
2. [XAML 与 C# 的关系](#xaml-与-c-的关系)
3. [开发环境搭建](#开发环境搭建)
4. [XAML 基础语法](#xaml-基础语法)
5. [布局系统](#布局系统)
6. [常用控件](#常用控件)
7. [资源系统](#资源系统)
8. [样式和模板](#样式和模板)
9. [数据绑定](#数据绑定)
10. [事件处理](#事件处理)
11. [动画系统](#动画系统)

---

## 什么是 XAML？

XAML（Extensible Application Markup Language，可扩展应用程序标记语言）是一种基于 XML 的声明式语言，专门用于定义用户界面。它最初由微软开发，主要用于：
- **WPF**（Windows Presentation Foundation）：Windows 桌面应用
- **UWP**（Universal Windows Platform）：Windows 通用应用
- **Xamarin.Forms**：跨平台移动应用

### XAML 的核心思想
XAML 遵循 "**声明式 UI**" 的理念：你描述界面应该是什么样子，而不是一步步告诉计算机如何构建它。

### 为什么使用 XAML？
1. **分离关注点**：界面设计（XAML）与业务逻辑（C#）分离
2. **可视化设计**：结构清晰，易于理解
3. **工具支持**：Visual Studio 提供可视化设计器
4. **高效开发**：比纯代码创建界面更快

## XAML 与 C# 的关系

XAML 和 C# 是互补的：
- **XAML**：负责 "**长什么样**"（What it looks like）
- **C#**：负责 "**做什么事**"（What it does）

每个 XAML 文件都有一个对应的 C# 代码隐藏文件（`.xaml.cs`）。

### 示例

```xml
<!-- MainWindow.xaml -->
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="我的应用" Height="300" Width="400">
    <Grid>
        <Button Content="点击我" Click="Button_Click"/>
    </Grid>
</Window>
```

```csharp
// MainWindow.xaml.cs
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show("按钮被点击了！");
    }
}
```

## 开发环境搭建

### 安装 Visual Studio

1. 访问 [Visual Studio 官网](https://visualstudio.microsoft.com/)
2. 下载 Visual Studio Community
3. 安装时选择 **".NET 桌面开发"** 工作负载
4. 可选：勾选 **"通用 Windows 平台开发"**（用于 UWP）

### 创建 WPF 项目

1. 打开 Visual Studio
2. 选择 "创建新项目"
3. 选择 "WPF 应用(.NET Framework)" 或 "WPF 应用"
4. 命名项目并创建

## XAML 基础语法

### 基本结构

```xml
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="窗口标题" 
        Height="450" 
        Width="800">
    <Grid>
        <!-- 控件放在这里 -->
    </Grid>
</Window>
```

### 命名空间

- **`xmlns`**：默认命名空间，包含 WPF 控件
- **`xmlns:x`**：XAML 语言命名空间，包含 x:Class、x:Name 等

### 属性设置

```xml
<!-- 属性语法 -->
<Button Content="点击我" Width="100" Height="30"/>

<!-- 属性元素语法 -->
<Button>
    <Button.Content>
        点击我
    </Button.Content>
    <Button.Width>100</Button.Width>
    <Button.Height>30</Button.Height>
</Button>
```

### 标记扩展

```xml
<!-- 绑定 -->
<TextBlock Text="{Binding UserName}"/>

<!-- 资源引用 -->
<Button Background="{StaticResource PrimaryColor}"/>

<!-- 相对源绑定 -->
<TextBlock Text="{Binding Path=Name, RelativeSource={RelativeSource AncestorType=Window}}"/>
```

## 布局系统

WPF 提供了多种布局容器：

### Canvas（绝对定位）

```xml
<Canvas>
    <Button Canvas.Left="10" Canvas.Top="10" Content="左上角"/>
    <Button Canvas.Right="10" Canvas.Bottom="10" Content="右下角"/>
</Canvas>
```

### StackPanel（堆叠布局）

```xml
<!-- 垂直堆叠（默认） -->
<StackPanel>
    <Button Content="按钮1"/>
    <Button Content="按钮2"/>
    <Button Content="按钮3"/>
</StackPanel>

<!-- 水平堆叠 -->
<StackPanel Orientation="Horizontal">
    <Button Content="按钮1"/>
    <Button Content="按钮2"/>
    <Button Content="按钮3"/>
</StackPanel>
```

### Grid（网格布局）

```xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>      <!-- 自动高度 -->
        <RowDefinition Height="*"/>         <!-- 剩余空间 -->
        <RowDefinition Height="2*"/>        <!-- 两倍剩余空间 -->
    </Grid.RowDefinitions>
    
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="100"/>     <!-- 固定宽度 -->
        <ColumnDefinition Width="*"/>       <!-- 剩余空间 -->
    </Grid.ColumnDefinitions>
    
    <!-- 放置在指定行列 -->
    <Button Grid.Row="0" Grid.Column="0" Content="(0,0)"/>
    <Button Grid.Row="0" Grid.Column="1" Content="(0,1)"/>
    <Button Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="2" Content="(1,0) 跨两列"/>
</Grid>
```

### DockPanel（停靠布局）

```xml
<DockPanel>
    <Button DockPanel.Dock="Top" Content="顶部"/>
    <Button DockPanel.Dock="Bottom" Content="底部"/>
    <Button DockPanel.Dock="Left" Content="左侧"/>
    <Button DockPanel.Dock="Right" Content="右侧"/>
    <Button Content="中间（剩余空间）"/>
</DockPanel>
```

### WrapPanel（自动换行）

```xml
<WrapPanel>
    <Button Content="按钮1" Width="80"/>
    <Button Content="按钮2" Width="80"/>
    <Button Content="按钮3" Width="80"/>
    <Button Content="按钮4" Width="80"/>
    <Button Content="按钮5" Width="80"/>
    <!-- 空间不足时自动换行 -->
</WrapPanel>
```

## 常用控件

### 内容控件

```xml
<!-- Button（按钮） -->
<Button Content="点击我" Click="Button_Click"/>

<!-- 带图标的按钮 -->
<Button>
    <StackPanel Orientation="Horizontal">
        <Image Source="/Images/icon.png" Width="16" Height="16"/>
        <TextBlock Text="保存" Margin="5,0,0,0"/>
    </StackPanel>
</Button>

<!-- Label（标签） -->
<Label Content="用户名：" Target="{Binding ElementName=txtUserName}"/>

<!-- CheckBox（复选框） -->
<CheckBox Content="记住我" IsChecked="True"/>

<!-- RadioButton（单选按钮） -->
<RadioButton Content="选项1" GroupName="Group1" IsChecked="True"/>
<RadioButton Content="选项2" GroupName="Group1"/>
```

### 文本控件

```xml
<!-- TextBlock（显示文本） -->
<TextBlock Text="普通文本"/>
<TextBlock>
    <Run FontWeight="Bold">粗体</Run>
    <Run Foreground="Red">红色</Run>
</TextBlock>

<!-- TextBox（输入框） -->
<TextBox x:Name="txtUserName" 
         Text="{Binding UserName, UpdateSourceTrigger=PropertyChanged}"
         PlaceholderText="请输入用户名"/>

<!-- PasswordBox（密码框） -->
<PasswordBox x:Name="pwdPassword" PasswordChar="*"/>
```

### 列表控件

```xml
<!-- ListBox（列表框） -->
<ListBox x:Name="lstItems" SelectionMode="Single">
    <ListBoxItem Content="项目1"/>
    <ListBoxItem Content="项目2"/>
    <ListBoxItem Content="项目3"/>
</ListBox>

<!-- ComboBox（下拉框） -->
<ComboBox x:Name="cmbOptions" SelectedIndex="0">
    <ComboBoxItem Content="选项1"/>
    <ComboBoxItem Content="选项2"/>
    <ComboBoxItem Content="选项3"/>
</ComboBox>

<!-- 数据绑定的列表 -->
<ListBox ItemsSource="{Binding Users}" DisplayMemberPath="Name"/>

<!-- 自定义项模板 -->
<ListBox ItemsSource="{Binding Users}">
    <ListBox.ItemTemplate>
        <DataTemplate>
            <StackPanel Orientation="Horizontal">
                <TextBlock Text="{Binding Name}" FontWeight="Bold"/>
                <TextBlock Text=" - " Margin="5,0"/>
                <TextBlock Text="{Binding Email}"/>
            </StackPanel>
        </DataTemplate>
    </ListBox.ItemTemplate>
</ListBox>
```

## 资源系统

### 定义资源

```xml
<Window.Resources>
    <!-- 颜色资源 -->
    <SolidColorBrush x:Key="PrimaryColor" Color="#0078D4"/>
    <SolidColorBrush x:Key="SecondaryColor" Color="#106EBE"/>
    
    <!-- 样式资源 -->
    <Style x:Key="PrimaryButton" TargetType="Button">
        <Setter Property="Background" Value="{StaticResource PrimaryColor}"/>
        <Setter Property="Foreground" Value="White"/>
        <Setter Property="Padding" Value="15,5"/>
    </Style>
    
    <!-- 数据模板 -->
    <DataTemplate x:Key="UserTemplate" DataType="{x:Type local:User}">
        <StackPanel>
            <TextBlock Text="{Binding Name}" FontWeight="Bold"/>
            <TextBlock Text="{Binding Email}" Foreground="Gray"/>
        </StackPanel>
    </DataTemplate>
</Window.Resources>
```

### 使用资源

```xml
<!-- 静态资源 -->
<Button Background="{StaticResource PrimaryColor}" Content="确定"/>

<!-- 动态资源 -->
<Button Background="{DynamicResource PrimaryColor}" Content="确定"/>

<!-- 应用样式 -->
<Button Style="{StaticResource PrimaryButton}" Content="保存"/>
```

### 资源字典

```xml
<!-- Colors.xaml -->
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation">
    <Color x:Key="PrimaryColor">#0078D4</Color>
    <Color x:Key="SecondaryColor">#106EBE</Color>
    <SolidColorBrush x:Key="PrimaryBrush" Color="{StaticResource PrimaryColor}"/>
</ResourceDictionary>
```

```xml
<!-- App.xaml -->
<Application.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <ResourceDictionary Source="Colors.xaml"/>
            <ResourceDictionary Source="Styles.xaml"/>
        </ResourceDictionary.MergedDictionaries>
    </ResourceDictionary>
</Application.Resources>
```

## 样式和模板

### 样式（Style）

```xml
<!-- 内联样式 -->
<Button Content="按钮">
    <Button.Style>
        <Style TargetType="Button">
            <Setter Property="Background" Value="Blue"/>
            <Setter Property="Foreground" Value="White"/>
            <Setter Property="FontSize" Value="14"/>
        </Style>
    </Button.Style>
</Button>

<!-- 共享样式 -->
<Window.Resources>
    <Style x:Key="AccentButton" TargetType="Button">
        <Setter Property="Background" Value="#0078D4"/>
        <Setter Property="Foreground" Value="White"/>
        <Setter Property="BorderThickness" Value="0"/>
        <Setter Property="Padding" Value="20,10"/>
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="Button">
                    <Border Background="{TemplateBinding Background}"
                            CornerRadius="4">
                        <ContentPresenter HorizontalAlignment="Center" 
                                        VerticalAlignment="Center"/>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
        <Style.Triggers>
            <Trigger Property="IsMouseOver" Value="True">
                <Setter Property="Background" Value="#106EBE"/>
            </Trigger>
            <Trigger Property="IsPressed" Value="True">
                <Setter Property="Background" Value="#005A9E"/>
            </Trigger>
        </Style.Triggers>
    </Style>
</Window.Resources>

<Button Style="{StaticResource AccentButton}" Content="圆角按钮"/>
```

### 控件模板

```xml
<ControlTemplate x:Key="RoundButtonTemplate" TargetType="Button">
    <Grid>
        <Ellipse x:Name="background" Fill="{TemplateBinding Background}"/>
        <ContentPresenter HorizontalAlignment="Center" 
                         VerticalAlignment="Center"/>
    </Grid>
    <ControlTemplate.Triggers>
        <Trigger Property="IsMouseOver" Value="True">
            <Setter TargetName="background" Property="Fill" Value="LightBlue"/>
        </Trigger>
    </ControlTemplate.Triggers>
</ControlTemplate>
```

## 数据绑定

### 基本绑定

```xml
<!-- 单向绑定 -->
<TextBlock Text="{Binding UserName}"/>

<!-- 双向绑定 -->
<TextBox Text="{Binding UserName, Mode=TwoWay}"/>

<!-- 带更新触发 -->
<TextBox Text="{Binding UserName, UpdateSourceTrigger=PropertyChanged}"/>
```

### 绑定模式

- **OneWay**：源 → 目标（单向）
- **TwoWay**：源 ↔ 目标（双向）
- **OneWayToSource**：目标 → 源
- **OneTime**：仅初始化时绑定一次

### 绑定到元素

```xml
<Slider x:Name="sldValue" Minimum="0" Maximum="100"/>
<TextBlock Text="{Binding Value, ElementName=sldValue}"/>
```

### 转换器

```csharp
public class BoolToVisibilityConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        return (bool)value ? Visibility.Visible : Visibility.Collapsed;
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        return (Visibility)value == Visibility.Visible;
    }
}
```

```xml
<Window.Resources>
    <local:BoolToVisibilityConverter x:Key="BoolToVisibilityConverter"/>
</Window.Resources>

<TextBlock Text="加载中..." 
           Visibility="{Binding IsLoading, Converter={StaticResource BoolToVisibilityConverter}}"/>
```

## 事件处理

### 路由事件

```xml
<Button Content="点击我" Click="Button_Click"/>
```

```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    MessageBox.Show("按钮被点击！");
}
```

### 命令（Command）

```xml
<Button Content="保存" Command="{Binding SaveCommand}"/>
```

```csharp
public class MainViewModel
{
    public ICommand SaveCommand { get; }

    public MainViewModel()
    {
        SaveCommand = new RelayCommand(Save, CanSave);
    }

    private void Save()
    {
        // 保存逻辑
    }

    private bool CanSave()
    {
        return !string.IsNullOrEmpty(UserName);
    }
}
```

## 动画系统

### 基本动画

```xml
<Button Content="动画按钮" Width="100">
    <Button.Triggers>
        <EventTrigger RoutedEvent="MouseEnter">
            <BeginStoryboard>
                <Storyboard>
                    <DoubleAnimation 
                        Storyboard.TargetProperty="Width"
                        To="150" Duration="0:0:0.3"/>
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
        <EventTrigger RoutedEvent="MouseLeave">
            <BeginStoryboard>
                <Storyboard>
                    <DoubleAnimation 
                        Storyboard.TargetProperty="Width"
                        To="100" Duration="0:0:0.3"/>
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
    </Button.Triggers>
</Button>
```

### 颜色动画

```xml
<Rectangle Width="100" Height="100" Fill="Blue">
    <Rectangle.Triggers>
        <EventTrigger RoutedEvent="MouseEnter">
            <BeginStoryboard>
                <Storyboard>
                    <ColorAnimation 
                        Storyboard.TargetProperty="Fill.Color"
                        To="Red" Duration="0:0:0.5"/>
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
    </Rectangle.Triggers>
</Rectangle>
```

## 总结

本指南涵盖了 XAML 编程的核心概念：

1. **XAML 基础**：语法、命名空间、属性设置
2. **布局系统**：Canvas、StackPanel、Grid、DockPanel、WrapPanel
3. **常用控件**：按钮、文本框、列表、下拉框等
4. **资源系统**：定义和使用资源、资源字典
5. **样式和模板**：自定义控件外观
6. **数据绑定**：连接数据和界面
7. **事件处理**：响应用户交互
8. **动画系统**：创建动态效果

继续深入学习：
- MVVM 模式
- 自定义控件
- 高级数据绑定
- 动画和变换
- WPF 性能优化
