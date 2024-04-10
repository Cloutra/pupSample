// const fs = require('fs');
// const puppeteer = require('puppeteer-extra');
// // // const puppeteer = require('puppeteer-core');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());


// const { executablePath } = require('puppeteer');


// // const url = "https://ng.indeed.com/jobs";

// const getAllJobs = async () => {
//     const browser = await puppeteer.launch({
//         headless: false,
//         executablePath: executablePath("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"),
//         // args: [`--proxy-server=${proxyUrl}`]   "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" --remote-debugging-port=9220
//     });
//     const page = await browser.newPage();
//     await page.goto(url);
//     // await page.screenshot({ path: "bot.png" });


//     // const textData = await page.evaluate(() => {
//     //     const myList = Array.from(document.querySelectorAll('.base-card'));

//     //     const data = myList.map((card) => ({
//     //         title: card.querySelector('.base-search-card__info h3').innerText,
//     //         jobLink: card.querySelector('.base-card__full-link').href,
//     //         company: card.querySelector('.base-search-card__info h4 a').innerText,
//     //         location: card.querySelector('.base-search-card__info span').innerText,
//     //         duration: card.querySelector('.base-search-card__info time').innerText,
//     //     }));

//     //     return data;
//     // });


//     // console.log({ "products from interiors": textData });
//     // const jsonData = JSON.stringify(textData, null, 2);

//     // fs.writeFileSync('jobsData.json', jsonData, 'utf-8')

//     // await browser.close();

// }


// getAllJobs();




// const puppeteer = require('puppeteer');

// async function connectToChrome() {
//     try {
//         const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:9222/devtools/browser' });
//         const pages = await browser.pages();
//         console.log(pages.length); // Number of open tabs/pages in Chrome --remote-debugging-port=9222 -- "%1"
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
//     await browser.close();
// }


// connectToChrome();

// const puppeteer = require('puppeteer')

const puppeteer = require('puppeteer-extra');
// // const puppeteer = require('puppeteer-core');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function connectPup() {
    try {
        const wsChromeEndPointUrl = 'ws://127.0.0.1:9222/devtools/browser/d3bc283d-ddce-4f39-8f78-5caf4f356e1d';
        const browser = await puppeteer.connect({
            // headless: false,
            browserWSEndpoint: wsChromeEndPointUrl
        });
        const page = await browser.newPage();
        await page.goto('https://ng.indeed.com/?from=jobsearch-empty-whatwhere');
        console.log({ "status": "new tab opened on browser" })

        // Fill in login credentials
        // await page.type('[name="session_key"]', 'anthonyfaruna1@gmail.com'); // Email or phone input field
        // await page.type('[name="session_password"]', 'Tony@0045'); // Password input field
        // await page.click('.btn__primary--large');

        // Wait for navigation to the home page or any other page indicating successful login
        // await page.waitForNavigation();


        // await browser.close();
    } catch (err) {
        console.error('an error occured', err)
    }
}

connectPup()