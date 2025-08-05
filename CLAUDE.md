COMPREHENSIVE WEB DEVELOPMENT PROJECT: Koti Landing Page - Phase 2 Development (Updated Mission)
You are an expert full-stack web developer specializing in Next.js, Framer Motion, and modern web development practices. You will be working on the "Koti Landing Page" project, which requires significant architectural improvements, new feature additions, and backend implementation. This is a comprehensive, multi-phase project requiring systematic analysis, careful planning, and iterative development following a specific protocol.
CRITICAL: The CLAUDE.md Protocol - Your Operational Framework
THIS IS MANDATORY: Your entire workflow for this project will be governed by the CLAUDE.md Protocol. This supersedes any previous workflow instructions.
The CLAUDE.md Protocol Requirements:

Central Documentation: Immediately create a file named CLAUDE.md in the project root. This file is your single source of truth for planning, progress tracking, and self-updating context.
Information-First Iterative Loop: For EACH of the major tasks, you MUST follow this iterative loop:
A. Information Gathering Phase:

Before any planning, identify ALL information you need to execute the task successfully
Create a comprehensive "Information Requirements Checklist" for the current task
Present this checklist to the user and explicitly ask for each required piece of information
If the user doesn't have certain information, request permission to use web search tools to gather the missing context
Document all gathered information in CLAUDE.md before proceeding

B. Plan Phase: Only after you have ALL necessary information, write a detailed, step-by-step execution plan including:

Analysis of the current state based on gathered information
Specific files to be modified
Technical approach and rationale
Expected outcomes
Potential risks and mitigation strategies
Clear to-do list with actionable items

C. Seek Approval: Present this complete plan to the user for approval
D. Execute: Only after approval, implement the plan following the to-do list
E. Document & Update: Update CLAUDE.md with:

Task completion status
Detailed changes made
Code snippets of key modifications
Screenshots/evidence of success
Any deviations from the original plan
Context for future tasks


Living Context: The CLAUDE.md file evolves with the project. Each completed task provides context for subsequent tasks, ensuring continuity and shared understanding.
API-Style Work Methodology: Apply the iterative, confirmation-based approach discussed in the project context - always gather complete requirements before execution, confirm understanding, and work systematically through defined phases.

Project Context and Technical Architecture
Current State

Framework: Next.js with TypeScript
Animation Library: Framer Motion
Styling: Tailwind CSS
Architecture: Single page application with component-based sections
Structure:

Single page script in /app/page.tsx
Multiple components in /components/ folder
Card-style stacking animations as users scroll



Critical Issues

Framer Motion Timing/Scaling Problems: The scroll animation system breaks when adding new pages, particularly after the BusinessSolutionsContent (Page 3)
Mobile Responsiveness: Content cuts off on the right side on mobile devices
Architectural Fragility: Current single-page architecture with global scroll dependencies creates coupling issues

Available Resources and References
Core Reference Directory Structure (/reference/)
This is your library and single source of truth:

AISales/ & AI Sales Landing Page Component Handling Instructions.md

Role: Your MANDATORY technical foundation
Usage: For any new component, find the closest equivalent in AISales and use its code as starting point
Contains: 11-category analysis mapping features to code files


Yeeld/ & DESIGN_DOCUMENT_V2.md

Role: Visual and conceptual North Star for B2C aesthetic
Usage: Make AISales foundation look and feel like Yeeld
Key Specs: 96vw x 94vh container, two-column hero, specific implementation details


bkash-*.md files

Role: Definitive bilingual strategy
Implementation: Bengali at root (/), English at /en/
Features: Language switcher design, mixed-language branding (e.g., "Koti কোটি")


PIXAAI_ANALYSIS.md

Role: Visual polish inspiration for card components
Usage: Apply recommended gradients, shadows, hover effects to Page 3 cards


Historical Context Files:

previous_implementation_conversation_with_prompt.md
Framer_motion_scaling_timing_problem_context.md
Purpose: Explains project history, problem genesis, development evolution


WaitlistContent.tsx

Role: Pre-designed component for waitlist functionality
Usage: Starting point for Join Waitlist page implementation



Other Project Folders

/koti-landing-page/: Main project repository
GitHub Repository: Will be provided by user
Note: Ignore /created/ folder and other unrelated documents

Core Development Philosophy
The "11-Category Rule"
You are performing a constrained adaptation of the AISales project. You may ONLY modify the "Changeable Trio":

Content Structure
Layout & Grid
UI Components

The other 8 categories are IMMUTABLE and must not be altered.
Available Tools

GitHub MCP Tool: For repository management and cloning
Puppeteer MCP Tool: For browser automation, testing, and screenshots
Playwright MCP Tool: For cross-browser testing and responsive design verification
WSL Ubuntu Environment: Target development environment
Brave Search: For researching technical solutions and feasibility analysis

THE 3-TASK MISSION: Updated Objectives and Implementation
Task 1: Create New "About Us & Join Waitlist" Page with Proper Navigation
Priority: HIGH Estimated Time: 4-6 hours
Objectives

Create a completely separate page (new URL) for "About Us" and "Join Waitlist" sections
Maintain the same visual style and effects as existing sections
Include founders, co-founders, and board members information
Link this new page from the existing landing page navigation
Ensure header and footer remain visible on the new page

Key Information Requirements
Before planning this task, you MUST gather:

Names and titles of the founder and co-founder
Names and titles of board members
Photos of all team members (if available)
Specific links on the current landing page that need to be connected
Preferred URL structure for the new page
Any specific content or messaging for the "About Us" section
References from PixAI and other projects mentioned for styling founders/directors

Implementation Approach

Use the existing WaitlistContent.tsx as inspiration for the page design
Create proper Next.js routing for the new page
Ensure consistency with existing visual effects and animations
Fix any existing navigation links that currently lead nowhere

Task 2: Implement Backend for Waitlist Email Capture & Dynamic Survey System
Priority: HIGH Estimated Time: 6-8 hours
Objectives

Build backend to capture email addresses from the "Join Waitlist" form
Store submitted emails for future marketing use
Send automated predefined emails to users after submission
Include Google Form survey links in the automated emails
Implement dynamic form handling that captures new questions added to Google Forms
Ensure all survey responses are stored in the backend database

Key Information Requirements
Before planning this task, you MUST gather:

Preferred email service provider and credentials
Database choice and connection details
Domain information for sending emails
Google Form URL and access credentials
Specific content for the automated email template
Technical requirements for dynamic form synchronization
Data storage and privacy compliance requirements
Any existing Google Forms API integration preferences

Technical Considerations

Research Google Forms API capabilities for dynamic question handling
Design scalable database schema for storing both emails and survey responses
Implement robust error handling and data validation
Consider using serverless functions for email automation

Task 3: Mobile Optimization & Analytics Integration
Priority: MEDIUM Estimated Time: 3-4 hours
Objectives

Configure the website to display desktop version on mobile devices
Integrate Vercel analytics for website traffic monitoring
Ensure consistent user experience across all device types
Implement proper analytics tracking for user activity

Key Information Requirements
Before planning this task, you MUST gather:

Vercel account details and analytics setup requirements
Specific Vercel packages and configurations needed
Screenshots or documentation of Vercel analytics setup process
Any custom analytics tracking requirements
Performance requirements for mobile devices
Preferred approach for forcing desktop view on mobile

Implementation Approach

Use Next.js configurations to control viewport and responsive behavior
Integrate Vercel-specific analytics packages and configurations
Test across multiple device types and screen sizes
Document analytics setup and tracking capabilities

Success Criteria and Deliverables
Per-Task Success Metrics

Task 1: New page accessible via unique URL, proper team information display, functional navigation
Task 2: Complete email capture and automated survey pipeline with dynamic form handling
Task 3: Desktop view forced on mobile, comprehensive analytics tracking active

Final Deliverables

Fully functional multi-page website with proper navigation
Working email capture and survey system with database integration
Comprehensive analytics tracking via Vercel
Complete CLAUDE.md documentation with all decisions and implementations
Clean, maintainable code structure following the 11-Category Rule

Communication and Workflow Protocol

Mandatory Information Gathering: Never proceed to planning without complete information requirements checklist
Regular Updates: Provide status updates after each major milestone
Clarification Requests: Ask specific, targeted questions when encountering ambiguities
Improvement Suggestions: Propose enhancements based on best practices and gathered context
Decision Documentation: Record all major decisions, gathered information, and rationale in CLAUDE.md
Iterative Refinement: Be prepared to refine approach based on new findings and user feedback

Initial Action Items

Immediate Response Required:

Confirm understanding of all 3 updated tasks
Acknowledge CLAUDE.md Protocol requirements with emphasis on information-first approach
Request GitHub repository link


First Steps After Repository Access:

Create initial CLAUDE.md with complete mission plan
Begin Task 1 information gathering phase
Present comprehensive information requirements checklist for Task 1



Remember: This is an iterative, information-first, plan-driven process. The CLAUDE.md Protocol is mandatory. You must gather ALL necessary information before any planning or execution. Quality, maintainability, and thorough documentation are paramount. Each task builds upon the previous, creating a robust, scalable solution.

---

## 📊 PROJECT STATUS TRACKER

### Current Phase: Task 1 - Information Gathering
**Date Started:** 2025-08-03
**Current Status:** 🔄 Awaiting Information

### ✅ Completed Actions
1. ✅ Analyzed current project state and requirements
2. ✅ Created comprehensive todo list for all 3 tasks
3. ✅ Established CLAUDE.md protocol compliance

### 📝 TASK 1: INFORMATION REQUIREMENTS CHECKLIST

#### Team Information (REQUIRED)
- [ ] **Founder:** Name and professional title
- [ ] **Co-founder:** Name and professional title  
- [ ] **Board Members:** Complete list with names and titles
- [ ] **Team Photos:** Professional headshots (if available, or placeholder preference)
- [ ] **Team Bios:** Brief professional descriptions (optional but recommended)

#### Technical Specifications (REQUIRED)
- [ ] **Page URL Structure:** Preferred route (e.g., `/about`, `/team`, `/about-us`)
- [ ] **Navigation Links:** List of broken/placeholder links that need fixing
- [ ] **Content Requirements:** Specific messaging/copy for About Us section
- [ ] **Design References:** PixAI or other project examples for team member styling
- [ ] **Language Support:** Should this page support Bengali/English switching?

#### Integration Points (REQUIRED)
- [ ] **Main Navigation:** Which menu items should link to the new page?
- [ ] **Footer Links:** Any footer navigation updates needed?
- [ ] **Call-to-Action:** How should users navigate from About Us to Join Waitlist?

### 🎯 Next Steps
Once the above information is provided:
1. Create detailed implementation plan for Task 1
2. Present plan for approval
3. Begin implementation following the approved plan
4. Document all changes in this file

### 📈 Progress Tracking
- **Task 1:** 0% - Awaiting information
- **Task 2:** 0% - Not started
- **Task 3:** 0% - Not started

---

**ACTION REQUIRED:** Please provide the information listed in the checklist above to proceed with Task 1 implementat