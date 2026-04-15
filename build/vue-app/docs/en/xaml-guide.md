# XAML From Beginner to Master (Zero to Advanced)

**Updated:** 2026-3-4 · **Author:** JetCPP Team

## Table of Contents
1. [What is XAML?](#what-is-xaml)
2. [Relationship Between XAML and C#](#relationship-between-xaml-and-c)
3. [Development Environment Setup](#development-environment-setup)
4. [XAML Basic Syntax](#xaml-basic-syntax)
5. [Layout System](#layout-system)
6. [Common Controls](#common-controls)
7. [Resource System](#resource-system)
8. [Styles and Templates](#styles-and-templates)
9. [Data Binding](#data-binding)
10. [Event Handling](#event-handling)
11. [Animation System](#animation-system)

---

## What is XAML?

XAML (Extensible Application Markup Language) is an XML-based declarative language specifically designed for defining user interfaces. Originally developed by Microsoft, it is primarily used for:
- **WPF** (Windows Presentation Foundation): Windows desktop applications
- **UWP** (Universal Windows Platform): Windows universal applications
- **Xamarin.Forms**: Cross-platform mobile applications

### Core Concept of XAML
XAML follows the "**Declarative UI**" philosophy: you describe what the interface should look like, rather than telling the computer step by step how to build it.

### Why Use XAML?
1. **Separation of Concerns**: UI design (XAML) is separated from business logic (C#)
2. **Visual Design**: Clear structure, easy to understand
3. **Tool Support**: Visual Studio provides a visual designer
4. **Efficient Development**: Faster than creating interfaces with pure code

## Relationship Between XAML and C#

XAML and C# are complementary:
- **XAML**: Responsible for "**What it looks like**"
- **C#**: Responsible for "**What it does**"

Each XAML file has a corresponding C# code-behind file (`.xaml.cs`).

### Example

```xml
<!-- MainWindow.xaml -->
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="My Application" Height="300" Width="400">
    <Grid>
        <Button Content="Click Me" Click="Button_Click"/>
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
        MessageBox.Show("Button was clicked!");
    }
}
```

## Development Environment Setup

### Installing Visual Studio

1. Visit [Visual Studio Official Website](https://visualstudio.microsoft.com/)
2. Download Visual Studio Community
3. During installation, select the **".NET Desktop Development"** workload
4. Optional: Check **"Universal Windows Platform development"** (for UWP)

### Creating a WPF Project

1. Open Visual Studio
2. Select "Create a new project"
3. Choose "WPF App (.NET Framework)" or "WPF App"
4. Name the project and create

## XAML Basic Syntax

### Basic Structure

```xml
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Window Title" 
        Height="450" 
        Width="800">
    <Grid>
        <!-- Controls go here -->
    </Grid>
</Window>
```

### Namespaces

- **`xmlns`**: Default namespace, contains WPF controls
- **`xmlns:x`**: XAML language namespace, contains x:Class, x:Name, etc.

### Property Setting

```xml
<!-- Property syntax -->
<Button Content="Click Me" Width="100" Height="30"/>

<!-- Property element syntax -->
<Button>
    <Button.Content>
        Click Me
    </Button.Content>
    <Button.Width>100</Button.Width>
    <Button.Height>30</Button.Height>
</Button>
```

### Markup Extensions

```xml
<!-- Binding -->
<TextBlock Text="{Binding UserName}"/>

<!-- Resource reference -->
<Button Background="{StaticResource PrimaryColor}"/>

<!-- Relative source binding -->
<TextBlock Text="{Binding Path=Name, RelativeSource={RelativeSource AncestorType=Window}}"/>
```

## Layout System

WPF provides various layout containers:

### Canvas (Absolute Positioning)

```xml
<Canvas>
    <Button Canvas.Left="10" Canvas.Top="10" Content="Top Left"/>
    <Button Canvas.Right="10" Canvas.Bottom="10" Content="Bottom Right"/>
</Canvas>
```

### StackPanel (Stack Layout)

```xml
<!-- Vertical stack (default) -->
<StackPanel>
    <Button Content="Button 1"/>
    <Button Content="Button 2"/>
    <Button Content="Button 3"/>
</StackPanel>

<!-- Horizontal stack -->
<StackPanel Orientation="Horizontal">
    <Button Content="Button 1"/>
    <Button Content="Button 2"/>
    <Button Content="Button 3"/>
</StackPanel>
```

### Grid (Grid Layout)

```xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>      <!-- Auto height -->
        <RowDefinition Height="*"/>         <!-- Remaining space -->
        <RowDefinition Height="2*"/>        <!-- Double remaining space -->
    </Grid.RowDefinitions>
    
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="100"/>     <!-- Fixed width -->
        <ColumnDefinition Width="*"/>       <!-- Remaining space -->
    </Grid.ColumnDefinitions>
    
    <!-- Place at specified row and column -->
    <Button Grid.Row="0" Grid.Column="0" Content="(0,0)"/>
    <Button Grid.Row="0" Grid.Column="1" Content="(0,1)"/>
    <Button Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="2" Content="(1,0) Span 2 columns"/>
</Grid>
```

### DockPanel (Dock Layout)

```xml
<DockPanel>
    <Button DockPanel.Dock="Top" Content="Top"/>
    <Button DockPanel.Dock="Bottom" Content="Bottom"/>
    <Button DockPanel.Dock="Left" Content="Left"/>
    <Button DockPanel.Dock="Right" Content="Right"/>
    <Button Content="Center (Remaining space)"/>
</DockPanel>
```

### WrapPanel (Auto Wrap)

```xml
<WrapPanel>
    <Button Content="Button 1" Width="80"/>
    <Button Content="Button 2" Width="80"/>
    <Button Content="Button 3" Width="80"/>
    <Button Content="Button 4" Width="80"/>
    <Button Content="Button 5" Width="80"/>
    <!-- Automatically wraps when space is insufficient -->
</WrapPanel>
```

## Common Controls

### Content Controls

```xml
<!-- Button -->
<Button Content="Click Me" Click="Button_Click"/>

<!-- Button with icon -->
<Button>
    <StackPanel Orientation="Horizontal">
        <Image Source="/Images/icon.png" Width="16" Height="16"/>
        <TextBlock Text="Save" Margin="5,0,0,0"/>
    </StackPanel>
</Button>

<!-- Label -->
<Label Content="User Name:" Target="{Binding ElementName=txtUserName}"/>

<!-- CheckBox -->
<CheckBox Content="Remember me" IsChecked="True"/>

<!-- RadioButton -->
<RadioButton Content="Option 1" GroupName="Group1" IsChecked="True"/>
<RadioButton Content="Option 2" GroupName="Group1"/>
```

### Text Controls

```xml
<!-- TextBlock (display text) -->
<TextBlock Text="Normal text"/>
<TextBlock>
    <Run FontWeight="Bold">Bold</Run>
    <Run Foreground="Red">Red</Run>
</TextBlock>

<!-- TextBox (input) -->
<TextBox x:Name="txtUserName" 
         Text="{Binding UserName, UpdateSourceTrigger=PropertyChanged}"
         PlaceholderText="Enter user name"/>

<!-- PasswordBox -->
<PasswordBox x:Name="pwdPassword" PasswordChar="*"/>
```

### List Controls

```xml
<!-- ListBox -->
<ListBox x:Name="lstItems" SelectionMode="Single">
    <ListBoxItem Content="Item 1"/>
    <ListBoxItem Content="Item 2"/>
    <ListBoxItem Content="Item 3"/>
</ListBox>

<!-- ComboBox -->
<ComboBox x:Name="cmbOptions" SelectedIndex="0">
    <ComboBoxItem Content="Option 1"/>
    <ComboBoxItem Content="Option 2"/>
    <ComboBoxItem Content="Option 3"/>
</ComboBox>

<!-- Data-bound list -->
<ListBox ItemsSource="{Binding Users}" DisplayMemberPath="Name"/>

<!-- Custom item template -->
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

## Resource System

### Defining Resources

```xml
<Window.Resources>
    <!-- Color resources -->
    <SolidColorBrush x:Key="PrimaryColor" Color="#0078D4"/>
    <SolidColorBrush x:Key="SecondaryColor" Color="#106EBE"/>
    
    <!-- Style resources -->
    <Style x:Key="PrimaryButton" TargetType="Button">
        <Setter Property="Background" Value="{StaticResource PrimaryColor}"/>
        <Setter Property="Foreground" Value="White"/>
        <Setter Property="Padding" Value="15,5"/>
    </Style>
    
    <!-- Data template -->
    <DataTemplate x:Key="UserTemplate" DataType="{x:Type local:User}">
        <StackPanel>
            <TextBlock Text="{Binding Name}" FontWeight="Bold"/>
            <TextBlock Text="{Binding Email}" Foreground="Gray"/>
        </StackPanel>
    </DataTemplate>
</Window.Resources>
```

### Using Resources

```xml
<!-- Static resource -->
<Button Background="{StaticResource PrimaryColor}" Content="OK"/>

<!-- Dynamic resource -->
<Button Background="{DynamicResource PrimaryColor}" Content="OK"/>

<!-- Apply style -->
<Button Style="{StaticResource PrimaryButton}" Content="Save"/>
```

### Resource Dictionaries

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

## Styles and Templates

### Styles

```xml
<!-- Inline style -->
<Button Content="Button">
    <Button.Style>
        <Style TargetType="Button">
            <Setter Property="Background" Value="Blue"/>
            <Setter Property="Foreground" Value="White"/>
            <Setter Property="FontSize" Value="14"/>
        </Style>
    </Button.Style>
</Button>

<!-- Shared style -->
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

<Button Style="{StaticResource AccentButton}" Content="Rounded Button"/>
```

### Control Templates

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

## Data Binding

### Basic Binding

```xml
<!-- One-way binding -->
<TextBlock Text="{Binding UserName}"/>

<!-- Two-way binding -->
<TextBox Text="{Binding UserName, Mode=TwoWay}"/>

<!-- With update trigger -->
<TextBox Text="{Binding UserName, UpdateSourceTrigger=PropertyChanged}"/>
```

### Binding Modes

- **OneWay**: Source → Target (one-way)
- **TwoWay**: Source ↔ Target (two-way)
- **OneWayToSource**: Target → Source
- **OneTime**: Bind only once during initialization

### Binding to Elements

```xml
<Slider x:Name="sldValue" Minimum="0" Maximum="100"/>
<TextBlock Text="{Binding Value, ElementName=sldValue}"/>
```

### Converters

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

<TextBlock Text="Loading..." 
           Visibility="{Binding IsLoading, Converter={StaticResource BoolToVisibilityConverter}}"/>
```

## Event Handling

### Routed Events

```xml
<Button Content="Click Me" Click="Button_Click"/>
```

```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Button clicked!");
}
```

### Commands

```xml
<Button Content="Save" Command="{Binding SaveCommand}"/>
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
        // Save logic
    }

    private bool CanSave()
    {
        return !string.IsNullOrEmpty(UserName);
    }
}
```

## Animation System

### Basic Animation

```xml
<Button Content="Animated Button" Width="100">
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

### Color Animation

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

## Summary

This guide covered the core concepts of XAML programming:

1. **XAML Basics**: Syntax, namespaces, property setting
2. **Layout System**: Canvas, StackPanel, Grid, DockPanel, WrapPanel
3. **Common Controls**: Buttons, text boxes, lists, dropdowns, etc.
4. **Resource System**: Defining and using resources, resource dictionaries
5. **Styles and Templates**: Customizing control appearance
6. **Data Binding**: Connecting data and UI
7. **Event Handling**: Responding to user interactions
8. **Animation System**: Creating dynamic effects

Continue learning:
- MVVM Pattern
- Custom Controls
- Advanced Data Binding
- Animations and Transforms
- WPF Performance Optimization
