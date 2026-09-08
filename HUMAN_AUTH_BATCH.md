# SHAR SUPERMAX — HUMAN AUTH BATCH

Local browser boundary: headless persistent state works; a visible persistent session and importing normal-browser auth do not. No row is a submission or published placement.

Selection: Tier A/B independent industry, native package/install, MCP, and research/archive routes only.

## DevHunt

- Value: TIER_B — developer-tool discovery
- URL: https://devhunt.org
- Prepared: DevHunt is an active developer-tool directory with Open Source and AI categories. Its explicit Submit your Dev Tool route redirects to login. No account, submission receipt or public SHAR card exists.
- Owner action: Authenticate with the provider account.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT

## MCP Market

- Value: TIER_B — independent MCP directory, free queue only
- URL: https://mcpmarket.com/submit
- Prepared: Live form explicitly offers a $0 Free Queue with standard placement and a separate $29 one-time option. No paid option was selected. The non-browser HTTP request to the same submit route returned Forbidden, while the browser session renders the form. This CUA runtime exposes no click/type/submit method, so no browser session was repurposed and no submission was sent.
- Owner action: Authenticate in the browser session and use only its $0 Free Queue.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_BROWSER_SESSION_AND_INTERACTION

## n8n Creator Hub

- Value: TIER_B — workflow/agent ecosystem
- URL: https://creators.n8n.io/register
- Prepared: Official n8n guidance routes template-library submissions through Creator Hub. A useful n8n production-metadata release-gate workflow is already public and functionally tested. Live Creator Hub registration is open in tab 98 but current CUA runtime cannot type into browser forms. No account or submission exists yet.
- Owner action: Create or authenticate an account through the official Creator Hub.
- Current environment can continue after auth: UNKNOWN
- Status: BROWSER_ACCOUNT_CREATION_REQUIRED

## Chocolatey Community Repository

- Value: TIER_B — Windows install ecosystem
- URL: https://community.chocolatey.org/account/Register
- Prepared: A legitimate portable package definition for the existing Windows CLI is publicly committed at GitHub commit 1c747f45248e7738071187426433ca8e5753902c. Local archive/metadata/install-contract verification passed. Community registration is free but its Register action is protected by reCAPTCHA; no account, API key, upload or public package exists.
- Owner action: Authenticate through the provider’s normal supported account flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_RECAPTCHA_REGISTRATION

## Glama MCP Registry

- Value: TIER_A — independent MCP registry
- URL: https://glama.ai/mcp/servers
- Prepared: Official FAQ states that an open-source MCP can be submitted from its GitHub repository with display name and description, followed by automated quality, security and health checks. Live registry exposes Add Server while showing Sign Up; no account, submission receipt or public Glama card exists.
- Owner action: Authenticate with the provider account.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT

## npm Registry

- Value: TIER_A — native Node package registry
- URL: https://www.npmjs.com/login
- Prepared: Rechecked native npm CLI: npm whoami returned ENEEDAUTH. npm view confirms both @sharproduction/production-metadata-mcp and unscoped shar-production-metadata-mcp are absent from the public npm registry. A clean detached clone of public commit 511863a5be1b5d1738dba2b8b31bfdb31cbc6593 at v1.0.4 passed npm ci, all 3 functional tests, and npm pack --dry-run with 0 vulnerabilities. Publish is ready immediately after owner npm authentication.
- Owner action: Authenticate the authorised npm account through its native supported flow.
- Current environment can continue after auth: YES
- Status: OWNER_GATE_NPM_ACCOUNT_AUTH

## StudioList

- Value: TIER_A — curated commercial AI-video studio directory
- URL: https://studiolist.co/get-listed/
- Prepared: Google OAuth is the only visible submission authentication method. No attempt is made to bypass Google browser-security protections. The public form is fully inspected; after normal-browser Google authentication the same profile may be completed with the prepared factual payload.
- Owner action: Authenticate with Google in a normal supported browser from the StudioList Google button.
- Current environment can continue after auth: NO
- Status: HUMAN_GATE_GOOGLE_AUTH

## World Media Match

- Value: TIER_A — production-services industry network
- URL: https://worldmediamatch.com/register-your-company/
- Prepared: WMM offers a free public company directory placement but its official form requires Cloudflare Turnstile plus required personal contact name, company address, phone and company email fields. No CAPTCHA was bypassed and no personal data was invented.
- Owner action: Authenticate through the provider’s normal supported account flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_TURNSTILE_AND_REQUIRED_OWNER_FIELDS

## Oward

- Value: TIER_A — audiovisual company network
- URL: https://www.oward.co/en/register
- Prepared: Oward publicly offers free profile creation for audiovisual companies but requires account email verification and personal account identity fields before a company profile can be created and exposed. No account was created.
- Owner action: Supply genuine personal identity and complete email verification.
- Current environment can continue after auth: NO
- Status: OWNER_GATE_EMAIL_VERIFICATION_AND_IDENTITY

## Production List

- Value: TIER_A — production-industry company profile
- URL: https://www.productionlist.com/register?plan=free
- Prepared: Production List offers a no-card free account and accepts Other country, but the registration starts with required personal first name, email, role and then a password. No personal identity was invented or account created.
- Owner action: Supply genuine personal identity and complete email verification.
- Current environment can continue after auth: NO
- Status: OWNER_GATE_EMAIL_VERIFICATION_AND_IDENTITY

## Screen Global Production

- Value: TIER_A — production-industry company network
- URL: https://www.screenglobalproduction.com/register/form/basic
- Prepared: Screen Global Production offers a Basic plan with no listed price, three categories and a public basic profile. Its registration requires personal first and last name, job role, email, telephone and company contact data. No personal identity or contact fields were invented.
- Owner action: Authenticate through the provider’s normal supported account flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_REQUIRED_IDENTITY_AND_CONTACT

## Smithery

- Value: TIER_A — MCP distribution registry
- URL: https://smithery.ai/new
- Prepared: Smithery officially accepts pre-built MCPB bundles for local stdio servers. SHAR has a public v1.0.1 MCPB release asset verified HTTP 200. The live new-server route redirects to account sign-in, and the documented upload API requires a bearer token. No account, API key, submission, receipt, or public listing exists.
- Owner action: Authenticate and create the required API access for the existing MCPB asset.
- Current environment can continue after auth: YES
- Status: OWNER_GATE_ACCOUNT_AND_API_KEY

## Figshare

- Value: TIER_A — independent research/data archive
- URL: https://figshare.com/account/articles/new
- Prepared: The SHAR rights-labelled conformance corpus is a self-contained synthetic dataset with a public v0.1.2 GitHub release with verified HTTP-200 ZIP and SHA-256 asset, SHA-256 archive, CITATION.cff, CodeMeta and Data Package metadata. The Figshare new-item route redirects to its account sign-in screen. No Figshare record, DOI or public landing page exists yet, so nothing is counted.
- Owner action: Create or authenticate a free account and complete email verification if prompted.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT

## 3DVF CG Map

- Value: TIER_A — established CGI/VFX studio directory
- URL: https://3dvf.com/en/register-your-studio/
- Prepared: 3DVF states that studios may add a profile to its CG Map for free after creating an account; premium visibility is optional and was not selected. Its published scope covers animation, VFX and digital-creation studios. No account, submitted profile, receipt or public SHAR page exists, so nothing is counted.
- Owner action: Create or authenticate a free account and verify email if prompted.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT

## FOOH

- Value: TIER_A — CGI/VFX/AI-video work directory; use real credited work only
- URL: https://fooh.com/account/work
- Prepared: FOOH publicly presents a CGI, VFX, mixed-reality and AI-video talent directory. It states that creating a portfolio and submitting work is free, and that approved work appears on a public portfolio and Explore. A submission must use a real SHAR work with rights and factual credits; no invented portfolio item, account, submission, receipt or public SHAR profile exists, so nothing is counted.
- Owner action: Authenticate, then select one real SHAR work and confirm rights/credits.
- Current environment can continue after auth: NO
- Status: OWNER_GATE_ACCOUNT_AND_REAL_WORK_SELECTION

## Zenodo

- Value: TIER_A — research/software archive DOI route for eligible corpus
- URL: https://zenodo.org/deposit/new
- Prepared: Zenodo officially accepts versioned datasets and software, requires an account to create an upload, and registers a DOI only when a record is published. The prepared SHAR synthetic rights-labelled conformance corpus has a public v0.1.2 release, archive checksum, CITATION.cff, CodeMeta and Data Package metadata. No Zenodo account, draft, DOI, record or public landing page exists, so nothing is counted.
- Owner action: Authenticate with the provider and approve only the account/OAuth step.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT

## AgentForge

- Value: TIER_B — agent/MCP directory
- URL: https://agentforge.community/en/dashboard/publish
- Prepared: Public form collects MCP name, description, category, source URL and documentation URL, but dashboard publishing redirects to email/password authentication. No account, submission or listing is claimed.
- Owner action: Authenticate with the provider account.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT_AUTHENTICATION_REQUIRED

## vskill

- Value: TIER_B — agent-skill marketplace
- URL: https://verified-skill.com/submit
- Prepared: Free public GitHub skill source is eligible, but actual submit page requires GitHub sign-in before it scans and publishes. No login or submission is claimed.
- Owner action: Authenticate through the provider’s normal supported account flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_GITHUB_LOGIN

## SkillMD

- Value: TIER_B — public skill registry
- URL: https://skillmd.com/publish
- Prepared: Free registry accepts SKILL.md source/file upload after sign-in and safety review. No account or submission exists.
- Owner action: Authenticate with the provider account.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT
