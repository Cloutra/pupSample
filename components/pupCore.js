const puppeteer = require('puppeteer-core');

// (async () => {
//   const browser = await puppeteer.connect({
//     browserURL: 'http://localhost:9222', // URL of the Chrome DevTools Protocol
//     defaultViewport: null, // optional
//     executablePath: 'path/to/your/chrome/executable', // path to your Chrome executable
//   });

//   const pages = await browser.pages(); // Get open pages in the browser
//   const page = pages[0]; // Select the first page, or whichever page you want to control

//   // Now you can interact with the page as needed
//   await page.goto('https://example.com');
// })();

async function mainPup() {
    const browser = await puppeteer.launch({
        headless: false, // Set to true if you want to run in headless mode
        executablePath: 'path/to/your/chrome/executable', // Path to your existing Chrome executable
        userDataDir: 'path/to/your/user-data-directory' // Path to your Chrome user data directory (optional)
    });

    const page = await browser.newPage();
    await page.goto('https://www.example.com');

    // Your Puppeteer code to interact with the page

    // Don't close the browser if you want to keep the session active
    // await browser.close();
}

module.exports = mainPup()
