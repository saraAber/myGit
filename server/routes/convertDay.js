const { stripPrefix } = require("xml2js/lib/processors");

var days = new Array ( );
days[days.length] = "ראשון";
days[days.length] = "שני";
days[days.length] = "שלישי";
days[days.length] = "רביעי";
days[days.length] = "חמישי";
days[days.length] = "שישי";
days[days.length] = 'מוצ"ש';

var months = new Array ( );
months[months.length] = "ינואר";
months[months.length] = "פברואר";
months[months.length] = "מרץ";
months[months.length] = "אפריל";
months[months.length] = "מאי";
months[months.length] = "יוני";
months[months.length] = "יולי";
months[months.length] = "אוגוסט";
months[months.length] = "ספטמבר";
months[months.length] = "אוקטובר";
months[months.length] = "נובמבר";
months[months.length] = "דצמבר";


    const convertDate=(day) => {
        today=new Date(day);
         Newday="";
         Newday+= days[today.getDay()] ;
         Newday+= ", " ;
         Newday+=" " + today.getDate() ;
         Newday+= " ל" ;
         Newday+= months[today.getMonth()] ;
         Newday+= " " + today.getFullYear() ;
         return Newday;
    }


exports.convertDate = convertDate;