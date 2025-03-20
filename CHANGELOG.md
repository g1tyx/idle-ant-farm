# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.1] - 2025-03-21

### Changed

- Enhanced type safety for prestige upgrades by requiring at least one appliesTo value
- Updated multiplierStore to properly check for global upgrades using appliesTo field
- Improved consistency in how upgrades target specific generator types
- Better type handling for multiplier calculations throughout the app

## [0.6.0] - 2025-03-21

### Added

- Added Pheromone Essence collection system in Adventure mode
- Implemented new resource reward scaling based on enemy progression
- Created Pheromone Essence Shop tab in Adventure page
- Balanced reward formula to prevent excessive rewards from high-tier enemies
- Added visual indicators for essence rewards in enemy cards
- Updated UI to show detailed food and essence rewards for each enemy

### Changed

- Improved enemy card display to show calculated rewards
- Refactored reward system to use logarithmic scaling for better progression
- Enhanced Adventure UI with tabbed interface for Combat and Shop sections
- Optimized high-tier enemy rewards with dampened growth curves

## [0.5.3] - 2025-03-20

### Changed

- Improved mobile responsiveness of inventory filters and controls
- Added collapsible dropdown menu for inventory actions on both mobile and desktop
- Reorganized inventory header for better space utilization on small screens
- Kept Pheromone Essence counter visible outside of action menus for quick reference
- Enhanced UI consistency across device sizes
- Improved touch targets for better mobile usability

## [0.5.2] - 2025-03-19

### Fixed

- Added missing formatEffect functions to all generator upgrades for consistent effect display
- Improved effect formatting for percentage-based upgrades
- Enhanced readability of upgrade effects with standardized formatting

## [0.5.1] - 2025-03-19

### Added

- Added inventory sorting functionality with multiple sort options
- Implemented sorting by rarity, quality (merge level), power, name, and quantity
- Added persistent sorting preference between sessions
- Improved dropdown component with better contrast for readability
- Calculation of item "power" based on combined stats and modifiers for sorting purposes

## [0.5.0] - 2025-03-20

### Added

- Added auto-merge prestige upgrade to unlock automatic item merging functionality
- Implemented auto-merge toggle button in the inventory UI
- Added background merging system that automatically combines eligible items during game ticks
- Enhanced merging logic to continue merging items to higher levels when possible
- Improved save/load system to properly persist auto-merge settings between sessions

## [0.4.1] - 2025-03-19

### Fixed

- Fixed offline progress calculation to correctly use saved lastSaveTime for calculating elapsed time
- Improved save system to properly store and retrieve last save timestamp
- Added debug logging for offline progress calculations

## [0.4.0] - 2025-03-19

### Added

- Added update announcement system that shows what's new when the game updates
- Implemented version tracking to display all changes since your last visit
- Added setting to toggle update announcements on/off
- Enhanced changelog parsing to show cumulative updates between versions

## [0.3.0] - 2025-03-18

### Added

- Added "Continue merging" option to automatically merge items to higher levels when possible
- Implemented "Merge All" action in the Item Modal to merge all items of the same type
- Enhanced merge functionality to chain multiple merges when possible for faster item progression

## [0.2.0] - 2025-03-18

### Added

- Added extremely high-tier generator count achievements scaling up to e250
- New achievement tiers for all generators with progressive milestones from 10 to e250
- Implemented progressive naming system with tiers like "First," "Network," "Empire," "Dominion," "Supremacy," "Mastery," "Abundance," "Legacy," "Infinity," "Cosmic," "Galactic," "Universal," "Multiversal," "Transcendent," and "Omnipotent"
- Added smart number formatting that converts large exponents to readable text (e.g., 1e9 → "1.00 Billion")
- Implemented progressive rewards that increase with achievement tier (10% → 100%)
- Added global production bonuses for the highest tier achievements (5% → 30%)
- Achievement rewards system that provides minor production bonuses for completing achievements
- New composable for handling achievement modifiers

### Changed

- Moved PWA install button from App.vue to SettingsPage.vue to provide a cleaner user interface
- Improved browser compatibility for PWA installation, especially for Arc browser
- Enhanced PWA installation instructions with better guidance for different browser types
- Added fallback installation instructions for browsers without direct install button support
- Refactored achievements system to use generator functions for creating series of related achievements, reducing code duplication and improving maintainability
- Modularized achievement system by extracting generators to a separate file for better organization
- Further improved achievement system organization by splitting generators by type (food, time, workers, evolution, etc.) into separate files
- Improved achievement system with targetStat property for direct stat tracking
- Simplified achievement tracking by eliminating manual ID mapping
- Enhanced architecture for better maintainability and easier extension with new achievements
- Refactored achievement tiers to define them in a single place using common tier structures
- Expanded food achievements to scale up to 1e500, adding many more progression milestones for players
- Implemented dynamic generation of food achievement rewards based on game progression stages
- High-tier achievements are now hidden until lower tiers are completed, providing clearer progression path

### Fixed

- Fixed achievement tracking for nurseries, queen chambers, colonies and other generators
- Updated achievement IDs in the tracking system to match the new modular structure

## [0.1.8] - 2025-03-18

### Added

- Achievement rewards system that provides minor production bonuses for completing achievements
- New composable for handling achievement modifiers
- New panel in the Achievements page showing current bonuses

### Changed

- Improved multiplier breakdown UI to group achievement multipliers separately
- Updated multiplier calculation system to handle achievement bonuses properly
- Enhanced typings for better TypeScript support
- Refactored achievements system to use direct object literals instead of helper functions, improving code consistency and maintainability

## [0.1.7] - 2025-03-18

### Added

- Added setting to toggle achievement notifications on/off (default: enabled)
- Added Changelog page accessible from the More menu
- Added markdown-to-HTML converter for dynamic changelog display

### Changed

- Moved settings button from header to "More" navigation panel for better organization and UI consistency
- Simplified header interface by consolidating all secondary navigation options
- Repositioned achievement notifications to prevent overlap with navigation bar

## [0.1.6] - 2025-03-18

### Added

- Search functionality for upgrades, allowing filtering by name or description
- Sorting options for upgrades (by cost, level, or name)
- Improved filter persistence between sessions
- New "Evolutionary Adaptation" prestige upgrade that provides stacking food production bonus per evolution cycle
- New "Early Multi-Tier Enhancement" upgrade that boosts worker ants (5%), nurseries (2.5%), and EP gain (10%) simultaneously
- Added support for combo prestige upgrades that can affect multiple aspects of gameplay simultaneously
- Enhanced multiplier system to correctly handle combo upgrade effects on generators, global multipliers, and EP gain
- Added "More" navigation menu with sliding panel animation for additional navigation options
- Added Achievements page accessible from the More menu
- Comprehensive achievements system with 30+ achievements across four categories
- Achievement notification system for displaying newly completed achievements
- Automatic tracking of game progress for unlocking achievements
- Achievement progress display with percentage completion bars

### Changed

- Reorganized upgrade filters UI for better user experience
- Enhanced filter reset button to also clear search and sort settings
- Improved code maintainability by reusing the store's damage calculation function in the Adventure page
- Fixed inconsistencies in combat stats display to match actual combat mechanics

## [0.1.5] - 2025-03-18

### Changed

- Modified generator self-reproduction logic to limit reproduction to 0 or 1 unit per tick based on chance, preventing exponential growth issues

### Fixed

- Fixed issue where equipped items could be lost when trying to swap equipment with a full inventory
- Added inventory full warnings and proper error handling when equipping/unequipping items
- Improved UI feedback when inventory constraints prevent equipment changes

## [0.1.4] - 2025-03-18

### Changed

- Simplified damage calculation in adventure mode to use a more intuitive "damage - defense" formula
- Added minimum damage of 1 to ensure combat progression even against high-defense enemies
- Improved code consistency by reusing the damage calculation logic across functions

## [0.1.3] - 2025-03-17

### Added

- Adventure mode is also added to the offline time calculation

## [0.1.2] - 2025-03-17

### Added

- Added "Refresh Equipment Slots" button to the Equipment Section to manually refresh equipment slots after unlocking new slots

### Changed

- Removed automatic equipment slot refresh watcher in App.vue in favor of manual refresh button

### Fixed

- Fixed issue with equipment slots not properly updating when new slots are unlocked

## [0.1.1]

### Added

- New Evolution Settings section in the Settings page
- Auto-enable generators after prestige setting to automatically re-enable all auto-purchases after evolving
- CHANGELOG.md file to track project changes

### Changed

- Updated prestige reset logic to respect the new auto-enable generators setting
- Improved settings organization by grouping Evolution-related settings together

### Fixed

- None

### Removed

- None

### Security

- None

## [0.1.0] - 2025-03-14

- Initial release
