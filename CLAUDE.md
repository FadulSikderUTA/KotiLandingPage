
# COMPREHENSIVE WEB DEVELOPMENT PROJECT: Koti Landing Page - Phase 2 Development

You are an expert full-stack web developer specializing in Next.js, Framer Motion, and modern web development practices. You will be working on the "Koti Landing Page" project, which requires significant architectural improvements, new feature additions, and backend implementation. This is a comprehensive, multi-phase project requiring systematic analysis, careful planning, and iterative development following a specific protocol.

## CRITICAL: The CLAUDE.md Protocol - Your Operational Framework

**THIS IS MANDATORY**: Your entire workflow for this project will be governed by the **CLAUDE.md Protocol**. This supersedes any previous workflow instructions.

### The CLAUDE.md Protocol Requirements:

1. **Central Documentation**: Immediately create a file named `CLAUDE.md` in the project root. This file is your single source of truth for planning, progress tracking, and self-updating context.
    
2. **Plan-Then-Execute Loop**: For EACH of the major tasks, you MUST follow this loop:
    
    - **A. Plan**: Before writing any code, open `CLAUDE.md` and write a detailed, step-by-step execution plan including:
        - Analysis of the current state
        - Specific files to be modified
        - Technical approach and rationale
        - Expected outcomes
        - Potential risks and mitigation strategies
    - **B. Seek Approval**: Present this plan to the user for approval
    - **C. Execute**: Only after approval, implement the plan
    - **D. Document & Update**: Update `CLAUDE.md` with:
        - Task completion status
        - Detailed changes made
        - Code snippets of key modifications
        - Screenshots/evidence of success
        - Any deviations from the original plan
3. **Living Context**: The `CLAUDE.md` file evolves with the project. Each completed task provides context for subsequent tasks, ensuring continuity and shared understanding.
    

## Project Context and Technical Architecture

### Current State

- **Framework**: Next.js with TypeScript
- **Animation Library**: Framer Motion
- **Styling**: Tailwind CSS
- **Architecture**: Single page application with component-based sections
- **Structure**:
    - Single page script in `/app/page.tsx`
    - Multiple components in `/components/` folder
    - Card-style stacking animations as users scroll

### Critical Issues

1. **Framer Motion Timing/Scaling Problems**: The scroll animation system breaks when adding new pages, particularly after the `BusinessSolutionsContent` (Page 3)
2. **Mobile Responsiveness**: Content cuts off on the right side on mobile devices
3. **Architectural Fragility**: Current single-page architecture with global scroll dependencies creates coupling issues

### Available Resources and References

#### Core Reference Directory Structure (`/reference/`)

This is your library and single source of truth:

1. **`AISales/` & `AI Sales Landing Page Component Handling Instructions.md`**
    
    - **Role**: Your MANDATORY technical foundation
    - **Usage**: For any new component, find the closest equivalent in AISales and use its code as starting point
    - **Contains**: 11-category analysis mapping features to code files
2. **`Yeeld/` & `DESIGN_DOCUMENT_V2.md`**
    
    - **Role**: Visual and conceptual North Star for B2C aesthetic
    - **Usage**: Make AISales foundation look and feel like Yeeld
    - **Key Specs**: `96vw` x `94vh` container, two-column hero, specific implementation details
3. **`bkash-*.md` files**
    
    - **Role**: Definitive bilingual strategy
    - **Implementation**: Bengali at root (`/`), English at `/en/`
    - **Features**: Language switcher design, mixed-language branding (e.g., "Koti কোটি")
4. **`PIXAAI_ANALYSIS.md`**
    
    - **Role**: Visual polish inspiration for card components
    - **Usage**: Apply recommended gradients, shadows, hover effects to Page 3 cards
5. **Historical Context Files**:
    
    - `previous_implementation_conversation_with_prompt.md`
    - `Framer_motion_scaling_timing_problem_context.md`
    - **Purpose**: Explains project history, problem genesis, development evolution
6. **`WaitlistContent.tsx`**
    
    - **Role**: Pre-designed component for Task 4
    - **Usage**: Starting point for Join Waitlist page implementation

#### Other Project Folders

- **`/koti-landing-page/`**: Main project repository
- **GitHub Repository**: Will be provided by user
- **Note**: Ignore `/created/` folder and other unrelated documents

### Core Development Philosophy

#### The "11-Category Rule"

You are performing a **constrained adaptation** of the AISales project. You may ONLY modify the **"Changeable Trio"**:

1. Content Structure
2. Layout & Grid
3. UI Components

The other 8 categories are IMMUTABLE and must not be altered.

### Available Tools

- **GitHub MCP Tool**: For repository management and cloning
- **Puppeteer MCP Tool**: For browser automation, testing, and screenshots
- **Playwright MCP Tool**: For cross-browser testing and responsive design verification
- **WSL Ubuntu Environment**: Target development environment
- **Brave Search**: For researching technical solutions and feasibility analysis

## THE 4-TASK MISSION: Detailed Objectives and Implementation


### Task 1: Architecturally Refactor the Animation System

**Priority**: CRITICAL **Estimated Time**: 4-6 hours

#### Objectives

- Fix core architectural flaw in scroll animation system
- Implement robust, scalable, decoupled animation architecture
- Ensure new pages can be added without breaking existing animations

#### Key Technical Questions to Address

1. Is the single-page-with-components architecture the only way to implement Framer Motion?
2. Can we implement multiple pages in `/app/` folder with transitions between them?
3. What causes the timing decoupling issues?
4. How can we make the animation system modular and maintainable?

#### Detailed Implementation Steps

1. **Deep Analysis Phase**
    
    - Study current implementation in:
        - `src/app/page.tsx`
        - `src/components/HowItWorksContent2.tsx`
        - `src/components/BusinessSolutionsContent.tsx`
    - Review `Framer_motion_scaling_timing_problem_context.md`
    - Use browser automation to capture detailed behavior patterns
    - Document all `useScroll` and `useTransform` hook dependencies
2. **Solution Design** Propose **container-relative animation** solution:
    
    - Each section manages its own scroll context
    - Wrap content in ref-enabled containers
    - Change `useScroll` and `useTransform` to be container-relative
    - Remove global page height dependencies
    - Document proposed changes in CLAUDE.md
3. **Implementation**
    
    - Refactor `BusinessSolutionsContent.tsx`:
        
        ```typescript
        // Example approachconst containerRef = useRef(null);const { scrollYProgress } = useScroll({  target: containerRef,  offset: ["start end", "end start"]});
        ```
        
    - Ensure animations are self-contained
    - Test each component in isolation
4. **Integration Testing**
    
    - Add `WaitlistContent` component from `reference/WaitlistContent.tsx`
    - Place in own sticky container with `z-index: 40`
    - Verify zero negative impact on fixed animations
    - Document successful decoupling
5. **Scalability Verification**
    
    - Perform full page scroll from Hero to Footer
    - Record "after" video/screenshots
    - Demonstrate smooth card stacking
    - Prove system handles new page additions

### Task 2: Implement Universal Responsive Design

**Priority**: HIGH **Estimated Time**: 3-4 hours

#### Objectives

- Ensure perfect rendering across all devices
- Fix mobile content cutoff issue
- Implement responsive design per `DESIGN_DOCUMENT_V2.md` specifications

#### Detailed Implementation Steps

1. **Responsive Design Strategy**
    
    - Review `DESIGN_DOCUMENT_V2.md` requirements:
        - `w-[96vw] h-[94vh]` container specs
        - Responsive typography scales
        - Adaptive grid gaps
    - Plan mobile-first approach
    - Document strategy in CLAUDE.md
2. **CSS/Component Refactoring**
    
    - Implement responsive containers
    - Add Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
    - Ensure Flexbox/Grid structures adapt properly
    - Fix right-side content cutoff on mobile
3. **Framer Motion Mobile Optimization**
    
    - Adjust animation values for mobile
    - Ensure smooth performance on lower-powered devices
    - Consider reducing animation complexity on mobile
4. **Comprehensive Testing** Using Playwright, test and screenshot:
    
    - Mobile: 375px width (iPhone SE)
    - Tablet: 768px width (iPad)
    - Desktop: 1440px width (MacBook)
    - Ultra-wide: 1920px+ width
    - Document all results in CLAUDE.md

### Task 3: Create and Integrate New Pages

**Priority**: MEDIUM **Estimated Time**: 4-5 hours

#### Objectives

- Add "Join Waitlist" page using provided component
- Design and implement "People" page for credibility
- Ensure smooth integration with existing animation flow

#### Detailed Implementation Steps

##### 4.1 Join Waitlist Page

1. **Implementation**
    
    - Use `reference/WaitlistContent.tsx` as base
    - Integrate into `app/page.tsx` after BusinessSolutionsContent
    - Place in sticky container with `z-index: 40`
    - Ensure email capture form functionality
2. **Design Enhancement**
    
    - Use Puppeteer to analyze yield.com for inspiration
    - Implement phone mockup design if referenced
    - Ensure consistent animation style

##### 4.2 People Page

1. **Design Phase**
    
    - Since no pre-existing design exists, propose layout in CLAUDE.md
    - Consider grid of team members with:
        - Professional photos
        - Names and titles in Bengali/English
        - Brief descriptions
    - Focus on building trust for Bangladesh market
2. **Implementation**
    
    - Create `PeopleContent.tsx` component
    - Reuse existing styles and components for consistency
    - Integrate into `app/page.tsx` with `z-index: 50`
    - Apply PIXAAI-inspired visual polish
3. **Responsive Design**
    
    - Ensure both pages work perfectly on all devices
    - Test integration with reformed animation system

### Task 4: Implement Waitlist Backend & Email Pipeline

**Priority**: MEDIUM **Estimated Time**: 6-8 hours

#### Objectives

- Build functional backend for email capture
- Implement automated email system with survey links
- Store survey responses in database

#### Detailed Implementation Steps

1. **Feasibility Analysis**
    
    - Research if implementation possible with GitHub Pages
    - If not, explore alternatives:
        - Vercel/Netlify Functions
        - Third-party services (EmailJS, Typeform API)
        - Serverless solutions (AWS Lambda, Cloudflare Workers)
    - Document findings in CLAUDE.md
2. **Architecture Design** Propose complete pipeline:
    
    ```
    User submits email → API endpoint → Database storage →
    → Email service trigger → Survey link sent →
    → User completes survey → Results stored
    ```
    
3. **Backend Implementation**
    
    - Create Next.js API route: `/api/waitlist`
    - Choose and configure database:
        - Options: Vercel KV, Supabase, MongoDB Atlas, Airtable
    - Select email service:
        - Options: Resend, SendGrid, Mailchimp, EmailJS
    - Design survey system or integrate third-party
4. **Frontend Integration**
    
    - Wire `WaitlistContent.tsx` form to API
    - Implement proper error handling
    - Add loading states and success feedback
    - Ensure CORS and security considerations
5. **End-to-End Testing**
    
    - Submit test email through UI
    - Verify database storage
    - Confirm email delivery
    - Test survey link functionality
    - Document entire flow with evidence

## Success Criteria and Deliverables

### Per-Task Success Metrics

1. **Task 1**: Animations work smoothly, new pages don't break system
2. **Task 2**: Perfect responsive design across all devices
3. **Task 3**: Two new pages integrated seamlessly
4. **Task 4**: Functional email pipeline with database integration

### Final Deliverables

- Fully functional, responsive website
- Comprehensive CLAUDE.md documentation
- Clean, maintainable code structure
- Working email capture and survey system
- Complete testing evidence

## Communication and Workflow Protocol

1. **Regular Updates**: Provide status updates after each major milestone
2. **Clarification Requests**: Ask specific questions when encountering ambiguities
3. **Improvement Suggestions**: Propose enhancements based on best practices
4. **Decision Documentation**: Record all major decisions and rationale in CLAUDE.md
5. **Iterative Refinement**: Be prepared to refine approach based on findings

## Initial Action Items

1. **Immediate Response Required**:
    
    - Confirm understanding of all 5 tasks
    - Acknowledge CLAUDE.md Protocol requirements
    - Request GitHub repository link
2. **First Steps After Repository Access**:
    
    - Create initial CLAUDE.md with complete mission plan
    - Begin Task 1 environment setup
    - Prepare initial diagnosis report

Remember: This is an iterative, plan-driven process. The CLAUDE.md Protocol is mandatory. Quality, maintainability, and thorough documentation are paramount. Each task builds upon the previous, creating a robust, scalable solution.

Are you ready to begin? Please confirm your understanding of the CLAUDE.md Protocol and provide the GitHub repository link to initiate Task 1.

---