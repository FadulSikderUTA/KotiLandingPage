# General Collaboration Plan

This document outlines the general plan for collaboration on the Kooti Credit Scoring project, focusing on enhancing the visualization application and refining the methodology document.

## Core Objectives:

1.  **Website Visualization Enhancement:** Improve the `src/kooti-credit-scoring-visualization.tsx` React application.
2.  **Methodology Document Refinement:** Enhance the `Kooti CSM Methodology.md` document to meet financial compliance standards.

## Workflow Process:

1.  **Understand the Specific Task:**
    *   When a task is provided (for either the visualization app or the methodology document), the first step is to thoroughly understand its requirements and objectives.

2.  **Information Gathering & Clarification (As Needed):**
    *   **For Visualization App Tasks:**
        *   If UI/UX changes are requested, `browsermcp` may be used to get a visual understanding (e.g., screenshots) of the current state or desired outcome.
        *   For complex code modifications, the relevant sections of `src/kooti-credit-scoring-visualization.tsx` will be analyzed. If new libraries are involved or existing ones are used in complex ways, `context7` can be leveraged for up-to-date best practices.
    *   **For Methodology Document Tasks:**
        *   Relevant sections of `Kooti CSM Methodology.md` will be referred to.
        *   Clarifying questions will be asked if specific compliance standards, regulatory nuances, or technical details are not explicitly covered or require deeper interpretation.
    *   Proactive questions will be asked to ensure all necessary context is available before proceeding to the planning phase.

3.  **Detailed Plan Formulation:**
    *   A step-by-step plan tailored to the specific task will be created.
    *   **For Code Changes:** The plan will detail:
        *   Affected components/functions in `src/kooti-credit-scoring-visualization.tsx`.
        *   The nature of modifications (e.g., state updates, JSX changes, logic adjustments).
        *   Creation of new components, if necessary.
        *   How the changes will achieve the desired outcome.
        *   Potential impacts and considerations (performance, maintainability).
        *   Mermaid diagrams may be used to illustrate component interactions or data flow if it enhances clarity.
        ```mermaid
        graph TD
            A[User Input] --> B(State Update);
            B --> C{Conditional Logic};
            C -- Path 1 --> D[Render Component X];
            C -- Path 2 --> E[Render Component Y];
        ```
    *   **For Document Changes:** The plan will detail:
        *   Sections of `Kooti CSM Methodology.md` to be refined.
        *   Types of refinements (e.g., structural reorganization, enhancing clarity, adding technical depth, ensuring compliance-focused language, improving flow for regulators).
        *   Specific examples of proposed changes where appropriate.
        *   How the refinements will align with financial compliance writing standards and regulatory expectations.
        *   Mermaid diagrams can be used for visualizing structural changes to the document.
        ```mermaid
        graph LR
            subgraph "Section 3: Business Objectives"
                A[3.1 Strategic Purpose]
                B[3.2 Stakeholder Alignment]
                C[3.3 Regulatory Framework]
            end
            A --> B;
            B --> C;
        ```

4.  **User Review and Approval of Plan:**
    *   The detailed plan will be presented for review.
    *   The plan can be discussed, and adjustments will be made based on feedback. This is a collaborative brainstorming step.

5.  **Plan Documentation (Optional):**
    *   Once the plan is approved, there's an option to write the finalized plan to a new Markdown file for records.

6.  **Execution (Mode Switch and Implementation):**
    *   **For Code Changes:** After plan approval, a switch to "Code" mode will be requested. In that mode, specific code modifications will be provided (e.g., using `apply_diff` for targeted changes to `src/kooti-credit-scoring-visualization.tsx` or `write_to_file` for more extensive rewrites if absolutely necessary, though `apply_diff` is generally preferred).
    *   **For Document Changes:** In "Architect" mode, changes to `.md` files can be proposed directly using tools like `apply_diff` or `write_to_file` to modify `Kooti CSM Methodology.md`.

7.  **Iteration and Refinement:**
    *   After implementation, feedback will be incorporated. The solution will be iterated upon until the desired results are achieved for the specific task.

8.  **Task Completion:**
    *   Once a specific task is completed satisfactorily, this will be confirmed before moving to the next one.

## Key Guidelines:

*   **For code:** Prioritize maintainability, performance, and clarity.
*   **For documentation:** Prioritize compliance standards, technical precision, and regulatory expectations.
*   Think step-by-step through complex problems before implementing solutions.
*   For significant changes, explain the reasoning and provide alternatives.
*   Request additional context if needed to complete a task properly.