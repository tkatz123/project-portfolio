/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — the single source of truth for every word on the site.
 *
 * To update the site, edit this file. Components never hard-code personal or
 * project text. Anything wrapped in [PLACEHOLDER: ...] is stub content waiting
 * for the real thing — search for "PLACEHOLDER" to find everything left to fill.
 *
 * To add a project: append an entry to `projects` below. Its card and its
 * detail page at /projects/<slug> are generated automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Tyler Katz",
  role: "Aspiring AI/ML Engineer",
  tagline: "Building AI agents, RAG systems, and fine-tuned LLMs.",
  email: "tylerkatz110@gmail.com",
  github: "https://github.com/tkatz123",
  linkedin: "https://www.linkedin.com/in/tylerkatz1/",
  resumeUrl: "/resume.pdf",
  headshot: "/headshot.png",
};

/** Sticky nav — anchors into the single page. */
export const navSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm Tyler, a graduate student at Syracuse University working toward a career in AI/ML engineering. I got here through data: my undergrad in Applied Data Analytics at the iSchool taught me to find the signal, and somewhere between my first scikit-learn pipeline and my first LLM agent, I realized I cared most about building the systems that put models to work.",
    "I just wrapped up a data science internship at Comcast on the security infrastructure analytics and orchestration team, where I automated a quarterly network inventory reconciliation process that used to take tens to hundreds of hours by hand. The pipeline uses an LLM to compare inventory records across multiple source systems, generate structured reports, and reconcile discrepancies between databases, running through FastAPI endpoints I built and MCP integrations I contributed to that let agents handle the process automatically. That work now takes one to two minutes instead of hundreds of hours.",
    "I'm currently a full-time graduate student, still chasing that same problem: turning slow, manual processes into systems people can just trust.",
    "On campus, I lead engineering for United AI, Syracuse's AI/ML student organization, where I help other students go from curious to shipping.",
    "I also spent a year as a data analytics research assistant, building the tables, charts, and maps behind a professor's book on the relationship between crime and politics in Brazil. I was a major contributor to that work, and a few of the maps I built ended up presented in front of the UN at a conference.",
  ],
};

export const education = [
  {
    school: "Syracuse University — iSchool",
    degree: "B.S. Applied Data Analytics",
    period: "2026",
    dot: "filled" as const,
  },
  {
    school: "Syracuse University — iSchool",
    degree: "M.S. Applied Human Centered Artificial Intelligence",
    period: "In Progress",
    dot: "hollow" as const,
  },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "R", "SQL", "HTML", "CSS"],
  },
  {
    category: "ML & Data Science",
    items: ["scikit-learn", "pandas", "NumPy", "matplotlib", "PySpark"],
  },
  {
    category: "AI / LLM Engineering",
    items: [
      "LangGraph",
      "RAG",
      "Agents",
      "LLM Fine-Tuning (LoRA/QLoRA)",
      "Prompt Engineering",
    ],
  },
  {
    category: "Engineering & Cloud",
    items: [
      "FastAPI",
      "Docker",
      "AWS EKS",
      "GitHub Actions CI/CD",
      "Streamlit",
      "Shiny",
    ],
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    org: "Comcast — SIAO, Cybersecurity Research Engineering",
    period: "June – Aug 2026",
    bullets: [
      "Automated quarterly network device inventory reconciliation by building an LLM agent and MCP integration, cutting the process from hundreds of hours to 5 minutes and reducing token costs 30–40%.",
      "Engineered a FastAPI pipeline across 14 device platforms to auto-generate and upload CMDB templates, improving data consistency for ~5,000 network devices.",
      "Applied the agent to generate structured discrepancy reports across 14 platforms, cutting total reporting time from hundreds of hours to 2–3 hours.",
    ],
  },
  {
    role: "Engineering Lead",
    org: "United AI — Syracuse University",
    period: "Aug – Dec 2025",
    bullets: [
      "Led 10 student AI/ML teams, meeting weekly to unblock issues and guide projects to production.",
      "Served as technical lead, advising on Python and model training/deployment, and reviewing designs for code quality.",
      "Managed a 10-project GitHub org (repos, CI/CD) and lectured 200+ members on Git, Claude Code, and new AI tools.",
    ],
  },
  {
    role: "Data Analytics Research Assistant",
    org: "Syracuse University",
    period: "Jan – Dec 2025",
    bullets: [
      "Engineer clean, integrated datasets from raw census files, geospatial shapefiles, and web-scraped sources using R, streamlining data preparation workflows and improving analysis efficiency for the project.",
      "Design and implement data visualizations, geospatial maps, and statistical tables that were directly incorporated into multiple chapters of Machine [Gun] Politics, enhancing the clarity and persuasiveness of research findings.",
      "Translate complex, multi-source datasets into actionable insights through advanced data wrangling, exploratory analysis, and visualization techniques, driving progress toward book completion and supporting evidence-based conclusions.",
    ],
  },
];

export const resume = {
  highlights: [
    "M.S. Applied Human Centered AI @ Syracuse — in progress",
    "Data Science Intern @ Comcast",
    "LangGraph agents, RAG, and LoRA/QLoRA fine-tuning in production settings",
    "Engineering Lead of United AI, Syracuse's AI/ML student org",
    "Data Analytics Research Assistant — data visualizations and geospatial analysis for a published book",
  ],
};

export type ProjectCategory = "ai-llm" | "classical-ml";

export const projectCategories: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "ai-llm", label: "AI & LLM" },
  { id: "classical-ml", label: "Classical ML & DS" },
];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-to-two line description shown on the card. */
  description: string;
  /** Single "outcome" line shown on the card — the result, not the process. */
  outcome: string;
  tech: string[];
  links: {
    github: string;
    demo?: string;
  };
  detail: {
    overview: string;
    problem: string;
    approach: string;
    /** Path under /public to an architecture diagram, or null for the placeholder slot. */
    architectureImage: string | null;
    architectureCaption: string;
    results: string;
    /** Optional supporting result charts (ROC/PR curves, confusion matrices) shown below the results text. */
    resultCharts?: { src: string; caption: string; width: number; height: number }[];
  };
}

export const projects: Project[] = [
  {
    slug: "agentic-rag-system",
    title: "Agentic RAG System",
    category: "ai-llm",
    description:
      "A LangGraph research assistant over 2,299 chunks of job postings and arXiv abstracts that decides when to retrieve, reformulates weak queries, and cites its sources — not another 'chat with your PDF' clone.",
    outcome:
      "Query-reformulation agent beat a simple RAG pipeline on answer faithfulness (2.80 vs. 2.75/3) at a 90% retrieval hit-rate, proven with a custom eval harness.",
    tech: ["LangGraph", "RAG", "FastAPI", "Chroma", "Docker"],
    links: {
      github: "https://github.com/tkatz123/Agentic_RAG_System",
    },
    detail: {
      overview:
        "The Agentic RAG System is a research assistant built over a corpus of 100 AI-engineer job postings and 250 arXiv AI/ML abstracts. Rather than a plain 'chat with your docs' pipeline, the project centers on two things most student RAG projects skip: an agent layer that makes retrieval decisions instead of blindly stuffing context into a prompt, and an evaluation harness that proves the system actually works, with numbers to back it up. It's exposed as a FastAPI service with a Streamlit front end, containerized with Docker, and backed by a Chroma vector store of 2,299 chunks. Built end-to-end over six weeks: corpus and ingestion, retrieval tuning, the LangGraph agent, the service layer, evaluation, and final polish.",
      problem:
        "Job-market analysis of 100 AI-engineer postings showed the modern AI-engineer role is less about training models from scratch and far more about building systems on top of LLMs — retrieval pipelines, agent orchestration, and getting them into production. 'Agentic AI' and 'RAG' each appear in roughly half of all postings and co-occur heavily; LLMs appear in 84%. My prior portfolio was strong on classical ML (XGBoost, K-Means, NLP with logistic regression and random forest, PySpark) but predated the LLM era entirely. This project closes that gap, and does it in a way that stands out from the flood of 'chat with your PDF' clones that can't answer the basic interview question: is it actually good?",
      approach:
        "Scoped and built in six weekly phases: (1) locked scope, ingested and chunked both corpora, generated embeddings, loaded them into Chroma, and shipped an ugly-but-working baseline; (2) tuned chunk size and k, and hand-built a gold set of 20 question/expected-source pairs to measure retrieval hit-rate objectively; (3) converted the linear pipeline into a LangGraph agent that decides whether retrieved context is relevant, reformulates the query and retries (capped at 2) when it isn't, and only generates once it has good context or exhausts retries; (4) wrapped the agent in a FastAPI backend with source citations in the response payload, added a Streamlit UI, and containerized with Docker; (5) measured retrieval hit-rate against the gold set and answer faithfulness via an LLM-as-judge, comparing the agent against a simple non-agentic pipeline to quantify what the agent layer actually buys; (6) polish, README, and write-up. The guiding principle throughout was to keep scope tight and ship — every week had one concrete deliverable.",
      architectureImage: "/diagrams/agentic-rag-system.svg",
      architectureCaption:
        "4-node LangGraph agent (agent/agent.py): retrieve → grade_chunks → generate, with a reformulate retry loop capped at 2.",
      results:
        "Retrieval hit-rate at k=10 reached 90% (18/20) against the hand-curated gold set, versus 85% (17/20) at k=5. On answer faithfulness (LLM-as-judge, 1–3 scale), the agent with query reformulation scored 2.80/3 versus 2.75/3 for a simple non-agentic pipeline — direct evidence the agent layer earns its complexity rather than just adding latency. Honest limitation: that faithfulness delta is small; a larger corpus or harder, more ambiguous questions would likely widen the gap. The system runs Chroma locally rather than a managed cloud vector database, has no streaming responses, and caps reformulation at 2 retries as a reasonable default rather than a tuned value.",
    },
  },
  {
    slug: "fine-tuned-llm-microservice",
    title: "Fine-Tuned LLM Microservice",
    category: "ai-llm",
    description:
      "A small open LLM fine-tuned with QLoRA to extract structured job-posting data, then merged, quantized, containerized, and shipped to a live AWS endpoint behind a full CI/CD pipeline — not a notebook demo.",
    outcome:
      "Fine-tuning lifted tech-stack extraction from 0.08 to 0.68 F1 over the zero-shot baseline, after diagnosing and fixing a training-data regression that had initially made the model worse.",
    tech: ["QLoRA", "FastAPI", "Docker", "AWS EC2", "GitHub Actions"],
    links: {
      github: "https://github.com/tkatz123/Fine_Tuning_LLM_Microservice",
    },
    detail: {
      overview:
        "This project takes Qwen2.5-3B-Instruct, a small open instruct model, and fine-tunes it with QLoRA (4-bit quantized LoRA) to perform one narrow, well-defined task: reading a raw job posting and extracting a structured JSON record of required skills, tech stack, seniority, and compensation range. The fine-tuned adapter is merged, quantized to GGUF, and served behind a FastAPI endpoint, containerized with Docker, deployed to an AWS EC2 (Graviton/ARM) instance, and wired into a GitHub Actions CI/CD pipeline that tests, builds, and publishes the image on every push. The project deliberately avoids agentic complexity or a bigger model — the point is the production tier: proving a single small model can be fine-tuned, evaluated rigorously against its own zero-shot baseline, and operated as a real service.",
      problem:
        "Job postings are unstructured text, but hiring analysis, market research, and sourcing tools all need structured data: required skills, tech stack, seniority, and compensation range. Doing this by hand doesn't scale, and general-purpose frontier models are too expensive and too heavy to run this kind of extraction at volume in production. There's also a portfolio gap this targets directly: job-posting analysis shows cloud in 61% of postings, AWS in 41%, and MLOps/model deployment in roughly 29% each, yet the 'deploy and operate a model' tier is almost entirely absent from typical early-career portfolios. A companion project (an agentic RAG system) proves the ability to architect LLM systems; this one proves the complementary skill: fine-tuning one model for a specific task and running it as a monitored production service.",
      approach:
        "Structured as teacher → baseline → student so the result isolates exactly one variable, the effect of fine-tuning: Claude Sonnet was used once, offline, as a teacher to bootstrap labels for a corpus of job postings, gated through a pydantic schema so malformed labels were rejected rather than silently kept; Qwen2.5-3B-Instruct zero-shot became the baseline, measured on a held-out test set; the fine-tuned Qwen2.5-3B + LoRA adapter is the student that ships, always scored as Student − Baseline via disable_adapter() so decoding conditions stay identical between the two. Data was bootstrapped, pydantic-validated, and split 70/15/15, then fine-tuned with QLoRA (4-bit nf4 base + LoRA r=16). The first run, on 70 examples with uncorrected labels, actually regressed performance below baseline at a 60% valid-JSON rate. Rather than reaching for decoding-time fixes, the raw generations were inspected directly, surfacing degenerate repetition loops under greedy decoding on the longest postings. Decoding fixes broke the loops but degraded content, and a stricter schema-validation eval exposed that the real root cause was thin, noisy training data, not decoding parameters. The dataset was doubled (100 → 188 examples, deduplicated), the labeling prompt tightened, and labels re-bootstrapped and re-verified — the retrain lifted valid-JSON output from 60% to 100% and turned the model into an across-the-board win over baseline. The adapter was then merged into the base model, quantized to a Q4_K_M GGUF (~1.8 GB), and served via llama-cpp-python on CPU, reusing the same generate → parse → validate pipeline from evaluation. Finally: containerized with Docker, published to Docker Hub, deployed to an AWS EC2 Graviton instance, and wired to a GitHub Actions pipeline that runs tests and builds/pushes the image on every push, with structured request logging and per-request latency middleware as the monitoring layer.",
      architectureImage: "/diagrams/fine-tuned-llm-microservice.svg",
      architectureCaption:
        "Offline fine-tuning pipeline feeding a served FastAPI endpoint, tied to a GitHub Actions → Docker Hub → AWS EC2 deploy lane.",
      results:
        "Field-level accuracy, base model vs. fine-tuned, scored identically (same decoding, same run, via disable_adapter()) on a held-out test set of 29 postings: seniority 0.72 → 0.76, compensation (±10%) 0.86 → 0.97, required skills (set-F1) 0.17 → 0.27, tech stack (set-F1) 0.08 → 0.68, valid-JSON rate 1.00 → 1.00. The standout result is tech stack (0.08 → 0.68): fine-tuning taught the model to cleanly separate named technologies (Python, PyTorch, AWS, Docker) from general competencies, a distinction the base model consistently failed to make. Getting there required a real diagnostic detour, arguably the strongest part of the project: the first fine-tuning attempt regressed performance (60% valid-JSON, worse than baseline on 3 of 4 fields) due to degenerate repetition loops in generation. Tracing that back to thin, noisy training data, rather than patching it over with decoding-time hacks, and fixing it at the source is what turned the project into a clean win across every measured field. Operationally, the model is fine-tuned, quantized, containerized, and deployed live on AWS behind a public, monitored /extract endpoint, with CI/CD testing, building, and publishing the image automatically on every push. A concrete infrastructure finding from deployment: on a free-tier 2 GB / 2-core EC2 instance, the Q4_K_M model is RAM-bound rather than compute-bound, running correctly but slowly because it doesn't stay resident in memory — a documented, well-understood cost/performance tradeoff with a clear scale-up path rather than a defect.",
    },
  },
  {
    slug: "fake-news-detection",
    title: "Fake News Detection",
    category: "classical-ml",
    description:
      "An NLP classifier that scores a news article's credibility from its title and body text, stacking a logistic regression and a random forest into a meta-classifier and shipping the result as an interactive Streamlit app.",
    outcome:
      "95.51% accuracy from a stacked meta-classifier — beating both individual base models on every metric on a 20% held-out test split of 72,134 articles.",
    tech: ["scikit-learn", "NLTK", "TF-IDF", "Streamlit", "GridSearchCV"],
    links: {
      github: "https://github.com/tkatz123/fake-news-detection",
    },
    detail: {
      overview:
        "Misinformation has become increasingly difficult to distinguish from factual reporting, and its spread carries real social and political consequences. This project applies NLP and classical machine learning to automatically evaluate the credibility of a news article from its title and body text. The end product is a Streamlit application where a user pastes in an article and instantly receives a real/fake prediction with a confidence percentage (e.g., 90% real / 10% fake), plus a page for downloading and preprocessing the underlying training dataset.",
      problem:
        "Misinformation spreads quickly and is often difficult for the average reader to identify, especially as fake news is increasingly written to mimic the tone and structure of legitimate reporting. Manual fact-checking doesn't scale to the volume of content published daily. The goal was to build a reliable, automated classifier that evaluates the linguistic and sentiment patterns of an article's text to predict whether it is credible or fabricated, and to package that model behind an interface accessible to non-technical users.",
      approach:
        "Started with exploratory analysis using matplotlib, wordcloud, and nltk to visualize article length, top words in real vs. fake articles, and sentiment differences between classes. Built a text-cleaning pipeline that drops rows with missing values, lowercases text, strips punctuation and parenthetical content, removes redundant whitespace, and filters stop words, then generated a sentiment score for every article with NLTK's SentimentIntensityAnalyzer, parallelized with swifter to make processing the full 72K-article dataset feasible. Combined the cleaned title and body into one field per article, vectorized it with TF-IDF (max_features=5000, fit on the training split), and merged the TF-IDF matrix with the sentiment score via scipy.hstack to form the final feature matrix. Split 80/20 into train/test and trained two base classifiers — logistic regression for linear word-credibility relationships, random forest for non-linear ones — then, rather than simply averaging the two, trained a third logistic regression as a meta-classifier on the base models' predicted probabilities, learning how to weight each one's output for the final prediction and confidence score. Used GridSearchCV to tune both base models and reduce overfitting, landing on LogisticRegression(max_iter=1000, C=10) and RandomForestClassifier(max_depth=15, max_features='sqrt', min_samples_leaf=1, min_samples_split=5, n_estimators=200). Evaluated all three models on accuracy, precision, recall, and F1, plus confusion matrix heatmaps, ROC curves, and a precision-recall/calibration curve for the meta-classifier. Saved the trained models and TF-IDF vectorizer with joblib and built a Streamlit interface for real-time predictions and for downloading/preprocessing the source dataset via a user-supplied Kaggle API key.",
      architectureImage: "/diagrams/fake-news-detection.svg",
      architectureCaption:
        "Kaggle corpus → cleaning + sentiment scoring → TF-IDF feature matrix → LR + RF base models → stacked meta-classifier → Streamlit app.",
      results:
        "All metrics computed on the held-out 20% test split: Logistic Regression reached 94.87% accuracy (precision/recall/F1 ≈ 0.95 across fake and real), Random Forest reached 92.42% (≈ 0.92–0.94), and the stacked meta-classifier reached 95.51% (≈ 0.95–0.96) — outperforming both individual models on every metric, confirming that combining a linear model's word-level signal with a random forest's ability to capture non-linear word interactions adds predictive value beyond simple averaging. Two challenges shaped the build: slow sentiment scoring on 72K+ articles was resolved by parallelizing with swifter, and early overfitting was resolved with GridSearchCV hyperparameter tuning. Stacking two models' outputs as input to a third was a new technique for this project, implemented as the meta-classifier. Possible next steps: expand training data by scraping additional, more diverse news sources to improve generalization, and package the model as a browser extension that flags potential misinformation in real time as users browse.",
      resultCharts: [
        {
          src: "/charts/fake-news-detection/pr-curve-meta-classifier.png",
          caption: "Precision-recall curve — meta-classifier (AP = 0.99), the model that ships.",
          width: 1800,
          height: 1500,
        },
        {
          src: "/charts/fake-news-detection/roc-curve-logistic-regression.png",
          caption: "ROC curve — logistic regression base model (AUC = 0.99).",
          width: 1800,
          height: 1500,
        },
        {
          src: "/charts/fake-news-detection/roc-curve-random-forest.png",
          caption: "ROC curve — random forest base model (AUC = 0.98).",
          width: 1800,
          height: 1500,
        },
      ],
    },
  },
  {
    slug: "sales-forecasting-predictions",
    title: "Sales Forecasting Predictions",
    category: "classical-ml",
    description:
      "An XGBoost pipeline that forecasts daily store-level sales for 1,115 Rossmann retail locations from 2.5 years of history, served through a Shiny dashboard for comparing actual vs. predicted sales by store and time window.",
    outcome:
      "Feature engineering and hyperparameter tuning together cut RMSE by ~54% (1433.87 → 663.47) and MAE by ~59% (1081.46 → 438.57) versus the baseline model.",
    tech: ["XGBoost", "R", "Shiny", "ggplot2", "tidyverse"],
    links: {
      github: "https://github.com/tkatz123/sales-forecasting-predictions",
    },
    detail: {
      overview:
        "This project takes 2.5 years of historical daily sales data (January 2013 – July 2015) from 1,115 Rossmann store locations and turns it into a working forecasting system. The pipeline covers the full lifecycle of a data science project: cleaning and joining raw data, engineering time-aware features, exploring trends through visualization, training and tuning an XGBoost regression model, rigorously evaluating its performance, and packaging the results into a Shiny app that lets a user pick any store and time window to compare actual vs. predicted sales. The motivation was to gain hands-on experience with two things at once: forecasting on time-series data and working with a gradient boosting model, using the well-known Kaggle Rossmann Store Sales competition as the testbed.",
      problem:
        "Retailers need accurate, forward-looking sales estimates at the individual store level to plan staffing, inventory, and promotions effectively. Sales are driven by a mix of factors that interact in non-obvious ways — day of week, promotions, competition, holidays, and recent sales momentum — which makes naive averages or simple trend lines unreliable. The goal was to build a model that predicts daily sales per store with meaningfully better accuracy than a baseline approach, while remaining interpretable and fast enough to serve interactively through a dashboard.",
      approach:
        "Joined the raw sales data with store metadata so every row represents a single store on a single day, imputing missing values in competition-related fields rather than dropping or zero-filling them (either choice would have biased the data or discarded a large share of rows), and adding missingness indicators for promo fields to preserve information about why a value was missing. Engineered calendar features (year, month, day, week, day-of-week, weekend/month-start/month-end flags), status flags (closed-day, promo active, competition active), and sales-history features (1/7/14-day lags, 7/14-day rolling means) to give the model a sense of recent momentum and local seasonality per store. Ran exploratory analysis with skimr and ggplot2/plotly to visualize daily sales trends, monthly seasonality, day-of-week patterns, and sales distributions across promo status, holidays, store type, and assortment type. Split the data chronologically, holding out the last six weeks as a test set — a random split would let the model 'see the future' through the lag and rolling features — then trained an XGBoost regressor on 28 features spanning calendar, promo, competition, and sales-history signals. Ran a grid search over eta, max depth, subsample, colsample_bytree, and rounds, evaluating each combination on the same time-based holdout and selecting the configuration with the lowest RMSE. Compared training vs. test RMSE/MAE to confirm the tuned model wasn't overfitting, then visualized residuals vs. predicted sales, actual vs. predicted sales, aggregate daily actual vs. predicted sales, a residual distribution histogram, and feature importance. Finally, built a Shiny dashboard so a non-technical user can select any store (1–1115) and a time window (7–90 days) and see actual vs. predicted sales plotted side by side, along with summary totals for the selected period.",
      architectureImage: "/diagrams/sales-forecasting-predictions.svg",
      architectureCaption:
        "Raw CSVs → preprocessing → feature dataset → grid-search tuning → training → evaluation + Shiny dashboard, with chronological (not random) splitting throughout.",
      results:
        "Tuning and feature engineering together cut RMSE from 1433.87 to 663.47 (roughly 54%) and MAE from 1081.46 to 438.57 (roughly 59%) relative to the baseline. Training vs. test error was checked directly to confirm the improvement wasn't due to overfitting. The lag and rolling-average sales features, along with the closed-day and month-position indicators, were among the most influential in reducing error, since they gave the model direct signal about each store's recent momentum rather than relying solely on static, calendar-level information. The final model and dataset are served through a Shiny dashboard where a user can select any store and a 7–90 day window to visually compare actual and predicted sales and see aggregate totals for that period, turning the model from a static evaluation artifact into an explorable tool. Initial model performance was weak and was resolved through targeted feature engineering combined with systematic hyperparameter tuning; building the Shiny app itself was a new skill for this project, requiring learning reactive programming patterns to wire up the store/time-window inputs to live predictions and plots. Next steps: a reliable method for generating lag and rolling-average features for genuinely future dates, richer holiday-related time features, and incorporating geographic data per store.",
      resultCharts: [
        {
          src: "/charts/sales-forecasting-predictions/total-sales-actual-vs-predicted.png",
          caption: "Total sales, actual vs. predicted, aggregated by day — the same comparison the Shiny dashboard shows live.",
          width: 3000,
          height: 1800,
        },
        {
          src: "/charts/sales-forecasting-predictions/predicted-vs-actual-scatter.png",
          caption: "Predicted vs. actual sales at the row level — tight clustering along the diagonal across 20,000+ test predictions.",
          width: 2400,
          height: 1800,
        },
        {
          src: "/charts/sales-forecasting-predictions/feature-importance.png",
          caption: "Top 20 feature importances — Open, 7-day rolling mean, and 14-day lag dominate the model's decisions.",
          width: 2400,
          height: 2100,
        },
      ],
    },
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    category: "classical-ml",
    description:
      "A PySpark pipeline that clusters 2,240 retail customers into behavioral personas with K-Means, then builds three recommendation engines — association-rule mining, a hybrid recommender, and rule-based deal-matching — on top of the segments.",
    outcome:
      "Chose K = 3 over the elbow method's suggested K = 6 by weighing three validation methods together — the PCA projection was the tiebreaker that a metric alone would have missed.",
    tech: ["PySpark", "MLlib", "K-Means", "FP-Growth", "PCA"],
    links: {
      github: "https://github.com/tkatz123/customer-segmentation",
    },
    detail: {
      overview:
        "This project segments 2,240 customers from a Portuguese retail loyalty program into distinct behavioral personas using K-Means clustering, then builds three separate recommendation systems on top of those segments: an association-rule engine for inventory planning, a hybrid recommender for personalized product suggestions, and a rule-based deal-matching system for targeted promotions. The entire pipeline, from raw data to clustering to recommendations, is implemented in PySpark, using its MLlib library for feature engineering, clustering, and frequent-pattern mining. The project began as a final project for IST 418: Big Data Analytics at Syracuse University and was later refactored from a single notebook into a modular, three-notebook pipeline for improved readability and reuse.",
      problem:
        "Retailers running broad, undifferentiated marketing campaigns waste spending on offers that don't match customer preferences and miss opportunities to deepen engagement with high-value customers. Without a systematic way to group customers by demographic and behavioral traits, businesses can't answer basic questions that drive strategy: which customers are price-sensitive versus loyalty-driven, what products should be bundled or promoted together, and which deals will actually resonate with a given customer. The goal was to take raw, unlabeled customer data and produce actionable, interpretable customer segments, along with concrete recommendations for what to sell, to whom, and how, using unsupervised learning at scale.",
      approach:
        "Loaded the raw dataset into a Spark DataFrame, dropped 24 rows with missing income values out of 2,240, and engineered features including total number of children, customer tenure, total campaigns accepted, computed age and age group, total spend across product categories, and cleaned marital status and education categories, writing the cleaned dataset back out as a distributed CSV. Validated the engineered features with Spark SQL queries, then converted to pandas to visualize education distribution, spending by education and marital status, spending by age group, and spending by loyalty duration. Built a Spark ML Pipeline combining a VectorAssembler (numeric features), StandardScaler (standardization), StringIndexer + OneHotEncoder (education and marital status), and a final VectorAssembler to merge scaled and encoded features into a single feature vector. Trained K-Means models for K = 2–10 and used three methods together — the elbow method (WSSSE), silhouette scores, and 2D PCA visualizations — to pick the final value: the elbow graph pointed to K = 6 and the silhouette score was marginally higher at K = 5, but the PCA projection at K = 5 produced messy, overlapping clusters, so K = 3 was chosen instead, since its PCA visualization showed the cleanest separation and its silhouette score (0.3136) was only about 0.01 below the K = 5 maximum. Aggregated average income, age, spend by category, purchase channel, deal usage, and education/marital status distribution per cluster via Spark SQL to build an interpretable persona for each segment, then built three complementary recommendation engines on top of the cluster assignments.",
      architectureImage: "/diagrams/customer-segmentation.svg",
      architectureCaption:
        "Raw CSV → preprocessing → EDA → Spark ML pipeline → K-Means (K=3) → cluster profiling → three parallel recommendation engines.",
      results:
        "K-Means with K = 3 achieved a silhouette score of 0.3136 and produced three well-separated, interpretable customer segments: Balanced Mid-Spenders (avg. income $57,993, avg. spend $730, deal-interested and engaged online), Budget-Conscious Deal Seekers (avg. income $35,402, avg. spend $99, highest deal usage and most price-sensitive), and Affluent Digital Loyalists (avg. income $77,466, avg. spend $1,422, highest campaign acceptance and lowest deal reliance). Association rule mining with FP-Growth returned confidence scores between 0.80 and 1.0 across all clusters, with wine and meat consistently emerging as the core products driving co-purchase behavior, a direct signal for inventory prioritization. All three recommendation engines produced cluster-specific, actionable outputs: Balanced Mid-Spenders map to wines, meat, and gold with online bundle/BOGO deals; Budget-Conscious Deal Seekers map to sweets and meat with in-store coupons and family packs; Affluent Digital Loyalists map to wines, fish, and gold with loyalty rewards and email promos. The project demonstrates a full, reproducible pipeline for turning raw transactional and demographic data into segmentation-driven marketing strategy, moving beyond a single clustering output to three distinct, business-ready recommendation mechanisms. Planned next steps include a dashboard that lets a business enter new customer data, automatically assign it to a cluster, and surface the corresponding marketing and inventory recommendations in real time.",
      resultCharts: [
        {
          src: "/charts/customer-segmentation/elbow-method.png",
          caption: "Elbow method (WSSSE) across K = 2–10 — the naive elbow points to K = 6, but K = 3 was chosen instead.",
          width: 2000,
          height: 1200,
        },
        {
          src: "/charts/customer-segmentation/pca-visualization.png",
          caption: "Customer segments visualized by PCA — K = 3 produced the cleanest separation of the values tested.",
          width: 2000,
          height: 1200,
        },
      ],
    },
  },
];

export const contact = {
  heading: "Get in touch",
  invitation:
    "I'm always up for talking about applied AI, internships and new-grad roles, or a project you think I'd find interesting. My inbox is open — I read everything.",
};
