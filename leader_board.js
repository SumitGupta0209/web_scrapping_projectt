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
    else
    {
        const dom=new JSDOM(html);

        const document=dom.window.document;

        let allScorecardtags=document.querySelectorAll('a[data-hover="Scorecard"]');// array of scorecard

        for(let i=0;i<allScorecardtags.length;i++)
        {
            let link=allScorecardtags[i].href;
            let completeLink="https://www.espncricinfo.com"+link; //got the links every match scorecard
            request(completeLink,cb2);
        }
    }
}

function cb2(response,error,html)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        const dom=new JSDOM(html);
        const document=dom.window.document;

        let batsmanRows=document.querySelectorAll(".table.batsman tbody tr");

        for(let i=0;i<batsmanRows.length;i++)
        {
            let cells=batsmanRows[i].querySelectorAll("td");
            if(cells.length==8)
            {
                let name=cells[0].textContent;                  //from here we will get all the required detials of each batsman 
                let runs=cells[2].textContent;
                let balls=cells[3].textContent;
                let fours=cells[5].textContent;
                let six=cells[6].textContent;
            }
        }


    }
}