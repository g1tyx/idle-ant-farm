# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.14.0] - 2025-04-03

### Added
- Added "Precise Hibernation Calculation" setting for more accurate offline progress:
  - When enabled, processes all offline ticks individually instead of using batch processing
  - Provides maximum accuracy for offline progress calculations at the cost of longer processing time
  - Works alongside the existing 24-hour maximum offline period limitation
  - Added user-friendly toggle in settings with clear description of the feature's behavior
- Added customizable batch size slider for offline progress calculations:
  - Players can adjust how many ticks are processed at once during offline calculations
  - Allows fine-tuning the balance between accuracy and performance
  - Smaller batch sizes (10-100) provide more accurate results but take longer
  - Larger batch sizes (100-1000) calculate faster but with slightly less precision
  - Only visible when "Precise Hibernation Calculation" is disabled

## [0.13.4] - 2025-04-03

### Fixed
- Adventure will priorotize auto quests over auto one hit kill
- Adventure quest progress didn't work with the Colony Rush feature
- Item leveling using honeydew, can now actually use MAX honeydew
- Added text to the Aphid Farm Fields, to give users a better UX
- Improved percentage formatting throughout the Aphid Farm:
  - Used formatPercentage from decimalUtils for consistent number formatting
  - Fixed percentage displays for all aphid type special abilities
  - Properly formatted Bubbleback efficiency field level boost
  - Enhanced Fungal Fields boost percentage display with field count
  - Improved Pheromelion Empowerment boost display with correct formatting
  - Added helper methods to ensure consistent percentage formatting

### Changed
- Improved prestige cost discount upgrades to provide exponential benefits:
  - Modified all cost discount upgrades to use power-based scaling (X^level) instead of linear (X*level)
  - Changed from additive to multiplicative discount effect for stronger progression
  - Updated upgrade descriptions to reflect the exponential nature of the effects
  - Significantly increased the impact of higher level upgrades

## [0.13.3] - 2025-04-03

### Added
- Enhanced Aphid Farm with expected yield display for growing aphids:
  - Added real-time preview of honeydew yield for growing aphids
  - Implemented yield calculation that shows the final reward including all bonuses
  - Integrated Golden Aura effect from adjacent fields into the expected yield
  - Improved user experience by showing potential rewards during growth phase

### Fixed
- Improved Aphid Farm field layout consistency with height styling

## [0.13.2] - 2025-04-02

### Added
- New Global Upgrades feature for Aphid Farm:
  - Added powerful honeydew-based upgrades that enhance various aspects of production
  - Four upgrade categories: Evolution Points, Pheromone, Generators, and Global
  - Implemented tiered upgrade system with exponentially increasing costs and effects
  - EP upgrades provide multiplicative bonuses to evolution point production (up to 5 levels)
  - Pheromone upgrades boost essence production with scaling multipliers (up to 4 levels)
  - Generator upgrades enhance all generator production rates (up to 3 levels)
  - Global upgrades apply to all production types simultaneously (up to 2 levels)
  - Added intuitive tab-based interface with category descriptions
  - Visual progress bars showing upgrade level progression
  - Mobile-friendly design with appropriate touch targets

## [0.13.1] - 2025-04-02

### Added
- New Exponential EP prestige upgrade:
  - Powerful upgrade that doubles EP production per level (2x, 4x, 8x)
  - Maximum of 3 levels with exponentially increasing costs
  - Balanced with high base cost of 10 million EP
  - Applies multiplicatively with other EP bonuses
  - Visual indicator with sparkles icon

## [0.13.0] - 2025-04-02

### Added
- New Aphid Farm feature:
  - Farm aphids to produce honeydew currency
  - Purchase and upgrade fields to increase production
  - Multiple aphid types with unique yields and growth times
  - Auto-farming system for passive honeydew generation
  - Aphid-specific upgrades to enhance performance
  - Plant All and Harvest All capabilities
  - Specialized UI with responsive design

- New item leveling system:
  - OSRS-inspired XP-based progression replacing merge system
  - Different XP requirements based on item rarity
  - Stats scale with level (20% per level for 1-10, 10% after)
  - Production modifiers scale with level (10% per level for 1-10, 5% after)
  - Special modifiers scale with level progression
  - Detailed XP tracking and level progress visualization

## [0.12.1] - 2025-04-01

### Improved
- Enhanced Quest Queue for mobile devices:
  - Added up/down arrow buttons for reordering quests on mobile
  - Disabled drag and drop on mobile for better touch experience
  - Used responsive design to automatically switch between desktop and mobile interfaces
  - Made quest reordering more intuitive on touchscreen devices
  - Used VueUse's media query composable for device detection

## [0.12.0] - 2025-03-31

### Added
- Added quest filtering based on player capability:
  - New "Show Too Strong Bug Quests" toggle in the quest filters panel
  - Filter hides quests targeting bugs the player cannot defeat
  - Intelligent combat assessment evaluates if the player can defeat each bug
  - Special quests that don't require specific targets remain visible regardless of filter
  - Persistent filter preference saved between game sessions
  - Enhanced filtering system that works alongside existing quest type and reward filters
  - Active filter count indicator updates to include the new filter

### Improved
- Enhanced quest filter system with more intuitive UI controls
- Better integration with adventure combat assessment for consistent evaluation of player strength
- Optimized quest goals filtering to properly handle multi-goal quests

## [0.11.9] - 2025-03-31

### Changed
- Improved consistency in item display across the application:
  - Updated ItemFilterModal to use centralized rarity color utilities from itemStore
  - Standardized item background colors across all item-related components
  - Removed custom color implementations in favor of reusable utility functions
  - Enhanced visual consistency between inventory items and filtered items
  - Better color consistency for item rarities across all modals
  - Improved code maintainability by centralizing color definitions

## [0.11.8] - 2025-03-31

### Added
- Added Auto Specialization feature for all generator types:
  - New prestige upgrades that enable automatic specialization upgrading
  - Each generator type has its own auto-upgrade prestige upgrade with scaling costs
  - Auto-upgrading purchases the cheapest available upgrade automatically when points are available
  - Added toggle controls in each generator card for enabling/disabling auto-upgrading
  - Visual indicators show when auto-upgrade is active and upgrades are available
  - Added tooltips explaining the auto-upgrade functionality
  - Prestige costs scale exponentially from basic generators (150 EP) to advanced generators (150M EP)

### Improved
- Enhanced generator card UI with more compact automation controls
- Added visual feedback when auto-upgrades are actively working
- Added always-visible tick counter showing exactly when the next auto-upgrade check will occur (mobile-friendly)
- Optimized auto-upgrade processing to run at a reasonable frequency to prevent excessive updates (every 10 ticks)

## [0.11.7] - 2025-03-31

### Added
- Added comprehensive Quest Queue system:
  - New queue button in the Quest interface showing number of queued quests
  - Ability to add quests to a queue that automatically start when the current quest completes
  - Drag-and-drop interface for reordering quests in the queue with both mouse and touch support
  - Auto-start toggle to enable/disable automatic progression through the queue
  - Quest queue modal with detailed information about upcoming quests
  - Toast notifications when quests automatically start from the queue
  - Persistent queue state that saves between game sessions
  - Automatic quest queue processing during regular game ticks

### Improved
- Enhanced quest management workflow with smoother transitions between quests
- Added ability to automatically start the next quest when abandoning the current one
- Better mobile support for quest queue management with touch-friendly controls
- Improved user experience with clear visual indicators for queued quests

## [0.11.6] - 2025-03-31

### Improved
- Completely overhauled the offline progress calculation system:
  - Enhanced Mega Ant offline processing to include auto-feeding functionality for both food and pheromone
  - Implemented optimized batch calculation for Adventure mode combat with deterministic outcome prediction
  - Added support for quest progress tracking during offline periods
  - Improved tick system to process multiple ticks at once for better performance
  - Enhanced tick-based distribution of rewards from Adventure mode
  - Reduced memory usage by eliminating unnecessary log generation during batch processing
  - Implemented more accurate health tracking between game sessions
  - Properly calculated and applied double kill bonuses in offline Adventure rewards
  - Made offline calculations more consistent with online gameplay behavior

### Fixed
- Fixed inconsistency between online and offline auto-feeding for Mega Ant
- Fixed quest progress not updating correctly during offline calculations
- Fixed memory leaks in the offline processing system
- Improved error handling and state recovery for interrupted offline calculations

## [0.11.5] - 2025-03-31

### Fixed
- Fixed issue where Mega Ant ascension didn't reset spent levels counter properly, preventing players from spending levels after ascending
- Corrected the resetProgressForAscension function to properly reset spentLevels to 0 when ascending

## [0.11.4] - 2025-03-30

### Changed
- Refined offline progress calculation:
  - Uses precise tick-by-tick simulation for offline times less than 1 hour for maximum accuracy.
  - Employs optimized batch processing for offline times exceeding 1 hour to maintain performance.
- Updated Colony Rush feature to use the precise tick-by-tick simulation for its duration.
- Added a visual overlay animation during Colony Rush processing to provide feedback and prevent the appearance of a frozen UI.

### Fixed
- Corrected Mega Ant offline progress calculation to accurately account for stomach emptying time, ensuring precise experience gain during offline periods.
- Improved performance of the Mega Ant offline calculation by processing decay in a single, accurate batch.

## [0.11.3] - 2025-03-30

### Improved
- Enhanced inventory page layout for desktop users:
  - Now displays equipment and inventory sections side-by-side on larger screens
  - Maintains tab-based navigation on mobile for better space utilization
  - Added section headers with item counts for better visibility
  - Improved responsive design that adapts based on screen size
  - Fixed navigation tabs now only appear on mobile devices

## [0.11.2] - 2025-03-30

### Improved
- Optimized offline calculation performance in Adventure mode:
  - Eliminated unnecessary log generation during batch processing
  - Implemented intelligent combat simulation that calculates outcomes mathematically instead of iteratively
  - Added deterministic calculation for combat scenarios based on damage, health, and defense values
  - Reduced CPU usage during offline progress calculation by optimizing combat resolution
  - Improved processing speed for long offline periods with many combat interactions

## [0.11.1] - 2025-03-30

### Changed
- Improved navigation usability across the application:
  - Redesigned tab navigation for Inventory page to match Adventure page style
  - Moved tabs to a fixed position above the main navigation bar for easier access
  - Created reusable FixedTabNavigation component for consistent UI across pages
  - Enhanced mobile experience with icon-only tabs on small screens and full labels on larger screens
  - Added badge counters for inventory items and available quests
  - Improved visual feedback with active tab indicators and hover states
  - Added responsive positioning for badges that adapts to screen size

### Fixed
- Fixed issue where Inventory tabs were difficult to access on mobile devices
- Fixed inconsistent tab navigation patterns between Adventure and Inventory pages
- Fixed tabs being pushed off screen on small mobile devices by using icon-only display with tooltips

## [0.11.0] - 2025-03-29

### Added
- Completely overhauled the Ant Simulation feature with realistic ant behaviors:
  - Implemented detailed ant anatomy with segmented bodies, articulated legs, and antennae
  - Added animated walking motion with synchronized leg movements for realistic locomotion
  - Developed natural foraging behavior with ants seeking food and returning to the nest
  - Created realistic food sources that appear as detailed leaf shapes with veins and textures
  - Added a procedurally generated ant nest with entrance hole and radiating trails
- Enhanced simulation responsiveness and performance:
  - Dynamically scales the number of rendered ants based on colony size (1:1 representation up to 100 ants)
  - Uses logarithmic scaling for larger colonies while maintaining performance
  - Automatically adjusts food source quantity based on window size
  - Hard capped at 150 ants maximum to ensure smooth performance
- Made the simulation fullscreen with floating UI panel for an immersive experience
- Added toggle-able settings controls for adjusting simulation speed and ant size
- Added debug mode features for development and testing
- Added prominent button in the header to improve feature discoverability

### Changed
- Ants now carry broken pieces of leaves instead of generic food items
- Improved ant movement patterns to better mimic real ant behavior, including:
  - Natural wandering with gradual direction changes
  - Occasional pauses to "investigate" surroundings
  - Organized return to the nest when carrying food
- Enhanced visual design with proper background image and responsive canvas
- Redesigned nest appearance to look like a real ant mound with entrance hole
- Used more realistic color schemes for ants, food, and nest elements
- Improved special "golden" ants to represent colony leaders (every 20th ant)

### Fixed
- Fixed issues with food distribution to ensure food sources never spawn on top of the nest
- Fixed ant movement direction sometimes being inconsistent with their body orientation
- Fixed performance issues by using pre-computed elements for food spots and nest details
- Eliminated "trailing" effect that caused motion blur in previous versions

### Fun Note for v1 Players
- Remember when ants in v1 were just static dots that moved randomly? Now they have legs that actually move! And they carry realistic leaf fragments instead of mysterious blobs.

## [0.10.8] - 2025-03-29

### Changed
- Updated EquipmentSection and InventorySection components to use inline Tailwind styles
- Maintained the same visual appearance and pixel-art style while improving code maintainability
- Enhanced the styling structure with direct class application for better Tailwind compatibility
- Preserved all visual effects, animations, and responsiveness during the refactoring
- Added a background to both the main layout and offline calculation modal

## [0.10.7] - 2025-03-29

### Added
- Added "Mega Ant Auto Feed" prestige upgrade, unlocking automatic feeding capability
- Implemented the upgrade as an automation category prestige upgrade for 50M Evolution Points
- Auto Feed feature is unlocked after purchasing the Mega Ant feature
- Enhanced UI with intuitive locked/unlocked states for the Auto Feed controls
- Added informative tooltips explaining how to unlock the feature when locked
- Mobile-friendly interaction with improved tooltip display
- Auto feeding only activates when digestive systems are completely empty for better balance
- Visual indicators showing auto feeding status and time remaining until next attempt

## [0.10.6] - 2025-03-29

### Added
- Added auto feed functionality to Mega Ant digestive systems
- Implemented toggle controls for both food and pheromone essence auto feeding
- Each system feeds 1% of available resources every 10 ticks when enabled
- Balanced auto feeding to only trigger when stomachs are completely empty
- Added clear UI indicators for the empty-stomach feeding requirement
- Added visual toggle switches in the Digestive Systems interface
- Added countdown display showing ticks remaining until next auto feed occurs
- Optimized auto feed process to work efficiently with the existing decay system
- Added persistent state management for auto feed preferences

## [0.10.5] - 2025-03-29

### Added
- Added max buy buttons to all shop items in the Pheromone Shop
- Implemented efficient mathematical calculation for maximum affordable levels
- Added detailed tooltips showing how many levels will be purchased and total cost
- Implemented visual feedback showing how many levels were purchased
- Ensured consistent button sizing and styling for better UI experience

## [0.10.4] - 2025-03-29

### Added
- Added "Auto Quest Advance" feature to Adventure mode that automatically targets the best bug for your active quest
- Implemented the feature as an Evolution upgrade that can be purchased in the Prestige tab
- Added smart targeting system that automatically prioritizes incomplete quest goals
- Auto Quest Advance progressively switches targets as quest goals are completed
- Enhanced the combat system to efficiently target one-hit kills when available for quest targets
- Improved PlayerStatsCard UI with clear locked/unlocked state indicators
- Added informative tooltip explaining how to unlock the Auto Quest Advance feature

## [0.10.3] - 2025-03-29

### Fixed
- Fixed critical bug in item locking system where equipped items would lose their lock status
- Completely redesigned the item locking system to keep lock status synchronized between inventory and equipment slots
- Added proper migration for existing saves to ensure previously equipped items have correct lock properties
- Fixed bug where identical items in both inventory and equipment could have inconsistent lock states
- Added global item locking control that affects all identical items regardless of location (equipped or in inventory)
- Enhanced salvage system to respect the unified lock state
- Improved error handling for legacy save files that were missing lock status properties

## [0.10.2] - 2025-03-29

### Added
- Added 30+ new quests targeting a wide variety of bugs for all game stages:
  - New mid-tier quests for ladybugs, houseflies, mosquitoes, cockroaches, and more
  - Higher level quests for stag beetle swarms, mutant flies, and other challenging enemies
  - Endgame quests featuring apocalyptic termites and radioactive spiders
  - Ultimate quests against powerful ant hierarchy enemies (legion commanders, tacticians, etc.)
  - Multi-bug challenge quests requiring defeating various bug types simultaneously
- Reduced quest completion requirement for ascension from 80% to 65%, making it easier to progress

### Improved
- Enhanced quest UI to show detailed information for quests with multiple goals:
  - Quest cards now display each individual goal with clear numbering
  - Completed quest cards show checkmarks for each accomplished goal
  - Goals now show proper descriptions based on their type (kill bugs, collect food, etc.)
  - Quest headers now display the specific number of goals instead of just "Multiple Goals"
  - Improved mobile experience with better space utilization in quest cards

## [0.10.1] - 2025-03-29

### Changed
- Significantly improved code organization and maintainability by breaking the MegaAntTab component into smaller, focused components:
  - Extracted AscensionConfirmationModal to handle ascension confirmations
  - Created DigestiveSystems component to manage both crop and true stomach systems
  - Implemented FeedingInterface component to handle food and pheromone feeding controls
  - Added DigestionLogs component to display digestion history
  - Created MobileUpgradeTabView for the mobile tab interface
  - Added DesktopUpgradeLayout for side-by-side upgrade layout on larger screens
  - Extracted TutorialSection to manage the help/guide content
  - Created MegaAntHeader for the page header and ascension button
  - Implemented MegaAntImage to handle the ant image with animations
  - Added MegaAntStats to display all ant statistics
  - Created ExperienceProgressBars for XP visualization
  - Added LevelBadges to show level information in a consistent format
- Enhanced the feeding interface by placing each feeding control directly under its respective digestive system for better usability
- Improved mobile experience with more logical control placement

### Fixed
- Improved user experience by ensuring related controls are visually connected to their systems
- Enhanced code maintainability by following the Single Responsibility Principle
- Reduced the size of the main component file by properly modularizing functionality

## [0.10.0] - 2025-03-28

### Added
- Implemented comprehensive Mega Ant evolution system with dual stomach mechanics:
  - Crop system for processing food into Mega Ant experience
  - True Stomach system for processing pheromone essence into Colony experience
  - Dynamic digestion system with real-time processing and visual feedback
  - Detailed digestion logs showing resource processing and experience gains
- Added three categories of Mega Ant upgrades:
  - Digestive Capacity: Increases storage capacity for both stomachs
  - Digestive Speed: Enhances processing rate for both food and essence
  - Digestive Efficiency: Improves experience gain from both systems
- Implemented Colony upgrade system affecting global gameplay:
  - Evolution Synergy: Increases EP gain with evolution count scaling
  - Pheromone Enhancement: Boosts pheromone essence gains
  - Colony Coordination: Enhances global production rates
- Added Ascension mechanic for Mega Ant:
  - Preserve upgrades while resetting progress
  - Gain permanent multipliers for faster subsequent runs
  - Clear progression path with recommended ascension timing
- Started implementing visual improvements:
  - Added support for bug images in the Adventure mode
  - Enhanced BugCard component with image display capabilities
  - Prepared groundwork for item image implementation
  - Improved UI feedback for various game states

### Changed
- Enhanced Adventure mode UI with better visual representation of bugs
- Improved BugCard component with more intuitive layout and visual feedback
- Updated combat risk indicators with clearer visual cues
- Enhanced quest target visualization in bug cards

### Fixed
- Improved image loading error handling in BugCard component
- Enhanced type safety throughout the Mega Ant implementation
- Fixed potential issues with decimal number handling in experience calculations

## [0.9.9] - 2025-03-23

### Added
- Enhanced upgrade card UI to better display multiple effects and multipliers
- Added visual indicators for multiplier effects in both main UI and wiki
- Improved organization and readability of combo upgrade effects
- Added special multiplier badges (×) to clearly distinguish multiplier effects from additive effects

### Changed
- Updated upgrade card layout to show multiple effects in a more organized way
- Enhanced wiki display to better represent combo upgrades and their effects
- Improved visual hierarchy in upgrade cards for better readability
- Standardized multiplier effect display across all upgrade-related components

### Fixed
- Fixed inconsistent display of multiplier effects in upgrade cards
- Improved clarity of combo upgrade effects in the wiki view
- Enhanced type safety for upgrade effect handling

## [0.9.8] - 2025-03-23

### Changed
- Improved generator self-replication system to be based on production rates
- Each generator now self-replicates at 1% of the rate it is being produced by its parent
- For example, if nurseries produce 1000 workers per tick, workers will self-replicate at 10 per successful check
- Similarly, if queen chambers produce 1000 nurseries, nurseries will self-replicate at 10 per successful check
- Optimized both single-tick and batch processing for self-replication during offline progress
- Enhanced the producer-target mapping system for consistent self-replication logic

## [0.9.7] - 2025-03-23

### Added
- Added comprehensive Quest System to enhance game progression and rewards
- Implemented multiple quest types including bug hunting, food collection, and pheromone essence gathering
- Created "Resource Champion" special quest requiring players to collect both food and pheromone essence
- Added Quest tab in Adventure mode with available and completed quest tracking
- Implemented quest rewards including food, pheromone essence, evolution points, and permanent multipliers
- Created detailed quest cards showing progress, requirements, and rewards
- Added quest progress tracking with real-time updates as players acquire resources or defeat enemies
- Implemented multi-resource tracking for special quests with multiple objectives
- Added visual progress indicators showing completion percentage for active quests
- Integrated quest system with adventure mode to track specific bug defeats

### Changed
- Enhanced navigation menu to include a dedicated Quests entry
- Improved decimal handling throughout the game for better stability with large numbers
- Enhanced the multiplier system to include permanent multipliers from quest rewards
- Updated adventure store to properly track quest progress for bug defeats
- Improved type safety throughout the quest system for better reliability

### Fixed
- Fixed various issues with Decimal handling in quest system to ensure proper progress tracking
- Improved error handling and validation for quest state management
- Enhanced robustness of quest progress calculations with fallback options for invalid values
- Fixed quests referencing non-existent bug targets by updating them to valid bugs in the game
- Corrected type errors by converting string values to proper Decimal objects for quest amounts

## [0.9.6] - 2025-03-23

### Changed
- Improved Adventure page layout with a more compact and organized design
- Reorganized the layout to show PlayerStats and CombatStatus side by side for better comparison
- Enhanced BugCard component with combat risk indicators (One Hit Kill, Safe, Risky, Too Strong)
- Modified AdventureMapSection to display bugs in a grid layout with color-coded borders
- Moved Auto Advance option from the map section to the PlayerStatsCard for better accessibility
- Reduced padding and improved spacing in all Adventure components for a more streamlined experience
- Enhanced the Combat Log display with more compact formatting for better information density
- Updated bug filtering with improved visual indicators showing combat safety status

### Fixed
- Fixed inconsistencies in the DropTableModal implementation
- Improved component modularity to reduce code duplication
- Enhanced visual hierarchy to better prioritize important information

## [0.9.5] - 2025-03-23

### Added
- Added inventory filtering system allowing users to filter items by their stats and modifiers
- Implemented 12 filter categories including damage, health, defense, EP boost, global multiplier, and generator-specific production boosts
- Added filter dropdown alongside the existing sort controls in both mobile and desktop interfaces
- Added indicator showing the number of items hidden by the current filter
- Added a "Clear Filter" button for quickly resetting to show all items
- Implemented persistent filter preferences between game sessions

### Changed
- Enhanced inventory space calculation to properly account for total items regardless of active filters

## [0.9.4] - 2025-03-23

### Changed
- Improved Item Filter modal with toggle switches for better user experience
- Replaced Filter/Collect buttons with more intuitive toggle switches
- Updated Auto-Salvage control to use a toggle switch instead of a button
- Enhanced visual feedback with green/gray color states for the toggle switches
- Added clear text labels that show "Filtered" or "Collect" status next to each toggle

### Fixed
- A lot of smaller bugs

## [0.9.3] - 2025-03-22

### Added
- Added comprehensive Generators Wiki page with detailed information about all game generators
- Implemented cost scaling tables that show costs without any upgrades or modifiers
- Added production tables showing base output for different generator quantities
- Included detailed specifications for each generator, including tier, base cost, and cost growth
- Implemented search functionality to find specific generators by name or description
- Added consistent level selection controls for both costs preview and production scaling

### Changed
- Enhanced Wiki interface with a new Generators tab using emerald color scheme
- Updated wiki state management to persist user preferences for the new generators page
- Improved the display of generator stats with clear sections for each data type
- Standardized UI controls across all wiki pages using reusable components
- Enhanced contrast and readability of the level selector components, especially for the emerald color scheme
- Added visual improvements to selection controls with better spacing and highlighting of selected values

## [0.9.2] - 2025-03-22

### Added
- Added two new comprehensive Wiki pages to expand the game's documentation:
  - Bugs & Drops Wiki: Detailed information about all bugs in the game, their stats, and item drops
  - Items Wiki: Complete catalog of all game items categorized by rarity with detailed stats and effects
- Enhanced item display with color-coding by rarity and collapsible sections for better organization
- Implemented filtering by rarity in the Items Wiki for easier navigation
- Added search functionality to both wiki pages to quickly find specific bugs or items
- Added combat capability indicators in Bugs Wiki to show which bugs the player can defeat
- Improved numerical formatting for percentage values to display appropriate decimal precision

### Changed
- Updated the Wiki interface to integrate the new tabs seamlessly with existing content
- Enhanced the wiki state management to persist user preferences for the new pages
- Improved the display of item stats and effects with clear visual hierarchy

## [0.9.1] - 2025-03-22

### Added
- Added three upgrade paths to the Colony Rush feature:
  - Rush Efficiency: Reduces cooldown between rushes by 2 ticks per level (max 20 levels)
  - Extended Rush: Increases rush duration by 10 seconds per level, up to 3.5 minutes (max 18 levels)
  - Rush Capacity: Increases maximum rushes per day by 2 per level (max 25 levels)
- Implemented dynamic UI updates to reflect Colony Rush upgrades in tooltips and notifications
- Updated Colony Rush counter to accurately display available vs. maximum rushes based on upgrades

### Changed
- Improved rush button's tooltip to show the current rush duration based on upgrade level
- Enhanced toast notifications to display dynamic rush duration when activated
- Refactored Colony Rush store to properly apply and save upgrade effects

### Fixed
- Fixed issues with Colony Rush upgrade effects not being properly applied after reloading
- Added backward compatibility to ensure old saves properly migrate to the new upgrade system

## [0.9.0] - 2025-03-22

### Added
- Added several new Multi-Tier prestige upgrades that provide combined effects
- Added improved visualization for combo upgrades in the Evolution upgrade UI
- Enhanced pheromone and food production calculation for combo upgrades

### Changed
- Adjusted costs and max levels of several evolution upgrades for better balance
- Improved UI presentation of upgrade effects for better readability
- Enhanced combo upgrade effect display with color-coding by category

### Fixed
- Fixed an issue where combo upgrades targeting pheromone production weren't properly applied
- Fixed combo upgrade effect calculations in the multiplier system

## [0.8.9] - 2025-03-23

### Improved
- Enhanced the Offline Progress system to show more detailed information about what your colony produced while you were away
- Added detailed breakdown of each generator's production in the Offline Progress summary
- Improved performance in calculating the results of the offline time
- Improved statistics tracking to accurately show how many units were generated and self-replicated during offline time
- Redesigned the Offline Progress Modal with collapsible sections for better organization
- Made the Offline Progress Modal scrollable to accommodate more detailed information
- Added visual indicators showing before and after counts for each generator type

### Fixed
- Fixed an issue where Offline Progress statistics sometimes showed incorrect values
- Improved reliability of the offline calculation system for more accurate results
- Fixed visual glitches in the Offline Progress Modal on smaller screens

## [0.8.8] - 2025-03-22

### Added
- Added actual tracking of self-replicated generators
- Updated generator cards to show how many generators came from self-replication
- Improved wiki with more detailed information on self-replication mechanics
- Added detailed statistics section to wiki showing breakdown of generator sources

### Changed
- Modified generator storage system to properly track and persist self-replicated units
- Updated save/load system to handle self-replication data with backward compatibility

## [0.8.7] - 2025-03-22

### Added
- Added comprehensive in-game Wiki with detailed information about game mechanics
- Created dedicated Wiki pages for Prestige Upgrades and Pheromone Shop items
- Implemented "Skip Max Level" feature to view theoretical scaling beyond max level limits
- Added WikiStore to persist user preferences between game sessions (selected tabs, searches, expanded items)
- Designed modular tab-based interface to accommodate future wiki sections
- Added search functionality to filter items by name, description, or ID
- Implemented collapsible details for better information organization

### Changed
- Created special styling to visually distinguish theoretical levels beyond the maximum
- Enhanced user interface with slider controls for level preview range
- Optimized the display of effects and costs for better readability
- Improved application architecture by centralizing Wiki state management

## [0.8.6] - 2025-03-21

### Added
- Added Colony Rush feature as a prestige upgrade in the Evolution tab
- Implemented tick-based cooldown system that requires 30 foraging trips between rushes
- Colony Rush can be used to skip ahead 30 seconds of game time
- Limited rushes to 50 uses per day with daily reset
- Visualized cooldown with circular progress indicator and trip counter
- Added detailed testing panel for Colony Rush functionality
- Colony Rush button displays remaining uses and tooltip with usage information

### Changed
- Made Colony Rush button visible only when the feature is unlocked via prestige upgrade
- Set cost of Colony Rush upgrade to 75 Evolution Points for balanced progression
- Updated UI to show clear visual feedback for rush availability and cooldown status
- Improved performance by replacing custom events with direct store interactions

### Fixed
- Resolved issue with the Colony Rush button SVG overlay preventing proper cursor state display
- Fixed a potential recursion bug that could make rushes instantly available again
- Standardized food per trip production calculation throughout the application, ensuring consistent values between generator cards and the main header
- Fixed inconsistency where different calculation methods were used for generator production in different places, now using the comprehensive useMultipliers composable for all calculations

## [0.8.5] - 2025-03-21

### Added
- Added sorting functionality to the Pheromone Shop with multiple sort options
- Implemented sorting by current level, max level, price, name, and unlock status
- Added persistent sort preference that saves between game sessions
- Enhanced Pheromone Shop UI with intuitive sort controls and visual indicators
- Added three new low-level Pheromone Shop upgrades for early game progression

### Changed
- Improved Pheromone Shop user experience with consistent sorting behavior
- Enhanced shop UI with sort direction indicators (ascending/descending)
- Optimized item display order for better progression visualization

## [0.8.4] - 2025-03-21

### Fixed
- Modified PWA service worker updates to skip during offline progress calculations
- Prevented interruptions to offline progress calculations when PWA updates occur
- Improved stability of offline calculations by deferring service worker updates

## [0.8.3] - 2025-03-21

### Fixed
- Fixed equipment slots not being properly saved and loaded
- Added validation for equipped items to prevent errors with non-existent items
- Updated equipment slot loading to respect unlocked slot status
- Improved error handling for missing or invalid equipped items
- Enhanced equipment system stability with better state management

## [0.8.2] - 2025-03-21

### Fixed
- Fixed critical bug in inventory save/load system that could cause items to disappear
- Updated item loading code to use correct method name for retrieving items
- Added error handling to prevent crashes when loading invalid or missing items
- Improved inventory loading to filter out null items for better stability

## [0.8.1] - 2025-03-21

### Fixed
- Fixed issue where merged items weren't correctly displaying increased stats
- Corrected stats calculation for merged items to properly use base item stats
- Improved calculation of modifiers and special effects for merged items
- Ensured each merge level consistently applies +20% to stats and +15% to modifiers

## [0.8.0] - 2025-03-21

### Added
- Added Auto-Salvage prestige upgrade to automatically convert filtered items to Pheromone Essence
- Implemented toggle controls for enabling/disabling Auto-Salvage in both desktop and mobile interfaces
- Enhanced item filtering with salvage functionality for better inventory management
- Added Auto-Salvage status indicator in the Item Filter modal
- Improved Adventure reward system to process filtered items through the salvage system

### Changed
- Updated Pheromone Essence rewards to properly apply multipliers to auto-salvaged items
- Enhanced Adventure combat logs with clearer messaging about auto-salvaged items
- Improved user experience by integrating Auto-Salvage with the existing filter system

## [0.7.1] - 2025-03-21

### Improved
- Optimized combat log display in Adventure mode for better performance
- Reduced memory usage by limiting log history to the most recent entries
- Simplified log display mechanism to eliminate complex DOM manipulations
- Removed automatic scrolling to improve rendering performance
- Enhanced log management with more efficient array handling

## [0.7.0] - 2025-03-21

### Changed
- Improved adventure mode reward system to scale food rewards with current food production
- Food rewards now start at 10% of food/sec for the first enemy and increase by 2% per enemy
- Maximum food reward capped at 200% of current food production for high-tier enemies
- Added percentage display to reward messages for better player understanding
- Ensured minimum food reward of 10 regardless of current production
- Enhanced player feedback by showing the exact percentage of food/sec earned from each enemy

## [0.6.9] - 2025-03-21

### Added
- Added Pheromone Essence counter to the main header when Adventure Mode is unlocked
- Used consistent icon (beaker) with the inventory section for better visual recognition

## [0.6.8] - 2025-03-21

### Fixed
- Improved Pheromone Shop button states to properly display unlock status
- Fixed conditional rendering logic for button text in Pheromone Shop
- Enhanced visual feedback for locked, maxed, and unaffordable shop items
- Optimized button class handling for better readability and maintenance
- Made buttons show appropriate colors based on their status (gray for locked, purple for maxed, red for unaffordable)

## [0.6.7] - 2025-03-20

### Fixed
- Fixed issue where tier 3 merged items sometimes appeared worse than tier 2 items
- Improved calculation of modifiers when merging items to ensure consistent stat increases
- Enhanced item modal display to show more precise stat values with decimal places
- Fixed inventory modal scrolling on large item descriptions by adding max height limits
- Added sticky headers and footers in modal windows for better navigation on mobile

## [0.6.6] - 2025-03-20

### Improved
- All pop-up windows now close more consistently when you press Escape key
- You can now close any pop-up window by clicking outside of it
- Fixed issues where some pop-ups would stay open when trying to close them
- Improved touch screen experience - pop-ups won't cause background scrolling on mobile devices
- Made the game feel more responsive with quicker and more reliable pop-up interactions

## [0.6.5] - 2025-03-20

### Fixed
- Fixed offline progress modal not displaying properly during calculation
- Enhanced reactivity handling in App.vue for better state management
- Improved offline progress calculation to update UI in smaller batches
- Added proper timeouts to ensure the UI updates during offline calculations
- Enhanced debugging information for offline progress calculation
- Fixed issues with reactive state updates in Pinia stores
- Improved user feedback during lengthy calculations

## [0.6.4] - 2025-03-20

### Fixed
- Fixed offline progress calculation for app hide/show scenarios
- Removed premature cleanup that was breaking the offline progress system
- Simplified offline calculation logic for better reliability
- Improved logging for better debugging of offline progress
- Made offline progress calculation synchronous for easier management
- Removed complex promise-based batching that was causing issues
- Removed unnecessary cancelOfflineTimeSimulation function for cleaner code

## [0.6.3] - 2025-03-20

### Changed
- Enhanced all modal components with improved user interaction
- Added ability to close modals by pressing Escape key
- Added ability to close modals by clicking outside the modal area (backdrop)
- Improved accessibility for modal interactions
- Standardized modal closing behavior across the entire application

## [0.6.2] - 2025-03-20

### Added
- Enhanced Pheromone Shop with progressive unlock system for items
- Created new PheromoneMultiplierInfo component to display essence gain bonuses
- Added mystery display for locked items to create surprise element
- Implemented detailed unlock requirements for shop upgrades
- Added visual feedback for affordable/unaffordable upgrades
- Created six new pheromone shop items with varying costs and effects
- Hidden modifier details for locked upgrade levels
- Added pheromone essence store for managing the new currency
- Implemented pheromone shop store for upgrade management
- Enhanced multiplier system to include pheromone gain bonuses
- Added tracking for total collected pheromone essence over time for milestone unlocks

### Changed
- Improved user interface for the Pheromone Shop with clearer status indicators
- Enhanced button styling based on upgrade affordability
- Modified shop items to progressively unlock as players advance
- Updated shop UI to show mysterious placeholder for locked items
- Improved Adventure page with tabbed interface for combat and shop sections
- Enhanced multiplier breakdown modal to display pheromone bonuses
- Updated offline progress calculations to include pheromone gains
- Modified inventory section to better display and manage pheromone essence
- Integrated pheromone system with adventure rewards and item salvaging
- Updated save system to store pheromone shop and essence data
- Changed shop unlock requirements to use total collected essence instead of current amount

### Fixed
- Resolved type safety issues in multiplier store and prestige systems
- Fixed inconsistencies in how multipliers are applied across the application
- Improved typings for better TypeScript support

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
