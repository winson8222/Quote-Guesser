const puppeteer = require("puppeteer");

async function getQuote() {
    const browser = await puppeteer.launch({
        executablePath: "C:\Program Files\Chromium\Application\chrome.exe",
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ],
      });
    const page = await browser.newPage();

    await page.goto("https://dota2.fandom.com/wiki/Heroes_by_release");
    var list = [];
    for(var i = 99; i <= 123; i++){
        let element = await page.waitForSelector(" #mw-content-text > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > span > a:nth-child(2)");
        let text = await page.evaluate(element => element.textContent, element);
        list.push(text);
    }
    console.log(list);
    browser.close()
}

getQuote();