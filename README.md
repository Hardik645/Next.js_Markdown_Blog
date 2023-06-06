
# [Next.js Markdown Blog](https://hardik-blog.netlify.app/)

This is a simple blog website built with Next.js, leveraging Markdown files as the content source. It allows you to write blog posts in Markdown format and automatically converts them into HTML pages.

## Features

- Converts Markdown files to HTML using `gray-matter` and `remark` libraries.
- Supports front matter in Markdown files to provide metadata for each blog post.
- Utilizes Tailwind CSS for responsive and customizable styling.
- Dynamically generates Next.js pages for each blog post using dynamic routes.
- Provides a clean and minimalistic UI for a pleasant reading experience.
- Easy deployment to hosting platforms like Vercel, Netlify, or Heroku.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/nextjs-markdown-blog.git
   ```

2. Install dependencies:

   ```
   cd nextjs-markdown-blog
   npm install
   ```

## Usage

1. Place your Markdown files inside the `posts` directory.
2. Customize the styling by editing the Tailwind CSS classes in the components.
3. Build and run the project:

   ```
   npm run dev
   ```

4. Access the blog website at `http://localhost:3000` in your browser.

## Deployment

1. Build the production-ready project:

   ```
   npm run build
   ```

2. Deploy the generated `out` folder to your desired hosting platform.
