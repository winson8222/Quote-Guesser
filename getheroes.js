const puppeteer = require("puppeteer");

async function getQuote() {
  const PCR = require("puppeteer-chromium-resolver");
  const option = {
      revision: "",
      detectionPath: "",
      folderName: ".chromium-browser-snapshots",
      defaultHosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"],
      hosts: [],
      cacheRevisions: 2,
      retry: 3,
      silent: false
  };
  const stats = await PCR(option);
  const browser = await stats.puppeteer.launch({
      headless: false,
      args: ["--no-sandbox"],
      executablePath: stats.executablePath
  }).catch(function(error) {
      console.log(error);
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