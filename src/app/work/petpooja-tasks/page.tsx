import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Petpooja Tasks — Task Creation, Redesigned · Diya Patel",
  description:
    "Case study: rebuilding the Petpooja Tasks creation flow around the five fields users actually fill — 57.4% faster, 18% lower drop-off.",
};

const petpoojaTokens: CSSProperties = {
  ["--accent-deep" as string]: "#C9462C",
  ["--accent-cream" as string]: "#FBEFE0",
  ["--accent-warm" as string]: "#E8D5C0",
};

export default function PetpoojaCaseStudy() {
  return (
    <div style={petpoojaTokens}>
      <div className="cs-wrap">
        <div className="crumb">
          <Link href="/#work">← Back to work</Link>
        </div>

        <section className="hero">
          <div className="eyebrow">Flagship · Petpooja · 2025 – 2026</div>
          <h1 className="title">
            Task Creation, <em>Redesigned</em>.
          </h1>
          <p className="lede">
            The original task-creation form was a wall of inputs. Owners and
            frontline staff were dropping off mid-flow. I rebuilt it around{" "}
            <em>the five fields users actually fill</em> — and tucked
            everything else behind an honest &ldquo;Advanced options&rdquo;
            toggle.
          </p>

          <div className="hero-media">
            <div className="hero-row">
              <div className="hero-phone-wrap">
                <span className="lbl">Before</span>
                <img
                  src="/images/petpooja-old.png"
                  alt="Old Petpooja task-creation form"
                />
              </div>
              <div className="hero-phone-wrap">
                <span className="lbl">After</span>
                <img
                  src="/images/petpooja-new-default.png"
                  alt="Redesigned task-creation form"
                />
              </div>
            </div>
          </div>

          <div className="meta">
            <div>
              <div className="meta-label">My Role</div>
              <div className="meta-value">Product Designer · End-to-end</div>
            </div>
            <div>
              <div className="meta-label">Team</div>
              <div className="meta-value">PM · Engineering · QA</div>
            </div>
            <div>
              <div className="meta-label">Scope</div>
              <div className="meta-value">
                Research → Wireframes → Prototype → Final
              </div>
            </div>
            <div>
              <div className="meta-label">Platform</div>
              <div className="meta-value">Web &amp; Mobile · Shipped</div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="section-label">
            <span className="num">01</span>
            <span>Context</span>
          </div>
          <h2>
            The product, and <em>who actually uses it</em>.
          </h2>
          <p className="body">
            Petpooja Tasks is a task management tool for small and medium
            businesses — used heavily by restaurants and retail. The people on
            it aren&apos;t desk workers. They&apos;re owners trying to keep ten
            things straight, managers running a shift, and frontline staff who
            only open the app to do the next thing and put the phone down.
          </p>
          <p className="body">
            A flow they hit dozens of times a week — creating a task — was the
            one that kept tripping them up.
          </p>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">02</span>
            <span>Process</span>
          </div>
          <h2>What did I do?</h2>
          <div className="didgrid">
            <div className="pills">
              {[
                "Funnel audit",
                "Drop-off analysis",
                "User research",
                "Field usage analysis",
                "Form inventory",
                "Wireframes",
                "Prototype",
                "Usability testing",
                "Final design",
                "Dev handoff",
              ].map((p) => (
                <span key={p} className="pill">
                  {p}
                </span>
              ))}
            </div>
            <div>
              <p className="body">
                I started where the data hurt — drop-off on the task-creation
                form was high, and the time-to-create was longer than it had
                any right to be. The form had grown by accretion over time:
                every new feature had earned a new input, and nobody had ever
                pruned.
              </p>
              <p className="body">
                So I went back to the source. I researched what people
                actually came to this form for — what fields they filled, in
                what order, and how often. The pattern was sharp: a small
                handful of fields accounted for nearly all real-world usage.
                The rest were edge cases dressed up as defaults.
              </p>
              <p className="body">
                Then I worked closely with the PM, engineering, and QA to
                wireframe, prototype, and ship a form that respects what that
                data actually says.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">03</span>
            <span>Where it broke down</span>
          </div>
          <h2>
            Four problems the old form was <em>quietly causing</em>.
          </h2>

          <div className="problems">
            <ProblemCard
              tag="Problem 01"
              titleStart="Users were "
              titleEm="overwhelmed"
              titleEnd=" on arrival."
              body="The form opened with a long list of inputs and options, all visible, all equally weighted. First-time users froze. Even returning users had to re-scan it every time to find what they came for."
            />
            <ProblemCard
              tag="Problem 02"
              titleStart="Drop-off rates were "
              titleEm="high"
              titleEnd="."
              body="People started creating tasks and didn't finish. The funnel showed it cleanly — and the form's length and density were the most likely culprit."
            />
            <ProblemCard
              tag="Problem 03"
              titleStart="The flow took "
              titleEm="too long"
              titleEnd="."
              body="Even confident users — the owners and managers who used this every day — were spending more time on each task than they should have. The form treated every field as equally urgent."
            />
            <ProblemCard
              tag="Problem 04"
              titleStart="Edge cases were "
              titleEm="masking the 90%"
              titleEnd="."
              body="Fields that mattered to 5% of tasks were sitting in the same visual rank as fields used on nearly every task. The hierarchy didn't reflect reality."
            />
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">04</span>
            <span>The insight</span>
          </div>
          <h2>
            One pattern in the data <em>led the entire redesign</em>.
          </h2>
          <p className="body">
            When I broke down what people actually filled in, the answer was
            almost embarrassing in how clear it was. Across owners, managers,
            and frontline staff, five fields were doing 90% of the work.
            Everything else was used occasionally — sometimes valuably, but
            never urgently.
          </p>

          <div className="pull">
            <p>
              &ldquo;It&apos;s not necessarily good to give all the options
              visible to the user. Sometimes you have to make a calculated
              decision about what the user actually needs — and what&apos;s
              just a feature that&apos;s <em>nice to have</em> but rarely
              reached for.&rdquo;
            </p>
            <cite>From my reflection at the end of the project</cite>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">05</span>
            <span>Design move 01</span>
          </div>
          <div className="solution">
            <div className="sol-head">
              <h3>
                Build the form around <em>five fields, not fifty</em>.
              </h3>
              <p className="body">
                I identified the small set of fields that users reach for on
                almost every task — the ones that make a task an actual task —
                and made the form about them. Everything else stepped back.
              </p>
              <span className="solves">Solves Problem 01 &amp; 04</span>
            </div>

            <div className="five">
              <Field
                n="01"
                name="Task name"
                desc="What needs to get done. The only field that's truly required."
              />
              <Field
                n="02"
                name="Start & end · reminders"
                desc="When it starts, when it's due, when to nudge. With a repeat toggle for recurring work."
              />
              <Field
                n="03"
                name="Repeat"
                desc="Daily, weekly, monthly. Most operational tasks are recurring."
              />
              <Field
                n="04"
                name="Assignee"
                desc="Who's doing it. One person or a role."
              />
              <Field
                n="05"
                name="Subtasks / checklist"
                desc="Break down the task into actionable steps right at creation."
              />
            </div>
            <div className="sol-caption">
              THE FIVE FIELDS · 90% OF REAL-WORLD USAGE
            </div>

            <div className="sol-media" style={{ marginTop: 40 }}>
              <img
                src="/images/petpooja-filled.png"
                alt="Real task — Cleaning the entire first floor, with assignees, description, attachments, three subtasks, and Advanced Options expanded"
              />
            </div>
            <div className="sol-caption">A REAL TASK · FILLED IN END-TO-END</div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">06</span>
            <span>Design move 02</span>
          </div>
          <div className="solution">
            <div className="sol-head">
              <h3>
                Tuck the rest behind <em>&ldquo;Advanced options&rdquo;</em>{" "}
                — present, not pushy.
              </h3>
              <p className="body">
                Nothing was removed. The long-tail fields still exist, still
                work the same way — but they sit behind a single,
                de-emphasized &ldquo;Advanced options&rdquo; toggle. Power
                users who need them know exactly where to find them. Everyone
                else gets a form that respects their time.
              </p>
              <span className="solves">Solves Problem 02 &amp; 03</span>
            </div>
            <div className="twocol">
              <div className="sol-media">
                <img
                  src="/images/petpooja-new-default.png"
                  alt="New task-creation form, default state"
                />
              </div>
              <div className="sol-media">
                <img
                  src="/images/petpooja-advanced-expanded.png"
                  alt="New form with Advanced Options expanded"
                />
              </div>
            </div>
            <div className="sol-caption">
              DEFAULT · ADVANCED OPTIONS EXPANDED — PRESENT, NEVER PUSHY
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">07</span>
            <span>Before / After</span>
          </div>
          <h2>
            What changed, <em>side by side</em>.
          </h2>
          <p className="body">
            The honest comparison — same product, same fields available, very
            different first impression.
          </p>

          <div className="compare">
            <div className="col before">
              <div className="col-head">
                <span className="dot" />
                <span className="label">Before</span>
              </div>
              <div className="col-body">
                <img
                  src="/images/petpooja-old.png"
                  alt="Old Petpooja task-creation form — wall of inputs"
                />
              </div>
            </div>
            <div className="col after">
              <div className="col-head">
                <span className="dot" />
                <span className="label">After</span>
              </div>
              <div className="col-body">
                <img
                  src="/images/petpooja-new-default.png"
                  alt="Redesigned Petpooja task-creation form — five fields surfaced"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">08</span>
            <span>Outcomes</span>
          </div>
          <h2>
            What shipped, <em>and what it moved</em>.
          </h2>
          <div className="impact-grid">
            <Metric n="57.4%" lbl="faster task creation, end-to-end" />
            <Metric n="18%" lbl="lower drop-off mid-form" />
            <Metric
              n="5"
              lbl="primary fields surfaced — the rest moved to Advanced"
            />
          </div>

          <div className="reflect">
            <p>
              &ldquo;One thing this project drilled into me: it&apos;s not
              always good to show users every option. Sometimes the right
              design call is to know what the user actually needs — and
              politely <em>hide what they don&apos;t</em>.&rdquo;
            </p>
          </div>
        </section>

        <section className="next cs-section tight">
          <Link href="/work/nutrify-india">
            <div className="label">← Previous case study</div>
            <div className="title-sm">Nutrify India</div>
          </Link>
          <Link href="/#work" style={{ textAlign: "right" }}>
            <div className="label">Back to →</div>
            <div className="title-sm">All work</div>
          </Link>
        </section>
      </div>
    </div>
  );
}

function ProblemCard({
  tag,
  titleStart,
  titleEm,
  titleEnd,
  body,
}: {
  tag: string;
  titleStart: string;
  titleEm: string;
  titleEnd: string;
  body: string;
}) {
  return (
    <div className="prob">
      <div className="tag">{tag}</div>
      <h3>
        {titleStart}
        <em>{titleEm}</em>
        {titleEnd}
      </h3>
      <p>{body}</p>
    </div>
  );
}

function Field({ n, name, desc }: { n: string; name: string; desc: string }) {
  return (
    <div className="field">
      <div className="fnum">{n}</div>
      <div className="fname">{name}</div>
      <div className="fdesc">{desc}</div>
    </div>
  );
}

function Metric({ n, lbl }: { n: string; lbl: string }) {
  return (
    <div className="metric">
      <div className="num">{n}</div>
      <div className="lbl">{lbl}</div>
    </div>
  );
}
