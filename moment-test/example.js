const moment = require('moment');

// Now
const now = moment();
console.log(now.format());

// Parsing dates/times from a strings
const day = moment("1995-12-25");
// Any ISO 8601 formatted string is accepted
// Note that timezome is set to current system's timezone
console.log(day.format());

// Parsing by specifying format
const v1 = moment("12-25-1995", "MM-DD-YYYY");
const v2 = moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z");

// Unix timestamps also accepted
const v3 = moment(1318781876406);

// Accepts Date objects
const v4 = new Date(2011, 9, 16);
const v5 = moment(v4);

// All above ctors use local timezone. Use moment.utc for UTC time.
const nowUTC = moment.utc();
console.log(nowUTC.format());
const dayUTC = moment.utc("1995-12-25");

// Getting year, month, etc from a date
console.log(`Year: ${dayUTC.year()}`);
console.log(`Date: ${dayUTC.date()}`);
// Sunday - 0, Saturday - 6
console.log(`Day: ${dayUTC.day()}`);
console.log(`minute: ${dayUTC.minute()}`);

// Setting year, month, etc
// This is same as above, but with an argument in method
dayUTC.year(2001);
console.log(dayUTC.format());


// Manipulating dates
const v6 = moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);

// toNow()
console.log(moment([2007, 0, 29]).toNow()); // in 9 years
console.log(moment([2007, 0, 29]).toNow(true)); // 9 years

// to()
console.log(moment([2007, 0, 5]).to(moment([2007, 0, 10]))); // in 5 days

// diff()
const v7 = moment([2007, 0, 29]);
const v8 = moment([2007, 0, 28]);
const v9 = v7.diff(v8, 'days') // 1

// get unix timestamp
const v10 = moment();
console.log(v10.valueOf());

// Some other available methods:
// isBefore, isSame, isBetween
