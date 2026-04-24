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

### AI assistance note - Version 6 (Bookings linked to user)

AI was used to suggest how to associate booking submissions with a logged-in user by retrieving the username from cookies and attaching it to the booking data.

AI was also used to help resolve issues with the login and logout flow. This included adding redirects after login/logout and using `data-sveltekit-reload` to ensure the UI updates correctly after cookies are changed.

Files/features affected:
- `src/routes/contact/+page.server.js`
- `src/routes/contact/+page.svelte`
- `src/routes/login/+page.server.js`
- `src/routes/logout/+page.server.js`
- `src/routes/+layout.svelte`

The implementation builds on lecture concepts of cookies and form processing to create personalised data, with additional fixes for correct client-server state handling.

### AI assistance note - Version 7
AI was used to help create a My Bookings page that reads the logged-in user from cookies and displays only that user's booking enquiries.

Files/features affected:
- `src/routes/contact/+page.server.js`
- `src/routes/my-bookings/+page.server.js`
- `src/routes/my-bookings/+page.svelte`
- `src/routes/+layout.svelte`

This builds on lecture concepts of cookies, form processing, and displaying dynamic data. Cookie storage is used at this stage so the feature works locally and when published, but a real database would be more suitable for a full production system.

### AI assistance note - Version 8
AI was used to help design an admin bookings page that uses the logged-in user's role cookie to decide whether all booking enquiries should be displayed.

Files/features affected:
- `src/routes/admin-bookings/+page.server.js`
- `src/routes/admin-bookings/+page.svelte`
- `src/routes/+layout.svelte`

This builds on lecture concepts of cookies and dynamic Svelte `{#if}` rendering to demonstrate different user roles.

### AI assistance note - Version 9

AI was used to suggest improvements to the overall website structure and usability. This included enhancing the home and about pages, expanding the event-specific pages (birthdays, family parties, weddings) with more detailed content and images, and improving layout and styling for better user experience.

AI was also used to expand the catering package data and reorganise the packages page into clearer sections based on event type, using dynamic filtering and improved visual layout.

Additionally, AI was used to improve the booking system by linking booking enquiries to a selected package. The separate event type selection was removed to avoid conflicting inputs, and the event type is now derived from the selected package data.

Files/features affected:
- `src/routes/+page.svelte`
- `src/routes/about/+page.svelte`
- `src/routes/birthdays/+page.svelte`
- `src/routes/family-parties/+page.svelte`
- `src/routes/weddings/+page.svelte`
- `src/routes/packages/+page.svelte`
- `src/lib/data/packages.json`
- `src/routes/contact/+page.svelte`
- `src/routes/contact/+page.server.js`
- `src/routes/my-bookings/+page.svelte`
- `src/routes/admin-bookings/+page.svelte`

These changes improved content quality, usability, and consistency, while strengthening the connection between dynamic data and user actions.


### AI assistance note - Version 10

No ai used, fixed issue where a user could submit a booking enquiry without logging in.


