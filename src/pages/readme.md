about home cause i sitll find the ! to be confusing: 
1. START: showWork = false (switch OFF)
   ↓
2. USER CLICKS: onClick={toggleSlider} triggers
   ↓  
3. FUNCTION RUNS: setShowWork(!false) → setShowWork(true)
   ↓
4. STATE CHANGES: showWork = true (switch ON)
   ↓
5. REACT RE-RENDERS: Checks all conditions again
   ↓
6. CONTENT CHANGES: 
   - {!showWork && hero} → {!true && hero} → {false && hero} → HIDE hero
   - {showWork && projects} → {true && projects} → SHOW projects
   ↓
7. ANIMATION: showWork ? 'moved' : '' → true ? 'moved' : '' → 'moved' class added
   ↓
8. VISUAL: Button slides, projects appear, hero disappears

*********************************
ISSUES:
if i click on one project and the i want to go back to seing all projects i get redirected ot home page instead of project list