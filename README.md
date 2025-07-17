#  Next.js Tapp Dashboard
To review my work, please use the following links
## 🔗 Important Links

- **Deployed Site:** [https://tapp-dashboard.vercel.app/](https://tapp-dashboard.vercel.app/)
- **Figma Design File:** [TAPP Design Challenge](https://www.figma.com/design/J2oePoTLpgclY2fS3ECRFh/TAPP-Design-Challenge?node-id=0-1&t=A953kHbW7JXzz5RL-1)

## Time Tracking

## Day One – Design & Planning

| Task                              | Time Spent | 
|-----------------------------------|------------|
| Design exploration                |    1 hr        |
| Define entity models              |      30 m      | 
| Create low-fidelity wireframes    |      1 hr      | [
| Create high-fidelity Prototype |      2 hr      | 
| Apply auto layout in Figma        |      1.5 hr      | 
 Total  | 6 hrs
---

## Day Two – Development

| Task                                     | Time Spent | 
|------------------------------------------|------------|
| Project setup (Next.js + TailwindCSS)    |    30 m        | 
| Implement responsive design              |      4 hr      | 
| Structure server and client components   |       1 hr     | 
| Build form with error states             |       1 hr     | 
| Use Zod for type matching and validation |        30 m    | 
| Debug and Deploy on Vercel             |        30 m    | 
Total | 7.5 hrs

## 🚧 Improvements

### 1. Modularity
- Refactor large components into smaller, reusable ones to reduce file size and improve readability.
- Separate UI concerns from business logic to enhance maintainability.

### 2. Tailwind Configuration
- Customize the Tailwind config (`tailwind.config.js`) to:
  - Add reusable color tokens (e.g., `primary`, `accent`, `background`). I had them inserte,d but I ran into a bug that made me call the CSS variable and not the configured color


### 3. Error Handling
- Add error states for:
  - Empty fetch responses (e.g., no users found)
  - Failed API calls (e.g., network or server errors)
- Display fallback UI or retry options.
- Would be nice to have a notification or toast system for errors/success feedback.

### 4. Add User Logic
- Create a function to handle valid address input:
  - Extract `street`, `zip`, `city`, and `geo` coordinates (latitude & longitude)
  - Integrate with a geocoding service like Google Maps API or OpenStreetMap (Nominatim).
  - Use extracted values to populate user records.
 
### 5. Utilize a Google Maps API
- Utilize this API:
   - to create a map in the user details page
   - to retrieve zip/postal/city/coord data from an address
 
### 6. Links / Phone
 - Change all the phone, email, and website links to built-in next Link tags that email or call that person
 - Some phones had extensions would be best to take the string with or without an extension and separate it with a utils function. Then save the phone number as an object with number types for phone and an optional extension
  - Update the form to accept extensions for phones

## Core Features

**Users Page**
  - [x] Call dummy API: `https://jsonplaceholder.typicode.com/users`
  - [x] Display users in a **table** or **card** (name, email, phone)
  - [x] Handle **loading**  states
  - [ ] Handle **error** states

**User Detail Page**
  - [x] Navigate to `/users/[id]` when clicking a user
  - [x] Fetch and display **detailed info** of selected user

**(Optional) Create New User Form**
  - [x] Add a simple form to **create a user** (no persistence needed)
  - [x] Display the flow (input, submit, confirmation or alert)

---

## ⚙️ Requirements & Best Practices

- [x] Use **Next.js App Router**
- [x] Use **Server Components** where appropriate
- [x] Use **Client Components** for interactive features
- [x] Apply **basic styling** (TailwindCSS recommended)
- [x] Maintain **clean and scalable folder structure**
- [x] Use **async/await** properly
- [ ] Handle **errors** gracefully
- [x] Add **TypeScript types** if TypeScript is used


