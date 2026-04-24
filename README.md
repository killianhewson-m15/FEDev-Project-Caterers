# Front-End Project

### AI assistance note - Initial setup
AI was used to confirm the correct SvelteKit project setup steps and recommended configuration options.

No code was generated. The project was created using the official SvelteKit CLI and lecture guidance.

### AI assistance note - Version 1
AI was used to help plan the basic page structure for the catering case study and suggest a simple SvelteKit layout/navigation setup.

### AI assistance note - Version 2
AI was used to suggest the structure of the JSON data file and demonstrate how to render it dynamically using a Svelte `{#each}` loop

### AI assistance note - Version 3
AI was used to help create a dynamic SvelteKit route for individual catering package pages and suggest the logic for finding the correct package from the JSON data.

### AI assistance note - Version 4
AI was used to help structure the booking enquiry form and demonstrate how to process form submissions using SvelteKit server actions.

Files/features affected:
- `src/routes/contact/+page.svelte`
- `src/routes/contact/+page.server.js`

The implementation follows lecture examples of POST forms and extracting form data using `request.formData()`.

### AI assistance note - Version 5
AI was used to help structure a cookie-based login system, including handling form submission, storing user data in cookies, and reading cookies in the layout.

AI was also used to suggest implementing logout by deleting cookies using a server route, and minor UI improvements for login/logout buttons.

Files/features affected:
- `src/routes/login/+page.svelte`
- `src/routes/login/+page.server.js`
- `src/routes/logout/+page.server.js`
- `src/routes/+layout.server.js`
- `src/routes/+layout.svelte`

The implementation follows lecture concepts of form handling, cookies, and server-side processing.