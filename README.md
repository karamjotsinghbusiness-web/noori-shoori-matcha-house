# Noori Shoori’s Matcha House

A little café on the internet for Noor: iced matcha, friendly jokes, a little note, house rules, and a Diljit break.

**Website:** https://karamjotsinghbusiness-web.github.io/noori-shoori-matcha-house/

Built with plain HTML, CSS, and JavaScript. GitHub Pages publishes the root of the main branch. No build step is required.

## Local preview

Run `python3 -m http.server 4173` in this folder and open http://localhost:4173.

## Complaint email

The form uses FormSubmit to forward complaints to the configured recipient. The recipient must activate the form for this website URL using FormSubmit’s confirmation email. Hosting alone does not activate delivery. The email-app fallback requires the visitor to press Send in their email app.

The form supplies its explicit production `_url` so browsers that omit a Referer header can still submit it. It retains the provider’s normal spam checks. Do not add private credentials to this repository.
