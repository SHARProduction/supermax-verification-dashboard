# SHAR SUPERMAX — HUMAN AUTH BATCH

Headless persistent Chrome profiles preserve local state, but this host cannot keep a visible persistent browser session and cannot import a normal-browser authenticated session. Do not claim automatic continuation unless a provider exposes a supported local API/CLI/session path.

No row is a submission or published placement. Only free routes are retained.

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

## Vimeo SHAR Showreel

- Value: TIER_A — independent video-hosting domain with a SHAR showreel and homepage link
- URL: https://vimeo.com/1175145775
- Prepared: HTTP 200, canonical, oEmbed, author/title/description and mobile metadata passed. Public page has not passed visual browser rendering because Vimeo showed Cloudflare verification.
- Owner action: Complete Vimeo Cloudflare “Verify to continue” in a normal supported browser, then leave the public showreel page reachable.
- Current environment can continue after auth: NO
- Status: CAPTCHA_REQUIRED

## AI Filmmaker Index

- Value: TIER_A — curated AI filmmaker, studio and agency directory
- URL: https://aifilmmakerindex.com/login
- Prepared: Public listing route is confirmed free; login is a passwordless magic-link flow that creates the listing for a new user.
- Owner action: Enter the intended account email and use the provider magic link in the supported email/browser flow.
- Current environment can continue after auth: NO
- Status: HUMAN_GATE_EMAIL_MAGIC_LINK

## GitHub Container Registry

- Value: TIER_A — native OCI install ecosystem and prerequisite for Docker-dependent MCP directories
- URL: https://github.com/orgs/SHARProduction/packages/container/production-metadata-mcp/settings
- Prepared: The v1.0.4 OCI image was built and pushed by GitHub Actions with SBOM and provenance. Current package visibility is private; anonymous GHCR manifest verification returned HTTP 401. No public container placement or dependent directory submission is claimed.
- Owner action: Set the SHARProduction production-metadata-mcp container package visibility to Public in GitHub package settings.
- Current environment can continue after auth: YES
- Status: OWNER_GATE_PUBLIC_VISIBILITY

## IndexOf.AI

- Value: TIER_B — independent AI-tool directory with a free reviewed listing
- URL: https://indexof.ai/submit
- Prepared: The public submit page confirms a free basic reviewed listing and a separate optional paid Pro listing. No paid option is applicable. The free route redirects to provider sign-in; no account, receipt, or public SHAR card exists.
- Owner action: Authenticate with the provider account and use only the free basic listing path.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT

## AI Directory

- Value: TIER_A — AI-company directory relevant to AI video production
- URL: https://www.aidirectory.org/user-submit
- Prepared: The official form supports a factual Generative AI company listing with SHAR Production name and website. It requires a real telephone contact and Google reCAPTCHA; no owner field was invented and no CAPTCHA was bypassed.
- Owner action: Complete the normal provider form with the real authorised telephone contact and CAPTCHA.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_CAPTCHA_AND_REQUIRED_OWNER_FIELDS

## Prodreel

- Value: TIER_A — global production-company directory
- URL: https://prodreel.com/auth/?register
- Prepared: The official directory supports a free company listing plus a separate paid Pro upgrade. The free registration route requires account email verification and CAPTCHA; no paid plan was selected and no listing is claimed.
- Owner action: Create or authenticate the free provider account and complete normal email/CAPTCHA verification.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_CAPTCHA_AND_EMAIL_VERIFICATION

## MCP Scoreboard

- Value: TIER_B — independent MCP discovery directory
- URL: https://www.mcpscoreboard.com/submit/
- Prepared: The source form accepted the public SHAR MCP repository and redirects to GitHub OAuth to verify write access. No authorization, receipt, or public SHAR card exists.
- Owner action: Authorize the provider's normal GitHub OAuth flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_GITHUB_OAUTH

## Skills Directory

- Value: TIER_B — independent agent-skill discovery directory
- URL: https://www.skillsdirectory.com/submit
- Prepared: The public form explicitly requires GitHub sign-in before a factual existing SHAR skill can be submitted. No authorization, account, receipt, or public card exists.
- Owner action: Authorize the provider's normal GitHub OAuth flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_GITHUB_OAUTH

## mcpservers.org

- Value: TIER_B — independent MCP directory, free queue only
- URL: https://mcpservers.org/ru/submit
- Prepared: The live form offers a $0 Free Queue and a separate optional $39 Premium option. The Free Queue requires normal provider details and Cloudflare interaction. Premium was not selected; no submission was sent.
- Owner action: Use the normal free-provider flow and complete the Cloudflare challenge; do not select Premium.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_CLOUDFLARE_AND_BROWSER_INTERACTION

## SaaSRow

- Value: TIER_B — independent software directory with CLI/API/MCP support
- URL: https://saasrow.com/
- Prepared: The provider publicly offers a free 90-day software listing with a dofollow backlink and supports CLI, REST API and MCP management. Its native flow requires an emailed sign-in code before an API key can create or manage a listing. No card, payment or listing exists.
- Owner action: Authenticate through the normal emailed-code flow for the authorised account.
- Current environment can continue after auth: YES
- Status: HUMAN_GATE_EMAIL_CODE

## Vitrina

- Value: TIER_A — global film, TV and M&E intelligence and company-profile network
- URL: https://app.vitrina.ai/auth/sign-up
- Prepared: Official Vitrina materials state that production companies can list free and be found by international producers, studios, broadcasters and service buyers. The signup page offers email or Google and advertises 100 signup credits; no card is requested on the public flow. Any SHAR listing must use factual production-company services, actual case credits and existing public website links only.
- Owner action: Create or authenticate the authorised free Vitrina account through the normal email or Google flow; do not purchase a membership.
- Current environment can continue after auth: UNKNOWN
- Status: HUMAN_GATE_EMAIL_OR_GOOGLE_AUTH

## VFX Engine

- Value: TIER_A — global VFX studio directory and career platform
- URL: https://www.vfxengine.com/jobs/list-studio
- Prepared: The no-account form is publicly inspected. It offers a reviewed global studio listing with SHAR Production name, https://sharprod.com/, Moscow/Russia & international location, factual CGI/3D, AI-hybrid video and post-production description, plus public contact shar@sharprod.com. The form requires a real full name for the submitting contact; no personal identity was invented.
- Owner action: Provide the authorised submitter’s real full name for the VFX Engine form; all company data is prepared.
- Current environment can continue after auth: YES
- Status: OWNER_GATE_REQUIRED_CONTACT_NAME

## Creative COW

- Value: TIER_A — established film, broadcast, video and VFX professional community
- URL: https://creativecow.net/register/
- Prepared: Creative COW’s official Career Center states that listing a company in its free Services Offered registry is free for film, broadcast, video and audio services. SHAR fits through factual AI-hybrid video, CGI/3D and post-production capabilities. No account, profile, service listing or job post exists; no job post will be used as a substitute for a company listing.
- Owner action: Create or authenticate the authorised Creative COW account through the normal provider registration flow.
- Current environment can continue after auth: UNKNOWN
- Status: OWNER_GATE_ACCOUNT
