const request=require("request");

const jsdom=require("jsdom");

const{JSDOM}=jsdom;

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else if
    {
        const dom=new JSDOM(html);
        const document=dom.window.document;
    }
}