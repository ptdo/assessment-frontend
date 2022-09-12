## This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
  
  ![blog](https://user-images.githubusercontent.com/48893352/189573347-e27d4f23-9b4a-4472-99c5-640414f9ec19.gif)

## Getting Started (via npm)


Install dependencies:

```
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run component tests
```bash
npm test
# or
npm test -- -u (to skip snapshot files)
```

All tests are located in `src` folder

## Notes
- This is a single page web app. Main(Home) page source code is in `index.tsx` file
- There are 3 components implemented in `components` folder:
  - PostCard: to display post along with its author(s) and comment(s)
  - CommentCard: to display comment
  - Navbar: for design purpose. No functionality added
