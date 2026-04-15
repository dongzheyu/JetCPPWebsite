# English Listen - Professional English Dictation Training Tool

Tired of boring English dictation training? Try **English Listen** — a modern dictation tool that makes you fall in love with English learning!

## Project Introduction

### Overview
English Listen is an intelligent dictation software designed specifically for English learners. Developed based on C++17 and Qt6, it supports Windows platform. It's not just a word player, but a secret weapon to improve your listening and spelling skills. Whether you're a student, teacher, or self-learner, it can help you easily handle English dictation.

### Core Features
- **Intelligent Vocabulary Management**: Support for flexible editing, multi-level classification, batch operations, and automatic saving
- **Personalized Training Control**: Free adjustment of reading intervals, pause/resume, quick navigation, and repeat playback
- **Visual Experience Optimization**: Dark/light theme switching, system theme adaptation, and smooth animation effects
- **Learning Progress Tracking**: Score recording, data visualization charts, multi-dimensional analysis, and history management
- **Dual Voice Engines**: Support for Windows SAPI and Flite third-party engines, available offline
- **Intelligent Dictation Modes**: Flexible switching between paper-and-pencil mode and online mode
- **Keyboard Shortcut Support**: Convenient operations like spacebar repeat, arrow key switching, ESC pause, etc.

### Usage Scenarios
- **Students**: After-class English dictation practice to improve listening comprehension and spelling skills
- **Teachers**: Classroom dictation testing tool, supporting both paper-and-pencil and online modes
- **Self-learners**: Self-study English, track learning progress through visual charts
- **Training institutions**: As a teaching aid, providing professional dictation training functions

## Technology Stack

### Core Technologies
| Technical Component | Version/Description | Purpose |
|--------------------|---------------------|--------|
| Programming Language | C++17 | Main development language, modern C++ standard |
| GUI Framework | Qt6.5+ | Cross-platform interface development framework |
| Build System | CMake 3.16+ | Modern build tool |
| Compiler | MinGW-w64 GCC 11+ | Windows platform compiler |

### Dependencies
- **Main Dependencies**:
  - Qt6 Core/Widgets/Multimedia (v6.5+)
  - Flite speech synthesis engine (v2.2+)
  - Windows SAPI (system built-in)

### Development Environment
- **Recommended IDE**: Qt Creator 10+/Visual Studio 2022/Clion
- **Necessary Tools**: CMake, Git, MinGW-w64
- **Build Tools**: Ninja (optional, improves build speed)

## System Requirements

### Minimum Configuration
| Item | Requirement |
|------|-------------|
| Operating System | Windows 10 version 10.0.15063 (1703) or higher |
| Processor | Intel Pentium G5400 or equivalent performance processor |
| Memory | 1GB RAM |
| Storage | 50MB available hard disk space |
| Display | 1024x768 resolution |
| Audio Device | Sound card and speakers/headphones that support audio playback |

### Recommended Configuration
| Item | Requirement |
|------|-------------|
| Operating System | Windows 11 22H2 or higher |
| Processor | Intel Core i5-9300H or higher performance processor |
| Memory | 4GB RAM or more |
| Storage | 100MB available hard disk space |
| Display | 1920x1080 resolution |
| Audio Device | High-quality audio equipment |

## Hardware Requirements

### Required Hardware
- Computer with audio output support
- Keyboard and mouse
- Display

### Optional Hardware
- High-quality headphones or speakers (to enhance listening experience)
- Microphone (for voice comparison function, supported in future versions)

### Special Requirements
- No special hardware requirements, ordinary home computers can run smoothly

## Installation and Usage

### Installation Steps
1. **Download Installer**: Download the latest version installer from [Download Address](#download-address)
2. **Run Installer**: Double-click `EnglishListenSetup.exe` to start the installation wizard
3. **Select Installation Path**: Follow the wizard prompts to select the installation directory (default: `C:\Program Files\EnglishListen`)
4. **Complete Installation**: Click the "Install" button and wait for the installation to complete
5. **First Run**: After installation, check "Run English Listen" to start the program

### Quick Start
1. **Start Program**: Double-click the desktop shortcut or start from the start menu
2. **Add Words**: Click the "View Words" button, enter the words to practice in the text box (one per line)
3. **Start Test**: Click "Start Dictation Test", select the dictation mode (paper-and-pencil mode or online mode)
4. **Dictation Practice**: Write down the heard words according to the voice prompts
5. **Check Answers**: After the test, click "View Answers" to check the results

### Advanced Configuration
- **Voice Engine Settings**: Select SAPI or Flite engine in the settings dialog
- **Time Interval Adjustment**: Adjust the reading interval (1-10 seconds) in the test interface
- **Theme Switching**: Use the right-click menu to switch between dark/light themes
- **Keyboard Shortcuts**: The test interface supports spacebar repeat, arrow key navigation, ESC pause

## Open Source Address

### Code Repository
- **GitHub**: [https://github.com/dongzheyu/English_Listen](https://github.com/dongzheyu/English_Listen)
- **Gitee**: [https://gitee.com/jetcpp/english_-listen](https://gitee.com/jetcpp/english_-listen)

### Project Information
- **Issue Feedback**: [GitHub Issues](https://github.com/dongzheyu/English_Listen/issues)
- **Feature Suggestions**: [GitHub Discussions](https://github.com/dongzheyu/English_Listen/discussions)

## Download Address

### Latest Version
- **Version**: v2.5.0
- **Release Date**: 2026-02-16
- **Download Link**: [Click to Download](https://gitee.com/jetcpp/english_-listen/releases/download/2.5.0/EnglishListenSetup.exe)
- **File Size**: 15.2MB
- **Checksum**: SHA256:`b04afcb75473d31fe04eb6e539bfb6997994cd617002b63933acadeeb9880bb7`

### Version Description
This version has completed all the features planned in the TODO list, including keyboard shortcut support, learning progress visualization, improved temporary vocabulary mechanism, user account system, data encryption, and privacy settings. It is the most complete and stable version.

## Update Records
### v2.5.0 (2026-02-16)
- ✅ Completed all features in the v2.5 version development plan
- ✅ Core feature enhancements:
  - ✅ Implemented vocabulary group management functionality, supporting creation, editing, and deletion of vocabulary groups
  - ✅ Enhanced vocabulary import/export functionality, supporting CSV, Excel and other common formats
  - ✅ Improved learning progress statistics functionality, added visualization charts to display learning data
  - ✅ Implemented vocabulary search and filtering functionality, providing quick search and classification filtering features
- ✅ Experience optimization:
  - ✅ Optimized interface interaction experience, added button hover effects and transition animations
  - ✅ Improved error handling mechanism, enhanced program stability and error prompts
  - ✅ Optimized program performance, improved vocabulary loading speed and response speed
- ✅ Release preparation:
  - ✅ Conducted comprehensive testing to ensure normal operation of functions
  - ✅ Updated project documentation, improved feature descriptions and usage guides

### v2.4.0 (2026-02-16)
- ✅ Completed all features planned in the TODO list
- ✅ Implemented complete user experience improvement list
  - ✅ Added keyboard shortcut support (spacebar repeat reading, arrow key word switching, etc.)
  - ✅ Implemented learning progress visualization functionality, displaying learning progress and trends in chart form
  - ✅ Improved temporary vocabulary mechanism, allowing dictation to start without manually creating vocabulary
- ✅ Enhanced interface animation effects, added more smooth transition animations
- ✅ Implemented user account system, supporting creation of personal accounts to manage learning data
- ✅ Added data encryption functionality, encrypting sensitive user data for storage
- ✅ Implemented privacy settings, allowing users to control data sharing permissions

### v2.3.2 (2026-12-20)
- Added online dictation mode, supporting the function of dictating first and submitting answers uniformly
- In online dictation mode, users can input heard words while listening and check results uniformly at the end
- Optimized dictation test user experience, supporting cached input and unified verification at the end
- Improved test result display, providing more detailed correct/incorrect statistics
- Refactored dictation mode selection logic, allowing users to choose paper-and-pencil mode or online mode when starting the test

### v2.3.1 (2026-11-15)
- Fixed learning progress visualization interface layout issue, moved the back button above the chart
- Optimized progress interface layout structure, improved user experience
- Automatically created and synchronized temporary vocabulary files when editing in the view words interface
- Real-time monitoring of editing content changes and synchronization to temporary files
- Automatically deleted temporary vocabulary files upon exit
- Supported starting dictation tests directly from the view words page
- Added learning progress visualization functionality, displaying learning progress and trends in chart form
- Recorded results of each test (time, total words, correct count, accuracy rate)
- Displayed accuracy rate trends through line charts
- Supported saving and loading of test history records
- Accessed learning progress interface through the right-click menu of the settings button
- Added keyboard shortcut support functionality, allowing keyboard shortcuts to control the dictation process in the test interface
- Added keyboard shortcut instructions in the user guide
- Added SHORTCUTS.md document detailing keyboard shortcut usage methods

### v2.3.0 (2026-10-08)
- Fixed Flite voice engine invalid library reference issue, removed invalid link to flite library in CMakeLists.txt
- Optimized project build configuration, improved build efficiency and stability
- Updated version information to v2.3.0

---

*Make English learning simpler and more fun!*