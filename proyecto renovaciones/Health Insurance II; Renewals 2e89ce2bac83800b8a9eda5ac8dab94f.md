# Health Insurance II; Renewals

Introduction: How we transformed Health Insurance renewals into a predictable product experience, achieving 89% positive user feedback with zero critical blockers and 50% fewer incidents during peak season.
Tags: 2025, B2C, 🔎 Complex Problem Solving
Files & media: Health%20Insurance%20II;%20Renewals/imageRenewals.png

<aside>
🚀

**Goal:** Turn Health Insurance renewals into a scalable, resilient product capability; designed for peak season, built for long-term growth.

**Scope:** App · Admin Dashboard · Backoffice

**Impact:**

- Successfully renewed **682 companies** during the Dec 2025–Jan 2026 peak season
- **89% positive user feedback** collected in-app during renewals
- **50% fewer CX & Operations incidents** vs previous renewal experience
- **No critical blockers** during the most critical revenue window
- Reusable renewal model extended to future insurance benefits
</aside>

![image.png](Health%20Insurance%20II;%20Renewals/image.png)

### Context & Opportunity

---

After launching Health Insurance as a global benefit across Spain, Portugal, and Mexico, the product entered a new phase of maturity.

**By 2025, renewals and replacements became one of the most critical moments in the lifecycle.** What had been solved during the initial rollout was no longer enough at scale.

This project represents the **second chapter of Health Insurance**: moving from launch to long-term sustainability. 
[*👉 You can check the case here*](https://www.notion.so/Health-Insurance-I-A-global-scalable-benefit-1c59ce2bac83800da164f649ebf45cfd?pvs=21)

Renewals are highly seasonal. Most happen between December and January, meaning the experience had to work at scale from day one. Once shipped, it couldn’t be iterated until the following year.

<aside>
⚠️

By **December 2024 (when this started):**

- ~30,000 strictly active employees had Health Insurance

---

By **November 2025 (when this was launched):**

- ~63,000 strictly active employees
- ~90% of them would go through a renewal or replacement process
</aside>

This made renewals not a “support feature”, but a **core product moment** with:

- Direct impact on retention and revenue
- Strong operational cost implications
- Strategic relevance for international expansion and Pluxee integration

### The problem

---

Renewals and replacements were built on unstable, non-scalable solutions that weren’t designed for high-volume annual cycles.

This resulted in:

- High number of incidents and support tickets (+20 in 2 months)
- Increased manual work and operational friction
- Engineering time diverted to reactive fixes

During the 2024 renewal campaign, **28% of the squad’s capacity** was spent solving renewal-related issues.

This wasn’t a local problem. Renewals are a global need and a foundational capability for future insurance products.

### Hypotheses & Objectives

---

**Business goal:** ensure a scalable, reliable renewal model for a highly seasonal benefit.

| Hypothesis | Goal | Success Metric |
| --- | --- | --- |
| Renewals are built on unstable, non-scalable solutions. | Reduce incidents and operational friction during peak season. | ↓ Renewal-related incidents |
| Experience doesn’t support growth | Build a robust renewal & replacement system | No critical blockers during peak |
| Engineering time is lost on reactive fixes. | Protect squad capacity during renewals. | ↓ % engineering time spent on renewals |
| Renewals are critical for revenue continuity. | Ensure uninterrupted coverage and retention. | Stable MRR during renewal period |
| Other benefits will require the same logic. | Build reusable renewal machinery | Reuse across insurance benefits |

### Solution

---

We approached renewals as a **system design problem**, not a set of isolated flows.

The solution was built by mapping and combining two core dimensions:

**1. User relationships**

We identified **four possible member scenarios**, based on the relationship between the employee and their family members.

![image.png](Health%20Insurance%20II;%20Renewals/image%201.png)

Since family members can’t keep Health Insurance if the employee doesn’t renew or contract it first, every scenario had to remain logically consistent, including cases where coverage needed to be cancelled or replaced.

**2. Renewal outcomes**

In parallel, we defined **four renewal outcomes**:

- Automatic renewal
- Contracting a new plan
- Replacement
- No coverage available for the next period
    
    ![image.png](Health%20Insurance%20II;%20Renewals/image%202.png)
    

Each user scenario could lead to a different renewal outcome, resulting in multiple valid combinations that needed to be handled without breaking business rules or user understanding.

To manage this complexity, we designed the experience **case by case**, focusing on:

- Clear and explicit outcomes
- Consistent mental models across all scenarios
- Reducing technical edge cases through product logic
- Making each result understandable without exposing internal complexity

This required a strong exercise of **system thinking and synthesis**, prioritizing coherence over flow proliferation.

![Screen Recording 2026-01-14 at 17.10.28.gif](Health%20Insurance%20II;%20Renewals/Screen_Recording_2026-01-14_at_17.10.28.gif)

![We also took in account, system errors, requires emails and notifications, missing user data for a renewal/repalcement and other edge cases.
We organised the flows by the subject and the cases included in the subject.](Health%20Insurance%20II;%20Renewals/Screenshot_2026-01-14_at_14.18.45.png)

We also took in account, system errors, requires emails and notifications, missing user data for a renewal/repalcement and other edge cases.
We organised the flows by the subject and the cases included in the subject.

Throughout the process, the solution was:

- **Reviewed and validated with Operations and key stakeholders** to ensure all real-world cases were covered
- **Closely aligned with Engineering** to assess technical feasibility and scope early
- **Tested with users** to validate comprehension, clarity, and confidence in each outcome

The final result was a **coherent, scalable renewal system** that could support complex real-life scenarios while remaining simple and predictable for users.

### Measuring success

---

Given the scale and criticality of renewals, defining how to measure success was a core part of the solution.

We needed to validate the experience from **two angles**:

- **Operational efficiency** (incidents, manual workload)
- **User perception** (clarity, confidence, ease of use)

To capture real feedback at the right moment, we launched an **in-app notification immediately after renewal**, asking users whether the experience felt simple.

![image.png](Health%20Insurance%20II;%20Renewals/image%203.png)

This allowed us to:

- Track feedback **at company level**, not just in aggregate
- Turn quantitative signals into **qualitative insights** by reaching out to users and companies who reported friction
- Understand not only *which* companies struggled, but *why* — and in which renewal scenarios
- Connect user feedback directly with operational and product decisions

In parallel, **Product and Operations jointly tracked bugs and incidents throughout the renewal period**, comparing results with the previous year.

This measurement layer made renewals an observable, actionable product moment instead of a black box.

### Results & Impact

---

| Area | Result | Insight |
| --- | --- | --- |
| 🌍 Rollout | 682 out of ~1.000 companies with this benefit renewed using the new experience by Jan 2026 | The solution **scaled progressively** and proved stable under real peak conditions. |
| 🔁 Coverage | Multiple renewal & replacement scenarios supported | A single experience successfully covered complex real-world insurance cases. |
| 😊 User Experience & Operations | **89% positive feedback** 
**50% fewer CX & Operations incidents** vs previous experience. | Clearer flows reduced user errors, doubts, and operational friction. |
| 📈 Business continuity | Revenue continuity ensured during the most critical renewal window. | Renewals treated as core product logic |
| 🧩 Scalability | Renewal machinery designed as reusable components. | Ready for other insurance benefits Life & Pension Insurance |

### **Learnings & Takeaways**

---

**Seasonality forces better product decisions.**
Having a single, high-risk window per year changed how we designed. Priorities became sharper, solutions simpler, and risk management more intentional. When iteration is limited, clarity and robustness matter more than feature depth.

**Measuring success unlocks long-term value.**
Defining clear success metrics for a large, long-term project provided actionable insights into what worked and what to improve next. Quantitative feedback allowed us to directly reach companies and users to better understand underlying problems.