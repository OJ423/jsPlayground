// Variables

let btn = document.querySelector('#new-waste');
let waste = document.querySelector('.waste');
let source = document.querySelector('.source');

const wastes = [{
  waste: `"£56,000,000 spent on contracts to big consulting firms without tender"`,
  source: `<a href="https://www.theguardian.com/world/2020/aug/20/government-spends-56m-on-consultants-to-help-with-coronavirus">The Guardian</a>`   
},{
    waste: `"£465,000,000 as conservative Ministers double advertising budget in preparation for an election"`,
    source: `<a href="https://www.theguardian.com/politics/2022/oct/03/ministers-given-930m-to-spend-on-advertising-space-to-tout-policies">The Guardian</a>`
},{
    waste: `"Jacob Rees Mogg pushes for second review of if MPs can remain in Parliament during refurbishment. It comes to the same conclusion that MPs will need to leave during the work, costing £5,000,000"`,
    source: `<a href="https://www.nao.org.uk/wp-content/uploads/2022/01/Restoration-and-Renewal-of-the-Palace-of-Westminster-Progress-update.pdf">Dr Alexandra Meakin NAO Report - The Times</a>`
},{
    waste: `"£14,900,000,000 spent on unused or unusable PPE, storing it and prematurely cancelling PPE contracts"`,
    source: `<a href="https://www.ft.com/content/15c3630a-b31a-425a-935b-e07d180a8b58">The FT</a>`
},{
    waste: `"£1,350,000 spent on Polling and focus groups for Rishi Sunak's image"`,
    source: `<a href="https://www.independent.co.uk/news/uk/politics/rishi-sunak-focus-groups-rayner-b2084297.html">Independent</a>`
},{
    waste: `"Lizz Truss spends £500,000 on a private jet to Australia"`,
    source: `<a href="https://news.sky.com/story/labour-criticise-reports-liz-truss-charted-private-jet-for-trip-to-australia-which-cost-taxpayers-500-000-12526715">Sky</a>`
},{
    waste: `"£600,000 spent on legal fees spent defending crony polling"`,
    source: `<a href="https://www.theguardian.com/world/2021/feb/10/government-to-spend-up-to-600000-defending-covid-contract">The Guardian</a>`
},{
    waste: `"£100,000 spent on Fake 'bell bonging' mechanism only used 10 times during Big Ben maintenance"`,
    source: `<a href="https://www.independent.co.uk/news/uk/politics/big-ben-temporary-bonging-mechanism-b1999463.html">Independent</a>`
},{
    waste: `"Consultancy fees more than double in 2021 to £911,000,000"`,
    source: `<a href="https://inews.co.uk/news/politics/government-wasting-taxpayers-cash-consultancy-fees-1807272">iNews</a>`
},{
    waste: `"£3,000 for Lizz Truss' fancy lecturn"`,
    source: `<a href="https://www.telegraph.co.uk/politics/2022/10/25/liz-truss-downing-street-lectern-retired/">Telegraph</a>`
},{
    waste: `"Received a massive £2,300,000,000 fine for lack of customs checks"`,
    source: `<a href="https://www.thetimes.co.uk/article/britain-pays-2-3bn-fine-to-eu-over-cheap-chinese-imports-fhpc3dmmw">The Times</a>`
},{
    waste: `"£50,000,000 on a new helicopter for the PM to make short trips"`,
    source: `<a href="https://www.mirror.co.uk/news/politics/new-50million-taxpayer-funded-helicopter-29374992">Mirror</a>`
},{
    waste: `"Fossil fuel companies given £1bn extra support from 2020-21"`,
    source: `<a href="https://www.theguardian.com/environment/2023/mar/09/fossil-fuels-more-support-uk-than-renewables-since-2015">The Guardian</a>`
},{
    waste: `"Cabinet reshuffle creates four new departments with essentially same brief as old ones"`,
    source: `<a href="https://www.huffingtonpost.co.uk/entry/rishi-sunak-accused-of-frittering-away-ps60m-on-cabinet-reshuffle_uk_63e2464ae4b0c8e3fc87577b">HuffPost</a>`
},{
    waste: `"Govt builds Brexit import inspection sites that were never used"`,
    source: `<a href="https://inews.co.uk/news/brexit-food-inspection-sites-uk-taxpayers-cash-never-used-2223985?utm_source=Twitter&utm_medium#Echobox=1679420409">The i</a>`
},{
    waste: `"Rishi Sunak Did not insure National Debt against interest rate rise costing the UK £11,000,000,000"`,
    source: `<a href="https://www.ft.com/content/90025f48-858f-40c5-a011-3f285f05e775?shareType=nongift">The FT</a>`
},{
    waste: `"Damning report says Tories squandered £1,700,000,000 on unfair 'levelling-up' fund "`,
    source: `<a href="https://www.mirror.co.uk/news/politics/damning-report-says-tories-squandered-27172368?utm_source=facebook.com&utm_medium=social&utm_campaign=mirror_politics">Mirror</a>`
},{
    waste: `"£100,000 spent on art for Downing Street"`,
    source: `<a href="https://www.independent.co.uk/news/uk/politics/art-downing-street-painting-ps100k-b1899227.html">Independent</a>`
},{
    waste: `"£314,000,000 spent on a Green Homes Deal that failed to deliver"`,
    source: `<a href="https://www.theguardian.com/environment/2021/dec/01/uk-green-homes-scheme-was-slam-dunk-fail-says-public-accounts-committee?CMP=Share_iOSApp_Other">The Guardian</a>`
}];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * wastes.length);

    waste.innerText = wastes[random].waste;
    source.innerHTML = wastes[random].source;
})