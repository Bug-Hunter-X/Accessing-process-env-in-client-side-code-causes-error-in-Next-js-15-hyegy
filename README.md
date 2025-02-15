# Next.js 15 Client-Side process.env Access Error

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables (process.env) within client-side components.

## Problem

Accessing `process.env` within client-side code (e.g., in a page component rendered in the browser) will throw a runtime error because the `process` object is not available in the browser environment.  This typically occurs when server-side-only environment variables are accessed in the client.

## Solution

The solution is to ensure environment variables are accessed exclusively on the server-side, or if client-side access is required, to use an alternative method to pass the variable to the client, like using `getStaticProps` or `getServerSideProps`.