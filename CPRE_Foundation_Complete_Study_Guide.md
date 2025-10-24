# CPRE Foundation Level - Complete Study Guide

**Comprehensive Reference for All Chapters**

---

## Table of Contents

1. [Chapter 1: Introduction to Requirements Engineering](#chapter-1-introduction-to-requirements-engineering)
2. [Chapter 2: The 9 Core Principles](#chapter-2-the-9-core-principles)
3. [Chapter 3: Work Products & Documentation](#chapter-3-work-products--documentation)
4. [Chapter 4: Elicitation & Validation Practices](#chapter-4-elicitation--validation-practices)
5. [Chapter 5: RE Process and Working Structure](#chapter-5-re-process-and-working-structure)
6. [Chapter 6: Requirements Management](#chapter-6-requirements-management)
7. [Chapter 7: Tool Support](#chapter-7-tool-support)
8. [Quick Reference Tables](#quick-reference-tables)
9. [Exam Tips](#exam-tips)

---

# CHAPTER 1: Introduction to Requirements Engineering

## Core Definitions

### What is a Requirement?

**Definition:** A requirement is either:
1. A **capability or condition** needed by a **stakeholder** to solve a problem or achieve an objective
2. A **capability or condition** that must be met by a **system** to satisfy a contract, standard, specification, or other formally imposed document

### Three Types of Requirements

#### 1. Functional Requirements
- **What:** Describe WHAT the system should do
- **Examples:**
  - "The system shall allow users to search for products by name"
  - "The ATM shall dispense cash in denominations of $20, $50, and $100"
  - "The app shall send push notifications for new messages"

#### 2. Quality Requirements (Non-Functional)
- **What:** Describe HOW WELL the system performs functions
- **Categories (ISO 25010):**
  - **Performance:** Speed, throughput, response time
  - **Security:** Authentication, authorization, encryption
  - **Usability:** Ease of use, learnability, accessibility
  - **Reliability:** Availability, fault tolerance, recoverability
  - **Maintainability:** Modifiability, testability, modularity
  - **Portability:** Adaptability, installability
  - **Compatibility:** Interoperability, coexistence
  - **Efficiency:** Resource utilization, capacity
- **Examples:**
  - "The system shall respond to user queries within 2 seconds"
  - "The application shall be available 99.9% of the time"
  - "All passwords shall be encrypted using AES-256"

#### 3. Constraints
- **What:** Restrictions on HOW the solution can be designed/implemented
- **Examples:**
  - "Must use Java programming language" (technology constraint)
  - "Must comply with GDPR regulations" (legal constraint)
  - "Budget cannot exceed $500,000" (organizational constraint)
  - "Must integrate with existing SAP system" (integration constraint)
  - "Must be deployed on AWS cloud" (deployment constraint)

---

## Key Concepts

### Product vs Project

| Aspect | Product | Project |
|--------|---------|---------|
| Definition | The solution to a problem | Temporary endeavor to create product |
| Nature | The result/outcome | The process to create it |
| Lifespan | Long-term (years of operation) | Temporary (start and end date) |
| Example | The mobile banking app | The 6-month effort to build the app |

### System vs Context

#### System
- **What:** The solution being developed
- **Boundary:** Separates system from environment
- **Example:** Your mobile banking app

#### Context
- **What:** Everything OUTSIDE the system that interacts with it or influences it
- **Includes:**
  - Users and stakeholders
  - Other systems (APIs, databases, external services)
  - Hardware and infrastructure
  - Regulations and standards
  - Organizational policies
  - Business processes
- **Example for banking app context:**
  - Users (customers)
  - Payment processing systems
  - Bank's core banking system
  - Regulatory requirements (PCI DSS, banking laws)
  - Mobile OS (iOS, Android)

**Critical:** System boundary defines WHAT you're building. Context boundary defines WHAT INFLUENCES it.

---

## Why Requirements Engineering Matters

### The Shocking Statistics

- **80% of software defects** originate in the Requirements Engineering phase
- **Fixing cost multiplier:**
  - Requirements phase: **1x**
  - Design phase: **3-6x**
  - Implementation phase: **10x**
  - Testing phase: **15-40x**
  - Production/Maintenance: **30-100x**

**Translation:** A defect that costs $1 to fix during requirements can cost $100 to fix in production!

### Top Causes of Project Failure

1. **Incomplete requirements** (most common!)
2. **Lack of user involvement**
3. **Unrealistic expectations**
4. **Lack of executive support**
5. **Changing requirements** (without proper management)
6. **Poor planning**
7. **System no longer needed**

**Poor RE is the #1 risk factor for project failure!**

---

## What is Requirements Engineering?

**Definition:** A systematic and disciplined approach to:
1. **Eliciting** requirements (discovering them)
2. **Documenting** requirements (writing them down)
3. **Validating** requirements (checking they're correct)
4. **Managing** requirements (controlling changes)

**Purpose:** Ensure the right system is built to solve the right problem

---

## Core RE Activities

### 1. Elicitation
- **What:** Discovering and gathering requirements from sources
- **Sources:**
  - Stakeholders (interviews, workshops)
  - Documents (existing specs, regulations)
  - Systems (legacy systems, competitors)

### 2. Documentation
- **What:** Recording requirements in structured form
- **Forms:**
  - Natural language
  - Templates (user stories, use cases)
  - Models (diagrams, UML)

### 3. Validation
- **What:** Checking requirements are correct, complete, and meet stakeholder needs
- **Techniques:**
  - Reviews (walkthroughs, inspections)
  - Prototyping
  - Testing

### 4. Management
- **What:** Controlling requirements throughout their lifecycle
- **Activities:**
  - Version control
  - Change management
  - Traceability
  - Prioritization

---

## Requirements Engineer's Role

**NOT just a secretary taking notes!**

**Key responsibilities:**
- Bridge between stakeholders and development team
- Elicit hidden and implicit requirements
- Resolve conflicts between stakeholders
- Document requirements clearly
- Ensure shared understanding
- Validate requirements continuously
- Manage changes systematically
- Prioritize requirements

**Skills needed:**
- Communication (listening, presenting, writing)
- Analysis and critical thinking
- Domain knowledge
- Facilitation and negotiation
- Modeling and documentation
- Tool proficiency

---

# CHAPTER 2: The 9 Core Principles

These principles guide ALL Requirements Engineering work!

---

## Principle 1: Value Orientation

**Statement:** Requirements Engineering creates value

**What it means:**
- Focus on delivering **stakeholder value**, not just completing activities
- Ask "What value does this create?" not "Did I finish the task?"
- Prioritize high-value requirements
- Don't waste time on low-value work

**Examples:**
- ✓ **Good:** Spend 3 hours with key stakeholders understanding critical business needs
- ✗ **Bad:** Spend 3 hours formatting a document that nobody will read

**In practice:**
- Prioritize requirements that deliver most business value
- Use lightweight documentation for low-criticality features
- Invest more effort where it matters most
- Measure success by value delivered, not documents produced

---

## Principle 2: Stakeholders

**Statement:** Stakeholders are the source of requirements

**Who are stakeholders?**
- **Anyone affected by the system** or **who can influence its success**

**Stakeholder categories:**

### By Role:
1. **Users:** People who directly interact with the system
   - End users, operators, administrators
2. **Customers:** People who pay for/order the system
   - May or may not be users!
3. **Developers:** People who build the system
   - Architects, programmers, testers, DevOps
4. **Decision Makers:** People with authority
   - Sponsors, project managers, steering committee
5. **Domain Experts:** People with specialized knowledge
   - Subject matter experts, consultants
6. **Authorities:** Regulatory/legal bodies
   - Government agencies, standards organizations
7. **Opponents:** People who resist the system
   - Don't ignore them - understand their concerns!

### By Attitude (Kano perspective):
- **Direct stakeholders:** Directly affected
- **Indirect stakeholders:** Indirectly affected
- **Representatives:** Speak for others

**Critical tasks:**
1. **Identify ALL relevant stakeholders** (don't miss anyone important!)
2. **Analyze their needs and interests**
3. **Manage conflicts between stakeholders**
4. **Involve stakeholders appropriately** (right people at right time)

**Common mistake:** Only talking to the person who ordered the system, ignoring actual users!

---

## Principle 3: Shared Understanding

**Statement:** Requirements need to be understood by all stakeholders

**What needs shared understanding:**
1. **Context:** What environment does the system operate in?
2. **Problem:** What problem are we solving?
3. **Requirements:** What does the system need to do?
4. **Assumptions:** What are we taking for granted?

**Why it matters:**
- Developer's mental model ≠ Stakeholder's mental model
- Ambiguity = Defects
- No shared understanding = Wrong system built

**How to achieve it:**
- Use multiple representations (text + diagrams)
- Validate understanding (reviews, prototypes)
- Create and use glossary
- Facilitate workshops with diverse stakeholders
- Use examples and scenarios
- Iterative refinement

**Example of lack of shared understanding:**
- Stakeholder: "Fast" means < 1 second
- Developer: "Fast" means < 10 seconds
- Result: Unhappy stakeholder!

---

## Principle 4: Context Matters

**Statement:** Requirements exist in a context

**Two boundaries:**

### System Boundary
- **What:** Separates system from its environment
- **Defines:** What's inside (system) vs. outside (context)
- **Question:** "Is this part of what we're building?"

### Context Boundary
- **What:** Separates relevant context from irrelevant environment
- **Defines:** What influences/interacts with system
- **Question:** "Does this affect our system?"

**Critical activities:**
1. **Define system boundary clearly** (scope!)
2. **Document the context** (context diagrams)
3. **Document assumptions** about the context
4. **Validate assumptions** (they can be wrong!)

**Example:**
- **System:** Hotel booking website
- **System boundary:** The website application itself
- **Context:**
  - Users (guests, hotel managers)
  - Payment gateway
  - Hotel property management systems
  - Email service
  - Legal regulations (GDPR, consumer protection)
  - Competitors
- **Outside context boundary:** The weather, politics (unless travel restrictions)

**Assumptions examples:**
- "Users have internet connection" (assumption about context)
- "Payment gateway API is available 24/7" (assumption about context)
- "Credit card is primary payment method" (assumption about users)

**Risk:** If assumptions are wrong, requirements may be invalid!

---

## Principle 5: Problem-Solution-Requirement

**Statement:** Requirements, problems, and solutions are intertwined

**The relationship:**
- They're **not sequential** (Problem → Requirements → Solution)
- They're **iterative and interrelated**
- Understanding one helps understand the others

**The cycle:**
```
Problem ↔ Requirements ↔ Solution
   ↑                        ↓
   └────────────────────────┘
```

**What it means in practice:**
1. **Problem influences requirements:** Understanding the problem better reveals new requirements
2. **Solution influences requirements:** Knowing technical possibilities changes requirements
3. **Requirements clarify problem:** Writing requirements helps understand the problem better

**Example:**
- **Problem:** Customers complain checkout takes too long
- **Initial requirement:** "Reduce checkout time"
- **Solution exploration:** Payment API has limitations
- **Refined requirement:** "Reduce checkout to 3 clicks, pre-populate shipping info from account"
- **Better problem understanding:** Real issue is data entry, not processing time

**Key insight:** You'll refine your understanding of ALL three throughout the project!

---

## Principle 6: Validation

**Statement:** Requirements must be validated

**Critical truth:** **Non-validated requirements are useless!**

**Why validate:**
- Catch errors early (cheapest to fix!)
- Ensure requirements meet stakeholder needs
- Build confidence in requirements quality
- Prevent building the wrong system

**When to validate:**
- **Early:** As soon as requirements are written
- **Often:** Repeatedly throughout development
- **From multiple perspectives:** Different stakeholders, different aspects

**What to validate:**
1. **Content correctness:** Is it the right requirement?
2. **Documentation quality:** Is it well-written?
3. **Agreement:** Do stakeholders accept it?

**Validation techniques:**
- Reviews (informal, walkthroughs, inspections)
- Prototyping
- Simulations
- User acceptance testing
- Pilot studies

**Common mistake:** Assuming requirements are correct without validation!

---

## Principle 7: Evolution

**Statement:** Requirements evolve over time

**Key truth:** **Change is NORMAL, not exceptional!**

**Why requirements change:**
- Business processes change
- Market conditions shift
- New regulations introduced
- Technology evolves
- Stakeholder understanding improves
- Competitors launch new features
- User feedback reveals better solutions
- Errors discovered

**What to do:**
1. **Accept that change will happen** (don't fight it!)
2. **Plan for change** (processes, tools)
3. **Manage change systematically** (change control)
4. **Document reasons for changes** (traceability)
5. **Assess impact of changes** (what else is affected?)
6. **Communicate changes** (keep everyone informed)

**Agile perspective:** "Welcome changing requirements, even late in development"

**Traditional perspective:** Control changes through formal change management process

**Both agree:** Change WILL happen; you need a way to handle it!

---

## Principle 8: Innovation

**Statement:** Requirements Engineering creates opportunities for innovation

**What it means:**
- Don't just document what stakeholders SAY they want
- Go beyond stated needs to find unstated desires
- Look for opportunities to delight stakeholders
- Question assumptions and constraints

**Kano model connection:**
- **Don't stop at satisfiers** (stated needs)
- **Look for delighters** (unstated desires that wow them)

**How to be innovative:**
1. **Ask "why?"** repeatedly (understand root needs)
2. **Challenge constraints:** "Must we really do it that way?"
3. **Benchmark competitors** (what's the state of the art?)
4. **Involve creative stakeholders**
5. **Prototype and experiment**
6. **Look for analogies** (how is this solved elsewhere?)

**Example:**
- Stakeholder says: "I want a way to pay bills online"
- You ask why: "To save time going to the bank"
- Innovation: "What if bills are paid automatically and you just review exceptions?"
- Result: Auto-pay feature - something they didn't ask for but solves underlying need better!

**Balance:** Innovation vs. scope creep (innovate within constraints!)

---

## Principle 9: Systematic and Disciplined Work

**Statement:** Requirements Engineering must be done systematically and with discipline

**What it means:**
- Use a **structured approach** (not ad-hoc!)
- Follow **proven practices** and techniques
- Be **consistent** in methods
- **Document** your work
- Use **appropriate tools**
- Apply **quality criteria**

**NOT about being bureaucratic:**
- Systematic ≠ Heavyweight
- Disciplined ≠ Inflexible
- Structured ≠ Slow

**What systematic means:**
- Reproducible process
- Clear responsibilities
- Defined work products
- Quality checks at each step
- Traceability throughout

**Adapt to context:**
- Safety-critical system? More rigor!
- Startup MVP? Lighter weight!
- But ALWAYS systematic relative to context

**Example:**
- ✓ **Systematic:** Use consistent template for all user stories, review with product owner, track in backlog
- ✗ **Ad-hoc:** Write requirements on sticky notes, lose some, forget to review

---

# CHAPTER 3: Work Products & Documentation

## What are Work Products?

**Definition:** Results of RE activities

**Examples:**
- Requirements specifications
- User stories
- Use cases
- Models (diagrams)
- Prototypes
- Glossaries
- Vision documents
- Product backlogs

---

## Three Documentation Forms

### 1. Natural Language

**Advantages:**
- ✓ Universal - everyone can read it
- ✓ Extremely expressive and flexible
- ✓ No special training required
- ✓ Can express anything

**Disadvantages:**
- ✗ Ambiguous (multiple interpretations)
- ✗ Hard to find defects
- ✗ Difficult to maintain consistency
- ✗ Verbose

**When to use:**
- Broad stakeholder audience
- Complex domain-specific requirements
- Human-centric requirements (usability, user experience)

---

### 2. Templates

**Three types:**

#### A) Phrase Templates
Single sentence structure for individual requirements

**ISO 29148 Template:**
```
[<Condition>] <Subject> <Action> <Object> [<Restriction>]
```

**Example:**
"When a valid card is sensed, the system shall display the 'Enter PIN' message on the dialog screen within 200 ms"

**Auxiliary verbs:**
- **Shall** = Mandatory requirement
- **Should** = Desired but not mandatory
- **May** = Optional/suggestion
- **Will** = Factual statement (not a requirement)

**EARS Templates:**

1. **Ubiquitous** (always true):
   ```
   The <system> shall <response>
   ```
   Example: "The ATM shall encrypt all PIN entries"

2. **Event-driven** (triggered by event):
   ```
   WHEN <trigger> the <system> shall <response>
   ```
   Example: "WHEN user clicks Submit, the system shall validate all form fields"

3. **Unwanted behavior** (error handling):
   ```
   IF <condition>, THEN the <system> shall <response>
   ```
   Example: "IF password is incorrect, THEN the system shall display error message and lock account after 3 attempts"

4. **State-driven** (depends on state):
   ```
   WHILE <in state>, the <system> shall <response>
   ```
   Example: "WHILE user is logged in, the system shall display logout button"

5. **Optional feature** (may or may not be included):
   ```
   WHERE <feature is included>, the <system> shall <response>
   ```
   Example: "WHERE premium subscription is active, the system shall allow unlimited downloads"

#### B) Form Templates
Pre-defined fields to fill in

**User Story Template:**
```
As a <role>
I want <capability>
So that <benefit>
```

**Example:**
```
As a bank customer
I want to view my transaction history
So that I can track my spending
```

**Acceptance criteria:**
- Given [context]
- When [action]
- Then [outcome]

**Use Case Template (Cockburn format):**
- **Title:** Brief description
- **Primary Actor:** Who initiates
- **Goal:** What they want to achieve
- **Preconditions:** What must be true before
- **Trigger:** What starts the use case
- **Main Success Scenario:** Step-by-step happy path
- **Extensions:** Alternative flows, error handling
- **Postconditions:** What's true after

#### C) Document Templates
Structure for entire document

**Example: System Requirements Specification**

1. **Introduction**
   - Purpose
   - Scope
   - Stakeholders
   - References

2. **System Overview**
   - Vision and goals
   - Context and boundary
   - Overall structure
   - User characteristics

3. **System Requirements**
   - Functional requirements (organized by feature/component)
   - Quality requirements
   - Constraints
   - Interfaces

4. **Glossary**

5. **Appendices**

**Popular templates:**
- ISO/IEC/IEEE 29148
- Volere template (Robertson & Robertson)
- Customer-specific templates

**Advantages of templates:**
- ✓ Clear structure
- ✓ Consistency
- ✓ Completeness (less likely to forget things)
- ✓ Easier to review

**Disadvantages:**
- ✗ Can be used mechanically (focus on form, not content)
- ✗ May constrain thinking
- ✗ Things that don't fit template may be omitted

---

### 3. Models

**Definition:** Abstract representation of reality

**Purpose:**
- Provide overview
- Show relationships
- Focus on specific aspects
- Visual communication

**Four key perspectives:**

#### A) Context Models
Show system boundary and external entities

**Context Diagram:**
```
[External System 1] ← → [Your System] ← → [External System 2]
        ↑                                          ↑
        └───────── [Users] ──────────────┘
```

**Shows:**
- What's outside the system
- What interacts with the system
- System boundary (clear scope!)

#### B) Structure Models
Show static structure (data, objects, components)

**Class Diagram (UML):**
- Classes (entities)
- Attributes (data fields)
- Operations (methods)
- Relationships (associations, inheritance, composition)

**Example:**
```
┌─────────────┐         ┌─────────────┐
│  Customer   │1      * │    Order    │
├─────────────┤────────>├─────────────┤
│ customerId  │ places  │ orderId     │
│ name        │         │ orderDate   │
│ email       │         │ totalAmount │
└─────────────┘         └─────────────┘
```

**ER Diagram (Entity-Relationship):**
Similar to class diagram but database-focused

#### C) Functional Models
Show behavior and processes

**Activity Diagram (UML):**
- Shows workflow/process
- Activities (rounded rectangles)
- Decision points (diamonds)
- Start/end nodes (circles)
- Swim lanes (who does what)

**Use Case Diagram (UML):**
- Actors (stick figures)
- Use cases (ovals)
- System boundary (box)
- Relationships (lines)

**Example:**
```
     User
      |
      | (interacts)
      |
  [Login] ──extends──> [Login with 2FA]
      |
  includes
      ↓
[Validate Credentials]
```

#### D) Behavioral Models
Show dynamic behavior and state changes

**State Machine Diagram:**
- States (rounded rectangles)
- Transitions (arrows)
- Events (labels on transitions)
- Initial state (filled circle)
- Final state (bull's eye)

**Example: Order State Machine**
```
(●) → [Draft] --submit--> [Pending] --approve--> [Confirmed] --ship--> [Shipped] --deliver--> (◉)
                             |                         |
                             └──reject--> [Cancelled]──┘
```

**Sequence Diagram:**
Shows interaction between objects over time
- Lifelines (vertical dashed lines)
- Messages (horizontal arrows)
- Activation boxes (rectangles on lifelines)

**Example:**
```
User          System         Database
  |              |               |
  |--login()---->|               |
  |              |--query user-->|
  |              |<--user data---|
  |<--success----|               |
```

**Model Advantages:**
- ✓ Visual (easier to understand relationships)
- ✓ Focus on specific aspects
- ✓ More precise than natural language
- ✓ Overview of complex systems
- ✓ Can be validated/simulated

**Model Disadvantages:**
- ✗ Learning curve (need to know notation)
- ✗ Not everyone can read them
- ✗ Abstract (may miss details)
- ✗ Can oversimplify

**UML Notes:**
- **Cannot show in class diagrams:** States, sequences, activities (need specific diagram types!)
- **Can show in class diagrams:** Associations, multiplicities, attributes, operations, inheritance

---

## Natural Language - Rules and Pitfalls

### Rules for Good Requirements

1. **Write short sentences**
   - One requirement = One sentence
   - Keep it simple

2. **Use well-structured sentences**
   - Clear subject, verb, object
   - Complete thoughts

3. **Define and use uniform terminology**
   - Create glossary
   - Be consistent

4. **Avoid vague terms**
   - ✗ Bad: "fast," "user-friendly," "robust"
   - ✓ Good: "responds within 2 seconds," "80% of users complete task without help"

### Things to AVOID

#### 1. Incomplete Descriptions
✗ **Bad:** "The system shall give the data"
- Who gives? What data? To whom?

✓ **Good:** "The system shall give the transaction history data to the authenticated user"

#### 2. Unspecific Nouns
✗ **Bad:** "The user," "the data," "the system"
- Which user? What data?

✓ **Good:** "The bank customer," "the transaction records," "the mobile app"

#### 3. Incomplete Conditions
✗ **Bad:** "When button is pressed, show message"
- What if button press fails? What if user isn't logged in?

✓ **Good:** "When submit button is pressed AND form is valid, show success message; OTHERWISE show validation errors"

#### 4. Incomplete Comparisons
✗ **Bad:** "The new system shall be faster"
- Faster than what?

✓ **Good:** "The new system shall process transactions 50% faster than the legacy system"

### Things to Use WITH CARE

#### 1. Passive Voice
✗ **Risky:** "The data shall be validated"
- Who validates it? System or user?

✓ **Better:** "The system shall validate the data"

#### 2. Universal Quantifiers (all, always, never, every, none)
✗ **Risky:** "The system shall ALWAYS respond within 2 seconds"
- Really? Even during maintenance? Database outage? 10,000 concurrent users?

✓ **Better:** "Under normal operating conditions (< 1000 concurrent users), the system shall respond within 2 seconds in 95% of cases"

**Caution:** True universal properties are RARE in technical systems!

#### 3. Nominalizations (nouns from verbs)
✗ **Risky:** "After successful authentication, grant access"
- How does authentication work? (hidden requirement!)

✓ **Better:** 
- REQ-1: "The system shall authenticate users via username and password"
- REQ-2: "After successful authentication, the system shall grant access to user dashboard"

---

## Glossary

**Definition:** Consistent definitions of terms used in requirements

**Why you need one:**
- Eliminates ambiguity
- Creates shared understanding
- Ensures consistency
- Reference for stakeholders

**What to include:**
- Domain-specific terms
- Acronyms
- Abbreviations
- Terms with multiple meanings
- Technical jargon

**Example entries:**
- **Customer:** An individual or organization that purchases products (not the same as User)
- **User:** An individual who interacts with the system (may or may not be a Customer)
- **Transaction:** A single financial operation (deposit, withdrawal, transfer)
- **SLA:** Service Level Agreement - contractual commitment for service quality

**Best practices:**
- Create glossary early
- Update continuously
- Reference from requirements
- Get stakeholder agreement on definitions

---

## Quality Criteria

### For Individual Requirements

A good requirement must be:

1. **Unambiguous**
   - Only ONE interpretation possible
   - ✗ "The system shall be fast"
   - ✓ "The system shall respond within 2 seconds"

2. **Complete**
   - All necessary information present
   - All conditions specified
   - All exceptions handled

3. **Consistent**
   - Doesn't contradict other requirements
   - Uses terminology consistently

4. **Atomic**
   - Specifies ONE thing
   - Can't be broken down further meaningfully

5. **Traceable**
   - Has unique identifier
   - Source is documented
   - Can track to design/code/tests

6. **Testable/Verifiable**
   - Can prove it's implemented
   - ✗ "The system shall be user-friendly"
   - ✓ "80% of users shall complete checkout in < 3 clicks"

7. **Feasible**
   - Technically possible
   - Within constraints (budget, time, technology)

8. **Necessary**
   - Actually needed
   - Adds value
   - Not gold-plating

### For Work Products (Collections of Requirements)

A good requirements document must be:

1. **Agreed**
   - Stakeholders have accepted it
   - Formal approval obtained

2. **Understandable**
   - Clear to intended audience
   - Appropriate level of detail
   - Good structure

3. **Unambiguous**
   - No conflicting interpretations
   - Terms well-defined

4. **Complete**
   - Nothing important missing
   - All aspects covered
   - All exceptions handled

5. **Consistent**
   - No contradictions
   - Uniform terminology
   - Consistent format

6. **Modifiable**
   - Easy to change
   - Good structure
   - Not overly complex
   - Minimal redundancy

7. **Traceable**
   - Requirements have IDs
   - Can trace forward (to design/code/tests)
   - Can trace backward (to sources/stakeholders)

8. **Testable/Verifiable**
   - Can verify each requirement is implemented
   - Acceptance criteria defined

---

## Prototypes

**Definition:** Early version of system (or part of it)

**Types:**

### 1. Exploratory/Throwaway Prototype
- Built for learning and validation
- DISCARDED after feedback
- Quick and dirty
- Focus on critical uncertainties

### 2. Evolutionary Prototype
- Built and continuously improved
- BECOMES the final product
- Start simple, add features iteratively
- Each iteration is usable

**When to use prototypes:**
- High uncertainty
- Complex user interfaces
- Innovative features
- Difficult to specify in words
- Stakeholders can't visualize from text

**Benefits:**
- Get early feedback
- Validate understanding
- Uncover hidden requirements
- Reduce risk

---

# CHAPTER 4: Elicitation & Validation Practices

## 4.1 Requirements Sources

### Three Main Sources

#### 1. Stakeholders (MOST IMPORTANT!)
- Primary source
- Users, customers, domain experts, managers
- Have knowledge about needs, problems, goals

#### 2. Documents
- Existing specifications
- Business process documentation
- Regulations and standards
- Competitor analysis
- Meeting minutes
- Contracts

#### 3. Systems
- **Existing systems (archaeology):**
  - Legacy systems being replaced
  - Current manual processes
  - Competitor products
- **Related systems:**
  - Systems to interface with
  - Similar systems in other domains

---

## 4.2 Kano Model (CRITICAL!)

**Purpose:** Classify requirements by impact on satisfaction

### Three Categories

#### 1. Dissatisfiers (Basic/Must-Have)
- **Subconscious expectations**
- If MISSING → Extremely dissatisfied
- If PRESENT → Neutral (expected!)
- Customers assume these exist
- Often NOT mentioned by stakeholders!

**Examples:**
- Car has brakes
- Website is secure
- ATM returns your card
- App doesn't crash
- Phone makes calls

**How to find them:**
- **Observation:** Watch users in natural environment
- **Field studies:** See what they assume
- **Archaeology:** Study existing systems
- **Ask:** "What would make this UNACCEPTABLE?"

#### 2. Satisfiers (Performance/One-Dimensional)
- **Conscious desires**
- More = Better satisfaction
- Less = More dissatisfaction
- Linear relationship
- Explicitly requested

**Examples:**
- Faster response time
- More storage space
- Better image quality
- More features
- Lower price

**How to find them:**
- **Interviews:** Ask directly what they want
- **Questionnaires:** Survey many users
- **Workshops:** Discuss and prioritize
- **Ask:** "What do you want the system to do?"

#### 3. Delighters (Exciters/Attractive)
- **Unconscious desires**
- If MISSING → Neutral (not expected)
- If PRESENT → Extremely satisfied! (WOW factor)
- Unexpected benefits
- Create competitive advantage

**Examples:**
- Amazon's 1-click ordering (when new)
- Tesla's autopilot
- Spotify's Discover Weekly
- Free shipping
- Real-time collaboration (Google Docs)

**How to find them:**
- **Creativity techniques:** Brainstorming, design thinking
- **Prototyping:** Try innovative ideas
- **Competitor analysis:** What's innovative elsewhere?
- **Ask:** "What would DELIGHT you?"

**Important notes:**
- Delighters become satisfiers over time (then dissatisfiers!)
  - Example: Smartphone touchscreen (delighter → expected)
- Must have ALL dissatisfiers (non-negotiable)
- Balance satisfiers (can't have everything)
- Add delighters when possible (differentiation!)

---

## 4.3 Elicitation Techniques

### Gathering Techniques

#### 1. Interviews

**What:** One-on-one conversation with stakeholder

**Types:**
- **Structured:** Fixed questions (like questionnaire)
- **Semi-structured:** Key topics but flexible
- **Unstructured:** Open exploration

**Advantages:**
- ✓ Deep insights
- ✓ Flexible (can probe deeper)
- ✓ Personal rapport
- ✓ Can observe body language
- ✓ Confidential (sensitive topics)

**Disadvantages:**
- ✗ Time-consuming (one person at a time)
- ✗ Expensive
- ✗ Interviewer bias possible
- ✗ Requires skilled interviewer
- ✗ Difficult to schedule busy stakeholders

**Best for:**
- Key stakeholders
- Controversial topics
- Detailed exploration
- Building trust

**Tips:**
- Prepare questions but stay flexible
- Listen more than talk
- Ask "why?" to understand root needs
- Use open-ended questions
- Record (with permission) or take notes
- Follow up on interesting points

#### 2. Questionnaires

**What:** Written questions distributed to many stakeholders

**Types:**
- **Closed questions:** Multiple choice, rating scales
- **Open questions:** Free text responses

**Advantages:**
- ✓ Reach MANY people quickly
- ✓ Cost-effective
- ✓ Quantitative data (statistics)
- ✓ Anonymous (honest feedback)
- ✓ Geographic distribution easy

**Disadvantages:**
- ✗ No flexibility (can't probe deeper)
- ✗ Low response rates
- ✗ Misunderstood questions can't be clarified
- ✗ Superficial answers
- ✗ Can't observe reactions

**Best for:**
- Large user base
- Statistical validation
- Prioritization data
- Market research
- User preferences

**Tips:**
- Keep it short
- Test with small group first
- Mix question types
- Make it easy to complete
- Incentivize completion
- Follow up on interesting responses with interviews

#### 3. Workshops

**What:** Facilitated meeting with multiple stakeholders

**Advantages:**
- ✓ **Synergy:** Ideas trigger more ideas
- ✓ Build shared understanding
- ✓ Resolve conflicts in real-time
- ✓ Efficient (multiple people at once)
- ✓ Commitment (group agreement)

**Disadvantages:**
- ✗ Difficult to schedule (coordinate calendars)
- ✗ Dominant personalities may overshadow others
- ✗ Groupthink risk
- ✗ Requires skilled facilitator
- ✗ Expensive (many people's time)

**Best for:**
- Conflicting requirements
- Collaborative design
- Prioritization
- Vision alignment
- Complex problems needing diverse input

**Workshop types:**
- Requirements workshops
- JAD (Joint Application Design)
- Design thinking sessions
- Prioritization workshops
- Validation reviews

**Tips:**
- Clear agenda
- Skilled facilitator (neutral!)
- Right participants (not too many)
- Time-boxed
- Visual aids (whiteboards, sticky notes)
- Document results immediately
- Parking lot for off-topic items

#### 4. Observation

**What:** Watch users in their natural environment

**Also called:**
- Ethnographic studies
- Field studies
- Contextual inquiry
- Shadowing

**Advantages:**
- ✓ See ACTUAL behavior (not what they say they do!)
- ✓ Discover implicit requirements (dissatisfiers)
- ✓ Understand context deeply
- ✓ Uncover workarounds and pain points
- ✓ No user bias ("I always do it correctly")

**Disadvantages:**
- ✗ Time-consuming
- ✗ Observer effect (people act differently when watched)
- ✗ May see rare cases or non-representative users
- ✗ Privacy concerns
- ✗ Can't see thought processes

**Best for:**
- Understanding current processes
- Finding dissatisfiers
- Complex workflows
- Usability requirements
- When users "don't know what they don't know"

**Tips:**
- Get permission
- Be unobtrusive
- Take notes continuously
- Ask clarifying questions after (not during interruptions)
- Observe multiple users/scenarios
- Look for pain points and workarounds

#### 5. Apprenticing

**What:** Work AS the user yourself

**Advantages:**
- ✓ Deep empathy
- ✓ Experience pain points firsthand
- ✓ No observer effect
- ✓ Can try different approaches

**Disadvantages:**
- ✗ Very time-consuming
- ✗ Not feasible for all domains (e.g., can't be a pilot!)
- ✗ You're not typical user
- ✗ May not be allowed (security, competence)

**Best for:**
- Routine, learnable tasks
- When deep understanding needed
- Redesigning workflows

#### 6. System Archaeology

**What:** Dig through existing systems/documents

**Sources:**
- Legacy code
- Database schemas
- Old documentation
- Support tickets
- User manuals
- Training materials
- Email archives

**Advantages:**
- ✓ Discover hidden requirements
- ✓ Understand current system
- ✓ No need for stakeholder time
- ✓ Find edge cases

**Disadvantages:**
- ✗ Documentation often outdated/wrong
- ✗ Time-consuming
- ✗ May perpetuate old mistakes
- ✗ Can't ask questions

**Best for:**
- System replacement projects
- Understanding existing functionality
- Finding forgotten requirements

---

### Creative Techniques

#### 1. Brainstorming

**What:** Free-flowing idea generation in group

**Rules:**
1. **No criticism** (defer judgment)
2. **Quantity over quality** (more ideas = better)
3. **Wild ideas welcome** (think outside box)
4. **Build on others' ideas** (combine, improve)

**Process:**
1. Define problem/goal clearly
2. Generate ideas (15-30 minutes)
3. Clarify ideas
4. Evaluate and select best

**Advantages:**
- ✓ Many ideas quickly
- ✓ Creative thinking
- ✓ Team building
- ✓ Breaks assumptions

**Disadvantages:**
- ✗ Can be chaotic
- ✗ Needs facilitation
- ✗ May not find practical solutions
- ✗ Dominant personalities risk

**Best for:**
- Finding delighters
- Innovative solutions
- Breaking out of current thinking
- Early exploration

**Variations:**
- Brainwriting (silent, written)
- 6-3-5 method (6 people, 3 ideas, 5 minutes)
- Mind mapping

#### 2. Prototyping (Already Covered)

**Purpose:** Make ideas concrete and testable

**Types:**
- Paper prototypes (sketches)
- Clickable wireframes
- Interactive mockups
- Working code (MVP)

**Use in elicitation:**
- Show possibilities
- Get concrete feedback
- Discover hidden requirements
- Validate understanding

---

## 4.4 Conflict Resolution

### Six Types of Conflicts

#### 1. Subject Matter Conflict (Content/Facts)

**What:** Disagreement about factual content

**Examples:**
- "System needs 99.9% uptime" vs. "99% is sufficient"
- "Response time must be < 1 second" vs. "< 5 seconds is fine"
- Different interpretations of regulations

**How to resolve:**
- **Research:** Find objective data
- **Consult experts:** Get authoritative answer
- **Test:** Prototype and measure
- **Reference standards:** Check regulations, industry norms

**Difficulty:** Usually easiest to resolve (facts can be verified)

#### 2. Data Conflict (Information)

**What:** Missing, incomplete, or differently interpreted information

**Examples:**
- Stakeholders have different numbers
- Outdated information
- Incomplete data
- Contradictory sources

**How to resolve:**
- **Gather more data:** Fill information gaps
- **Clarify sources:** Which data is authoritative?
- **Update information:** Get latest data
- **Validate data:** Check accuracy

**Difficulty:** Easy to moderate (just need good data)

#### 3. Interest Conflict (Goals)

**What:** Stakeholders have different goals

**Examples:**
- Marketing wants features, IT wants stability
- Users want ease of use, security wants strong authentication
- Sales wants low price, finance wants profit
- Project manager wants speed, quality team wants thorough testing

**How to resolve:**
- **Find shared interests:** What do all stakeholders want?
- **Negotiate trade-offs:** Give and take
- **Prioritize:** Which goal is more important?
- **Creative solutions:** Win-win if possible
- **Escalate:** Let higher authority decide

**Difficulty:** Moderate to hard (requires negotiation)

#### 4. Value Conflict (Principles/Beliefs)

**What:** Different fundamental values or principles

**Examples:**
- Privacy vs. convenience
- Security vs. usability
- Innovation vs. risk aversion
- Open source vs. proprietary
- Environmental vs. cost concerns

**How to resolve:**
- **Find higher values:** What value do all share?
- **Respect differences:** Acknowledge both valid
- **Seek compromise:** Balance where possible
- **Escalate:** Senior stakeholder decides
- **Document:** Record the decision and rationale

**Difficulty:** HARDEST! (values are deeply held)

#### 5. Relationship Conflict (Personal)

**What:** Poor relationship between stakeholders

**Examples:**
- Past negative experiences
- Personality clashes
- Lack of trust
- Communication issues
- Organizational politics

**How to resolve:**
- **Separate people from problem:** Focus on issues, not personalities
- **Use neutral facilitator:** Third party mediation
- **Individual meetings:** Talk separately, then together
- **Build trust:** Small collaborative wins first
- **Escalate if necessary:** Management intervention

**Difficulty:** Hard (emotional, not rational)

**Prevention:** Build good relationships early!

#### 6. Structural Conflict (Power/Resources)

**What:** Unequal power, authority, resources, or access

**Examples:**
- Different organizational levels
- Resource competition (budget, people, time)
- Different access to information
- Formal authority differences
- Geographic/time zone issues

**How to resolve:**
- **Escalate:** Higher authority with power to decide
- **Change structure:** Reorganize if possible
- **Allocate resources:** Get more budget/time/people
- **Level playing field:** Ensure equal access to information

**Difficulty:** Moderate to hard (often organizational)

---

### Five Resolution Techniques

#### 1. Agreement (Consensus)

**What:** Discuss until everyone genuinely agrees

**Process:**
- Open discussion
- Listen to all perspectives
- Explore options
- Refine until acceptable to all

**Advantages:**
- ✓ Strong buy-in
- ✓ Best quality decision (all input considered)
- ✓ No losers

**Disadvantages:**
- ✗ VERY time-consuming
- ✗ May not be possible
- ✗ Can lead to groupthink

**Best for:**
- Critical decisions
- When you need strong commitment
- Small group
- When time allows

#### 2. Compromise

**What:** Each party gives up something, meets in middle

**Examples:**
- "Let's do 99.5% uptime" (between 99% and 99.9%)
- "Include feature in Phase 2" (not now, but later)
- "Reduced scope for faster delivery"

**Advantages:**
- ✓ Fair feeling
- ✓ Acceptable to all
- ✓ Faster than full agreement

**Disadvantages:**
- ✗ May not be optimal solution
- ✗ Everyone partially unhappy
- ✗ Can weaken requirements

**Best for:**
- Negotiable items
- When time is limited
- Equal power stakeholders

#### 3. Voting

**What:** Each stakeholder votes, majority wins

**Types:**
- Simple majority (>50%)
- Supermajority (>66%)
- Weighted voting (some votes count more)

**Advantages:**
- ✓ Fast
- ✓ Democratic
- ✓ Clear decision

**Disadvantages:**
- ✗ Minority dissatisfied
- ✗ May not be best solution
- ✗ Can damage relationships
- ✗ Assumes equal expertise

**Best for:**
- Many stakeholders
- Time pressure
- When other methods failed
- Democratic context

#### 4. Overruling (Authority Decision)

**What:** Person with authority makes final decision

**Who decides:**
- Project manager
- Product owner
- Sponsor
- Steering committee
- Requirements Engineer (if given authority)

**Advantages:**
- ✓ VERY fast
- ✓ Clear accountability
- ✓ Works when others fail

**Disadvantages:**
- ✗ Losers unhappy
- ✗ Low buy-in from overruled parties
- ✗ May be suboptimal (one person's view)
- ✗ Can damage relationships

**Best for:**
- Deadlocked situations
- Time-critical decisions
- Clear authority exists
- After other methods tried

#### 5. Variants (Implement Both)

**What:** Build both alternatives

**Examples:**
- Support multiple file formats
- Provide both simple and advanced modes
- Build both web and mobile interfaces
- Allow user to choose preference

**Advantages:**
- ✓ No losers (everyone gets their way!)
- ✓ Flexibility for users
- ✓ May discover one is better

**Disadvantages:**
- ✗ EXPENSIVE (double work)
- ✗ More complex
- ✗ Harder to maintain
- ✗ May confuse users

**Best for:**
- Low cost to implement both
- Valid use cases for both
- User preference matters
- Experimentation (A/B testing)

---

## 4.5 Validation Techniques

**Remember Principle 6:** Non-validated requirements are useless!

**Four Critical Aspects:**

1. **Involve the right stakeholders**
   - Those who know if requirements are correct
   - Those who will be affected
   - Those with authority to approve

2. **Separate finding from fixing**
   - First: IDENTIFY problems
   - Later: CORRECT problems
   - Don't try to fix during validation meeting!

3. **Validate from different views**
   - Content (is it right?)
   - Quality (is it well-documented?)
   - Agreement (do stakeholders accept?)

4. **Validate repeatedly**
   - Not once and done!
   - Validate early and often
   - Re-validate after changes

---

### Review Techniques (Static)

#### 1. Informal Review

**What:** Author sends to reviewers, gets feedback informally

**Process:**
1. Author completes work product
2. Sends to reviewers
3. Reviewers examine (independently)
4. Provide feedback (email, comments, meeting)
5. Author incorporates feedback
6. May repeat

**Advantages:**
- ✓ VERY fast
- ✓ Low overhead
- ✓ Flexible
- ✓ Can do continuously

**Disadvantages:**
- ✗ Informal (may miss issues)
- ✗ No structured process
- ✗ May not be thorough
- ✗ Reviewer quality varies

**Best for:**
- Work in progress
- Quick feedback cycles
- Agile environments
- Low criticality

#### 2. Walkthrough

**What:** Author presents work to reviewers in meeting

**Process:**
1. Author schedules meeting
2. Prepares presentation
3. Walks through work product
4. Reviewers ask questions
5. Discuss issues
6. Document findings

**Roles:**
- **Author:** Presents (active role!)
- **Reviewers:** Question and critique
- **Scribe:** Takes notes

**Advantages:**
- ✓ Interactive discussion
- ✓ Author can explain
- ✓ Builds shared understanding
- ✓ Faster than inspection

**Disadvantages:**
- ✗ Author may be defensive
- ✗ Less thorough than inspection
- ✗ Can take long time
- ✗ May become design meeting

**Best for:**
- Complex requirements needing explanation
- Educational (teach reviewers)
- Medium criticality

**Scrum connection:** Sprint Review is essentially a walkthrough!

#### 3. Inspection (Most Formal)

**What:** Rigorous, process-driven review

**Process:**
1. **Planning:** Select inspectors, distribute materials
2. **Overview meeting:** Author explains context (optional)
3. **Individual preparation:** Each inspector reviews using checklists (CRITICAL!)
4. **Inspection meeting:** 
   - Moderator leads
   - Go through work product systematically
   - Author LISTENS only (doesn't defend!)
   - Document all defects
   - NO fixing during meeting!
5. **Rework:** Author fixes issues
6. **Follow-up:** Verify fixes

**Roles:**
- **Moderator:** Leads process (NOT the author!)
- **Author:** Listens, explains only when asked
- **Inspectors:** Find defects (3-6 people)
  - Each has specific focus (standards, technical, domain, etc.)
- **Scribe:** Records issues

**Checklists used:**
- Completeness checks
- Quality criteria
- Standards compliance
- Common defects

**Advantages:**
- ✓ MOST thorough
- ✓ Finds most defects
- ✓ Measurable (metrics)
- ✓ Proven effectiveness
- ✓ Formal audit trail

**Disadvantages:**
- ✗ Time-consuming
- ✗ Expensive (many people)
- ✗ Requires training
- ✗ Can be intimidating
- ✗ Heavy process

**Best for:**
- Safety-critical systems
- Contractual requirements
- Baseline approval
- High-stakes decisions
- Regulatory compliance

**Scrum connection:** Refinement and Planning incorporate inspection elements

---

### Exploratory Techniques (Dynamic)

#### 1. Prototyping

**What:** Build working version, get hands-on feedback

**Types:**
- Paper prototypes
- Wireframes (clickable)
- Working software (partial functionality)
- Wizard of Oz (fake backend)

**Process:**
1. Build prototype
2. Users try it
3. Observe and gather feedback
4. Refine or discard

**Advantages:**
- ✓ Concrete (not abstract)
- ✓ User experience validated
- ✓ Finds usability issues
- ✓ Discovers missing requirements
- ✓ Fun and engaging

**Disadvantages:**
- ✗ Can be time-consuming to build
- ✗ Users may think it's done ("just add data!")
- ✗ May focus on UI over logic
- ✗ Effort may be wasted (throwaway)

**Best for:**
- User interfaces
- Innovative features
- High uncertainty
- When users can't articulate needs

#### 2. Alpha Testing

**What:** Testing at DEVELOPER site in controlled environment

**Characteristics:**
- Developers' location
- Selected users
- Controlled conditions
- Developers present
- Can observe and fix immediately

**Advantages:**
- ✓ Controlled environment
- ✓ Can debug immediately
- ✓ Developers learn
- ✓ Test before public release

**Disadvantages:**
- ✗ Not real user environment
- ✗ Users may be on best behavior
- ✗ Limited scenarios

**Best for:**
- Early validation
- Major features
- Before beta release

#### 3. Beta Testing

**What:** Testing at USER site in real environment

**Characteristics:**
- Users' locations
- Real usage conditions
- Many users
- Developers not present
- Users report issues

**Advantages:**
- ✓ Real environment
- ✓ Real usage patterns
- ✓ Many users = more coverage
- ✓ Uncovers edge cases

**Disadvantages:**
- ✗ Less control
- ✗ Harder to debug
- ✗ Risk of bad publicity
- ✗ Support overhead

**Best for:**
- Near-final product
- Consumer software
- Broad user base
- Before production release

#### 4. A/B Testing

**What:** Compare two variants to see which performs better

**Process:**
1. Create variant A and variant B
2. Randomly assign users to each
3. Measure metrics (conversion, time, errors, etc.)
4. Statistical analysis
5. Choose winner

**Examples:**
- Button color (green vs. blue)
- Checkout flow (1 page vs. 3 pages)
- Pricing display
- Call-to-action text

**Advantages:**
- ✓ Data-driven decisions
- ✓ Real user behavior
- ✓ Quantitative results
- ✓ Can test assumptions

**Disadvantages:**
- ✗ Requires many users (statistical significance)
- ✗ Only tests two options
- ✗ Ethical concerns (treating users differently)
- ✗ May optimize locally, not globally

**Best for:**
- Product/market fit validation
- Optimization
- When data available
- Incremental improvements

#### 5. Pilot/Field Test

**What:** Deploy to small subset of real users

**Characteristics:**
- Real production environment
- Limited rollout (geography, user segment, etc.)
- Real data
- Can roll back if problems
- Learn before full deployment

**Advantages:**
- ✓ Real conditions
- ✓ Limited risk
- ✓ Can fix before full rollout
- ✓ Validates operational aspects

**Disadvantages:**
- ✗ Still has risks
- ✗ May need special configuration
- ✗ Selected users may not be representative

**Best for:**
- Large-scale systems
- High-risk deployments
- Geographic rollouts
- Validating operational readiness

#### 6. Minimum Viable Product (MVP)

**What:** Smallest product that delivers value and enables learning

**Characteristics:**
- Core features only
- Releasable quality
- Real users
- Fast feedback loop
- Foundation for iteration

**Purpose:**
- Validate problem-solution fit
- Validate product-market fit
- Learn what to build next

**Advantages:**
- ✓ Fast to market
- ✓ Real user feedback
- ✓ Minimize waste
- ✓ Iterative learning

**Disadvantages:**
- ✗ May disappoint users (incomplete)
- ✗ May hurt brand if too minimal
- ✗ Requires discipline (avoid scope creep)

**Best for:**
- Startups
- New products
- High uncertainty
- Agile/Lean approaches

---

### Sample Development

**What:** Developers try to implement from requirements

**Purpose:** Validate that requirements are:
- Understandable
- Complete
- Unambiguous
- Feasible

**Process:**
1. Give requirements to developers
2. They attempt implementation
3. Document questions and problems
4. Refine requirements

**Advantages:**
- ✓ Finds ambiguities
- ✓ Validates feasibility
- ✓ Improves implementability
- ✓ Gets developer buy-in

**Disadvantages:**
- ✗ Requires developer time
- ✗ May be too late (costly to change)

**Best for:**
- Complex technical requirements
- Before major implementation effort
- Critical/risky features

---

# CHAPTER 5: RE Process and Working Structure

## 5.1 Influencing Factors

Before configuring your RE process, analyze these factors:

### A) System Characteristics

1. **Complexity**
   - Simple app? Lightweight RE
   - Complex enterprise system? Heavyweight RE

2. **Criticality**
   - Fun game? Less rigor
   - Medical device? Maximum rigor

3. **Size**
   - Small tool? Simple process
   - Large platform? Sophisticated process

4. **Innovation degree**
   - Routine system? Standard RE
   - Breakthrough innovation? Explorative RE

### B) Organizational Factors

1. **Company culture**
   - Agile culture? Iterative RE
   - Traditional? Linear RE

2. **Experience level**
   - Expert team? Lightweight
   - Novice team? More structure

3. **Geographic distribution**
   - Co-located? Workshops
   - Distributed? Tools and documentation

4. **Regulatory requirements**
   - Regulated industry? Formal process
   - No regulation? Flexible

### C) Project Constraints

1. **Time pressure**
   - Urgent? Lightweight, focus on critical
   - Plenty of time? Thorough

2. **Budget**
   - Well-funded? Can afford more RE effort
   - Tight budget? Lean RE

3. **Resources**
   - Large team? Can do parallel work
   - Small team? Sequential

4. **Requirements stability**
   - Stable? Linear can work
   - Changing? Must be iterative

### D) Stakeholder Characteristics

1. **Availability**
   - Constant access? Iterative, workshops
   - Rarely available? Upfront elicitation

2. **Knowledge level**
   - Experts? Less elicitation
   - Unclear? More exploration

3. **Number**
   - Few? Direct interaction
   - Many? Representatives, questionnaires

4. **Agreement level**
   - Aligned? Smooth
   - Conflicting? Need conflict resolution

---

## 5.2 RE Process Facets

**Think of these as three dimensions:** Choose ONE from each!

### FACET 1: Time - Linear vs. Iterative

#### LINEAR RE Process

**What:** Specify ALL requirements UP FRONT in single phase

**The waterfall approach:**
```
Requirements (complete all!) → Design → Implementation → Testing
```

**When to choose LINEAR:**
✓ Plan-driven, waterfall development process
✓ Stakeholders KNOW requirements and can specify up front
✓ Need comprehensive spec as CONTRACT (outsourcing, tendering)
✓ Regulatory requirements demand formally released spec early
✓ Fixed-price, fixed-scope contracts

**Characteristics:**
- Heavyweight process
- Comprehensive documentation
- Formal approval gates
- Less flexibility for changes
- Changes are expensive

**Example scenario:**
Government contractor building defense system - everything must be specified and approved before coding begins

---

#### ITERATIVE RE Process

**What:** Specify requirements INCREMENTALLY over multiple iterations

**The agile approach:**
```
Iteration 1: Goals + Initial reqs → Dev → Feedback
Iteration 2: Add/modify reqs → Dev → Feedback
Iteration 3: Add/modify reqs → Dev → Feedback
```

**When to choose ITERATIVE:**
✓ Iterative/agile development process
✓ Many requirements NOT known up front
✓ Stakeholders available for SHORT FEEDBACK LOOPS
✓ Duration allows for MORE THAN 1-2 iterations
✓ Need ability to CHANGE requirements easily
✓ Market-oriented (user feedback is validation)

**Characteristics:**
- Lightweight process
- Minimal documentation (just enough)
- Continuous feedback
- High flexibility
- Short iterations (2-6 weeks)

**Example scenario:**
Startup building mobile app - learn what users want by releasing and iterating

---

### FACET 2: Purpose - Prescriptive vs. Explorative

#### PRESCRIPTIVE RE Process

**What:** Requirements specification = BINDING CONTRACT

**Mentality:** "Build THIS system, exactly as specified"

**When to choose PRESCRIPTIVE:**
✓ Customer demands FIXED CONTRACT
✓ Functionality/scope MORE important than cost/deadlines
✓ Development TENDERED or OUTSOURCED
✓ Clear "what to build" from start
✓ High-risk or safety-critical

**Work products:** Comprehensive, detailed specifications

**Example scenario:**
Hospital orders patient management system from external vendor - detailed spec with all requirements = contract

---

#### EXPLORATIVE RE Process

**What:** Only GOALS known initially - discover requirements during development

**Mentality:** "Let's discover what system we really need"

**When to choose EXPLORATIVE:**
✓ Stakeholders have VAGUE ideas initially
✓ Stakeholders STRONGLY INVOLVED with continuous feedback
✓ Deadlines/cost MORE important than functionality/scope
✓ Framework contract (time & materials, not fixed scope)
✓ UNCLEAR which requirements to implement or in what order

**Work products:** Product backlog, prototypes, MVPs

**Example scenario:**
Company exploring new business opportunity - build MVP, test market, adapt based on feedback

---

### FACET 3: Target - Customer-Specific vs. Market-Oriented

#### CUSTOMER-SPECIFIC RE Process

**What:** Building for ONE specific customer (even if internal!)

**When to choose CUSTOMER-SPECIFIC:**
✓ System used mainly by ORDERING organization
✓ Important stakeholders associated with CUSTOMER
✓ Individual stakeholders can be IDENTIFIED and NAMED
✓ Clear customer-supplier relationship

**Stakeholder access:** Direct access to specific people

**Example scenario:**
Corporate IT builds system for HR department

---

#### MARKET-ORIENTED RE Process

**What:** Building PRODUCT/SERVICE to sell to MANY customers

**When to choose MARKET-ORIENTED:**
✓ Developing software to SELL/DISTRIBUTE broadly
✓ Target users UNKNOWN or spread across market segments
✓ No specific ordering customer
✓ Market feedback is validation method

**Stakeholder access:** Use personas, market research, beta testing

**Example scenario:**
SaaS company building project management tool for general market

---

## 5.3 Three Typical Process Configurations

### Configuration 1: PARTICIPATORY RE Process
**Iterative + Explorative + Customer-Specific**

**Main application:**
Supplier and customer collaborate CLOSELY; stakeholders strongly involved in BOTH RE and development

**Typical work products:**
- Product backlog (user stories, task descriptions)
- Vision statement
- Prototypes

**Information flow:**
Continuous interaction: Stakeholders ↔ Product Owner ↔ Requirements Engineers ↔ Developers ↔ Users

**Example:**
Insurance company's business unit wants new cyber-insurance product:
- **Customer:** Business unit
- **Supplier:** Corporate IT
- **Approach:** Agile/Scrum
- **Process:**
  - Sprint planning with business stakeholders
  - Product backlog refinement sessions
  - Develop prototypes, get feedback
  - Build minimum marketable product (MMP)
  - Decide whether to proceed

**Why this works:**
- Business unit doesn't know exact needs → **Explorative**
- Can iterate and learn → **Iterative**
- Clear customer (business unit) → **Customer-specific**
- Stakeholders available → Perfect!

---

### Configuration 2: CONTRACTUAL RE Process
**Linear (sometimes Iterative) + Prescriptive + Customer-Specific**

**Main application:**
Requirements spec = CONTRACTUAL BASIS for outsourced development with LITTLE stakeholder interaction after requirements phase

**Typical work products:**
- Classic system requirements specification
- Natural-language requirements
- Models (UML, BPMN, etc.)
- Formal documentation

**Information flow:**
Primarily ONE DIRECTION: Stakeholders → Requirements Engineers

**Example:**
Car manufacturer developing new platform:
- **Decision:** Centralize all electronic control units
- **Step 1:** Internal engineers write customer requirements spec
- **Step 2:** Contract external firm for system requirements spec
- **Step 3:** TENDER implementation based on spec
- **Contract:** Fixed price, fixed scope

**Process:**
- **Linear:** Complete spec BEFORE implementation tender
- **Prescriptive:** Spec = binding contract
- **Customer-specific:** Car manufacturer is customer

**Why this works:**
- Outsourcing requires detailed contract → **Prescriptive**
- Tender needs complete spec → **Linear**
- Single customer with clear needs → **Customer-specific**

**Note:** Implementation MAY be iterative (doesn't affect RE process!)

---

### Configuration 3: PRODUCT-ORIENTED RE Process
**Iterative + Explorative + Market-Oriented**

**Main application:**
Develop software to SELL/DISTRIBUTE as product/service

**Typical work products:**
- Product backlog
- Prototypes
- Market research
- Analytics dashboards

**Information flow:**
Multi-directional: Product Owner ↔ Marketing ↔ Requirements Engineers ↔ Designers ↔ Developers ↔ Users/Customers

**Example:**
Startup building productivity app:
- No specific customer ordering
- Target: General market of knowledge workers
- Uncertainty about what features users will pay for

**Process:**
- **Market-oriented:** Building for unknown users
- **Explorative:** Discover through experiments
- **Iterative:** Build MVP, measure, learn, iterate

**Activities:**
- Release MVP
- A/B test features
- Analyze usage metrics
- Customer feedback loops
- Prioritize based on market response
- Continuous deployment

**Why this works:**
- Unknown users → **Market-oriented** (use personas)
- Uncertainty → **Explorative**
- Learn through iterations → **Iterative**

---

## Additional Considerations

### Shared Understanding & Criticality

**Formula:**
- High shared understanding + Low criticality = **Lightweight process**
- Low shared understanding + High criticality = **Heavyweight process**

### Time & Budget Constraints

**Limited resources?**
→ **Iterative + Explorative**
→ Focus on CRITICAL requirements first

### RE Experience Level

**Experienced team:** Can handle sophisticated processes
**Inexperienced team:** Keep it SIMPLE!

**Remember:** Don't define a process people can't execute!

---

### Note on Standards

Some contexts don't fit typical configurations:
- Regulatory constraints may impose specific standards (ISO/IEC/IEEE 29148)
- Safety-critical may require formal methods
- Contractual obligations may dictate process

**Adapt to YOUR context!**

---

# CHAPTER 6: Requirements Management

**Definition:** Managing EXISTING requirements in work products

**Key activities:**
- Storing requirements
- Changing requirements
- Tracing requirements

---

## 6.1 Why Requirements Management?

**Requirements are LIVING:**
- Created
- Used
- Updated
- Deleted
- Evolving during development AND operation

**Risks of poor management:**
- People use outdated versions
- Requirements get lost
- Relationships overlooked
- Inconsistencies multiply
- CHAOS!

**Value:** Improved efficiency and effectiveness

---

## 6.2 Life Cycle Management

**Every requirement goes through STATES:**

**Example life cycle:**
```
Draft → Under Review → Reviewed → Approved → Implemented → Verified → Baseline
  ↓                                    ↓
Rejected                          Obsolete
```

**Common states:**

1. **Draft:** Author working on it (editable)
2. **Under Review:** Submitted for review (read-only)
3. **Reviewed:** Review complete, feedback received
4. **Approved:** Stakeholders agreed, ready for implementation
5. **Implemented:** Coded in system
6. **Verified:** Testing confirmed it works
7. **Baseline:** Frozen for release (formally approved)
8. **Obsolete:** No longer needed
9. **Rejected:** Not accepted

**State transitions controlled:**
- Only certain roles can transition
- May require approval
- Audit trail maintained

**Why track states:**
- Know which requirements ready for dev
- Understand which being discussed
- Track implementation progress
- Control changes

---

## 6.3 Version Control

**Problem:** Requirements evolve through multiple drafts

**Solution:** Track versions

**Version numbering:**
```
R1.0 → R1.1 → R1.2 → R2.0 → R2.1 → R3.0
```

**Convention:**
- **Major version (X.0):** Significant changes
- **Minor version (X.Y):** Small refinements

**What to version:**
- Individual requirements
- Entire documents
- Models
- All work products

**Enables:**
- **History:** "What did version 2.0 say?"
- **Rollback:** "Go back to version 1.5"
- **Comparison:** "What changed?"
- **Audit trail:** "Who changed what and when?"

**Tools:** Git, SVN, or requirements management tools

---

## 6.4 Configurations and Baselines

**Problem:** Can't manage 1000s of requirements individually!

**Solution:** Group into CONFIGURATIONS

### Configuration

**Definition:** Coherent set of work products and requirements that belong together

**Examples:**
- "Release 2.0 requirements"
- "Module A specifications"
- "Sprint 5 backlog"

**Purpose:** Manage related items as unit

---

### Baseline

**Definition:** Configuration that's been FORMALLY APPROVED and FROZEN

**Characteristics:**
- **Immutable:** Can't change without formal process
- **Reference point:** "This is what we agreed"
- **Contractual significance:** May be legally binding
- **Change controlled:** Modifications require approval

**Examples:**
- "Requirements Baseline v3.0" (approved for development)
- "Release 1.0 Baseline" (what shipped)

**Why baselines matter:**
- Everyone knows what's official
- Changes controlled
- Can compare versions
- Legal/audit requirements

---

## 6.5 Attributes and Views

### Attributes

**Definition:** Metadata about requirements

**Common attributes:**

| Attribute | Purpose | Example Values |
|-----------|---------|----------------|
| **ID** | Unique identifier | REQ-001, US-047 |
| **Status** | Life cycle state | Draft, Approved, Implemented |
| **Priority** | Importance | High, Medium, Low |
| **Source** | Who requested | John Smith, Market Research |
| **Owner** | Responsible person | Jane Doe |
| **Version** | Evolution tracking | 1.0, 2.3 |
| **Created Date** | When specified | 2024-03-15 |
| **Modified Date** | Last update | 2024-04-22 |
| **Effort** | Implementation estimate | 8 hours, 3 story points |
| **Risk** | Implementation risk | Low, Medium, High |
| **Release** | Target release | Release 2.0, Sprint 5 |
| **Component** | Which part of system | Login, Payment, Reporting |
| **Stakeholder** | Key stakeholder | Marketing VP |
| **Rationale** | Why needed | Competitive pressure |
| **Dependencies** | Depends on | REQ-005, REQ-012 |
| **Test Cases** | Verification | TC-101, TC-102 |

**Usage:**
- **Filter:** "Show all high-priority requirements"
- **Sort:** "Order by risk level"
- **Report:** "How many per stakeholder?"
- **Track:** "Which still draft?"
- **Analyze:** "Average effort per priority"

---

### Views

**Definition:** Filtered/formatted perspective on requirements

**Three types:**

#### 1. Selective Views
Show subset based on criteria

**Examples:**
- "Security requirements only"
- "High-priority items for Release 2.0"
- "Requirements from Legal department"
- "All unimplemented requirements"

#### 2. Projective Views
Show specific attributes only

**Examples:**
- "ID, Title, Status (hide others)"
- "Requirements summary report"
- "Just priority and owner"

#### 3. Aggregating Views
Combine and summarize

**Examples:**
- "Count by priority"
- "Progress: 40% implemented, 30% approved, 30% draft"
- "Total effort per component"
- "Requirements trend over time"

**Common role-based views:**

**Developer view:**
- Assigned to me
- Approved and not yet implemented
- Technical details visible
- Sorted by priority

**Stakeholder view:**
- High-level summary
- Related to their area
- Business language
- Status overview

**Test view:**
- Requirements with test cases
- Verification status
- Test coverage gaps

**Manager view:**
- Progress metrics
- Risk summary
- Resource allocation
- Trends and forecasts

**Benefits:**
- Role-based access
- Focused work
- Better communication
- Custom reports

---

## 6.6 Traceability

**Definition:** Ability to trace a requirement:
- **BACKWARD:** To its origin (stakeholder, document, rationale)
- **FORWARD:** To subsequent work products (design, code, tests)
- **TO:** Other requirements it depends on

---

### Why Traceability is CRITICAL

#### Scenario 1: Impact Analysis
```
Stakeholder: "We need to change requirement R-42"

You: *Check traceability*
     R-42 affects: Design-Doc-Section-7, Module-Payment, Test-Suite-3

You: "Changing R-42 impacts:
     - 1 design section
     - 1 code module  
     - 12 test cases
     Estimated effort: 40 hours
     
     Still want to proceed?"
```

#### Scenario 2: Compliance/Audit
```
Auditor: "Prove requirement R-89 was implemented and tested"

You: *Check traceability*
     R-89 → Design-Element-X → Code-Class-PaymentValidator → Test-TC-156

You: "Complete trace from requirement through code to test"
```

#### Scenario 3: Coverage Verification
```
Manager: "Are all stakeholder needs covered?"

You: *Check backward traceability*
     All 47 stakeholder needs → mapped to requirements
     All requirements → traced to stakeholder needs

You: "Yes, 100% coverage"
```

---

### Traceability Types

#### Backward Traceability (Pre-RS)
Trace requirement back to:
- **Source:** Which stakeholder/document?
- **Rationale:** WHY is it needed?
- **Business goal:** What objective does it support?

**Answers:** "Where did this come from? Why do we need it?"

#### Forward Traceability (Post-RS)
Trace requirement forward to:
- **Design:** Which design elements implement it?
- **Code:** Which modules/classes?
- **Tests:** Which test cases verify it?

**Answers:** "How is this implemented? How is it verified?"

#### Traceability Between Requirements
Trace to other requirements:
- **Dependencies:** This requires that
- **Conflicts:** This contradicts that
- **Refinements:** This elaborates that
- **Parent-child:** High-level to detailed

**Answers:** "How do requirements relate?"

---

### Representation Forms

#### 1. Traceability Matrix

**Example: Requirements to Sources**

|  | REQ-1 | REQ-2 | REQ-3 | REQ-4 |
|---|-------|-------|-------|-------|
| **Interview Smith** | X | X |  |  |
| **Questionnaire** |  | X | X | X |
| **Field Observation** | X |  | X |  |
| **Regulations** |  | X |  | X |

**Example: Requirements to Tests**

|  | TC-01 | TC-02 | TC-03 | TC-04 |
|---|-------|-------|-------|-------|
| **REQ-1** | X | X |  |  |
| **REQ-2** |  | X | X |  |
| **REQ-3** |  |  | X | X |

#### 2. Hyperlinks
Click from requirement to related items
- Simple and intuitive
- Bidirectional links

#### 3. References
Textual references in documents
- "See Design-Doc-7.3"
- "Implements REQ-042"

#### 4. Tables
List of relationships
- Source column, target column

#### 5. Graphs
Visual network of dependencies
- Nodes = work products
- Edges = relationships

---

### Implicit vs. Explicit Traceability

#### Implicit Traceability
Through standardized structure
- Example: Requirements doc Section 3.4 ALWAYS relates to Design doc Section 5.2
- **Pro:** No extra work
- **Con:** Breaks if structure changes

#### Explicit Traceability
Direct links using unique IDs
- Example: REQ-042 explicitly linked to Design-Element-X
- **Pro:** Robust, survives restructuring
- **Con:** Extra work to maintain

---

### Challenges

- **Time-consuming** to establish and maintain
- **Easy to neglect** (discipline required!)
- **Versioning complicates:** Which version links to which?
- **Tool support essential** for substantial projects

**Without good tools:** Traceability becomes overwhelming!

---

## 6.7 Handling Change

**Remember Principle 7:** Change is NORMAL!

**Agile manifesto:** "Welcome changing requirements, even late in development"

---

### Why Requirements Change

- Business processes change
- Market conditions shift
- Competitor launches feature
- Technology evolves
- Laws/regulations change
- User feedback
- Stakeholder insights
- Errors discovered
- Better understanding

---

### The Change Management Process

**Three focus areas:**
1. Ensure risks are ASSESSED
2. Changes are AUTHORIZED
3. Implementation is MANAGED

**Process flow:**
```
Change Request
     ↓
Impact Analysis (use traceability!)
     ↓
Change Authority Decision
     ↓
   Approved?
   ↙      ↘
 YES      NO
  ↓        ↓
Plan    Rejected
  ↓
Implement
  ↓
Verify
```

---

### Change Authority by Requirement State

#### DRAFT Requirements
- **Authority:** Author (requirement owner)
- **Process:** None! Author changes freely
- **Reason:** Still being developed, not released

**Example:**
- You're writing REQ-042
- Realize it needs refinement
- Just change it!

---

#### RELEASED Requirements (Approved but not yet implemented)
- **Authority:** Project management, Steering committee, Change Control Board (CCB)
- **Process:** Formal change control

**Steps:**
1. **Submit change request**
   - What to change
   - Why change needed
   - Who requested

2. **Perform impact analysis**
   - What's affected? (use traceability!)
   - Effort estimate
   - Risk assessment
   - Alternative solutions?

3. **CCB reviews and decides**
   - Approve, reject, or defer
   - Prioritize against other work
   - Consider constraints (budget, time, resources)

4. **Plan implementation**
   - Assign resources
   - Schedule work
   - Update affected work products

5. **Update all affected work products**
   - Requirements doc
   - Design
   - Test plans
   - User documentation
   - Training materials

**Reason:** Changes affect downstream work (design being created)

---

#### IMPLEMENTED Requirements (System in operation)
- **Authority:** Change Advisory Board (CAB)
- **Process:** VERY strict (ITIL-based)

**Change classification:**

**1. Standard Change**
- **Definition:** Pre-authorized, low risk, routine
- **Examples:** 
  - Update VAT rate (happens regularly)
  - Add user to database (routine)
  - Change configuration parameter
- **Process:** Minimal approval (may be automated)
- **Reason:** Known, proven, low-risk

**2. Normal Change**
- **Definition:** Requires approval, assessed risk
- **Examples:**
  - Change business logic
  - Add new feature
  - Modify data structure
  - Change integration
- **Process:**
  1. Submit change request (RFC)
  2. Full impact analysis
  3. CAB review and approval
  4. Schedule implementation
  5. User communication
  6. Implementation
  7. Post-implementation review
- **Reason:** Affects live system, needs careful planning

**3. Emergency Change**
- **Definition:** Urgent, to resolve incident
- **Examples:**
  - Critical security patch
  - Fix production outage
  - Data corruption repair
- **Process:** Expedited approval, implement immediately
- **Reason:** System down or severe risk
- **Note:** RARE for requirements! (Usually bug fixes)

**Reason for strict process:** Live system with real users affected!

---

### Agile Approach to Change

**In Scrum:**

- **Change authority:** Product Owner
- **Process:**
  1. Product Owner accepts change
  2. Add to Product Backlog
  3. Prioritize against other items  
  4. Implement in future sprint (not current!)
  5. Sprint backlog is FROZEN during sprint

**Benefits:**
- Lightweight
- Fast
- Product Owner has authority
- Clear ownership

**Note:** Still assess impact! Product Owner needs to understand consequences

---

### Key Principles for Change Management

1. **Assess impact** before deciding (use traceability!)
2. **Right authority level** for right state
3. **Document rationale** for change
4. **Communicate** to all affected parties
5. **Update all affected work products** (requirements, design, tests, docs)
6. **Verify** change was implemented correctly

---

## 6.8 Prioritization

**Reality:** Limited resources = Can't implement everything (at least not at once!)

**Priority:** Level of importance assigned to requirement according to certain criteria

---

### The Prioritization Process (6 Steps)

#### Step 1: Define Goals and Constraints

**Questions:**
- WHY prioritize?
  - Select features for next release?
  - Allocate limited budget?
  - Sequence implementation?
  - Focus testing effort?
- What CONSTRAINTS?
  - Must include legal requirements?
  - Must keep key customer?
  - Release date fixed?

#### Step 2: Define Assessment Criteria

**Common criteria:**
- **Business value:** Revenue, cost savings, competitive advantage
- **Urgency:** Time pressure, market window
- **Implementation effort:** Dev time, complexity
- **Risk:** Technical risk, business risk
- **Dependencies:** What else must be done first?
- **Strategic importance:** Long-term vision alignment
- **Customer satisfaction:** Impact on user happiness
- **Regulatory:** Legal requirements
- **Technical debt:** Does it improve/worsen architecture?

**Choose relevant criteria for YOUR context!**

#### Step 3: Define Stakeholders to Involve

**Who decides?**
- Product owner?
- Steering committee?
- Key customers?
- Development team?
- All stakeholders?

**Authority matters:** Who has final say?

#### Step 4: Define Requirements to Prioritize

**Questions:**
- Prioritize ALL requirements? Or just candidates for next release?
- Same abstraction level? (Don't mix epics with tasks!)
- Same category? (All functional? All quality?)

**Tip:** Prioritize at appropriate granularity

#### Step 5: Select Prioritization Technique

**Considerations:**
- **Ad hoc or analytical?**
- **Stakeholder acceptance?** (They must buy in!)
- **Time available?**
- **Data available?**

#### Step 6: Perform Prioritization

**Activities:**
- Apply technique
- Resolve conflicts (stakeholders may disagree)
- Document results
- Communicate priorities

---

### Prioritization Techniques

#### A) Ad Hoc Techniques

**Based on:** Expert judgment, gut feeling

##### 1. Top-10 Ranking
- List top 10 most important
- Quick and simple
- Good for small sets

##### 2. MoSCoW

**M**ust have - Critical, non-negotiable
- **Characteristics:**
  - System fails without it
  - Legal requirement
  - Safety critical
  - Core functionality
- **Examples:**
  - User authentication
  - Payment processing
  - Data encryption
  - Core business logic

**S**hould have - Important, but can wait if needed
- **Characteristics:**
  - Important but not critical
  - Can work around temporarily
  - High value but not essential
- **Examples:**
  - Email notifications
  - Advanced search
  - Reporting features

**C**ould have - Nice to have, if time/budget allows
- **Characteristics:**
  - Adds value but low impact if missing
  - Can easily be deferred
  - Enhances user experience
- **Examples:**
  - Dark mode
  - Social media integration
  - Advanced analytics

**W**on't have (this time) - Explicitly out of scope
- **Characteristics:**
  - Good ideas but not now
  - Future consideration
  - Clear boundaries
- **Examples:**
  - Mobile app (web only this release)
  - Multi-language support
  - AI features

**Benefits:**
- Simple and intuitive
- Clear communication
- Stakeholders understand easily
- Forces hard decisions

**Pitfall:** Too many "Must haves"! (Be disciplined!)

##### 3. Kano-Based Prioritization

Map Kano categories to MoSCoW:
- **Dissatisfiers** → Must haves
- **Satisfiers** → Should haves
- **Delighters** → Could haves or Won't haves

**Ad Hoc Advantages:**
- ✓ Fast
- ✓ Easy
- ✓ Cheap
- ✓ Intuitive
- ✓ No complex calculations

**Ad Hoc Disadvantages:**
- ✗ Subjective
- ✗ Single criterion (expert opinion)
- ✗ May not be accepted if expertise questioned
- ✗ Hard to defend
- ✗ Inconsistent across stakeholders

---

#### B) Analytical Techniques

**Based on:** Systematic process with multiple criteria

**The approach:**
1. Define criteria (value, cost, risk, etc.)
2. Assign weights to criteria (total 100%)
3. Score each requirement on each criterion (e.g., 1-10)
4. Calculate weighted total
5. Rank by total score

##### Example: Wiegers Matrix

**Criteria with weights:**
- **Benefit** (weight: 40%) - What stakeholder gains
- **Penalty** if not included (weight: 20%) - What stakeholder loses
- **Cost** (weight: 25%) - Development effort
- **Risk** (weight: 15%) - Technical risk

**Scoring example:**

| Requirement | Benefit (×0.4) | Penalty (×0.2) | Cost (×0.25) | Risk (×0.15) | **Total** | **Priority** |
|-------------|----------------|----------------|--------------|--------------|-----------|--------------|
| REQ-A | 9×0.4=3.6 | 7×0.2=1.4 | 3×0.25=0.75 | 4×0.15=0.6 | **6.35** | 2 |
| REQ-B | 7×0.4=2.8 | 9×0.2=1.8 | 8×0.25=2.0 | 6×0.15=0.9 | **7.5** | 1 |
| REQ-C | 5×0.4=2.0 | 4×0.2=0.8 | 5×0.25=1.25 | 7×0.15=1.05 | **5.1** | 3 |

**Result:** Implement in order: REQ-B (7.5), REQ-A (6.35), REQ-C (5.1)

**Interpretation:**
- REQ-B: High penalty if missing, high cost but justified
- REQ-A: High benefit, low cost, medium penalty - good value
- REQ-C: Lower scores across board

##### Cost-Value Analysis

Simple 2x2 matrix:

```
         High Value
              │
    C         │         A
  (Later)     │      (Do First!)
              │
──────────────┼──────────────
              │
    D         │         B
(Never?)      │    (Do Second)
              │
         Low Value
         
    Low Cost      High Cost
```

**A - High value, Low cost:** DO FIRST! (Quick wins)
**B - High value, High cost:** DO SECOND (Strategic investments)
**C - Low value, Low cost:** LATER (Fill in spare time)
**D - Low value, High cost:** NEVER? (Question if needed)

**Analytical Advantages:**
- ✓ Transparent process
- ✓ Multiple criteria considered
- ✓ Defensible decisions
- ✓ Stakeholder buy-in (if they agree on criteria)
- ✓ Repeatable
- ✓ Documented rationale

**Analytical Disadvantages:**
- ✗ Time-consuming
- ✗ Requires agreement on weights (political!)
- ✗ Based on estimates (not facts!)
- ✗ Can create **pseudo-accuracy** (false precision)
- ✗ Numbers may be manipulated

---

### WARNING: Pseudo-Accuracy!

**The trap:**
```
Requirement A: Priority score 22.76
Requirement B: Priority score 23.12
Requirement C: Priority score 20.29

WRONG conclusion: "B is clearly higher than A which is clearly higher than C"
RIGHT conclusion: "All three are roughly equal priority"
```

**Why it's pseudo-accuracy:**
- Scores based on SUBJECTIVE estimates
- Small differences are noise, not signal
- False sense of precision
- Over-interpreting data

**The principle:** Match effort to value!
- Don't spend 10 hours calculating priorities for 3 requirements
- Gut feeling might be just as good
- **Remember Principle 1: Value orientation!**

**Use analytical when:**
- Many requirements to prioritize
- High stakes decisions
- Need stakeholder buy-in through transparency
- Criteria are well-understood

**Use ad hoc when:**
- Few requirements
- Time pressure
- Expert consensus exists
- Low criticality

---

### Best Practices for Prioritization

1. **Start with dissatisfiers** (must haves) - identify non-negotiables
2. **Don't have too many "high priority"** - forces real choices
3. **Revisit regularly** - priorities change!
4. **Consider dependencies** - can't do B before A
5. **Balance criteria** - not just business value (also risk, effort, etc.)
6. **Get stakeholder buy-in** - they must accept results
7. **Document rationale** - why this priority?
8. **Be prepared to re-prioritize** - as you learn more

---

# CHAPTER 7: Tool Support

**The carpenter analogy:** Just as carpenter needs tools (saw, hammer, drill), Requirements Engineer needs tools!

---

## 7.1 Tools in Requirements Engineering

### What are RE Tools?

- **CASE tools:** Computer-Aided Software Engineering
- Support specific RE tasks and activities
- NO single tool does everything!
- Need a **toolbox**, not one tool

---

### Types of RE Tool Support

#### 1. Management of Requirements

**Features:**
- Define and store attributes (ID, status, priority, etc.)
- Life cycle management (state transitions)
- Version control (track changes)
- Configurations and baselines
- Traceability (forward, backward, between)
- Change management (workflow, approval)
- Prioritization support

**Example tools:**
- IBM DOORS
- Jama Connect
- Polarion
- Helix RM
- Rational RequisitePro

**When you need it:**
- Many requirements (>100)
- Complex relationships
- Regulatory compliance
- Distributed teams
- Long project duration

---

#### 2. Management of RE Process

**Features:**
- Measure and report on RE process
- Track workflow and bottlenecks
- Measure product quality
- Process metrics:
  - Requirements approved per week
  - Time in each state
  - Defect rate in requirements
  - Coverage statistics
- Quality metrics:
  - Percentage with test coverage
  - Percentage approved
  - Average time to approve

**Purpose:** Improve the RE process itself, reduce waste

**Example tools:**
- Process mining tools
- Analytics dashboards
- Custom reports in RM tools

---

#### 3. Documentation of Knowledge

**Features:**
- Share requirements across team
- Create common understanding
- Provide overview and insight
- Secure requirements (legal obligation)
- Collaboration features
- Search and navigation
- Comments and discussions

**Example tools:**
- Confluence
- SharePoint
- Notion
- Wiki systems
- Google Docs (for simple projects)

**When you need it:**
- Multiple stakeholders need access
- Distributed teams
- Knowledge sharing important
- Onboarding new team members

---

#### 4. Modeling of Requirements

**Features:**
- Create diagrams (UML, BPMN, ERD, etc.)
- Visual representation
- Support conceptual thinking
- Formal notation
- Generate code from models (some tools)
- Consistency checking

**Example tools:**
- Enterprise Architect (Sparx)
- Visual Paradigm
- Lucidchart
- Draw.io
- Visio

**When you need it:**
- Complex structures or behaviors
- Technical audience
- Need precise specification
- System architecture important

---

#### 5. Collaboration in RE

**Features:**
- Multiple users working together
- Real-time collaboration
- Commenting and discussion
- Notifications
- Remote work support
- Distributed teams
- Voting and polling
- Workshops and brainstorming

**Modern reality:** Remote work makes this ESSENTIAL!

**Example tools:**
- Miro (visual collaboration)
- Mural (online whiteboard)
- MS Teams / Slack (communication)
- Built-in collaboration in modern RM tools

---

#### 6. Testing/Simulation of Requirements

**Features:**
- Test requirements before implementation
- Simulate system behavior
- Predict effects and outcomes
- Early validation
- "What-if" analysis

**Example approaches:**
- Executable specifications
- Model-based testing
- Requirements simulation tools
- Prototyping tools

**Advanced capability:** Increasingly sophisticated tools emerging

---

### Important Notes

**Tool combinations:**
- Most tools are a **MIX** of above types
- Often need **MULTIPLE tools** for complete coverage
- **Integration** between tools is critical!

**Common tool combinations:**
- RM tool (DOORS) + Modeling (EA) + Collaboration (Confluence)
- Agile tools (Jira) + Documentation (Confluence) + Design (Figma)

---

### Office/Issue Tracking Tools Misuse

**The temptation:**
- Use Word/Excel/Jira for requirements
- "We already have these tools!"
- Seems cheaper

**The reality:**
- These tools have **serious limitations** for RE!
- No traceability
- Poor version control
- No impact analysis
- Limited collaboration
- Hard to maintain

**Only acceptable when:**
- RE process is **stable and controlled**
- Requirements are **aligned and quite stable**
- Team is small and co-located
- Low criticality system

**Risk:** Using wrong tools = **major RE process risk**

**Better approach:**
- Start with simple tools
- Move to proper RM tools as project grows
- Don't underestimate RM tool value!

---

## 7.2 Introducing Tools

**Critical principle:** **Practice what you preach!**
- Define objectives (why tool?)
- Specify context (your organization)
- Elicit requirements FOR THE TOOL
- Apply your RE skills to tool selection

**Tool introduction is a PROJECT** - treat it as one!

---

### 7.2.1 Consider All Life Cycle Costs

**Beyond license costs:**

#### Obvious Costs
- Purchase/license fees
- Annual subscription costs
- Per-user licensing

#### Hidden Costs
- **Implementation:**
  - Setup and configuration
  - Customization to your processes
  - Data migration from old tools
  - Integration with other systems
- **Training:**
  - User training
  - Administrator training
  - Creating training materials
  - Ongoing coaching
- **Maintenance:**
  - Updates and patches
  - Technical support
  - Bug fixes
- **Personnel:**
  - Tool administrator (ongoing role!)
  - Tool champions
  - Support staff
- **Infrastructure:**
  - Servers (if on-premise)
  - Storage
  - Network capacity
  - Cloud hosting fees

**Total Cost of Ownership (TCO):** Often **3-5× the license cost!**

**Example:**
- Tool license: $50,000
- Implementation: $30,000
- Training: $20,000
- Annual maintenance: $10,000/year
- Administrator (20% time): $20,000/year
- **5-year TCO: $50k + $30k + $20k + ($10k + $20k) × 5 = $250,000**

**Budget for the TOTAL, not just the license!**

---

### 7.2.2 Consider Necessary Resources

**Human resources needed:**

- **Selection team:** Evaluate options (weeks of effort)
- **Requirements Engineers:** Define tool requirements
- **Technical staff:** Integration, setup, configuration
- **Trainers:** Teach users
- **Champions:** Internal advocates who help others
- **Administrators:** Ongoing tool management
- **Stakeholders:** Input on requirements

**Other resources:**
- Hardware (servers, workstations with enough power)
- Network capacity
- Storage (requirements + documents = lots of data)
- Time (implementation takes months, not days!)

**Common mistake:** Underestimate time and effort!

**Reality check:**
- Small tool: 2-3 months to deploy
- Enterprise tool: 6-12 months to full deployment
- This is ON TOP of normal work!

---

### 7.2.3 Avoid Risks by Running Pilot Projects

**The danger:**
- Tool introduction can create **CHAOS**!
- Transition from old to new methods
- Loss of control over requirements base
- "Requirements chaos" during transition
- Project delays

**The solution:** Test on **small scale** first!

**Pilot approaches:**

#### 1. Non-Critical Project
- Low stakes if problems occur
- Real project but low risk
- Can afford some delays
- Learn without major impact

#### 2. Parallel Operation
- Run alongside existing tool (redundant)
- Compare results
- Safety net - can fall back
- More work but safer

#### 3. Fictional Project
- Practice scenario
- No real impact
- Can experiment freely
- Try different configurations

#### 4. Completed Project
- Import historical data
- No active pressure
- Test migration process
- Validate tool on known requirements

**Pilot goals:**
1. Validate tool meets requirements
2. Identify problems early
3. Refine processes
4. Build expertise
5. Create internal success stories
6. Get realistic effort estimates

**When pilot succeeds:**
- Document lessons learned
- Refine processes based on learning
- Train pilot users as champions
- Roll out more widely

**When pilot reveals problems:**
- Fix issues before wide rollout
- Reconfigure tool
- Adjust processes
- Consider different tool if major issues

---

### 7.2.4 Evaluate from Multiple Perspectives

**Don't just ask "Does it work?"**
**Ask "Does it work FOR US?"**

**Seven evaluation perspectives:**

#### 1. Project Perspective
**Focus:** Project management needs

**Questions:**
- Does tool support our project management approach?
- Can we track progress effectively?
- Reporting to stakeholders?
- Dashboard capabilities?
- Milestone tracking?
- Resource allocation?

#### 2. Process Perspective
**Focus:** RE process support

**Questions:**
- Supports our RE process?
- Can adapt to our methods?
- Flexible enough for our workflow?
- Enforces good practices?
- Aligns with our methodology (agile/waterfall)?
- State machine customizable?

#### 3. User Perspective (CRITICAL!)
**Focus:** Actual users of the tool

**Questions:**
- User-friendly and intuitive?
- Learning curve acceptable?
- Proper authorization/permissions?
- **Will users actually USE it?**
- Interface modern or clunky?
- Mobile access if needed?
- Accessibility features?

**If users won't use it, tool FAILS!**
- Get user input during selection
- Test with actual users
- User acceptance is critical

#### 4. Product Perspective
**Focus:** Tool features and capabilities

**Questions:**
- Covers all our requirements?
- Where is data stored (cloud/on-premise)?
- Product roadmap - future features?
- Still supported by vendor?
- Migration path if we outgrow it?
- Scalability?
- Performance with large datasets?
- Search capabilities?

#### 5. Supplier Perspective
**Focus:** Vendor relationship

**Questions:**
- Vendor location and stability?
- Support quality:
  - Response time?
  - Expertise level?
  - 24/7 or business hours?
  - Language support?
- Community and ecosystem?
- References from other users?
- Vendor reputation and longevity?
- Financial stability of vendor?

**Red flags:**
- Poor reviews
- Vendor financial troubles
- Unresponsive support
- Limited user community

#### 6. Economic Perspective
**Focus:** Business case and ROI

**Questions:**
- Benefits vs. costs?
- ROI (return on investment)?
- Licensing model:
  - Perpetual or subscription?
  - Per-user or enterprise?
  - Cloud or on-premise pricing?
- Maintenance costs ongoing?
- Value delivered to RE process?
- Cost of NOT having tool?

**Build business case:**
- Cost of current approach (spreadsheets, manual work)
- Time savings with tool
- Quality improvements
- Risk reduction
- Calculate payback period

#### 7. Architecture Perspective
**Focus:** Technical fit

**Questions:**
- Fits our IT landscape?
- Technology stack compatible?
- Integration with existing systems:
  - Test management tools?
  - Issue tracking?
  - CI/CD pipeline?
  - Source control?
- Security and compliance:
  - Data encryption?
  - Access control?
  - Audit trail?
  - GDPR compliance?
- Scalability and performance?
- Backup and recovery?
- APIs available?

---

**Evaluation Matrix Example:**

| Criterion | Weight | Tool A | Tool B | Tool C |
|-----------|--------|--------|--------|--------|
| User-friendliness | 30% | 8/10 | 6/10 | 9/10 |
| Traceability | 25% | 9/10 | 8/10 | 7/10 |
| Integration | 20% | 6/10 | 9/10 | 7/10 |
| Cost | 15% | 7/10 | 5/10 | 8/10 |
| Vendor support | 10% | 8/10 | 9/10 | 6/10 |
| **TOTAL** | 100% | **7.65** | **7.35** | **7.75** |

**Winner: Tool C** (but it's close!)

**Process:**
1. Define criteria (what matters to us?)
2. Assign weights (what matters MOST?)
3. Score each tool (1-10 scale)
4. Calculate weighted scores
5. Compare and decide

---

### 7.2.5 Train Employees

**Tool without training = Expensive paperweight!**

#### What to Train

**Basic Operations:**
- How to create requirements
- How to search and filter
- How to link requirements
- How to generate reports
- Navigation and UI

**Best Practices:**
- Naming conventions
- Templates to use
- When to create trace links
- Workflow processes
- Quality standards

**Integration with Process:**
- How tool fits workflow
- When to use which features
- Collaboration practices
- Approval processes

**Advanced Features:**
- Complex queries
- Custom reports
- API usage
- Integrations
- Administration (for admins)

#### Training Formats

**Initial Training:**
- Classroom sessions (hands-on)
- Online workshops
- One-on-one for key users

**Ongoing Support:**
- Documentation and guides
- Video tutorials
- Quick reference cards
- FAQ and knowledge base
- Office hours (ask questions)

**Champions and Mentors:**
- Power users help others
- Department representatives
- Go-to people for questions

**Continuous Improvement:**
- Refresher training
- Advanced topics
- New features training
- User group meetings

#### Process Changes

**Tool may enable NEW possibilities:**
- Version control (wasn't possible before)
- Traceability (too hard manually)
- Impact analysis (now easy!)
- Modeling (integrated with requirements)

**May require changes:**
- **New procedures:** Approval workflows
- **Template updates:** Use tool's templates
- **Working methods:** Collaborative instead of document-based
- **Roles:** Tool administrator needed

#### User Involvement = Success

**During selection:**
- Get user input on requirements
- Let them test tools
- Address their concerns
- Build buy-in early

**During deployment:**
- Involve users in configuration
- Let them influence templates
- Listen to feedback
- Iterate and improve

**After go-live:**
- Quick wins (show value fast!)
- Celebrate successes
- Address problems quickly
- Continuous improvement

---

### 7.3 Key Takeaways on Tools

#### 1. Tools are AIDS, not solutions
- Don't solve organizational/human problems
- Support good processes, don't create them
- Discipline and agreement still needed
- People and process before tools!

#### 2. No single tool does everything
- Need toolbox, not one tool
- Integration is critical
- Sometimes multiple specialized tools better than one

#### 3. Selection is an RE problem
- Define objectives clearly
- Elicit requirements for the tool
- Evaluate systematically
- **Practice what you preach!**

#### 4. Implementation is a project
- Budget realistically (TCO, not just license)
- Resource appropriately (people and time)
- Pilot first (reduce risk)
- Train thoroughly (ensure adoption)

#### 5. Success depends on people
- User acceptance is critical
- Champions make the difference
- Continuous improvement needed
- Change management essential

---

# QUICK REFERENCE TABLES

## Kano Model Quick Reference

| Category | Description | If Missing | If Present | How to Find | Examples |
|----------|-------------|-----------|------------|-------------|----------|
| **Dissatisfiers** | Subconscious expectations | Very unhappy | Neutral (expected) | Observation, archaeology | Car has brakes, site is secure |
| **Satisfiers** | Conscious desires | Unhappy | Happy (more = better) | Interviews, questionnaires | Faster, cheaper, more features |
| **Delighters** | Unconscious desires | Neutral (not expected) | Very happy! (WOW) | Brainstorming, prototyping | 1-click ordering, autopilot |

---

## Elicitation Techniques Comparison

| Technique | Best For | Advantages | Disadvantages | Time Required |
|-----------|----------|------------|---------------|---------------|
| **Interviews** | Deep exploration, key stakeholders | Flexible, personal | Slow, expensive | High |
| **Questionnaires** | Many people, statistics | Reach many, cheap | Superficial, no flexibility | Medium |
| **Workshops** | Collaboration, conflicts | Synergy, shared understanding | Hard to schedule, needs facilitator | Medium |
| **Observation** | Current processes, dissatisfiers | See reality, not what they say | Time-consuming, observer effect | High |
| **Brainstorming** | Innovation, delighters | Creative, many ideas | Chaotic, may not be practical | Low |
| **Prototyping** | UI/UX, innovative features | Concrete feedback | Time to build | High |

---

## Conflict Types Quick Reference

| Conflict Type | What It Is | How to Resolve | Difficulty |
|--------------|------------|----------------|------------|
| **Subject Matter** | Facts/content disagreement | Research, experts, test | Easy |
| **Data** | Missing/wrong information | Gather more data | Easy-Medium |
| **Interest** | Different goals | Find shared interests, negotiate | Medium-Hard |
| **Value** | Different principles | Find higher values, escalate | HARDEST |
| **Relationship** | Personal/past issues | Neutral facilitator, separate meetings | Hard |
| **Structural** | Power/resource imbalance | Escalate, change structure | Medium-Hard |

---

## Process Facets Decision Guide

| Facet | Choose Linear When... | Choose Iterative When... |
|-------|----------------------|-------------------------|
| **Time** | • Plan-driven process<br>• Stakeholders know requirements<br>• Need contract<br>• Regulatory requirements | • Agile process<br>• Requirements emerge<br>• Feedback loops possible<br>• Change is important |
| **Purpose** | **Prescriptive**:<br>• Fixed contract needed<br>• Scope > cost/time<br>• Outsourced development | **Explorative**:<br>• Vague initial ideas<br>• Strong involvement<br>• Time/cost > scope |
| **Target** | **Customer-Specific**:<br>• One specific customer<br>• Identifiable stakeholders<br>• Internal development | **Market-Oriented**:<br>• Selling to many<br>• Unknown users<br>• Market feedback |

---

## Quality Criteria Checklist

### Individual Requirements
- [ ] Unambiguous (one interpretation)
- [ ] Complete (all info present)
- [ ] Consistent (no contradictions)
- [ ] Atomic (one thing)
- [ ] Traceable (has ID, source documented)
- [ ] Testable (can verify)
- [ ] Feasible (possible to implement)
- [ ] Necessary (actually needed)

### Work Products
- [ ] Agreed (stakeholders accepted)
- [ ] Understandable (clear to audience)
- [ ] Unambiguous (no conflicting interpretations)
- [ ] Complete (nothing missing)
- [ ] Consistent (no contradictions)
- [ ] Modifiable (easy to change)
- [ ] Traceable (can track)
- [ ] Testable (can verify all requirements)

---

## Validation Techniques Comparison

| Technique | Type | Formality | Thoroughness | Best For |
|-----------|------|-----------|-------------|----------|
| **Informal Review** | Static | Low | Low | Work in progress, quick feedback |
| **Walkthrough** | Static | Medium | Medium | Complex requirements, education |
| **Inspection** | Static | High | HIGHEST | Critical systems, baselines |
| **Prototyping** | Dynamic | Low-Medium | Medium | UI/UX, innovative features |
| **Alpha Testing** | Dynamic | Medium | Medium | Early validation, developer site |
| **Beta Testing** | Dynamic | Medium | High | Real environment, many users |
| **A/B Testing** | Dynamic | Low | Specific | Optimization, data-driven |

---

# EXAM TIPS

## What the Exam Tests

**Format:**
- Duration: 75 minutes
- Questions: ~45 multiple choice
- Passing: 60-70% (check current requirements)
- Closed book

**Learning Levels:**
- **L1 (Remember):** Know definitions, list items
- **L2 (Understand):** Explain concepts, when to use
- **L3 (Apply):** Use in scenarios, solve problems

**Focus areas by weight:**
1. Documentation (Chapter 3): Highest weight
2. Elicitation & Validation (Chapter 4): High weight  
3. Principles (Chapter 2): Medium-high weight
4. Management (Chapter 6): Medium weight
5. Process (Chapter 5): Medium weight
6. Introduction (Chapter 1): Lower weight
7. Tools (Chapter 7): Lower weight

---

## Study Strategy

### Must Master (High Priority)

1. **The 9 Principles** - Know by heart
   - Understand why each matters
   - Recognize in scenarios
   - Especially: 2 (Stakeholders), 3 (Shared Understanding), 6 (Validation), 7 (Evolution)

2. **Kano Model** - Extremely important
   - Three categories and characteristics
   - Examples for each
   - How to find each type
   - Mapping to MoSCoW

3. **Documentation Forms**
   - Natural language pros/cons
   - Pitfalls (universal quantifiers, nominalizations)
   - Template types (phrase, form, document)
   - Model types and when to use
   - What CAN'T be in class diagrams

4. **Quality Criteria**
   - 8 criteria for work products
   - Individual requirement criteria
   - Recognize violations

5. **Elicitation Techniques**
   - When to use which
   - Advantages/disadvantages of each
   - Interview vs. questionnaire vs. workshop

### Important (Medium Priority)

6. **Conflict Types and Resolution**
   - 6 types of conflicts
   - How to resolve each
   - 5 resolution techniques

7. **Validation Techniques**
   - Reviews (informal, walkthrough, inspection)
   - Exploratory techniques
   - When to use each

8. **Process Facets**
   - 3 facets and options
   - Criteria for choosing
   - 3 typical configurations
   - Recognize scenarios

9. **Requirements Management**
   - Life cycle, versions, baselines
   - Traceability purpose
   - Change management by state
   - Prioritization (MoSCoW, analytical)

### Know (Lower Priority)

10. **Definitions**
    - Requirement types
    - Product vs. Project
    - System vs. Context
    - RE activities

11. **Tool Support**
    - Types of tools
    - Introduction considerations
    - Not heavy focus on specific tools

---

## Common Traps

### Trap 1: Core Tasks of RE
- Formalizing is NOT core (it's one technique)
- Core: Elicit, Document, Validate, Manage

### Trap 2: Stakeholders
- Don't forget indirect stakeholders
- Opponents are stakeholders too!
- Users ≠ Customers

### Trap 3: Universal Quantifiers
- "Always," "all," "never" are USED WITH CARE (not avoided!)
- They're rarely true in technical systems

### Trap 4: Nominalizations
- Also used with CARE (not avoided)
- They hide requirements

### Trap 5: UML Diagrams
- States NOT in class diagrams (need state machine)
- Sequences NOT in class diagrams (need sequence diagram)
- CAN show: associations, multiplicities, attributes, operations

### Trap 6: Process Configurations
- Linear ≠ Always prescriptive
- Iterative ≠ Always explorative
- Read scenarios carefully!

### Trap 7: Quality Requirements
- Elicited TOGETHER with functional (not after!)
- Often neglected but should be simultaneous

### Trap 8: Validation
- Not just once!
- From multiple perspectives
- Separate finding from fixing

---

## Time Management

**Strategy:**
- 75 minutes ÷ 45 questions = ~1.5 min/question
- First pass: Answer what you know (45 min)
- Second pass: Tackle harder ones (25 min)
- Review: Check answers (5 min)

**During exam:**
- Read question carefully (keywords!)
- Eliminate obviously wrong answers
- Mark difficult ones, return later
- Trust your first instinct usually
- Watch for "NOT" in questions

---

## Final Checklist

**Week before:**
- [ ] Review this study guide
- [ ] Take practice exam
- [ ] Focus on weak areas
- [ ] Review glossary terms
- [ ] Understand (don't just memorize!)

**Day before:**
- [ ] Light review only
- [ ] Get good sleep
- [ ] Avoid cramming

**Day of:**
- [ ] Arrive early
- [ ] Stay calm
- [ ] Read carefully
- [ ] Trust your preparation

---

## Key Takeaways

**Remember the big picture:**
1. **RE creates value** - Focus on what matters
2. **Stakeholders are the source** - Talk to them!
3. **Shared understanding is critical** - Make sure everyone is aligned
4. **Context matters** - Document and validate assumptions
5. **Requirements, problems, and solutions are intertwined** - Iterate!
6. **Validate, validate, validate** - Non-validated = useless
7. **Change is normal** - Plan for it
8. **Innovate** - Go beyond stated needs
9. **Be systematic** - But adapt to context

**The essence of RE:**
> Build the **RIGHT system** to solve the **RIGHT problem** by working with the **RIGHT people** using **systematic practices**.

---

## Good Luck! 🚀

You've prepared thoroughly. Trust your knowledge. You've got this!

**Remember:** 
- Read questions carefully
- Eliminate wrong answers
- Trust your understanding
- Manage your time
- Stay calm and confident

**Most important:** Apply what you've learned in your future RE work. This isn't just about passing an exam - it's about becoming a better Requirements Engineer!

---

*End of Study Guide*
