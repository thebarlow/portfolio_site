---
tocLabel: Overview
---

<img src="/autoapply-icon.svg" alt="Auto Apply logo" class="w-24 mb-6" />

# Auto Apply

> Semi-automated job scraping, tailored resume generation, and application management.

[View on GitHub →](https://github.com/thebarlow/AutoApply)

---

## What it does

Auto Apply automates the most tedious parts of a job search. It scrapes listings, generates tailored resumes and cover letters using an LLM of your choice, and tracks the status of each application from a local web dashboard.

---

## Setup

```bash
git clone https://github.com/thebarlow/AutoApply.git
cd auto_apply
setup.bat
```

`setup.bat` installs Python if needed, creates the virtual environment, and deletes itself on success. Running `start.bat` instead will detect and run setup automatically on first launch.

---

## Running the server

```bash
./start.bat
```

Navigate to [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

---

## Onboarding

New users create a User Profile, which can be seeded from an existing master resume. The profile requires an API key for an LLM — this key determines which models Auto Apply uses for all generation tasks. The onboarding flow links to documentation for users unfamiliar with the process.
