# English Listen WinUI - Modern English Dictation Training Tool

Full migration from Qt6 to **WinUI 3**, redefining English dictation training with Windows 11 native experience.

## Project Introduction

### Overview
English Listen WinUI is a completely redesigned version of English Listen, migrated from Qt6/C++ to the WinUI 3 framework, adopting modern Windows native interface design. The project uses a **C# + C++ hybrid development** architecture — C# (WinUI 3) handles the modern user interface, while C++ NativeBackend handles performance-sensitive dictation logic, seamlessly connected through P/Invoke interop. Current version: v2.7.0.

### Core Differences from Qt6 Version
| Feature | Qt6 Version | WinUI 3 Version |
|---------|-------------|-----------------|
| UI Framework | Qt6 Widgets | WinUI 3 (Windows App SDK) |
| Development Language | C++17 | C# 13 + C++ Native |
| Architecture Pattern | Simple MVC | Complete MVVM |
| Visual Style | Cross-platform style | Windows 11 native Mica material |
| Translation Service | None | Baidu Translation API integration |
| Auto Update | Manual | In-app auto update |
| Speech Engine | SAPI + Flite | Windows SAPI / Windows TTS |

### Core Features

#### Intelligent Vocabulary Management
- **Flexible Editing**: Add/delete words freely, support batch operations
- **File Management**: Support TXT, CSV multi-format import/export, multi-level classification management
- **Intelligent Saving**: Automatically save learning records, real-time synchronization of temporary vocabulary
- **Group Management**: Support creation, editing, deletion of vocabulary groups, drag-and-drop management
- **Search and Filtering**: Quick word search, filtering by first letter, numbers, etc.
- **Batch Translation**: Integrated Baidu Translation API, one-click translation of entire vocabulary

#### Personalized Training Control
- **Time Adjustment**: Freely set reading intervals (1-60 seconds), countdown display
- **Playback Control**: Pause/resume functionality, control training rhythm at any time
- **Quick Navigation**: Previous/next word quick switching
- **Repeat Playback**: Reinforce memory effect, spacebar quick repeat
- **Random Order**: Support random playback mode, increase challenge
- **Translation Display**: Chinese translation can be displayed simultaneously during dictation

#### Intelligent Dictation Modes
- **Online Mode**: Listen and input in the input box, system judges correctness in real-time, support Enter submission
- **Paper-and-Pencil Mode**: Record on paper, manually input correct count at the end
- **Levenshtein Algorithm**: Intelligent spelling check, provide similar word suggestions

#### Learning Progress Tracking
- **Four Statistical Cards**: Total test times, average accuracy, total learned words, consecutive learning days
- **Accuracy Trend Chart**: Line chart drawn with Canvas
- **Test History List**: Each record shows vocabulary name, time, correct count/total, accuracy rate
- **Export CSV** and clear records functionality

#### Visual Experience
- **Mica Background Material**: Windows 11 native transparent effect
- **Theme Switching**: Follow system / Light / Dark three levels
- **NavigationView**: Left sidebar navigation, modern Windows app style
- **Responsive Layout**: Adapt to various screen sizes

### Usage Scenarios
- **Students**: After-class English dictation practice, multi-user system supports independent learning data
- **Teachers**: Classroom dictation testing tool, paper-and-pencil/online dual mode
- **Self-learners**: Visual charts track learning progress, consecutive learning days statistics
- **Training institutions**: Multi-user management, each user's data is independently isolated

## Technical Architecture

### Technology Stack
| Technical Component | Version/Description | Purpose |
|--------------------|---------------------|--------|
| UI Framework | WinUI 3 | Windows native interface framework |
| Frontend Language | C# 13 | ViewModel, Services, Models |
| Backend Engine | C++ Native | Dictation logic, timer, voice control |
| Runtime | .NET 8.0 | Cross-platform runtime |
| Windows App SDK | 1.8+ | Windows application development SDK |
| Speech Synthesis | Windows SAPI / System.Speech | System voice engine |
| Translation Service | Baidu Translation API | HTTP calls with cache and quota |
| Data Serialization | Newtonsoft.Json | JSON serialization/deserialization |
| Application Packaging | MSIX | Windows application packaging |
| Architecture Pattern | MVVM | Model-View-ViewModel |

### Layered Architecture
```
┌─────────────────────────────────────────────┐
│              Views (XAML Pages)              │
│  HomePage, WordsPage, DictationTestPage,     │
│  ProgressPage, SettingsPage, UserPage, etc.   │
├─────────────────────────────────────────────┤
│            ViewModels (C#)                   │
│  MainViewModel, ModernDictationViewModel,    │
│  ViewModelBase, RelayCommand                  │
├─────────────────────────────────────────────┤
│             Services (C#)                     │
│  SpeechService, ModernDictationService,      │
│  SettingsService, BaiduTranslateService,     │
│  UpdateService, ChartService, PasswordService│
├─────────────────────────────────────────────┤
│          Native Backend (C++)                │
│  DictationBackend, NativeDictationExports,   │
│  QT6DictationBackend, TestBackend            │
├─────────────────────────────────────────────┤
│             Models (C#)                      │
│  Word, WordList, WordListGroup,              │
│  UserData, TestResult, AppSettings, VoiceInfo│
└─────────────────────────────────────────────┘
```

### C# and C++ Interop
C++ NativeBackend is exported through C API (`extern "C"`), and the C# side makes P/Invoke calls through `NativeMethods.cs`. The C++ side implements a complete `DictationBackend` class, including vocabulary management, timers, voice control, callback mechanisms, etc.

### Development Environment
- **IDE**: Visual Studio 2026
- **Workloads**: C++ Desktop Development + .NET Desktop Development
- **Windows SDK**: 10.0.26100 or higher
- **CMake**: 3.16+ (compile Native Backend)
- **.NET SDK**: 10.0

## System Requirements

### Minimum Configuration
| Item | Requirement |
|------|-------------|
| Operating System | Windows 10 version 17763+ |
| Runtime | .NET 8.0 / 10.0 Runtime |
| Processor | x64 / ARM64 / x86 |
| Memory | 2GB RAM |
| Storage | 100MB |

### Recommended Configuration
| Item | Requirement |
|------|-------------|
| Operating System | Windows 11 24H2+ |
| Processor | Intel Core i5 or higher |
| Memory | 4GB RAM or higher |
| Storage | 100MB |

## Quick Start

1. **Start Program**: Double-click the desktop shortcut or start from the start menu
2. **Add Words**: Navigate to the "View Words" page through the sidebar, add or import vocabulary
3. **Select Words**: Check the words to dictate in the word list
4. **Start Test**: Click "Start Dictation", select dictation mode (paper-and-pencil/online)
5. **View Results**: Check answers and statistics after the test
6. **Track Progress**: After logging in, you can view detailed learning data on the "Learning Progress" page

### Keyboard Shortcuts
| Shortcut | Function |
|----------|----------|
| Spacebar | Repeat reading current word |
| Left Arrow | Return to previous word |
| Right Arrow | Jump to next word |
| ESC | Pause/resume test |
| Enter | Confirm input |

## Open Source Address

### Code Repository
- **GitHub**: [https://github.com/dongzheyu/English-Listen-WinUI](https://github.com/dongzheyu/English-Listen-WinUI)
- **Gitee**: [https://gitee.com/jetcpp/English-Listen-WinUI](https://gitee.com/jetcpp/English-Listen-WinUI)

### Project Information
- **Issue Feedback**: [GitHub Issues](https://github.com/dongzheyu/English-Listen-WinUI/issues)
- **Feature Suggestions**: [GitHub Discussions](https://github.com/dongzheyu/English-Listen-WinUI/discussions)

## Download Address
- **Microsoft Store Local**: [ms-windows-store://pdp/?productid=9PLK90CNTJBG](ms-windows-store://pdp/?productid=9PLK90CNTJBG)
- **Microsoft Store Web**: [https://apps.microsoft.com/detail/9PLK90CNTJBG](https://apps.microsoft.com/detail/9PLK90CNTJBG)

## Update Records

### v2.7.0 (WinUI3 Version)
- Completely redesigned interface based on WinUI 3 framework
- NavigationView sidebar navigation
- Windows 11 24H2+ high-quality voice support
- Intelligent voice engine (Windows SAPI / Windows TTS)
- Voice preview functionality, support separate selection of English/Chinese voices
- In-app auto update system
- Complete MVVM architecture (ViewModelBase + RelayCommand)
- C# + C++ hybrid language development (NativeBackend)
- Dark/light/follow system three-level theme
- User account system (login/registration/multi-user management)
- Vocabulary management (add, delete, import, export, group)
- Learning progress statistics (accuracy trend chart, history records)
- Baidu Translation API integration (with cache and daily quota management)
- Levenshtein edit distance intelligent spelling check
- Keyboard shortcut support

### License
MIT License - Copyright (c) 2026 dongle

---

*Make English learning simpler and more efficient!*