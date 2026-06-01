import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Nutrify India — Diya Patel",
  description:
    "Case study: a nutrition product designed around how Indian households actually eat — dual Individual/Family modes, scan-to-understand meals, and cultural intelligence.",
};

const nutrifyTokens: CSSProperties = {
  ["--accent-deep" as string]: "#0F4B4C",
  ["--accent-cream" as string]: "#F5EFD7",
  ["--accent-warm" as string]: "#BFBFD7",
};

export default function NutrifyCaseStudy() {
  return (
    <div style={nutrifyTokens}>
      <div className="cs-wrap">
        <div className="crumb">
          <Link href="/#work">← Back to work</Link>
        </div>

        <section className="hero">
          <div className="eyebrow">
            Concept · Health &amp; Nutrition · 2024 – 2025
          </div>
          <h1 className="title">Nutrify India</h1>
          <p className="lede">
            A nutrition product designed around how{" "}
            <em>Indian households actually eat</em> — regional thalis, shared
            plates, working women planning meals for the whole family, and
            individuals winging it from one tiffin to the next.
          </p>

          <div className="hero-media">
            <div className="hero-row">
              <div className="hero-phone-wrap">
                <img
                  src="/images/nutrify-profile.png"
                  alt="Profile type — Individual or Family"
                />
              </div>
              <div className="hero-phone-wrap featured">
                <img
                  src="/images/nutrify-home.png"
                  alt="Home — Today's Goal"
                />
              </div>
              <div className="hero-phone-wrap">
                <img
                  src="/images/nutrify-community.png"
                  alt="Social Community"
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
              <div className="meta-label">Type</div>
              <div className="meta-value">Academic / Concept Project</div>
            </div>
            <div>
              <div className="meta-label">Scope</div>
              <div className="meta-value">
                Research → IA → UI → Prototype
              </div>
            </div>
            <div>
              <div className="meta-label">Platform</div>
              <div className="meta-value">Mobile · iOS &amp; Android</div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="section-label">
            <span className="num">01</span>
            <span>Context</span>
          </div>
          <h2>
            Most nutrition apps don&apos;t{" "}
            <em>know what a thepla is</em>.
          </h2>
          <p className="body">
            India&apos;s middle class is in a quiet nutrition crisis. Busy
            schedules, ultra-processed food on every corner, and a generation
            of working women juggling office and home meal planning have made
            it harder than ever to eat well — and chronic conditions are
            rising in step.
          </p>
          <p className="body">
            Meanwhile the apps meant to help (MyFitnessPal, Lifesum, Healthify
            and the like) speak a different language:{" "}
            <em>
              single-portion, western-plate, English-language, calorie-first
            </em>
            . They don&apos;t recognize the way an Indian household eats — a
            shared thali pulled from one pan, regional staples that change
            every 300 km, and meal decisions made for the whole family, not
            the individual.
          </p>
          <p className="body">
            Nutrify India is my attempt at the right brief: a healthy-living
            product designed from the Indian household up.
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
                "Secondary research",
                "Literature review (10+ papers)",
                "Star Bursting",
                "SMART goals",
                "User surveys",
                "Market segmentation",
                "Performance specs",
                "Task analysis",
                "IA & flows",
                "UI design",
                "Prototyping",
                "Visual system",
              ].map((p) => (
                <span key={p} className="pill">
                  {p}
                </span>
              ))}
            </div>
            <div>
              <p className="body">
                I resisted opening Figma for a while. The category is crowded
                and the temptation was to compare features and start drawing
                screens — but I&apos;d seen too many &ldquo;Indian health
                apps&rdquo; that were Healthify with different colors. So I
                went the long way around.
              </p>
              <p className="body">
                I read 10+ peer-reviewed papers on Indian nutrition, food
                intake patterns, mHealth interventions, and food wastage — to
                understand <em>what the data actually says</em> about how
                families eat, where calorie patterns are shifting, and why
                past digital interventions have or haven&apos;t worked. Then I
                ran parallel surveys with two segments — individuals living
                alone (students, working professionals) and families (joint
                and nuclear) — because their relationships with food are
                fundamentally different and most apps lump them together.
              </p>
              <p className="body">
                From there I framed the problem with Star Bursting
                (Who/What/Where/When/Why/How), tightened it into a SMART goal,
                mapped tasks against importance and frequency, and only then
                started designing screens.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">03</span>
            <span>What broke down</span>
          </div>
          <h2>
            Four problems my research <em>kept surfacing</em>.
          </h2>

          <div className="problems">
            <ProblemCard
              tag="Problem 01"
              titleStart="Indian households are "
              titleEm="invisible"
              titleEnd=" to nutrition apps."
              body="Existing apps catalog ingredients in grams. Indian meals are mixed plates served from a shared pan — a rotli with subzi, dal, rice and a spoon of pickle, with regional names that change every state. No app understands a thepla, an undhiyu, or a kothu parotta as a single thing."
            />
            <ProblemCard
              tag="Problem 02"
              titleStart="Individuals living alone "
              titleEm="survive on convenience"
              titleEnd="."
              body="From my survey: people living alone rely on cooks, flatmates, or delivery — with almost no pre-planning. Weekdays are quick home-cooked meals; weekends collapse into eating out. Healthy eating is desired, but unsustainable without external scaffolding."
            />
            <ProblemCard
              tag="Problem 03"
              titleStart="Families have "
              titleEm="shared meal needs"
              titleEnd=" nobody designs for."
              body="Working women plan meals around perishability, family preferences, and medical conditions — one diabetic parent, a child who hates karela, a husband on a no-salt diet. Single-user nutrition apps can't hold this. Meal decisions are collective, not individual."
            />
            <ProblemCard
              tag="Problem 04"
              titleStart="Users "
              titleEm="don't know"
              titleEnd=" what's in their packaged food."
              body="Nutritional awareness is mixed. Some scrutinize ingredient lists; many rely on trusted brands. Preservatives, hidden sugar, and unfamiliar additives drive anxiety — but there's no fast, simple way to find out at the point of decision (the shelf, the plate)."
            />
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">04</span>
            <span>What two surveys taught me</span>
          </div>
          <h2>
            Two segments, <em>two different relationships</em> with food.
          </h2>
          <p className="body">
            I ran the same study twice — once with individuals living alone,
            once with families — and the difference shaped the whole product.
            Individuals optimize for <em>convenience under chaos</em>: quick
            decisions, ingredient availability, social settings. Families
            optimize for <em>structure under constraint</em>: medical
            conditions, shared preferences, perishability, and quality over
            price. A single-mode app would have failed both.
          </p>

          <div className="pull">
            <p>
              &ldquo;I don&apos;t plan. I open the fridge. Whatever&apos;s
              there, plus Maggi if it&apos;s late.&rdquo;
            </p>
            <cite>Individual respondent · Ahmedabad</cite>
          </div>
          <div className="pull">
            <p>
              &ldquo;I decide tomorrow&apos;s lunch tonight — what&apos;s
              left, what&apos;s fresh, who&apos;s eating, whose sugar is high
              this week.&rdquo;
            </p>
            <cite>Family respondent · Working mother of three</cite>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">05</span>
            <span>The shape of the solution</span>
          </div>
          <h2>
            A mobile app — but <em>a different kind</em> of one.
          </h2>
          <p className="body">
            The category is crowded with calorie trackers. Another one of
            those wasn&apos;t going to do the job. So I designed Nutrify India
            around four decisions that the existing apps had quietly punted on
            — recognize the family unit at the core, replace tracking with{" "}
            <em>understanding</em>, build cultural intelligence into
            onboarding instead of treating Indian users as a footnote, and
            make habits travel with people through community rather than
            streaks alone.
          </p>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">06</span>
            <span>Design move 01</span>
          </div>
          <div className="solution">
            <div className="sol-head">
              <h3>
                One app, <em>two modes</em> — Individual and Family.
              </h3>
              <p className="body">
                The single most consequential decision was building the family
                profile into the core of the app, not as an afterthought.
                After onboarding, users choose Individual or Family — and on
                the family path, a 4-digit code links household members. That
                one fork unlocks shared meal planning, household-aware grocery
                lists, and dietary preferences that respect everyone at the
                table.
              </p>
              <span className="solves">Solves Problem 02 &amp; 03</span>
            </div>
            <div className="sol-single">
              <img
                src="/images/nutrify-profile.png"
                alt="Onboarding — choose Individual or Family profile"
              />
            </div>
            <div className="sol-caption">
              DUAL-MODE ONBOARDING · INDIVIDUAL OR FAMILY
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">07</span>
            <span>Design move 02</span>
          </div>
          <div className="solution">
            <div className="sol-head">
              <h3>
                Scan to <em>understand</em>, not just to log.
              </h3>
              <p className="body">
                Logging is a tax. So instead of asking users to type &ldquo;1
                idli + 30g sambar,&rdquo; I built three scan modes: scan the
                meal on your plate, scan a QR/barcode on packaged food, or
                scan raw ingredients before cooking. The camera does the
                recognition; the app surfaces nutrition value, portion
                guidance, and healthier alternatives. The point isn&apos;t
                tracking — it&apos;s <em>informed-in-the-moment</em>.
              </p>
              <span className="solves">Solves Problem 01 &amp; 04</span>
            </div>
            <div className="twocol">
              <div className="sol-media">
                <img
                  src="/images/nutrify-scanner.png"
                  alt="Scanner — capturing a plate of food"
                />
              </div>
              <div className="sol-media">
                <img
                  src="/images/nutrify-nutrition.png"
                  alt="Nutrition breakdown — Egg Toast"
                />
              </div>
            </div>
            <div className="sol-caption">
              SCAN MEAL · SCAN QR · SCAN INGREDIENTS
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">08</span>
            <span>Design move 03</span>
          </div>
          <div className="solution">
            <div className="sol-head">
              <h3>
                Cultural intelligence, <em>not just translation</em>.
              </h3>
              <p className="body">
                The onboarding flow asks about regional cuisine (Gujarati,
                Rajasthani, Punjabi, South Indian, Bengali, Maharashtrian,
                Kashmiri, Goan…), dietary preferences (Vegetarian,
                Jain-friendly, Eggetarian, Vegan), and health restrictions
                written in language Indian users actually use — diabetes, BP,
                cholesterol, IBS, gout. Region-specific cuisines drive meal
                recommendations downstream. The product knows the difference
                between Gujarati and Punjabi vegetarian — because for the
                user, that&apos;s the difference between feeling at home and
                feeling tracked.
              </p>
              <span className="solves">Solves Problem 01</span>
            </div>
            <div className="sol-single">
              <img
                src="/images/nutrify-regions.png"
                alt="Onboarding — regional cuisines selection"
              />
            </div>
            <div className="sol-caption">REGIONAL CUISINE ONBOARDING</div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">09</span>
            <span>Design move 04</span>
          </div>
          <div className="solution">
            <div className="sol-head">
              <h3>
                Habits travel with <em>people, not progress bars</em>.
              </h3>
              <p className="body">
                Streaks alone don&apos;t move behavior. So the home loop pairs
                a daily-goal tracker (kcal, protein, fats, carbs) with a
                social community where users ask questions, share answers from
                certified nutritionists, and find others on the same goals.
                Habit completion earns real-world rewards — grocery discounts,
                exclusive recipes — keeping motivation tangible.
              </p>
              <span className="solves">Closes the habit loop</span>
            </div>
            <div className="twocol">
              <div className="sol-media">
                <img
                  src="/images/nutrify-home.png"
                  alt="Home — Today's Goal and meal plan"
                />
              </div>
              <div className="sol-media">
                <img
                  src="/images/nutrify-community.png"
                  alt="Social Community — questions, answers, events"
                />
              </div>
            </div>
            <div className="sol-caption">
              DAILY GOAL · COMMUNITY · REWARDS
            </div>
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">10</span>
            <span>Five core features</span>
          </div>
          <h2>What the app actually does.</h2>
          <p className="body">
            Distilled from the task-analysis matrix — high-frequency,
            high-importance jobs first.
          </p>

          <div className="features">
            <Feat
              name="Find Your People"
              desc="Connect with others who share your goals. Tips, ideas, encouragement."
            />
            <Feat
              name="Build Better Habits"
              desc="Habit tracker. Earn rewards — grocery discounts, awareness-program passes."
            />
            <Feat
              name="Plan Your Meals"
              desc="Expert-assisted meal planning aligned to your health goals. (Paid feature.)"
            />
            <Feat
              name="Expert Advice"
              desc="Free, ongoing tips and answers from health professionals."
            />
            <Feat
              name="Know Your Ingredients"
              desc="Scan packaged food or a finished plate. Instant breakdown, instant alternatives."
            />
          </div>
        </section>

        <section className="cs-section tight">
          <div className="section-label">
            <span className="num">11</span>
            <span>Outcomes</span>
          </div>
          <h2>What I delivered.</h2>
          <p className="body">
            As an academic project, the outcomes are the artifacts and the
            depth of the design thinking — not shipped metrics. Here&apos;s
            what came out the other end.
          </p>
          <div className="impact-grid">
            <Metric
              n="20+"
              lbl="screens prototyped end-to-end in Figma, from onboarding to community"
            />
            <Metric
              n="5"
              lbl="core features surfaced from a task-analysis matrix"
            />
            <Metric
              n="2"
              lbl="user segments served with distinct flows — Individual and Family"
            />
          </div>

          <div className="reflect">
            <p>
              &ldquo;The hardest part of this project wasn&apos;t designing
              the screens. It was resisting the urge to design them{" "}
              <em>too early</em>. Once I let the research lead — two surveys,
              ten papers, four problems — the product almost drew itself.
              Indian users don&apos;t need another tracker. They need a system
              that knows them.&rdquo;
            </p>
          </div>
        </section>

        <section className="next cs-section tight">
          <Link href="/#work">
            <div className="label">← Previous</div>
            <div className="title-sm">Back to work</div>
          </Link>
          <Link href="/work/petpooja-tasks" style={{ textAlign: "right" }}>
            <div className="label">Next case study →</div>
            <div className="title-sm">Petpooja Tasks</div>
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

function Feat({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="feat">
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
