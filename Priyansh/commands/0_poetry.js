const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By ZAIN IFTIKHAR",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "poet",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "پھر اس کے بعد کیا دیکھے گا کوئی اسے دیکھے کوئی میری نظر سے",
    "تمہیں محبت سے محبت ہونے لگےگی تمہیں محبت سے محبت ہونے لگےگی محبت کو محبت کی نگاہ سے تو دیکھو",
    "اک نام کیا لکھا تیرا ساحل کی ریت پر پھر عمر بھر ہوا سے میری دشمنی رہی",
    "تیرے عشق میں ہو گیا آج رسوا اور پھر کوئی نہیں دل میں ترے سوا",
    "تو نے اچھا ہی کیا ہم سے کنارا کرکے اب نا دیکھیں گے کبھی عشق دوبارہ کرکے",
    "انگلیاں میرے حال پہ اٹھانے والو... عشق کا دوسرا نام فقیری ہے",
    "کیا خبر تھی عشق کے ہاتھوں ایسی حالت تباہ ہوتی ہے",
    "سانس لیتی ہوں دم الجھتا ہے بات کرتی ہوں آہ ہوتی ہے",
    "بڑی ہی برکت ہے تیرے عشق میں جب سے ہوا ہے بڑھتا ہی جارہا ہے",
    "نہیں ہوتا میں تجھ سے جدا بهروسہ رکھ یہ نکاح عشق ہے تیرا حق مہر میری سانسیں ہیں",
    "میں نے اس رات تجھے ہی مانگا خدا سے جس رات لوگ اپنے بخشنے کی دعا مانگ رہے تھے",
    "غیروں میں بٹتی رہی تیری گفتگو کی چاشنی تیری آواز جن کا رزق تھی وہ فاقوں سے مر گئے",
    "گرتے رہے سجدوں میں ہم اپنی حسرتوں کی خاطر عشق خدا میں گرے ہوتے کوئی حسرت ادھوری نہ ہوتی",
    "لگا کر عشق کی بازی سنا ہے روٹھ بیٹھے ہو محبت مار ڈالے گی ابھی تم پھول جیسے ہو",
    "میں خود کو بھی کب میسر ہوں بے سبب ہے تیرا خفا ہونا",
    "کیا کہوں اب عشق کے درد چھپانے کو تم جانتے ہونا مجھے کوئی بہانہ نہیں آتا",
    "خیالِ یار میں بیٹھے ہوئے وہ لوگ ہیں ہم جنہیں زمانہ سمجھتا ہے کوئی کام نہیں",
    "اس قدر اس کی جستجو ہے مجھے جیسے دنیا میں آخری ہو وہ شخص",
    "نہیں ہوتا کسی طبیب سے اس مرض کا علاج عشق لا علاج ہے بس پرہیز کیجیے",
    "اسے چاہا تو محبت کی سمجھ آئی ورنہ ہم عشق کی تکلیف کے بس افسانے سنا کرتے تھے",
    "میں آج کل تجھے رب سے مانگنے لگا ہوں بہت جو ہو سکے تو میری دعاؤں کو بے اثر کر دے",
    "جی چاہتا ہے چوم لوں دشمن کے پیر بھی آئے ہیں میرے یار کی گلیوں میں گھوم کر",
    "وہ کہتا ہے بتا تیرا درد میں کیسے سمجھوں میں نے کہا عشق کر اور کر کے ہار جا",
    "میں نے جسے چاہا ہے چاہتے ہی رہوں گا وہ مانے یا نہ مانے مناتے ہی رہوں گا",
    "اس قدر چھپ گئی آنکھوں میں تصویر آپ کی اب کسی کو بھی نہ ہم دیکھیں گے سوائے آپ کے",
    "نظر ملی آنکھیں جھکی بس اتنی سی بات اور ہم برباد",
    "میری زندگی کی وہ شام حسین ہوجاۓ جب میں تمہیں مانگوں اور ہر طرف سے آمین ہوجاۓ",
    "اب مری بات جو مانے تو نہ لے عشق کا نام تو نے دکھ اے دل ناکام بہت سا پایا",
    "اپنی شاموں میں حصہ پھر کسی کو نہ دیا ہم نے عشق ترے بغیر بھی صرف تجھ سے ہی کیا ہم نے",
    "سر راہ جس سے ملا نہیں جس کے گھر میں آج تک گیا نہیں میں جنم جنم سے اسی کا ہوں اسے آج تک یہ خبر نہیں",
    "جو خود کو پتھر کہتے تھے وہ بھی جُھکتے دیکھے اس عشق میں بادشاہ، فقیر، سب سُلگتے دیکھے",
    "تم موت بھی بن جاو اے دوست میں پھر بھی تم سے ملنے کی کوشش کرو گی",
    "اسی انتظار میں بیٹھے ہیں ان کی محفل میں کہ وہ نگاہ اٹھائیں تو ہم سلام کریں",
    "بس تمہارے سوا زمانے میں کون کیا ہے ہمیں پتا ہی نہیں",
    "جو شدت سے چاہو گے تو ہو گی آرزو پوری ہم وہ نہیں جو تمہیں خیرات میں مل جائیں",
    "سر بھی نہ دکھے اس کا دل کو دکھایا ہے جس نے",
    "لفظ جب تک وضو نہیں کرتے ہم تیری گفتگو نہیں کرتے",
    "چل رہی تھی زندگی بڑی پرسکوں سی اور پھر نہ جانے یہ عشق کہاں سے آ گیا",
    "زمانہ یونہی نہیں خفا مجھ سے تجھ کو پانے کی قسم کھائی ہے",
    "دل ایک ہے تو کئی بار کیوں لگایا جائے بس ایک عشق بہت ہے اگر نبھایا جائے",
    "تو نے دیکھی ہی کہاں عشق سے اگلی منزل ورنہ تو عشق کو آسیب پکارا کرتا"
  ];
  
  var rand = tl[Math.floor(Math.random() * tl.length)]
  var mess = `{name}`
  if (event.body.toLowerCase() === "poet") {
    var msg = {
      body: `꧁🍒❤️‍🔥${name}❤️‍🔥🍒꧂,                 𒅒𒈔𒅒𒈔𒅒𒇫𒄆𒇫𒄆𒇫𒄆𒂝𒀱𒂝𒀱𒈔𒅒𒈔𒅒𒇫𒄆𒇫𒄆𒀱𒂝𒀱𒂝𒈔𒅒𒈔𒅒𒇫
\n\n『꧁🍒\n   ${rand} 🍒꧂』\n\n❤️𝕆𝕎ℕ𝔼ℝ : ꧁𝐙𝐚𝐢𝐧𝐢-𝐉𝐮𝐭𝐭꧂🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
