---
last_verified: 2026-06-15
verified_against: 58a600f
status: verified
owner: architecture
---

# Experiments

Load this file before proposing architecture or workflow changes.

## EXP-001: Fifteen Specialized Agents

**Date:** Before 2026-03-29  
**Hypothesis:** More specialized AI roles would improve project coverage.  
**What was built:** Fifteen overlapping agent definitions.  
**Result:** Slower reasoning, role overlap, inconsistent routing, and higher
context cost.  
**Conclusion:** Agent simulation does not solve durable project understanding.  
**Status:** ABANDONED

## EXP-002: Manual Agent Toggles

**Date:** Before 2026-03-29  
**Hypothesis:** Users should manually enable roles per project.  
**What was built:** Configuration flags and active/inactive role lists.  
**Result:** Configuration became stale and contradicted actual files.  
**Conclusion:** Context loading should be driven by project knowledge and
request relevance, not role toggles.  
**Status:** ABANDONED

## EXP-003: Documentation-Heavy Distribution

**Date:** Before 2026-06-15  
**Hypothesis:** Separate guides for each editor and workflow would improve
adoption.  
**What was built:** More than ten overlapping summaries and editor guides.  
**Result:** Contradictory 10-agent and 15-agent descriptions, stale references,
and unclear authority.  
**Conclusion:** Use one universal entrypoint and thin editor adapters.  
**Status:** ABANDONED

## EXP-004: Static Impact Analysis File

**Date:** 2026-06-15  
**Hypothesis:** A root impact-analysis document could protect changes.  
**Result:** The document would describe only one task and become stale after
implementation.  
**Conclusion:** Impact analysis is a mandatory dynamic pre-change workflow.  
**Status:** REJECTED BEFORE IMPLEMENTATION

## Template

```markdown
## EXP-NNN: Short Name

**Date:** YYYY-MM-DD
**Hypothesis:** What was expected.
**What was built:** The tested implementation.
**Result:** Measured or observed outcome.
**Conclusion:** Durable lesson.
**Status:** ACTIVE | SUCCESSFUL | ABANDONED | REJECTED BEFORE IMPLEMENTATION
```
