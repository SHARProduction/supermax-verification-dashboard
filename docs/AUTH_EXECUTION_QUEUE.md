# AUTH / REGISTRATION RESOLUTION SPRINT

**Status:** active. This queue replaces new-provider discovery as the current external bottleneck. It does not modify public SHAR assets or submit anything by itself.

## Browser capability proof

| Check | Result |
|---|---|
| Persistent browser | YES |
| Runtime | @playwright/cli 0.1.17 + Chrome |
| Open / click / type / submit | PASS |
| Named session | PASS |
| Storage-state save/load | PASS |
| Persistent profile after close/reopen | PASS |
| Headed human handoff | PARTIAL — normal Chrome required for providers that reject automation |

Test used Wikipedia with no credentials. The dedicated profile cannot silently reuse Codex in-app browser sessions. It persists technically, but providers may reject automated-browser authentication; normal Chrome is used for the human login/OAuth/CAPTCHA gate. No safe supported attach from Playwright to an ordinary user Chrome session has been proven.

## Canonical route count

`HUMAN_AUTH_BATCH.json` contains **55** unique routes. The sprint brief says 56; no extra route was invented. `HUMAN_GATE_BATCH.json` has 11 overlapping gate records and is not additive.

## Tier A — prepared to the human gate

### npm Registry
- **Domain:** npmjs.com
- **Value:** TIER_A — native Node package registry
- **Sign-up:** https://www.npmjs.com/login
- **Gate:** NPM ACCOUNT AUTH
- **Asset:** SHAR Production Metadata MCP v1.0.4
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/production-metadata-mcp · https://sharprod.com/
- **Files:** None; npm pack --dry-run passed
- **Missing owner facts:** Authorised npm publisher login and account publishing policy
- **After authentication:** Publish v1.0.4, verify public package and clean install
- **Expected result:** Public npm package page and anonymous install
- **Continuation:** YES

### GitHub Container Registry
- **Domain:** github.com
- **Value:** TIER_A — native OCI install ecosystem and prerequisite for Docker-dependent MCP directories
- **Sign-up:** https://github.com/orgs/SHARProduction/packages/container/production-metadata-mcp/settings
- **Gate:** PUBLIC VISIBILITY
- **Asset:** production-metadata-mcp OCI image v1.0.4
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/production-metadata-mcp · https://sharprod.com/
- **Files:** Existing v1.0.4 OCI image, SBOM and provenance
- **Missing owner facts:** Owner decision to expose existing package publicly
- **After authentication:** Perform anonymous pull and container MCP initialization test
- **Expected result:** Public ghcr.io image and verifiable install route
- **Continuation:** YES

### Zenodo
- **Domain:** zenodo.org
- **Value:** TIER_A — research/software archive DOI route for eligible corpus
- **Sign-up:** https://zenodo.org/deposit/new
- **Gate:** ACCOUNT
- **Asset:** SHAR Production rights-labelled conformance corpus v0.1.2
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/rights-labelled-conformance-corpus · https://sharprod.com/
- **Files:** v0.1.2 archive, SHA-256, CITATION.cff, CodeMeta, Data Package metadata
- **Missing owner facts:** Selected account and acceptance of factual metadata and licensing
- **After authentication:** Create draft/upload verified archive; publish only after final owner confirmation
- **Expected result:** Public DOI landing page for self-contained corpus
- **Continuation:** UNKNOWN

### Figshare
- **Domain:** figshare.com
- **Value:** TIER_A — independent research/data archive
- **Sign-up:** https://figshare.com/account/articles/new
- **Gate:** ACCOUNT
- **Asset:** SHAR Production rights-labelled conformance corpus v0.1.2
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/rights-labelled-conformance-corpus · https://sharprod.com/
- **Files:** v0.1.2 archive, SHA-256, CITATION.cff, CodeMeta, Data Package metadata
- **Missing owner facts:** Selected account and acceptance of factual metadata and licensing
- **After authentication:** Create draft/upload verified archive; publish only after final owner confirmation
- **Expected result:** Public Figshare item and DOI if issued
- **Continuation:** UNKNOWN

### Smithery
- **Domain:** smithery.ai
- **Value:** TIER_A — MCP distribution registry
- **Sign-up:** https://smithery.ai/new
- **Gate:** ACCOUNT AND API KEY
- **Asset:** production-metadata-mcp MCPB v1.0.1
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/production-metadata-mcp · https://sharprod.com/
- **Files:** Existing MCPB v1.0.1 release asset
- **Missing owner facts:** Account authentication and API access creation
- **After authentication:** Use documented API with MCPB asset and verify listing
- **Expected result:** Public Smithery MCP listing if accepted
- **Continuation:** YES

### Glama MCP Registry
- **Domain:** glama.ai
- **Value:** TIER_A — independent MCP registry
- **Sign-up:** https://glama.ai/mcp/servers
- **Gate:** ACCOUNT
- **Asset:** SHAR Production Metadata MCP v1.0.4
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/production-metadata-mcp · https://sharprod.com/
- **Files:** None beyond public repository
- **Missing owner facts:** Account authentication
- **After authentication:** Submit repository and factual description; wait for checks; verify card
- **Expected result:** Public Glama MCP card if accepted
- **Continuation:** UNKNOWN

### StudioList
- **Domain:** studiolist.co
- **Value:** TIER_A — curated commercial AI-video studio directory
- **Sign-up:** https://studiolist.co/get-listed/
- **Gate:** GOOGLE AUTH
- **Asset:** SHAR Production factual company profile
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://sharprod.com/ · https://sharprod.com/
- **Files:** No files; factual public profile only
- **Missing owner facts:** Google authentication and any required non-public company/contact field
- **After authentication:** Complete factual profile; submit; verify publication
- **Expected result:** Public StudioList company profile if accepted
- **Continuation:** NO

### 3DVF CG Map
- **Domain:** 3dvf.com
- **Value:** TIER_A — established CGI/VFX studio directory
- **Sign-up:** https://3dvf.com/en/register-your-studio/
- **Gate:** ACCOUNT
- **Asset:** SHAR Production factual company profile
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://sharprod.com/ · https://sharprod.com/
- **Files:** No files unless provider requests rights-cleared assets
- **Missing owner facts:** Account authentication/email verification and mandatory owner-only contact fields
- **After authentication:** Complete factual studio profile; submit; verify public page
- **Expected result:** Public CG Map studio profile if accepted
- **Continuation:** UNKNOWN

### FOOH
- **Domain:** fooh.com
- **Value:** TIER_A — CGI/VFX/AI-video work directory; use real credited work only
- **Sign-up:** https://fooh.com/account/work
- **Gate:** ACCOUNT AND REAL WORK SELECTION
- **Asset:** One owner-selected real SHAR work
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://sharprod.com/ · https://sharprod.com/
- **Files:** One real rights-cleared SHAR work with factual credits, selected by owner
- **Missing owner facts:** Authentication, work selection, rights and credits confirmation
- **After authentication:** Upload only selected real work; submit; verify approval
- **Expected result:** Public FOOH profile/work only after approval
- **Continuation:** NO

### MCP Scoreboard
- **Domain:** mcpscoreboard.com
- **Value:** TIER_B — independent MCP discovery directory
- **Sign-up:** https://www.mcpscoreboard.com/submit/
- **Gate:** GITHUB OAUTH
- **Asset:** SHAR Production Metadata MCP v1.0.4
- **Profile:** SHAR Production — SHAR Production is a video production studio for AI-hybrid, CGI/3D and commercial video production.
- **Source / website:** https://github.com/SHARProduction/production-metadata-mcp · https://sharprod.com/
- **Files:** None beyond public repository
- **Missing owner facts:** GitHub OAuth authorization
- **After authentication:** Return to form, submit repository, verify receipt and card
- **Expected result:** Public MCP Scoreboard card if accepted
- **Continuation:** UNKNOWN

## Tier B

- **DevHunt** — https://devhunt.org — OWNER_GATE_ACCOUNT
- **MCP Market** — https://mcpmarket.com/submit — OWNER_GATE_BROWSER_SESSION_AND_INTERACTION
- **n8n Creator Hub** — https://creators.n8n.io/register — BROWSER_ACCOUNT_CREATION_REQUIRED
- **Chocolatey Community Repository** — https://community.chocolatey.org/account/Register — OWNER_GATE_RECAPTCHA_REGISTRATION
- **World Media Match** — https://worldmediamatch.com/register-your-company/ — OWNER_GATE_TURNSTILE_AND_REQUIRED_OWNER_FIELDS
- **Oward** — https://www.oward.co/en/register — OWNER_GATE_EMAIL_VERIFICATION_AND_IDENTITY
- **Production List** — https://www.productionlist.com/register?plan=free — OWNER_GATE_EMAIL_VERIFICATION_AND_IDENTITY
- **Screen Global Production** — https://www.screenglobalproduction.com/register/form/basic — OWNER_GATE_REQUIRED_IDENTITY_AND_CONTACT
- **AgentForge** — https://agentforge.community/en/dashboard/publish — OWNER_GATE_ACCOUNT_AUTHENTICATION_REQUIRED
- **vskill** — https://verified-skill.com/submit — OWNER_GATE_GITHUB_LOGIN
- **SkillMD** — https://skillmd.com/publish — OWNER_GATE_ACCOUNT
- **Vimeo SHAR Showreel** — https://vimeo.com/1175145775 — CAPTCHA_REQUIRED
- **AI Filmmaker Index** — https://aifilmmakerindex.com/login — HUMAN_GATE_EMAIL_MAGIC_LINK
- **IndexOf.AI** — https://indexof.ai/submit — OWNER_GATE_ACCOUNT
- **AI Directory** — https://www.aidirectory.org/user-submit — OWNER_GATE_CAPTCHA_AND_REQUIRED_OWNER_FIELDS
- **Prodreel** — https://prodreel.com/auth/?register — OWNER_GATE_CAPTCHA_AND_EMAIL_VERIFICATION
- **Skills Directory** — https://www.skillsdirectory.com/submit — OWNER_GATE_GITHUB_OAUTH
- **mcpservers.org** — https://mcpservers.org/ru/submit — OWNER_GATE_CLOUDFLARE_AND_BROWSER_INTERACTION
- **SaaSRow** — https://saasrow.com/ — HUMAN_GATE_EMAIL_CODE
- **Vitrina** — https://app.vitrina.ai/auth/sign-up — HUMAN_GATE_EMAIL_OR_GOOGLE_AUTH
- **VFX Engine** — https://www.vfxengine.com/jobs/list-studio — OWNER_GATE_REQUIRED_CONTACT_NAME
- **Creative COW** — https://creativecow.net/register/ — OWNER_GATE_ACCOUNT
- **Mendeley Data** — https://data.mendeley.com/ — OWNER_GATE_ACCOUNT
- **Contra Studio Directory** — https://contra.com/studios — OWNER_GATE_ACCOUNT_AND_REAL_WORK_SELECTION
- **Future Tools** — https://futuretools.io/submit-a-tool — OWNER_GATE_CAPTCHA
- **MCPVault** — https://mcpvault.io/submit — OWNER_GATE_GITHUB_OAUTH
- **Citation Press** — https://citations.press/submit/ — HUMAN_GATE_EMAIL_CODE
- **Creativepool** — https://creativepool.com/sign-up/ — OWNER_GATE_ACCOUNT
- **MCPHubz** — https://mcphubz.com/submit — OWNER_GATE_ACCOUNT
- **GoodFirms** — https://myaccount.goodfirms.co/users/register — OWNER_GATE_ACCOUNT
- **Clutch** — https://clutch.co/get-listed — OWNER_GATE_ACCOUNT
- **MCPCMD** — https://www.mcpcmd.com/submit — HUMAN_GATE_CAPTCHA
- **Vettd** — https://vettd.agentichighway.ai/dashboard/vettd-scanner — OWNER_GATE_GITHUB_OAUTH
- **Skills AI** — https://skills.strongly.ai/submit — OWNER_GATE_ACCOUNT
- **MCP Server Finder** — mailto:info@mcpserverfinder.com — OWNER_GATE_EMAIL_OUTREACH
- **ProSkills.md** — https://proskills.md/submit — OWNER_GATE_GITHUB_AUTH
- **allMCPservers.com** — https://www.allmcpservers.com/#cta_form-03-473241 — HUMAN_GATE_CAPTCHA
- **VFX Callsheet** — https://www.vfxcallsheet.com/create-profile?type=studio — OWNER_GATE_ACCOUNT_AND_REQUIRED_OWNER_FIELDS
- **Shoots.video** — https://www.shoots.video/get-listed/ — OWNER_GATE_ACCOUNT_EMAIL_VERIFICATION
- **MCP ServerList** — https://mcpserverlist.net/submit — OWNER_GATE_ACCOUNT_EMAIL_VERIFICATION
- **MCP Hub community directory** — https://mcpdir.dev/submit — AUTHENTICATED_SESSION_OBSERVED_UI_SUBMISSION_CAPABILITY_UNAVAILABLE

## Tier C

- **AI X Collection** — https://aixcollection.com/submit — OWNER_GATE_ACCOUNT
- **AI Dude** — https://submit.aidude.info/ — HUMAN_GATE_GOOGLE_AUTH
- **AI Tools Up** — https://aitoolsup.com/submit-tool/ — OWNER_GATE_ACCOUNT_AND_CAPTCHA
- **Spot Startups** — https://www.spotstartups.com/submit.php — OWNER_GATE_ACCOUNT_RECAPTCHA

## Immediate human action

**npm Registry:** use normal Chrome at https://www.npmjs.com/login to authenticate the authorised npm publisher account only; do not create or expose tokens. Tell Codex when complete so the next supported publication path can be verified.


## Ordinary Chrome handoff status

- **Status:** BLOCKED_EXTENSION_MISSING.
- **Evidence:** no CDP endpoint at 127.0.0.1:9222; the installed Playwright CLI reported that its official Chrome extension is absent.
- **Safety boundary:** no cookies were copied, no browser security was bypassed, and no credentials were accessed.

