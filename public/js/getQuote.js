const heroes = require("./herolist");
const puppeteer = require("puppeteer");
const { get } = require("jquery");

async function getQuote() {
    


        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        })
        const page = await browser.newPage();
        let n = Math.floor(Math.random() * 3 + 3);
        let hList = heroes.herolistv1;
        let choices = [];
        for(let i = 0; i < 4; i++){
            choices[i] = heroes.randomHeroes(hList);
        }
        var correct = heroes.getCorrect(choices);
        correct.hero = 'Centaur_Warrunner';
        console.log(correct.hero);



        await page.goto("https://dota2.fandom.com/wiki/" + correct.hero +"/Responses");
        // if(heroes.herolist7.includes(correct.hero)){
        //     console.log("7 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(7) > li:nth-child(" + n + ")");
        // } else if (heroes.herolist8.includes(correct.hero)) {
        //     console.log("8 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(8) > li:nth-child(" + n + ")");
        // } else if (correct.hero === 'Abaddon') {
        //     console.log("5 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(5) > li:nth-child(" + n + ")");
        // } else if (correct.hero === 'Dark_Willow' || correct.hero === 'Monkey_King' || correct.hero === 'Pangolier') {
        //     console.log("9 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(9) > li:nth-child(" + n + ")");
        // } else if (correct.hero === 'cwdw') {
        //     console.log("10 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(10) > li:nth-child(" + n + ")");
        // } else if (correct.hero === 'Juggernaut') {
        //     console.log("8 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(8) > li:nth-child(10)");
        // } else {
        //     console.log("6 " + n)
        //     var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(6) > li:nth-child(" + n + ")");
        // }
        var element = await page.waitForSelector("#mw-content-text > div > ul:nth-child(6) > li:nth-child(" + n + ")");
        //another loop to convert the name

        var text = await page.evaluate(element => element.innerText, element); 
        var answer = (correct.number + 1);
        let question = {
            Answer: answer.toString(),
            Quote: "\"" + text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') + "\"",
            Options: {
                choice1: choices[0].replace(/[\W_]+/g," ").replace(/[^a-zA-Z]/g," "),
                choice2: choices[1].replace(/[\W_]+/g," ").replace(/[^a-zA-Z]/g," "),
                choice3: choices[2].replace(/[\W_]+/g," ").replace(/[^a-zA-Z]/g," "),
                choice4: choices[3].replace(/[\W_]+/g," ").replace(/[^a-zA-Z]/g," "),
            }
        }
        browser.close()
    
    return question;
    

}

exports.getQuote = getQuote;

