# Trend Treasure E-commerce Website

## Project Overview

**Trend Treasure** is an e-commerce website designed to showcase various products across categories such as men's clothing, women's clothing, jewelry, and electronics. The website includes several core features, including product filtering by category and pagination for smooth browsing through a large product catalog.
- Check website from here https://trend-treasure-omega.vercel.app

## Features

- **Product Filtering**: Users can filter products by selecting a category (men's clothing, women's clothing, jewelry, electronics). A clear category filter menu allows users to quickly find products of interest.
  
- **Pagination**: The product list is paginated, displaying a fixed number of products per page. Users can navigate through different pages for better browsing.

- **Responsive Design**: The website adapts to different screen sizes, ensuring a user-friendly experience on both mobile and desktop devices.

## Approach

1. **Component Structure**: The application is divided into reusable components like `Products`, `Category`, and `Pagination` to maintain modularity and readability. The `Home` component manages the product data, filtering, and pagination logic.
  
2. **State Management**: State hooks (`useState`) are used to manage product data, current page, selected category, loading status, and errors. The `useEffect` hook is used for fetching product data from the API on page load.

3. **Filtering and Pagination**: Products are fetched from an API and displayed with pagination. Filtering is handled by category selection, where the user can choose a category, and the product list is dynamically filtered before being paginated.

## Challenges Faced

- **Efficient Filtering and Pagination**: Ensuring the filtering feature worked seamlessly with pagination required careful handling of state. I had to ensure that after filtering products by category, the pagination would still function correctly and display the correct number of products per page.
  
- **Responsive Design**: Adapting the layout for different screen sizes, particularly for showing a variable number of products per row, was challenging. Using Bootstrap's grid system helped resolve this issue.
  
- **Error Handling and Loading States**: Managing API failures and loading states for a better user experience involved ensuring the loading component is shown until data is fetched and handling errors when the API request fails.

## Running the Application Locally

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/get-npm) installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MariemMohamed04/TrendTreasure.git
   cd TrendTreasure
   
2. Install dependencies:
   ```bash
   npm install

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   
2. Open your browser and visit:
   ```bash
   http://localhost:5173

### Building for Production

0. To create a production build, run:
   ```bash
   npm run build  

This will output a `build` folder with the optimized production code.

By following the above steps, you should be able to run Trend Treasure locally and explore its features.
  ```sql
  Feel free to adjust any sections as necessary, especially the repository URL and any other project-specific details!
